/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Composables
import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Styles
import 'unfonts.css'
import '@/styles/main.scss'

const app = createApp(App)
const head = createHead()

registerPlugins(app)
app.use(head)

app.mount('#app')
