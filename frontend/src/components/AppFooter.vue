<template>
  <v-footer
    height="30"
    app
  >
    <a
      v-for="item in items"
      :key="item.title"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === 'Rain' ? 24 : 16"
      />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px"
    >
      &copy; {{ new Date().getFullYear() }}
      <span class="d-none d-sm-inline-block">
        <a
          class="text-decoration-none on-surface"
          href="https://vuetifyjs.com/about/licensing/"
          rel="noopener noreferrer"
          target="_blank"
        />
      </span>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const items = [
  {
    title: "Rain",
    icon: `mdi-weather-pouring`,
  },
];
</script>
