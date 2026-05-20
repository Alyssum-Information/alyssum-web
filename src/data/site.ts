export interface NavigationItem {
  key: string
  to: string
}

export interface ServiceItem {
  key: string
  icon: string
}

export const navigationItems: NavigationItem[] = [
  { key: 'home', to: '/' },
  { key: 'services', to: '/services' },
  { key: 'cases', to: '/cases' },
  { key: 'about', to: '/about' },
  { key: 'contact', to: '/contact' },
]

export const trustBadgeKeys = ['ntu', 'ceh', 'enterprise', 'cti']

export const serviceItems: ServiceItem[] = [
  { key: 'rag', icon: 'mdi-database-search-outline' },
  { key: 'training', icon: 'mdi-school-outline' },
  { key: 'security', icon: 'mdi-shield-check-outline' },
]

export const caseKeys = ['case1', 'case2', 'case3', 'case4']
