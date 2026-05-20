import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { siteUrl } from '@/config/site'

type PageKey = 'home' | 'services' | 'cases' | 'about' | 'contact'

export function usePageHead (page: PageKey) {
  const { t } = useI18n()
  const route = useRoute()

  const title = computed(() => t(`seo.${page}.title`))
  const description = computed(() => t(`seo.${page}.description`))
  const image = computed(() => `${siteUrl}/${t('seo.defaultOgImage')}`)
  const pageUrl = computed(() => `${siteUrl}/#${route.fullPath}`)

  useHead({
    title,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: image,
      },
      {
        property: 'og:url',
        content: pageUrl,
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
  })
}
