import type { CatBreed } from "@/interfaces";
import type { ProductData } from "@/interfaces";

/** 貓咪品種資料 */
export const catBreeds: CatBreed[] = [
  {
    id: "abyssinian",
    name: "阿比西尼亞貓 (Abyssinian)",
    shortName: "阿比西尼亞貓",
    characteristics:
      "修長的身材、短毛，毛色通常為暖棕色或紅棕色，活力旺盛，喜歡探索。",
    healthIssues: [
      "牙齒問題：易患牙病，需定期清潔。",
      "高活動需求：若缺乏運動，可能導致壓力。",
      "遺傳性腎病：需注意腎臟健康，定期檢查。"
    ],
    careAdvice: [
      "飲食：高蛋白低脂的乾糧。",
      "運動：提供足夠的空間和互動玩具。",
      "健康監測：定期健康檢查，特別是腎臟功能。"
    ],
    recommendedProducts: ["高蛋白低脂乾糧", "互動型逗貓棒", "益智玩具"],
  },
  {
    id: "bengal",
    name: "孟加拉貓 (Bengal)",
    shortName: "孟加拉貓",
    characteristics: "豹紋或大理石花紋的短毛，外觀野性化，精力充沛。",
    healthIssues: [
      "腸胃敏感：容易因飲食不當引發腸胃問題。",
      "高活動需求：缺乏刺激可能導致行為問題。",
      "遺傳性視網膜病變：影響視力，需關注眼睛健康。"
    ],
    careAdvice: [
      "飲食：容易消化的腸胃保護配方。",
      "運動：提供爬架和跳躍類玩具。",
      "眼部護理：定期檢查眼睛，確保視力健康。"
    ],
    recommendedProducts: ["腸胃保護配方貓糧", "貓抓板", "爬架"],
  },
  {
    id: "birman",
    name: "緬甸貓 (Birman)",
    shortName: "緬甸貓",
    characteristics: "長毛，奶油色身體，深色耳朵與四肢，白色手套，溫和黏人。",
    healthIssues: [
      "心臟病：有患心肌病的風險。",
      "毛發問題：容易打結，需定期梳毛。",
      "腎臟問題：易患慢性腎病，需注意水分攝取。"
    ],
    careAdvice: [
      "飲食：支持心臟健康的配方。",
      "毛發護理：每天梳毛以防止打結。",
      "水分管理：確保充足飲水，避免腎病風險。"
    ],
    recommendedProducts: ["心臟健康配方貓糧", "梳毛工具", "輕柔毛絨玩具"],
  },
  {
    id: "bombay",
    name: "孟買貓 (Bombay)",
    shortName: "孟買貓",
    characteristics: "全黑短毛，宛如迷你黑豹，親人、愛互動。",
    healthIssues: [
      "肥胖：需控制飲食量。",
      "心理需求：需要互動和關愛以避免壓力。",
      "呼吸道問題：短鼻結構易導致呼吸不順。"
    ],
    careAdvice: [
      "飲食：低熱量食品以控制體重。",
      "心理刺激：提供互動型玩具。",
      "環境管理：保持空氣流通，避免過熱。"
    ],
    recommendedProducts: ["低熱量貓糧", "雷射玩具", "小型追逐球"],
  },
  {
    id: "british-shorthair",
    name: "英國短毛貓 (British Shorthair)",
    shortName: "英國短毛貓",
    characteristics: "圓臉，毛厚實，藍灰色最常見。性格溫和，獨立，安靜",
    healthIssues: [
      "肥胖：需控制飲食和保持運動。",
      "牙齒問題：易患牙結石，需定期清潔。",
      "心臟病：有患肥厚性心肌病的風險。"
    ],
    careAdvice: [
      "飲食：高蛋白、低脂貓糧，控制體重。",
      "運動：提供玩具，鼓勵日常活動。",
      "毛發護理：定期梳理，特別是在換毛期。"
    ],
    recommendedProducts: ["控制體重的低脂貓糧", "潔牙零食", "貓抓板和玩具"],
  },
  {
    id: "egyptian-mau",
    name: "埃及貓 (Egyptian Mau)",
    shortName: "埃及貓",
    characteristics: "中型短毛貓，皮毛帶有自然斑點花紋，性格敏捷忠誠。",
    healthIssues: [
      "壓力敏感：容易受環境影響。",
      "高活動需求：需要運動以維持健康。",
      "腎臟健康：可能有腎臟相關疾病風險。"
    ],
    careAdvice: [
      "飲食：高蛋白濕糧。",
      "環境：提供安靜舒適的居住環境。",
      "水分補充：確保飲水量，保護腎臟功能。"
    ],
    recommendedProducts: ["高蛋白濕糧", "跳躍類玩具", "舒壓補充品"],
  },
  {
    id: "maine-coon",
    name: "緬因貓 (Maine Coon)",
    shortName: "緬因貓",
    characteristics: "大型長毛貓，尾巴毛茸茸，性格溫柔友善。",
    healthIssues: [
      "髖關節問題：需定期檢查。",
      "毛球問題：長毛需頻繁梳理。",
      "心臟病：易患肥厚性心肌病。"
    ],
    careAdvice: [
      "飲食：大顆粒飼料以便咀嚼。",
      "毛發護理：定期梳理毛髮。",
      "關節護理：補充關節保健品，維持活動力。"
    ],
    recommendedProducts: ["大顆粒飼料", "梳毛工具", "爬架或貓隧道"],
  },
  {
    id: "persian",
    name: "波斯貓 (Persian)",
    shortName: "波斯貓",
    characteristics: "長毛，扁臉，溫和安靜，喜歡被人陪伴。",
    healthIssues: [
      "呼吸問題：需保持清潔環境。",
      "毛發問題：容易打結，需頻繁梳毛。",
      "淚痕問題：需定期清潔眼部。"
    ],
    careAdvice: [
      "飲食：毛球控制配方。",
      "毛發護理：每日梳理毛髮以避免毛球堆積。",
      "眼部護理：定期清潔眼部，減少淚痕。"
    ],
    recommendedProducts: ["毛球控制貓糧", "梳毛工具", "輕柔毛絨玩具"],
  },
  {
    id: "ragdoll",
    name: "布偶貓 (Ragdoll)",
    shortName: "布偶貓",
    characteristics: "奶油底色，深色耳朵與尾巴，性格溫順，非常親人。",
    healthIssues: [
      "泌尿問題：需注意飲水量。",
      "毛球問題：長毛需定期梳理。",
      "關節問題：可能有關節發育不良風險。"
    ],
    careAdvice: [
      "飲食：泌尿保健配方。",
      "毛發護理：梳理毛髮以防止毛球堆積。",
      "運動管理：適量運動以保持關節健康。"
    ],
    recommendedProducts: ["泌尿保健貓糧", "梳毛工具", "小毛絨玩具"],
  },
  {
    id: "russian-blue",
    name: "俄羅斯藍貓 (Russian Blue)",
    shortName: "俄羅斯藍貓",
    characteristics: "短毛銀灰色，翠綠色眼睛，安靜、敏感。",
    healthIssues: [
      "肥胖：需控制飲食和促進運動。",
      "壓力敏感：需提供穩定的環境。",
      "腎臟問題：可能易患腎病，需定期檢查。"
    ],
    careAdvice: [
      "飲食：高蛋白低熱量配方。",
      "環境：提供安靜的空間。",
      "水分補充：確保飲水量，保護腎臟健康。"
    ],
    recommendedProducts: ["高蛋白低熱量貓糧", "智能互動玩具", "舒壓補充品"],
  },
  {
    id: "siamese",
    name: "暹羅貓 (Siamese)",
    shortName: "暹羅貓",
    characteristics: "短毛，奶油身體，深色耳朵與尾巴，愛交談、黏人。",
    healthIssues: [
      "牙齒問題：易患牙結石。",
      "心理需求：高度社交性，孤單時可能產生焦慮。",
      "呼吸道問題：短鼻可能導致呼吸困難。"
    ],
    careAdvice: [
      "飲食：選用抗牙結石配方飼料，幫助減少牙菌斑。",
      "互動：提供聲光互動玩具，滿足其高度活躍的性格。",
      "環境：確保有同伴或足夠的互動時間，避免孤獨。"
    ],
    recommendedProducts: ["抗牙結石配方貓糧", "智能聲光玩具", "舒壓零食"],
  },
  {
    id: "sphynx",
    name: "無毛貓 (Sphynx)",
    shortName: "無毛貓",
    characteristics: "無毛、皮膚呈粉紅色或其他顏色，皺紋明顯，性格外向、喜歡與人互動。",
    healthIssues: [
      "皮膚乾燥：需使用保濕產品，避免皮膚龜裂。",
      "怕冷：對低溫敏感，需要保暖措施。",
      "油脂分泌旺盛：需要定期清潔皮膚，避免油垢堆積。"
    ],
    careAdvice: [
      "飲食：高熱量飼料以維持體溫和能量。",
      "環境：提供溫暖的休息區（如加熱墊）。",
      "護理：定期給予皮膚清潔和保濕護理。"
    ],
    recommendedProducts: ["高熱量貓糧", "保濕護膚品", "暖感毯或加熱墊"],
  }
];


/// 產品資料庫
export const productDatabase: Record<string, ProductData> = {
  "高蛋白低脂乾糧": {
    description: "為活動量大的貓咪設計的高蛋白低脂配方，含有優質蛋白質和必需脂肪酸，幫助維持肌肉發展，同時控制體重。添加天然纖維素，促進腸胃健康和毛球排出。",
    suitableBreeds: "特別適合阿比西尼亞貓等活動量大的品種，以及英國短毛貓等容易肥胖的品種。",
    usageNotes: "建議每日餵食兩次，依照貓咪體重和活動量調整份量。首次更換飼料時，建議逐漸過渡，避免腸胃不適。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "高蛋白低脂乾糧 - 產品展示" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "高蛋白低脂乾糧 - 產品成分" }
    ],
    link: "https://example.com/products/high-protein-cat-food"
  },

  "互動型逗貓棒": {
    description: "專為刺激貓咪狩獵本能設計的互動玩具，前端配有仿真羽毛和鈴鐺，能夠吸引貓咪注意並鼓勵其進行跳躍和追逐運動。提供貓咪必要的身體活動和精神刺激。",
    suitableBreeds: "特別適合阿比西尼亞貓、孟加拉貓等活潑好動的品種，幫助高能量貓咪釋放精力。",
    usageNotes: "建議每天進行15-20分鐘的遊戲時間，在開放空間使用以確保貓咪有足夠的運動空間。使用後請收納好，避免貓咪誤食羽毛部分。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "互動型逗貓棒 - 產品展示" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "可激發貓咪的狩獵本能" }
    ],
    link: "https://example.com/products/interactive-cat-wand"
  },

  "益智玩具": {
    description: "專為刺激貓咪智力設計的互動益智玩具，內置多層迷宮和可移動組件，讓貓咪通過爪子操作來獲取藏在裡面的零食。鼓勵貓咪動腦思考，預防無聊和焦慮行為。",
    suitableBreeds: "適合阿比西尼亞貓等聰明活潑的品種，以及需要精神刺激的室內貓。",
    usageNotes: "建議每天使用1-2次，每次10-15分鐘。可在玩具中放入貓咪喜愛的零食或乾糧增加吸引力。定期清洗以保持衛生。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "貓咪益智玩具" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "刺激智力的互動遊戲" },
    ],
    link: "https://example.com/products/cat-puzzle-toy"
  },

  "腸胃保護配方貓糧": {
    description: "針對腸胃敏感貓咪設計的特殊配方，添加益生菌和益生元，促進腸道健康菌群生長。使用容易消化的蛋白質來源和優質膳食纖維，減輕腸胃負擔，改善消化吸收。",
    suitableBreeds: "特別適合孟加拉貓等腸胃敏感的品種，以及有食物過敏史的貓咪。",
    usageNotes: "建議按照貓咪體重嚴格控制份量，分2-3次餵食。更換飼料時必須緩慢過渡，通常需要7-10天完全過渡。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "腸胃保護配方貓糧 - 產品包裝" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "專為敏感腸胃設計" },
      ],
    link: "https://example.com/products/digestive-care-cat-food"
  },

  "貓抓板": {
    description: "採用高密度瓦楞紙製成的耐用貓抓板，提供貓咪自然磨爪的場所，保護家具免受損壞。獨特的波浪設計增加趣味性，吸引貓咪使用。內含貓草粉，更能引起貓咪興趣。",
    suitableBreeds: "適合所有貓咪品種，特別是孟加拉貓和英國短毛貓等需要經常磨爪的品種。",
    usageNotes: "放置在貓咪經常活動的區域，初次使用可灑上些許貓草粉增加吸引力。當貓抓板表面磨損嚴重時需要更換，通常壽命為3-6個月。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "貓抓板 - 波浪設計" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "貓咪愛用的磨爪工具" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "保護家具的必備用品" }
    ],
    link: "https://example.com/products/cat-scratching-pad"
  },

  "爬架": {
    description: "多層次豪華貓爬架，提供貓咪攀爬、休息和玩耍的綜合空間。堅固的柱子包覆優質劍麻繩，滿足貓咪磨爪需求；柔軟的休息平台和洞穴提供隱私與安全感；頂部觀景台滿足貓咪的高處偵查本能。",
    suitableBreeds: "特別適合孟加拉貓、緬因貓等活動量大且喜歡攀爬的品種。",
    usageNotes: "放置在窗邊或牆角等穩定區域，確保底座平穩。組裝時確保所有螺絲都已鎖緊。定期檢查劍麻繩的磨損情況，並清潔絨毛表面。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "多功能豪華爬架" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "提供攀爬和休息空間" },
      ],
    link: "https://example.com/products/cat-tree-tower"
  },

  "心臟健康配方貓糧": {
    description: "特別添加牛磺酸、L-肉鹼和Omega-3脂肪酸的高品質貓糧，專為支持心臟健康設計。低鈉配方減輕心臟負擔，而均衡的氨基酸組合幫助維持心肌健康。",
    suitableBreeds: "特別適合緬甸貓、緬因貓等有心臟問題風險的品種，以及年長的貓咪。",
    usageNotes: "根據貓咪體重和年齡調整餵食量，通常分為早晚兩餐。更換至此配方應逐漸過渡，時間不少於一週。若貓咪已有心臟問題，請在獸醫指導下使用。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "心臟健康配方貓糧" },
    ],
    link: "https://example.com/products/cardiac-health-cat-food"
  },

  "梳毛工具": {
    description: "專業級貓咪梳毛套裝，包含脫毛梳、按摩梳和梳毛手套。脫毛梳採用不鏽鋼圓頭設計，安全有效地去除浮毛和死毛；按摩梳增加血液循環，促進皮膚健康；梳毛手套適合不喜歡傳統梳子的貓咪，輕鬆收集掉落毛髮。",
    suitableBreeds: "特別適合布偶貓、緬因貓、波斯貓等長毛品種，也適用於換毛期的所有貓咪。",
    usageNotes: "短毛貓建議每週梳理1-2次，長毛貓建議每天梳理。梳理時動作應輕柔，特別注意頸部、腹部等敏感區域。脫毛梳使用後應清理收集的毛髮。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "專業梳毛套裝" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "輕鬆去除浮毛和死毛" },
    ],
    link: "https://example.com/products/cat-grooming-tools"
  },

  "輕柔毛絨玩具": {
    description: "使用超柔軟材質製作的毛絨玩具，適合溫和貓咪輕咬和抱抓。內含貓草或貓薄荷，增加吸引力；縫線加固處理，提高耐用性；可機洗設計，方便清潔。",
    suitableBreeds: "特別適合緬甸貓、波斯貓等性格溫和的品種，以及年幼或年長的貓咪。",
    usageNotes: "建議定期洗滌保持衛生，避免長時間放在潮濕處以防發霉。若發現玩具破損，應立即更換以避免貓咪誤食填充物。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "超柔軟毛絨玩具" },
      ],
    link: "https://example.com/products/plush-cat-toys"
  },

  "低熱量貓糧": {
    description: "專為需要控制體重的貓咪設計的低熱量配方，使用低脂蛋白質來源和複合碳水化合物，提供飽足感同時減少熱量攝取。添加L-肉鹼促進脂肪代謝，維持健康體重。",
    suitableBreeds: "特別適合孟買貓等易發胖的室內貓，以及活動量較低的成年貓。",
    usageNotes: "請嚴格按照包裝上的餵食指南控制份量，分多次少量餵食。體重減輕過程應緩慢進行，每週不超過貓咪體重的1-2%。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "低熱量貓糧 - 健康體重管理" },
      ],
    link: "https://example.com/products/low-calorie-cat-food"
  },

  "雷射玩具": {
    description: "互動式雷射逗貓玩具，投射出小紅點在地面或牆壁移動，激發貓咪的狩獵本能。可手動操作或自動模式，多種移動模式隨機變化，防止貓咪預測軌跡。安全低功率雷射，不傷害貓咪眼睛。",
    suitableBreeds: "特別適合孟買貓、埃及貓等高能量且喜歡追逐的品種。",
    usageNotes: "每天玩耍5-10分鐘，切勿直接照射貓咪眼睛。遊戲結束時，建議給予實體玩具或零食，讓貓咪有「捕獲獵物」的滿足感。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "互動式雷射玩具" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "激發貓咪狩獵本能" }
    ],
    link: "https://example.com/products/laser-cat-toy"
  },

  "小型追逐球": {
    description: "輕巧的滾動球玩具套裝，內含鈴鐺或LED燈，滾動時發出聲音或閃爍燈光，吸引貓咪注意。特殊紋理設計便於貓咪抓取，材質安全耐咬。多種顏色和大小滿足不同貓咪的喜好。",
    suitableBreeds: "適合孟買貓等活潑好動的品種，特別是喜歡追逐玩耍的年輕貓咪。",
    usageNotes: "建議在硬質地板上使用效果最佳。使用後收納在貓咪接觸不到的地方，避免貓咪在無人監督時玩耍並誤食小零件。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "小型追逐球套裝" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "多種顏色和材質選擇" }
    ],
    link: "https://example.com/products/cat-chase-balls"
  },

  "控制體重的低脂貓糧": {
    description: "特別針對容易過重的貓咪設計的低熱量配方，富含優質蛋白質和L-肉鹼，幫助代謝脂肪並維持肌肉量。添加膳食纖維增加飽腹感，降低能量密度。",
    suitableBreeds: "特別適合英國短毛貓等易發胖的品種，以及活動量較低的室內貓。",
    usageNotes: "請嚴格按照建議份量餵食，避免額外零食。鼓勵貓咪多運動，結合飲食控制達到理想體重。體重變化應緩慢進行，每週不超過1-2%的體重減輕。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "控制體重的低脂貓糧" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "幫助維持健康體重" },
      ],
    link: "https://example.com/products/weight-control-cat-food"
  },

  "潔牙零食": {
    description: "特殊設計的潔牙零食，表面有刷牙效果的紋路，在貓咪咀嚼時能夠清除牙菌斑和牙垢。含有天然酵素成分，幫助分解口腔細菌，減少口臭。無穀物配方，適合敏感腸胃的貓咪。",
    suitableBreeds: "適合所有貓咪品種，特別是英國短毛貓等容易有牙結石問題的品種。",
    usageNotes: "建議每日給予1-2塊，作為零食補充而非主食。不要過量餵食以避免熱量攝取過多。若貓咪有嚴重牙齒問題，請先諮詢獸醫。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "潔牙零食" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "清潔牙齒的特殊紋理設計" },
      ],
    link: "https://example.com/products/dental-treats"
  },

  "貓抓板和玩具": {
    description: "採用高密度瓦楞紙製成的耐用貓抓板，提供貓咪自然磨爪的場所，保護家具免受損壞。獨特的波浪設計增加趣味性，吸引貓咪使用。內含貓草粉，更能引起貓咪興趣。",
    suitableBreeds: "適合所有貓咪品種，特別是孟加拉貓和英國短毛貓等需要經常磨爪的品種。",
    usageNotes: "放置在貓咪經常活動的區域，初次使用可灑上些許貓草粉增加吸引力。當貓抓板表面磨損嚴重時需要更換，通常壽命為3-6個月。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "貓抓板 - 波浪設計" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "貓咪愛用的磨爪工具" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "保護家具的必備用品" }
    ],
    link: "https://example.com/products/cat-scratching-pad"
  },

  "高蛋白濕糧": {
    description: "優質肉類為主要成分的高蛋白濕糧，提供貓咪所需的完整動物蛋白和必需氨基酸。無穀配方減少過敏風險，添加牛磺酸支持視力和心臟健康。豐富的水分含量幫助貓咪補充水分，促進泌尿系統健康。",
    suitableBreeds: "特別適合埃及貓等活動量大的品種，以及挑食或需要增加水分攝取的貓咪。",
    usageNotes: "可單獨餵食或與乾糧混合使用。開封後請冷藏保存，並在24小時內食用完畢。餵食量應根據貓咪的體重、年齡和活動水平調整。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "高蛋白濕糧 - 多種口味" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "豐富的肉塊和湯汁" }
    ],
    link: "https://example.com/products/high-protein-wet-food"
  },

  "跳躍類玩具": {
    description: "設計精巧的彈跳玩具，包含彈簧底座和可更換的逗貓尾部。彈簧設計模擬獵物的不規則移動，激發貓咪的狩獵本能；多種尾部附件可更換，包括羽毛、毛絨和響紙，提供不同的感官刺激。",
    suitableBreeds: "特別適合埃及貓等敏捷且喜歡跳躍的品種，以及需要額外運動的室內貓。",
    usageNotes: "放置在開放空間使用，確保貓咪有足夠的活動範圍。每天玩耍10-15分鐘，幫助消耗多餘能量。使用後收納在貓咪接觸不到的地方，避免貓咪啃咬零件。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "彈跳式逗貓玩具" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "激發跳躍和捕獵行為" }
    ],
    link: "https://example.com/products/cat-jumping-toys"
  },

  "舒壓補充品": {
    description: "天然草本配方的舒壓保健品，含有纈草根、洋甘菊和L-色氨酸等成分，有助於緩解貓咪焦慮和壓力。無藥物成分，溫和有效，適合長期使用。液體形式便於添加到食物或水中，貓咪容易接受。",
    suitableBreeds: "特別適合埃及貓、俄羅斯藍貓等敏感易焦慮的品種，以及面臨環境變化的貓咪。",
    usageNotes: "根據貓咪體重按說明劑量添加至食物中。效果通常在30-60分鐘內顯現，持續數小時。可用於雷雨天氣、搬家、出行或訪客來訪等壓力情境，也適合分離焦慮的日常管理。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "天然草本舒壓保健品" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "幫助緩解焦慮和壓力" }
    ],
    link: "https://example.com/products/cat-calming-supplement"
  },

  "大顆粒飼料": {
    description: "特別為大型貓咪設計的大顆粒乾糧，顆粒尺寸和硬度適合大型貓咪的咀嚼習慣，幫助清潔牙齒。富含優質蛋白質支持肌肉發展，添加葡萄糖胺和軟骨素維護關節健康，適合體型較大的貓咪的營養需求。",
    suitableBreeds: "特別適合緬因貓等大型貓咪品種，顎部強壯且需要更多咀嚼的貓咪。",
    usageNotes: "根據貓咪體重和活動量調整餵食量，通常分早晚兩餐。提供足夠的新鮮水源，確保貓咪有充分的水分攝取。若貓咪有牙齒問題，請在使用前諮詢獸醫。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "大顆粒專用貓糧" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "適合大型貓咪的特殊配方" }
    ],
    link: "https://example.com/products/large-kibble-cat-food"
  },

  "爬架或貓隧道": {
    description: "可折疊式貓咪活動隧道，由多個連接的布質隧道和中心休息區組成。採用耐用尼龍布料製成，內置鋼絲支架保持形狀；隧道內懸掛小玩具和響紙，增加趣味性；折疊設計便於收納，適合空間有限的家庭。",
    suitableBreeds: "特別適合緬因貓等喜歡探索和躲藏的大型貓品種，以及需要私密空間的敏感貓咪。",
    usageNotes: "可單獨使用或與其他貓咪玩具組合。定期檢查連接處和玩具附件的安全性，避免貓咪誤食小零件。布料可拆卸清洗，保持衛生。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "可折疊式貓咪活動隧道" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "提供探索和躲藏樂趣" },
      ],
    link: "https://example.com/products/cat-tunnel-system"
  },

  "毛球控制貓糧": {
    description: "專為長毛貓設計的毛球控制配方，含有特殊纖維組合，幫助毛髮自然通過消化系統排出。添加亞麻籽油和Omega脂肪酸，改善皮膚和毛髮健康，減少掉毛；麥芽成分輔助毛球排出，預防毛球堆積導致的消化問題。",
    suitableBreeds: "特別適合波斯貓等長毛品種，以及容易形成毛球的室內貓。",
    usageNotes: "建議每日分2-3次餵食，確保貓咪有充足飲水。轉換飼料時應逐漸過渡，避免突然更換導致腸胃不適。使用專用量杯測量餵食量，避免過量。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "毛球控制專用貓糧" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "幫助預防毛球問題" }
    ],
    link: "https://example.com/products/hairball-control-cat-food"
  },

  "泌尿保健貓糧": {
    description: "專為維護泌尿系統健康設計的特殊配方，調整礦物質平衡，幫助維持尿液適當pH值，減少結石形成風險。添加蔓越莓提取物，支持尿道健康，增加飲水量，促進尿液稀釋。",
    suitableBreeds: "特別適合布偶貓等容易出現泌尿問題的品種，以及有泌尿系統疾病史的貓咪。",
    usageNotes: "建議搭配增加飲水量的措施，如使用活水機。飼料轉換應在7-10天內逐步完成。若貓咪已有嚴重泌尿問題，請先諮詢獸醫。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "泌尿保健專用配方" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "幫助維持泌尿系統健康" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "貓咪健康長壽的選擇" }
    ],
    link: "https://example.com/products/urinary-care-cat-food"
  },

  "小毛絨玩具": {
    description: "迷你型毛絨玩具組合，包含多種貓咪最愛的動物造型，如老鼠、鳥類和昆蟲。採用柔軟安全的布料製成，內含貓草或貓薄荷增加吸引力；大小適合貓咪抱住和踢踢玩，滿足其自然狩獵行為；不含小零件，安全無毒。",
    suitableBreeds: "特別適合布偶貓等溫和親人的品種，以及喜歡抱玩具的貓咪。",
    usageNotes: "可作為獨立玩具或獎勵使用。貓草效果會隨時間減弱，可定期更換或添加新鮮貓草。建議定期清洗，保持衛生。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "迷你毛絨玩具組合" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "貓咪最愛的抱抱玩具" }
    ],
    link: "https://example.com/products/small-plush-cat-toys"
  },

  "高蛋白低熱量貓糧": {
    description: "為活動量大的貓咪設計的高蛋白低脂配方，含有優質蛋白質和必需脂肪酸，幫助維持肌肉發展，同時控制體重。添加天然纖維素，促進腸胃健康和毛球排出。",
    suitableBreeds: "特別適合阿比西尼亞貓等活動量大的品種，以及英國短毛貓等容易肥胖的品種。",
    usageNotes: "建議每日餵食兩次，依照貓咪體重和活動量調整份量。首次更換飼料時，建議逐漸過渡，避免腸胃不適。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "高蛋白低脂乾糧 - 產品展示" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "高蛋白低脂乾糧 - 產品成分" }
    ],
    link: "https://example.com/products/high-protein-low-calorie-food"
  },

  "智能互動玩具": {
    description: "自動化智能玩具，配備不規則移動模式和自動開關功能，模擬小動物移動激發貓咪狩獵本能。內置多種運動模式可切換，防止貓咪對單一模式產生厭倦；感應器偵測貓咪靠近，調整運動速度和方向；低噪音設計，適合全天候使用。",
    suitableBreeds: "特別適合俄羅斯藍貓等需要精神刺激但較安靜的品種，以及獨處時間長的貓咪。",
    usageNotes: "建議在平整地面使用，避免地毯或不平表面影響移動。電池模式下可持續工作2-3小時，USB充電約1小時完成。建議定期清潔玩具表面，保持良好運作狀態。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "自動化智能互動玩具" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "多種模式滿足不同喜好" }
    ],
    link: "https://example.com/products/smart-interactive-cat-toy"
  },

  "抗牙結石配方貓糧": {
    description: "專為口腔健康設計的特殊配方，顆粒大小和形狀特別設計，在咀嚼過程中清潔牙齒表面。添加多聚磷酸鹽成分，幫助減少牙結石形成；維生素和礦物質配比優化，支持整體牙齒健康。",
    suitableBreeds: "特別適合暹羅貓等容易有牙結石問題的品種，以及年長貓咪。",
    usageNotes: "建議作為主食每日提供，效果隨使用時間累積。仍需定期進行口腔檢查和專業潔牙。若貓咪已有嚴重牙結石，應先由獸醫處理後再使用此預防性產品。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "抗牙結石專用貓糧" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "特殊顆粒設計清潔牙齒" }
    ],
    link: "https://example.com/products/tartar-control-cat-food"
  },

  "智能聲光玩具": {
    description: "多功能互動式聲光玩具，結合聲音、光線和移動元素刺激貓咪感官。內置動作感應器，偵測貓咪接近時自動啟動；多種聲音模式模擬鳥類和小動物叫聲；LED燈光設計安全無熱，吸引貓咪追逐；可更換零件設計增加遊戲變化。",
    suitableBreeds: "特別適合暹羅貓等聰明好動且社交性強的品種，需要精神和身體雙重刺激的貓咪。",
    usageNotes: "每天可使用多次，每次15-20分鐘。有自動關閉功能，防止電池過度消耗。電池可更換，建議使用高品質電池以獲得最佳效果。保持玩具清潔，避免灰塵影響感應器靈敏度。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "智能聲光互動玩具" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "刺激多種感官的高科技玩具" }
    ],
    link: "https://example.com/products/smart-light-sound-toy"
  },

  "舒壓零食": {
    description: "添加天然草本成分的特殊零食，含有纈草、洋甘菊和L-色氨酸，幫助緩解壓力和焦慮。口感酥脆適合咀嚼，增加滿足感；小份量包裝保持新鮮，控制熱量攝取；無人工色素和防腐劑，適合敏感貓咪。",
    suitableBreeds: "特別適合暹羅貓等情緒表達豐富的品種，以及容易緊張焦慮的貓咪。",
    usageNotes: "可作為日常獎勵或特殊情況（如雷雨天、訪客來訪、出行）前的安撫零食。每天限量餵食，避免過量影響主食攝取。若貓咪有特殊健康問題，請先諮詢獸醫。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "天然舒壓零食" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "添加草本成分，幫助放鬆心情" }
    ],
    link: "https://example.com/products/calming-cat-treats"
  },

  "高熱量貓糧": {
    description: "專為需要額外能量的貓咪設計的高熱量配方，富含優質蛋白質和健康脂肪，提供濃縮能量來源。添加必需脂肪酸支持皮膚健康，維生素E促進免疫功能；高消化率配方確保營養充分吸收，適合能量需求高的特殊體質貓咪。",
    suitableBreeds: "特別適合無毛貓等新陳代謝較快的品種，以及恢復期、生長期或活動量極大的貓咪。",
    usageNotes: "根據貓咪體重和活動量調整餵食量，通常需要比普通貓糧少量餵食。密切監控貓咪體重變化，避免過度餵食導致肥胖。飼料開封後應保持密封，存放在陰涼乾燥處。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "高熱量專用貓糧" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "提供濃縮能量，滿足特殊需求" }
    ],
    link: "https://example.com/products/high-calorie-cat-food"
  },

  "保濕護膚品": {
    description: "專為無毛貓設計的溫和保濕乳液，含有天然蘆薈、維生素E和甘油成分，深層滋潤皮膚，防止乾燥和皺紋。無酒精配方，不刺激敏感皮膚；快速吸收不油膩，不會弄髒家具和衣物；溫和香氛，提升使用體驗。",
    suitableBreeds: "專為無毛貓等需要皮膚額外護理的品種設計，適用於所有有皮膚乾燥問題的貓咪。",
    usageNotes: "建議每週使用2-3次，特別乾燥的季節可增加使用頻率。使用少量輕輕按摩於貓咪皮膚，避開眼睛和口鼻區域。若貓咪皮膚有傷口或炎症，請先諮詢獸醫再使用。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "專業貓咪護膚乳液" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "深層滋潤，預防皮膚問題" }
    ],
    link: "https://example.com/products/cat-moisturizing-lotion"
  },

  "暖感毯或加熱墊": {
    description: "智能溫控加熱墊，為怕冷的貓咪提供恆定溫暖環境。多層安全設計包含防水內層和咬咬力布外層；自動溫度調節功能，模擬貓咪體溫維持在38°C左右；低壓設計和過熱保護系統確保使用安全；可拆洗外套便於清潔維護。",
    suitableBreeds: "專為無毛貓等對溫度敏感的品種設計，也適合老年貓、幼貓或康復中的貓咪。",
    usageNotes: "可放置於貓咪常用的休息區域，如貓窩、貓床等處。初次使用時先設定低溫，讓貓咪逐漸適應。使用時保持電源線遠離貓咪，避免啃咬損壞。不使用時建議關閉電源節能。",
    images: [
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "智能溫控加熱墊" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "提供舒適溫暖的休息環境" },
      { src: "https://placehold.co/600x400/e9e9e9/969696?text=產品圖片未上傳", caption: "貓咪最愛的冬季必備品" }
    ],
    link: "https://example.com/products/pet-heating-pad"
  }
};
