import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// Import the specific Vuetify components you want to use
import { VChip } from 'vuetify/components'

// Create a Vuetify instance and register the components you want to use, avoids tree-shaking issues
const vuetify = createVuetify({
  components: {
    VChip,
  },
})
const app = createApp(App)
app.use(vuetify)
app.use(createPinia())
app.mount('#app')
