

/** 定義貓咪品種類型 */
export interface CatBreed {
  id: string;
  name: string;
  shortName?: string;
  characteristics: string;
  healthIssues: string[];
  careAdvice: string[];
  recommendedProducts: string[];
}

// 產品數據類型定義
export interface ProductSpec {
  name: string;
  value: string;
}

export interface ProductImage {
  src: string;
  caption: string;
}

export interface ProductData {
  description: string;
  suitableBreeds: string;
  usageNotes: string;
  images: ProductImage[];
  link: string;
}
