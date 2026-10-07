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

### 來源說明

本專案的模型訓練流程以開源專案
[Cat Breed Classification Using CNN](https://gitlab.com/willyfitrahendria/cat-breed-classification-using-cnn)
（Willy Fitra Hendria，2020）為基礎，並非自行設計。

- 資料集：[Oxford-IIIT Pet Dataset](https://www.robots.ox.ac.uk/~vgg/data/pets/)，取其中 12 種貓
  （資料集不附在 repo 中）。
- 訓練方法（沿用上述專案）：以 ImageNet 預訓練的 ResNet50，凍結主幹並將最後一層替換為 12 類輸出
  （Linear + LogSoftmax），以 5-fold 分層交叉驗證搭配 Grid Search 選擇超參數
  （batch size 32／64、學習率 1e-3／1e-4、最多 50 epochs），並比較有無資料增強
  （RandomHorizontalFlip、ColorJitter）。後端部署的是含資料增強的版本。
- 我在 Google Colab 執行此流程、加入中文註解與推論程式並匯出權重：
  [ResNet50 訓練筆記本（Colab）](https://colab.research.google.com/drive/1nHxVBh7UHsBoPK0uWcH4dUCxEPCvbJyw?usp=sharing)。
  該筆記本內容為上述開源專案的修改版。
- 上述專案報告的測試結果供參考（本 repo 未另行重新評估）：簡單 CNN 約 27%、ResNet50 約 86%、
  ResNet50＋資料增強約 88%（Top-3 約 97%）。

### 本專案自行完成的部分

- FastAPI 推論服務（圖片前處理、機率計算，以及「最高機率低於 75% 判定為米克斯」的門檻）。
- Vue 3＋Vuetify 前端、GitHub Pages 部署。
- 模型權重以 GitHub Release 發佈與使用說明。

### `training/` 目錄

- `CBC.py`：下載並解壓縮 Oxford-IIIT Pet 資料集。
- `train_cnn.py`：篩選 12 種貓的影像，使用資料增強（RandomHorizontalFlip、ColorJitter），
  以 Grid Search 搭配 5-fold 交叉驗證訓練 Simple CNN 基準模型。
  改編自上述開源專案。
- `resnet18_transfer_learning.ipynb`：ResNet18 遷移學習實驗，在 Google Colab 執行。
  使用 ImageNet 預訓練的 ResNet18，替換最後的全連接層，並使用資料增強
  （RandomHorizontalFlip、RandomRotation）。此實驗與後端部署的 ResNet50 是不同的模型。

## 備註

- 前端的品種與商品圖片因版權考量已移除，改用佔位圖。
- CORS 目前允許所有來源，僅適用於開發環境。
