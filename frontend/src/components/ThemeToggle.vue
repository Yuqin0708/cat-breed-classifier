<template>
  <v-btn
    icon
    variant="text"
    class="theme-toggle"
    :title="isDarkTheme ? '切換至淺色模式' : '切換至深色模式'"
    @click="toggleTheme"
  >
    <v-icon v-if="isDarkTheme">
      mdi-weather-sunny
    </v-icon>
    <v-icon v-else>
      mdi-weather-night
    </v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const isDarkTheme = ref(false);

// 切換主題
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  theme.global.name.value = isDarkTheme.value ? "dark" : "light";
  localStorage.setItem("theme", isDarkTheme.value ? "dark" : "light");
};

// 監聽主題變化
watch(
  () => theme.global.name.value,
  (newTheme) => {
    isDarkTheme.value = newTheme === "dark";
  }
);

// 組件掛載時載入保存的主題設置
onMounted(() => {
  // 檢查本地存儲的主題偏好
  const savedTheme = localStorage.getItem("theme");

  // 檢查系統偏好
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // 設置初始主題：優先使用保存的主題，否則使用系統偏好
  if (savedTheme) {
    isDarkTheme.value = savedTheme === "dark";
  } else {
    isDarkTheme.value = prefersDark;
  }

  // 應用主題
  theme.global.name.value = isDarkTheme.value ? "dark" : "light";
});
</script>

<style scoped>
.theme-toggle {
  transition: transform 0.3s ease;
}

.theme-toggle:hover {
  transform: rotate(30deg);
}
</style>
