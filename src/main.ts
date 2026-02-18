import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// Import the specific Vuetify components you want to use
import { VChip, VApp, VMain, VAppBar, VAppBarTitle, VAppBarNavIcon, VIcon } from 'vuetify/components'

// Create a Vuetify instance and register the components you want to use, avoids tree-shaking issues
const vuetify = createVuetify({
  components: {
    VChip, VApp, VMain, VAppBar, VAppBarTitle, VAppBarNavIcon, VIcon
  },
})
const app = createApp(App)
app.use(vuetify)
app.use(createPinia())
app.mount('#app')
