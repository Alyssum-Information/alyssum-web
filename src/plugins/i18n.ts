import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import zhTw from '@/locales/zh-TW.json'

export type AppLocale = 'zh-TW' | 'en'

const STORAGE_KEY = 'alyssum.locale'

function resolveInitialLocale (): AppLocale {
  if (typeof window === 'undefined') return 'zh-TW'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'zh-TW' || stored === 'en') return stored
  const browser = window.navigator.language?.toLowerCase() ?? ''
  if (browser.startsWith('zh')) return 'zh-TW'
  if (browser.startsWith('en')) return 'en'
  return 'zh-TW'
}

const i18n = createI18n({
  legacy: false,
  locale: resolveInitialLocale(),
  fallbackLocale: 'zh-TW',
  messages: {
    'zh-TW': zhTw,
    en,
  },
})

export function persistLocale (locale: AppLocale) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, locale)
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale === 'en' ? 'en' : 'zh-Hant'
  }
}

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.global.locale.value === 'en' ? 'en' : 'zh-Hant'
}

export default i18n
