import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { registerPlugins } from "@/plugins";

// Create a Vuetify instance and register the components you want to use, avoids tree-shaking issues
const vuetify = createVuetify();
const app = createApp(App);
app.use(vuetify);
app.use(createPinia());
registerPlugins(app);
app.mount("#app");
