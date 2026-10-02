# 🐱 Cat Breed Classifier

上傳一張貓咪照片，辨識牠屬於 12 種常見品種中的哪一種，並顯示品種介紹與推薦產品。
當模型的最高機率低於 75% 時，判定為米克斯（混種貓）。

## 線上展示

前端透過 GitHub Pages 自動部署:https://yuqin0708.github.io/cat-breed-classifier/
線上版沒有部署後端,「上傳照片辨識」需在本機啟動 backend 才能使用;後端完整程式碼在 `backend/`。
https://canva.link/d2terh6d13m85ke

## 技術棧

| 層級 | 技術 |
|---|---|
| 前端 | Vue 3、TypeScript、Vuetify 3、Vite、Axios |
| 後端 | Python 3.12+、FastAPI、Uvicorn、Loguru |
| 模型 | PyTorch、torchvision（ResNet50 架構） |

```
瀏覽器 (Vue 3 + Vuetify)
   │  POST /api/identify (multipart/form-data)
   ▼
FastAPI ──► ResNet50 (.pth) ──► { breed, confidence }
```

## 專案結構

```
cat-breed-api/
├── backend/     FastAPI 推論服務（main.py）
├── frontend/    Vue 3 + Vuetify 網頁介面
└── training/    資料集下載、訓練腳本與實驗 notebook
```

## 支援品種

Abyssinian、Bengal、Birman、Bombay、British Shorthair、Egyptian Mau、
Maine Coon、Persian、Ragdoll、Russian Blue、Siamese、Sphynx

## API

### `POST /api/identify`

| 參數 | 類型 | 說明 |
|---|---|---|
| `file` | 圖片檔（multipart） | 要辨識的貓咪照片 |

回應範例：

```json
{ "breed": "Persian", "confidence": 0.9132 }
```

- `confidence`：模型輸出的最高機率（0～1）
- 最高機率低於 0.75 時，`breed` 為 `"MIX"`

## 本機執行

### 1. 下載模型權重

模型權重未放在 repo 中，請從 [Release v1.0.0](https://github.com/Yuqin0708/cat-breed-classifier/releases/tag/v1.0.0)
下載 `resnet50-model-augmentation.pth`（約 90MB），放到 `backend/models/`：

```
backend/
└── models/
    └── resnet50-model-augmentation.pth
```

### 2. 啟動後端

```bash
cd backend
poetry install --no-root
poetry run uvicorn main:app --host 0.0.0.0 --port 8000
```

### 3. 啟動前端

```bash
cd frontend
cp .env.example .env.local   # 視需要修改 VITE_API_BASE_URL
yarn install
yarn dev
```

## 模型與訓練

- 推論模型：後端使用 torchvision 的 ResNet50 架構，最後一層替換為 12 類輸出
  （Linear + LogSoftmax），載入訓練好的權重檔。
- 資料集：[Oxford-IIIT Pet Dataset](https://www.robots.ox.ac.uk/~vgg/data/pets/)，取其中 12 種貓
  （資料集不附在 repo 中）。
- `training/CBC.py`：下載並解壓縮 Oxford-IIIT Pet 資料集。
- `training/train_cnn.py`：篩選 12 種貓的影像，使用資料增強（RandomHorizontalFlip、ColorJitter），
  以 Grid Search 搭配 5-fold 交叉驗證訓練 Simple CNN 基準模型。
  此腳本參考網路教學修改而成。
- `training/resnet18_transfer_learning.ipynb`：ResNet18 遷移學習實驗，在 Google Colab 執行。
  使用 ImageNet 預訓練的 ResNet18，替換最後的全連接層，並使用資料增強
  （RandomHorizontalFlip、RandomRotation）。此實驗與後端部署的 ResNet50 是不同的模型。
- ResNet50 權重的訓練筆記本(Google Colab):[開啟 Colab](https://colab.research.google.com/drive/1nHxVBh7UHsBoPK0uWcH4dUCxEPCvbJyw?usp=sharing)

## 備註

- 前端的品種與商品圖片因版權考量已移除，改用佔位圖。
- CORS 目前允許所有來源，僅適用於開發環境。
