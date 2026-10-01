from contextlib import asynccontextmanager

import torch
import torch.nn as nn
import torchvision.models as models
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from loguru import logger
from PIL import Image
from torchvision import transforms


# setting
MODEL_PATH = "models/resnet50-model-augmentation.pth"
MIX_THRESHOLD = 0.75  # 最高機率低於此值時判定為米克斯（混種貓）

# 載入模型和貓咪品種資料
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
logger.info(f"使用設備: {device}")
model = None
class_names = [
    "Abyssinian",
    "Bengal",
    "Birman",
    "Bombay",
    "British_Shorthair",
    "Egyptian_Mau",
    "Maine_Coon",
    "Persian",
    "Ragdoll",
    "Russian_Blue",
    "Siamese",
    "Sphynx",
]
logger.debug(f"載入類別: {len(class_names)} 種貓咪品種")

# 定義資料轉換
data_transform = transforms.Compose(
    [
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ]
)
logger.debug("初始化資料轉換")


def load_model():
    logger.info("開始載入模型...")
    try:
        resnet50 = models.resnet50(weights=None)
        num_classes = 12  # 替換為您的類別數量
        resnet50.fc = nn.Sequential(
            nn.Linear(resnet50.fc.in_features, num_classes), nn.LogSoftmax(dim=1)
        )

        resnet50 = resnet50.to(device)
        logger.debug(f"嘗試從 {MODEL_PATH} 載入模型權重")
        resnet50.load_state_dict(
            state_dict=torch.load(f=MODEL_PATH, map_location=device)
        )
        resnet50.eval()
        logger.info("模型載入成功")
        return resnet50
    except Exception as e:
        logger.error(f"模型載入失敗: {str(e)}")
        raise


def predict_uploaded_image(model, image) -> tuple[str, float]:
    logger.debug(f"開始預測圖片: {image}")
    try:
        image = Image.open(image).convert("RGB")
        input_tensor = data_transform(image).unsqueeze(0).to(device)

        with torch.no_grad():
            output = model(input_tensor)
            probabilities = torch.nn.functional.softmax(output[0], dim=0)
            top1_prob, top1_class = torch.max(probabilities, 0)

        # 最高機率低於 MIX_THRESHOLD 時回傳 "MIX"
        confidence = top1_prob.item()
        if confidence < MIX_THRESHOLD:
            logger.info(f"預測結果: 米克斯貓 (混種貓), 最高機率: {confidence:.2%}")
            return "MIX", confidence
        predicted_class = class_names[top1_class]
        logger.info(f"預測類別: {predicted_class} (機率: {confidence:.2%})")
        return predicted_class, confidence
    except Exception as e:
        logger.error(f"預測過程出錯: {str(e)}")
        raise


@asynccontextmanager
async def lifespan(app: FastAPI):
    global model

    logger.info("應用啟動中...")
    try:
        model = load_model()
    except Exception as e:
        logger.error(f"啟動錯誤: {str(e)}")
    yield


app = FastAPI(lifespan=lifespan)

# 設置CORS中間件，允許前端訪問
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允許所有來源，生產環境應設置為特定域名
    allow_credentials=True,
    allow_methods=["*"],  # 允許所有HTTP方法
    allow_headers=["*"],  # 允許所有頭部
)


@app.get("/")
async def root():
    logger.info("訪問首頁")
    return {"message": "貓咪品種辨識 API 服務"}


# 新增：貓咪品種辨識端點
# 修改識別端點，提供更多信息


@app.post("/api/identify")
async def identify_cat(file: UploadFile = File(...)):
    logger.info(f"收到識別請求: {file.filename}")

    if model is None:
        logger.warning("模型未載入，拒絕請求")
        return JSONResponse(
            status_code=500, content={"error": "模型尚未載入，請稍後再試"}
        )

    try:
        # 獲取文件流
        image = file.file

        # 識別品種，confidence 為模型輸出的最高機率 (0~1)
        breed, confidence = predict_uploaded_image(model, image)

        logger.info(f"識別成功: {breed}, 置信度: {confidence:.4f}")
        return JSONResponse(
            status_code=200,
            content={"breed": breed, "confidence": round(confidence, 4)},
        )

    except Exception as e:
        logger.error(f"識別過程出錯: {str(e)}", exc_info=True)
        return JSONResponse(
            status_code=500, content={"error": f"識別過程出錯: {str(e)}"}
        )
