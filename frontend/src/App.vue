<template>
  <v-app>
    <v-app-bar
      app
      density="comfortable"
      elevation="2"
      color="#B6CBBD"
    >
      <v-app-bar-title class="text-center">
        <v-icon left>
          mdi-paw
        </v-icon>
        MeowWise
      </v-app-bar-title>

      <template #append>
        <theme-toggle />
      </template>
    </v-app-bar>

    <v-main class="py-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import ThemeToggle from "./components/ThemeToggle.vue";
</script>

<style>
/* 在深色模式下的特定樣式調整 */
.v-theme--dark .image-preview {
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.v-theme--dark .image-placeholder {
  border-color: rgba(255, 255, 255, 0.1);
}

.v-theme--dark .border-avatar {
  border-color: rgba(255, 255, 255, 0.12);
}

.v-theme--dark .product-card {
  border-color: rgba(255, 255, 255, 0.12);
}

/* 改進的光標樣式 */
.v-theme--dark .v-btn {
  cursor: pointer;
}

/* 平滑過渡效果 */
.v-app {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* 主題切換動畫 */
.theme-transition-enter-active,
.theme-transition-leave-active {
  transition: opacity 0.5s ease;
}

.theme-transition-enter-from,
.theme-transition-leave-to {
  opacity: 0;
}
</style>
