import "@/styles/main.css";
import "@mdi/font/css/materialdesignicons.css";

import { createApp } from "vue";
import App from "./App.vue";

// Load .env - I am lazy
export const ENV = import.meta.env;

import { registerPlugins } from "@/plugins";

const app = createApp(App);
registerPlugins(app);
app.mount("#app");
