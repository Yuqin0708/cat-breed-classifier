<template>
  <v-container class="pt-0">
    <v-sheet
      class="pa-6 mb-6 rounded-lg"
      color="primary-lighten-5"
      elevation="2"
    >
      <v-row>
        <v-col
          cols="12"
          md="7"
        >
          <h1
            class="text-h4 font-weight-bold mb-3"
            style="color: var(--v-primary-darken-1)"
          >
            <v-icon
              size="large"
              class="mr-1"
            >
              mdi-cat
            </v-icon>
            Meow品種辨識
          </h1>
          <p class="text-subtitle-1 text-medium-emphasis mb-4">
            上傳貓咪照片，系統將自動辨識品種並提供相關資訊
          </p>

          <!-- 上傳圖片區塊 -->
          <v-card
            class="mb-4 pa-1 rounded-lg"
            variant="outlined"
          >
            <v-card-text>
              <v-file-input
                hide-details
                variant="solo"
                label="請上傳貓咪照片"
                accept="image/*"
                prepend-icon=""
                density="comfortable"
                base-color="primary"
                class="file-input-custom"
                bg-color="grey-lighten-4"
                @change="onFileSelected"
              >
                <template #prepend>
                  <v-icon
                    color="primary"
                    size="28px"
                    class="mr-2"
                  >
                    mdi-camera
                  </v-icon>
                </template>
              </v-file-input>
            </v-card-text>
          </v-card>

          <v-row>
            <v-col cols="12">
              <!-- 辨識按鈕 -->
              <v-btn
                color="primary"
                :loading="isLoading"
                :disabled="!imageUrl"
                block
                size="large"
                variant="elevated"
                class="text-none font-weight-bold"
                @click="identifyCat"
              >
                <v-icon start>
                  mdi-magnify
                </v-icon>
                辨識品種
              </v-btn>
              <v-alert
                v-if="isMixBreed"
                type="info"
                class="mt-3"
                variant="tonal"
                density="compact"
              >
                辨識結果為混種貓或未知品種，無法提供詳細品種資訊。
              </v-alert>
              <p
                v-if="imageUrl && !predictionConfidence"
                class="text-center text-caption mt-2"
              >
                點擊按鈕開始辨識貓咪品種
              </p>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          md="5"
          class="d-flex align-center justify-center"
        >
          <div class="image-preview-container">
            <v-img
              v-if="imageUrl"
              :src="imageUrl"
              class="image-preview rounded-lg mx-auto"
              cover
              height="270"
              width="240"
            />
            <v-img
              v-else
              :src="defaultCatImage"
              class="image-preview rounded-lg mx-auto"
              cover
              height="270"
              width="240"
            >
              <template #placeholder>
                <v-sheet
                  class="d-flex flex-column align-center justify-center image-placeholder rounded-lg"
                  color="grey-lighten-3"
                  height="270"
                  width="240"
                >
                  <v-icon
                    size="64"
                    color="grey-lighten-1"
                  >
                    mdi-cat
                  </v-icon>
                  <span class="text-caption text-medium-emphasis mt-2">載入示範圖片中</span>
                </v-sheet>
              </template>
            </v-img>
          </div>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- 範例貓咪資訊或已辨識的貓咪資訊 -->
    <div v-if="!isMixBreed">
      <!-- 貓咪資訊卡片 -->
      <v-card
        class="mb-4 rounded-lg"
        elevation="3"
      >
        <v-toolbar
          flat
          :color="currentBreed ? 'primary' : 'secondary'"
          density="comfortable"
        >
          <v-toolbar-title class="text-white font-weight-bold">
            {{ currentBreed ? currentBreed.name : defaultCat.name }}
          </v-toolbar-title>
        </v-toolbar>

        <v-card-text class="pt-4">
          <v-row>
            <v-col
              cols="12"
              sm="4"
              class="d-flex align-center justify-center"
            >
              <v-avatar
                size="160"
                class="rounded-lg border-avatar"
              >
                <v-img
                  v-if="imageUrl && currentBreed"
                  :src="imageUrl"
                  cover
                />
                <v-img
                  v-else
                  :src="defaultCatImage"
                  cover
                />
              </v-avatar>
            </v-col>

            <v-col
              cols="12"
              sm="8"
            >
              <h3 class="text-h6 font-weight-bold mb-3">
                <v-icon
                  color="primary"
                  class="mr-2"
                >
                  mdi-star-circle-outline
                </v-icon>
                品種特徵
              </h3>
              <v-card class="pa-4 mb-1 bg-grey-lighten-4 rounded-lg">
                <p class="mb-0">
                  {{
                    currentBreed
                      ? currentBreed.characteristics
                      : defaultCat.characteristics
                  }}
                </p>
              </v-card>

              <v-chip-group>
                <v-chip
                  v-for="(tag, i) in getBreedTags(currentBreed || defaultCat)"
                  :key="i"
                  :color="getTagColor(i)"
                  class="font-weight-medium"
                  variant="elevated"
                >
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- 健康問題區塊 -->
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="rounded-lg"
            elevation="2"
          >
            <v-card-item>
              <template #prepend>
                <v-icon
                  color="error"
                  size="28"
                >
                  mdi-heart-pulse
                </v-icon>
              </template>
              <v-card-title class="text-h6 font-weight-bold">
                健康問題
              </v-card-title>
            </v-card-item>

            <v-divider />

            <v-list>
              <v-list-item
                v-for="(problem, i) in currentBreed
                  ? currentBreed.healthIssues
                  : defaultCat.healthIssues"
                :key="i"
                class="py-2"
              >
                <template #prepend>
                  <v-icon
                    color="error-lighten-1"
                    class="mx-0"
                  >
                    mdi-alert-circle-outline
                  </v-icon>
                </template>
                <v-list-item-title>{{ problem }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="rounded-lg"
            elevation="2"
          >
            <v-card-item>
              <template #prepend>
                <v-icon
                  color="success"
                  size="28"
                >
                  mdi-paw
                </v-icon>
              </template>
              <v-card-title class="text-h6 font-weight-bold">
                飼養建議
              </v-card-title>
            </v-card-item>

            <v-divider />

            <v-list>
              <v-list-item
                v-for="(tip, i) in currentBreed
                  ? currentBreed.careAdvice
                  : defaultCat.careAdvice"
                :key="i"
                class="py-2"
              >
                <template #prepend>
                  <v-icon
                    color="success-lighten-1"
                    class="mr-0"
                  >
                    mdi-check-circle-outline
                  </v-icon>
                </template>
                <v-list-item-title>{{ tip }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

      <!-- 推薦產品區塊 -->
      <v-card
        class="mt-4 rounded-lg"
        elevation="2"
      >
        <v-card-item>
          <template #prepend>
            <v-icon
              color="primary"
              size="28"
            >
              mdi-basket
            </v-icon>
          </template>
          <v-card-title class="text-h6 font-weight-bold">
            推薦產品
          </v-card-title>
        </v-card-item>

        <v-divider />

        <v-card-text class="pt-4">
          <v-row>
            <v-col
              v-for="(product, i) in currentBreed
                ? currentBreed.recommendedProducts
                : defaultCat.recommendedProducts"
              :key="i"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card
                variant="outlined"
                class="h-100 rounded-lg product-card"
                hover
              >
                <v-card-item>
                  <template #prepend>
                    <v-avatar
                      color="primary-lighten-5"
                      class="mr-2"
                    >
                      <v-icon
                        :color="getProductColor(product)"
                        size="24"
                      >
                        {{ getProductIcon(product) }}
                      </v-icon>
                    </v-avatar>
                  </template>
                  <v-card-title>{{ product }}</v-card-title>
                </v-card-item>

                <v-card-actions>
                  <v-btn
                    variant="tonal"
                    color="primary"
                    size="small"
                    block
                    class="text-none"
                    @click="openProductDialog(product)"
                  >
                    <v-icon
                      size="small"
                      start
                    >
                      mdi-information-outline
                    </v-icon>
                    了解更多
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- 產品詳情對話框 -->
      <v-dialog
        v-model="productDialogVisible"
        max-width="700"
        scrollable
      >
        <v-card class="rounded-lg">
          <!-- 對話框標題 -->
          <v-toolbar
            :color="getProductColor(selectedProduct)"
            density="comfortable"
            flat
          >
            <v-toolbar-title class="text-white font-weight-bold">
              {{ selectedProduct }}
            </v-toolbar-title>
            <template #append>
              <v-btn
                icon
                variant="text"
                color="white"
                @click="productDialogVisible = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </template>
          </v-toolbar>

          <!-- 對話框內容 -->
          <v-card-text class="pt-4">
            <!-- 產品圖片輪播 -->
            <v-carousel
              height="100%"
              hide-delimiters
              show-arrows="hover"
              class="mb-4 rounded-lg"
            >
              <v-carousel-item
                v-for="(image, i) in getProductImages(selectedProduct)"
                :key="i"
                :src="image.src"
                cover
              >
                <div class="carousel-overlay d-flex align-end">
                  <span class="pa-2 text-caption bg-black bg-opacity-60 text-white">
                    {{ image.caption }}
                  </span>
                </div>
              </v-carousel-item>
            </v-carousel>

            <!-- 產品詳細說明 -->
            <v-card
              variant="outlined"
              class="mb-4 pa-4 bg-grey-lighten-5"
            >
              <h3 class="text-subtitle-1 mb-2 font-weight-bold">
                <v-icon
                  color="primary"
                  class="mr-1"
                  size="small"
                >
                  mdi-information
                </v-icon>
                產品說明
              </h3>
              <p class="text-body-2">
                {{ getProductDescription(selectedProduct) }}
              </p>
            </v-card>

            <!-- 適用貓咪品種 -->
            <v-card
              variant="outlined"
              class="mb-4 pa-4"
            >
              <h3 class="text-subtitle-1 mb-2 font-weight-bold">
                <v-icon
                  color="success"
                  class="mr-1"
                  size="small"
                >
                  mdi-check-circle
                </v-icon>
                適用貓咪品種
              </h3>
              <p class="text-body-2">
                {{ getProductSuitableBreeds(selectedProduct) }}
              </p>

              <h3 class="text-subtitle-1 mb-2 mt-3 font-weight-bold">
                <v-icon
                  color="error"
                  class="mr-1"
                  size="small"
                >
                  mdi-alert-circle
                </v-icon>
                使用須知
              </h3>
              <p class="text-body-2">
                {{ getProductUsageNotes(selectedProduct) }}
              </p>
            </v-card>
          </v-card-text>

          <!-- 對話框按鈕組 -->
          <v-divider />
          <v-card-actions class="pa-4">
            <v-spacer />

            <v-btn
              variant="elevated"
              color="primary"
              @click="openProductUrl(selectedProduct)"
            >
              <v-icon start>
                mdi-cart
              </v-icon>
              前往購買
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- 熱門貓咪品種區塊 -->
    <v-card
      class="mt-6 rounded-lg"
      elevation="1"
      variant="outlined"
    >
      <v-card-item>
        <template #prepend>
          <v-icon
            color="primary"
            size="28"
          >
            mdi-star
          </v-icon>
        </template>
        <v-card-title class="text-h6 font-weight-bold">
          熱門貓咪品種
        </v-card-title>
        <template #append>
          <v-btn
            icon
            variant="text"
            color="primary"
            title="重新隨機"
            @click="updatePopularBreeds"
          >
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </template>
      </v-card-item>

      <v-divider />

      <v-card-text class="pt-4">
        <v-row>
          <v-col
            v-for="breed in popularBreedsRandom"
            :key="breed.id"
            cols="6"
            sm="4"
            md="2"
          >
            <v-card
              class="text-center popular-breed-card"
              variant="flat"
              hover
              @click="setExampleBreed(breed.id)"
            >
              <v-avatar
                size="80"
                class="my-2 mx-auto"
              >
                <v-img
                  :src="getCatPlaceholderUrl(breed.id)"
                  cover
                />
              </v-avatar>
              <v-card-title class="text-subtitle-1 pb-0 text-truncate">
                {{ breed.shortName }}
              </v-card-title>
              <v-card-text class="pt-0 pb-2">
                <v-btn
                  variant="text"
                  density="compact"
                  color="primary"
                  size="small"
                >
                  查看詳情
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { catBreeds, productDatabase } from "@/data";
import type { CatBreed } from "@/interfaces";
import type { ProductImage } from "@/interfaces";
import { catService } from "@/services/api";
import { ref, computed, watch, onMounted } from "vue";

// 不再需要此映射，改由 mapBreedNameToId 函数处理

// 響應式狀態
const imageUrl = ref<string | null>(null);
const imageElement = ref<HTMLImageElement | null>(null);
const rawImageData = ref<File | null>(null);
const currentBreed = ref<CatBreed | null>(null);
const isLoading = ref<boolean>(false);
const predictionConfidence = ref<number | null>(null);

// 添加一個函數來隨機選擇一個貓咪品種
const getRandomBreed = (): CatBreed => {
  const randomIndex = Math.floor(Math.random() * catBreeds.length);
  return catBreeds[randomIndex];
};

// 修改默認貓咪設置
const defaultCat = ref<CatBreed>(getRandomBreed());
const defaultCatImage = ref<string>("");

// 在組件掛載時設置隨機貓咪圖片
onMounted(() => {
  // 設置默認圖片為隨機選中的貓咪品種
  defaultCatImage.value = getCatPlaceholderUrl(defaultCat.value.id);

  // 初始隨機設置一次熱門品種
  updatePopularBreeds();
});

// 監聽圖片變更，當圖片被更換時清空當前識別結果
watch(imageUrl, (newVal) => {
  if (newVal) {
    // 用戶上傳了新圖片，清空當前識別結果
    currentBreed.value = null;
    predictionConfidence.value = null;
  }
});

// 熱門貓咪品種
// 刷新計數器，用於觸發熱門品種的重新計算
const refreshCounter = ref(0);

// 更新熱門品種的函數
const updatePopularBreeds = () => {
  // 強制重新計算 computed 屬性
  refreshCounter.value++;
};

// 熱門貓咪品種 - 隨機選擇
const popularBreedsRandom = computed(() => {
  // 使用 refreshCounter 作為依賴項，這樣當 refreshCounter 改變時，
  // 這個計算屬性會重新計算
  console.log(`Refreshing popular breeds... (${refreshCounter.value})`);

  // 將所有貓咪品種複製到一個新陣列中
  const allBreeds = [...catBreeds];

  // 打亂陣列順序
  for (let i = allBreeds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allBreeds[i], allBreeds[j]] = [allBreeds[j], allBreeds[i]];
  }

  // 選擇前 6 個品種
  const selectedBreeds = allBreeds.slice(0, Math.min(6, allBreeds.length));

  return selectedBreeds.map((breed) => ({
    id: breed.id,
    name: breed.name,
    shortName: breed.shortName || breed.name.split(" ")[0], // 確保有 shortName
  }));
});

// 設置範例品種
const setExampleBreed = (breedId: string) => {
  const breed = catBreeds.find((cat) => cat.id === breedId);
  if (breed) {
    defaultCat.value = breed;
    defaultCatImage.value = getCatPlaceholderUrl(breedId);
    // 清空當前辨識結果
    currentBreed.value = null;
    predictionConfidence.value = null;
    // 清空已上傳圖片
    imageUrl.value = null;
    imageElement.value = null;
    rawImageData.value = null;
  }
};

// 處理檔案上傳
const onFileSelected = (event: Event | File) => {
  const file =
    event instanceof File
      ? event
      : (event.target as HTMLInputElement)?.files?.[0];
  if (file) {
    rawImageData.value = file;
    imageUrl.value = URL.createObjectURL(file);

    // 創建圖像元素以供預處理
    const img = new Image();
    img.src = imageUrl.value;
    img.onload = () => {
      imageElement.value = img;
    };

    // 清除当前品种信息，因为新图片还未辨识
    currentBreed.value = null;
    predictionConfidence.value = null;
  } else {
    imageUrl.value = null;
    imageElement.value = null;
    rawImageData.value = null;
  }
};

// 使用 API 進行貓咪品種辨識
// 修改identifyCat函數
const isMixBreed = ref(false);
// 修改辨識函數
const identifyCat = async () => {
  if (!rawImageData.value) return;

  try {
    isLoading.value = true;
    // 重置混種貓狀態
    isMixBreed.value = false;

    // 調用API服務發送圖片
    const response = await catService.identifyCat(rawImageData.value);

    // 處理API返回的結果
    const result = response.data;

    // 如果是混種貓，設置混種貓狀態
    if (result.breed === "MIX") {
      isMixBreed.value = true;
      currentBreed.value = null;
      predictionConfidence.value = null;
    } else {
      // 不是混種貓，正常處理
      const breedId = mapBreedNameToId(result.breed);
      const foundBreed = catBreeds.find((breed) => breed.id === breedId);

      if (foundBreed) {
        currentBreed.value = foundBreed;
        predictionConfidence.value = result.confidence ?? 0;
      } else {
        console.warn("未能識別的品種:", result.breed);
        // 未知品種也設為混種貓狀態
        isMixBreed.value = true;
        currentBreed.value = null;
        predictionConfidence.value = null;
      }
    }
  } catch (error) {
    console.error("識別過程出錯:", error);
    // 錯誤處理
  } finally {
    isLoading.value = false;
  }
};

// 辅助函数：将API返回的品种名称映射到数据库ID
const mapBreedNameToId = (breedName: string): string => {
  // 建立一个品种名称到ID的映射
  const nameToIdMap: Record<string, string> = {
    Abyssinian: "abyssinian",
    Bengal: "bengal",
    Birman: "birman",
    Bombay: "bombay",
    British_Shorthair: "british-shorthair",
    Egyptian_Mau: "egyptian-mau",
    Maine_Coon: "maine-coon",
    Persian: "persian",
    Ragdoll: "ragdoll",
    Russian_Blue: "russian-blue",
    Siamese: "siamese",
    Sphynx: "sphynx",
    MIX: "british-shorthair", // 如果是混种猫，默认使用英国短毛猫作为展示
  };

  return nameToIdMap[breedName] || "british-shorthair";
};

// 取得品種標籤
const getBreedTags = (breed: CatBreed): string[] => {
  const characteristicText = breed.characteristics;
  const tags = characteristicText
    .split("，")
    .filter((tag) => tag.length < 10)
    .slice(0, 4);
  return tags;
};

// 取得標籤顏色
const getTagColor = (index: number): string => {
  const colors = ["primary", "secondary", "success", "info", "warning"];
  return colors[index % colors.length];
};

// 取得產品圖標
const getProductIcon = (product: string): string => {
  if (
    product.includes("貓糧") ||
    product.includes("飼料") ||
    product.includes("零食")
  ) {
    return "mdi-food";
  } else if (product.includes("牙") || product.includes("潔")) {
    return "mdi-tooth";
  } else if (product.includes("玩具") || product.includes("逗貓棒")) {
    return "mdi-toy-brick";
  } else if (product.includes("梳") || product.includes("毛")) {
    return "mdi-brush";
  } else if (product.includes("爬架")) {
    return "mdi-ladder";
  } else if (product.includes("保健")) {
    return "mdi-medication";
  }

  return "mdi-package-variant";
};

// 取得產品顏色
const getProductColor = (product: string): string => {
  if (
    product.includes("貓糧") ||
    product.includes("飼料") ||
    product.includes("零食")
  ) {
    return "amber-darken-2";
  } else if (product.includes("牙") || product.includes("潔")) {
    return "cyan-darken-1";
  } else if (product.includes("玩具") || product.includes("逗貓棒")) {
    return "purple-darken-1";
  } else if (product.includes("梳") || product.includes("毛")) {
    return "deep-orange";
  } else if (product.includes("爬架")) {
    return "indigo";
  } else if (product.includes("保健")) {
    return "green-darken-1";
  }

  return "blue-grey";
};

// 獲取貓咪預設圖片（原圖因版權移除，改用佔位圖）
const getCatPlaceholderUrl = (breedId: string): string =>
  `https://placehold.co/300x300/f5f5f5/616161?text=${encodeURIComponent(breedId)}`;

// 對話框狀態
const productDialogVisible = ref(false);
const selectedProduct = ref("");

// 打開產品對話框
const openProductDialog = (product: string) => {
  selectedProduct.value = product;
  productDialogVisible.value = true;
};

// 跳轉到購買頁面
const openProductUrl = (product: string) => {
  const url = getProductLink(product);
  window.open(url, "_blank");
  // 可選：關閉對話框
  // productDialogVisible.value = false;
};

// 產品數據處理函數
const getProductImages = (product: string): ProductImage[] => {
  if (productDatabase[product]?.images) {
    return productDatabase[product].images;
  }

  // 如果沒有找到產品圖片，返回預設圖片
  return [
    {
      src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳",
      caption: "暫無產品圖片",
    },
  ];
};

// 獲取產品描述
const getProductDescription = (product: string): string => {
  if (productDatabase[product]?.description) {
    return productDatabase[product].description;
  }
  return `${product} 是專為貓咪設計的優質產品，能夠滿足貓咪的日常需求。`;
};

// 獲取適用貓咪品種
const getProductSuitableBreeds = (product: string): string => {
  if (productDatabase[product]?.suitableBreeds) {
    return productDatabase[product].suitableBreeds;
  }
  return "適用於所有貓咪品種";
};

// 獲取使用須知
const getProductUsageNotes = (product: string): string => {
  if (productDatabase[product]?.usageNotes) {
    return productDatabase[product].usageNotes;
  }
  return "請按照包裝上的說明使用";
};

// 獲取產品購買連結
const getProductLink = (product: string): string => {
  if (productDatabase[product]?.link) {
    return productDatabase[product].link;
  }
  return "https://example.com/products";
};

// 添加到 computed 部分
</script>

<style scoped>
.image-preview-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.image-preview {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 3px solid white;
  transition: all 0.3s ease;
}

.image-placeholder {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px dashed rgba(0, 0, 0, 0.2);
}

.file-input-custom :deep(.v-field__append-inner) {
  padding-top: 6px;
}

.border-avatar {
  border: 3px solid white;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.product-card {
  transition: all 0.2s ease;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.popular-breed-card {
  cursor: pointer;
  transition: all 0.2s ease;
}

.popular-breed-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.carousel-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
