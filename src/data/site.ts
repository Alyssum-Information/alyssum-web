export interface NavigationItem {
  key: string
  anchor: string
}

export interface ServiceItem {
  key: string
  icon: string
}

export interface CaseItem {
  key: string
  metricKeys: string[]
  icon: string
  accent: string
}

export interface PillarItem {
  key: string
  icon: string
}

export const navigationItems: NavigationItem[] = [
  { key: 'home', anchor: 'top' },
  { key: 'services', anchor: 'services' },
  { key: 'cases', anchor: 'cases' },
  { key: 'about', anchor: 'about' },
  { key: 'contact', anchor: 'contact' },
]

export const trustBadgeKeys = ['ceh', 'enterprise', 'fullstack']

export const serviceItems: ServiceItem[] = [
  { key: 'rag', icon: 'mdi-database-search-outline' },
  { key: 'aiConsulting', icon: 'mdi-shield-account-outline' },
  { key: 'productDev', icon: 'mdi-application-brackets-outline' },
  { key: 'media', icon: 'mdi-creation-outline' },
]

export const caseItems: CaseItem[] = [
  {
    key: 'case1',
    icon: 'mdi-database-arrow-up-outline',
    accent: '#7C4E99',
    metricKeys: ['docs', 'formats', 'automation'],
  },
  {
    key: 'case2',
    icon: 'mdi-google',
    accent: '#B27CD9',
    metricKeys: ['rank', 'cwv', 'adsense'],
  },
  {
    key: 'case3',
    icon: 'mdi-shield-lock-outline',
    accent: '#5A3472',
    metricKeys: ['baselines', 'systems', 'audit'],
  },
  {
    key: 'case4',
    icon: 'mdi-creation',
    accent: '#CC9CD8',
    metricKeys: ['bestseller', 'cost', 'cycle'],
  },
]

export const aboutPillars: PillarItem[] = [
  { key: 'elegant', icon: 'mdi-flower-tulip-outline' },
  { key: 'simple', icon: 'mdi-circle-slice-8' },
  { key: 'trustworthy', icon: 'mdi-shield-star-outline' },
]
