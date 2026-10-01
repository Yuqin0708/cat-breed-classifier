import axios,  { type AxiosInstance,  type AxiosResponse } from 'axios';

// 創建axios實例
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000',
  timeout: 30000,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json'
  }
});

// 定義接口類型
interface CatIdentificationResponse {
  breed: string;
  confidence: number;
}

// 貓咪識別API
export const catService = {
  // 上傳圖片識別貓咪品種
  identifyCat(imageFile: File): Promise<AxiosResponse<CatIdentificationResponse>> {
    const formData = new FormData();
    formData.append('file', imageFile);

    return apiClient.post('/api/identify', formData);
  }
};


export default {
  cat: catService
};
