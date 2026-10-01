import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#4CAF50",
          secondary: "#607D8B",
          accent: "#FF9800",
          error: "#F44336",
          warning: "#FFB74D",
          info: "#29B6F6",
          success: "#66BB6A",
          "primary-lighten-5": "#E8F5E9",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#81C784",
          secondary: "#78909C",
          accent: "#FFB74D",
          error: "#E57373",
          warning: "#FFD54F",
          info: "#4FC3F7",
          success: "#81C784",
          "primary-lighten-5": "#1E3620",
        },
      },
    },
  },
});
