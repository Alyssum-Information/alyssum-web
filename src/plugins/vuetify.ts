/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VBtn: {
      rounded: 'pill',
    },
    VCard: {
      rounded: 'lg',
      elevation: 0,
    },
  },
  theme: {
    defaultTheme: 'alyssumCustomTheme',
    themes: {
      alyssumCustomTheme: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          surface: '#FDFBFF',
          primary: '#7C4E99',
          secondary: '#CC9CD8',
          accent: '#5A3472',
          error: '#D32F2F',
          info: '#1976D2',
          success: '#388E3C',
          warning: '#F57C00',
          textPrimary: '#2C2530',
          textSecondary: '#625766',
        },
      },
    },
  },
})
