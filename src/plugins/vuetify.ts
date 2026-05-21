/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

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
          background: '#F7F4FB',
          surface: '#FFFFFF',
          surfaceMuted: '#F1ECF7',
          surfaceDark: '#15121E',
          primary: '#7C4E99',
          primaryDeep: '#5A3472',
          secondary: '#CC9CD8',
          accent: '#B27CD9',
          highlight: '#E9DAFF',
          error: '#D32F2F',
          info: '#1976D2',
          success: '#388E3C',
          warning: '#F57C00',
          textPrimary: '#2C2530',
          textSecondary: '#625766',
          textOnDark: '#F6F1FB',
          textOnDarkMuted: '#B6A8C7',
        },
      },
    },
  },
})
