<template>
  <v-app-bar
    :class="['site-header', { 'site-header--scrolled': isScrolled }]"
    :elevation="0"
    flat
  >
    <v-container class="d-flex align-center ga-2">
      <a class="site-brand d-flex align-center ga-3" href="#top" @click.prevent="scrollTo('top')">
        <v-avatar color="surface" rounded="circle" size="42">
          <v-img alt="Alyssum logo" src="@/assets/logo.png" />
        </v-avatar>

        <div class="d-none d-sm-block">
          <div class="text-subtitle-1 font-weight-bold brand-name">{{ t('site.shortName') }}</div>
          <div class="text-caption brand-sub">{{ t('site.name') }}</div>
        </div>
      </a>

      <v-spacer />

      <div class="d-none d-md-flex align-center ga-1">
        <v-btn
          v-for="item in navigationItems"
          :key="item.anchor"
          :class="['nav-btn', { 'nav-btn--active': activeAnchor === item.anchor }]"
          variant="text"
          @click="scrollTo(item.anchor)"
        >
          {{ t(`site.navigation.${item.key}`) }}
        </v-btn>
      </div>

      <v-btn
        aria-label="GitHub"
        class="d-none d-sm-inline-flex"
        :href="githubUrl"
        icon="mdi-github"
        rel="noopener noreferrer"
        target="_blank"
        variant="text"
      />

      <v-menu>
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            class="locale-btn"
            prepend-icon="mdi-translate"
            variant="text"
          >
            <span class="d-none d-sm-inline">{{ locale === 'en' ? 'EN' : '中' }}</span>
          </v-btn>
        </template>

        <v-list density="compact">
          <v-list-item
            v-for="option in localeOptions"
            :key="option.value"
            :active="locale === option.value"
            :title="option.label"
            @click="setLocale(option.value)"
          />
        </v-list>
      </v-menu>

      <v-btn
        class="d-none d-md-inline-flex"
        color="primary"
        :href="consultationFormUrl"
        rel="noopener noreferrer"
        target="_blank"
      >
        {{ t('site.cta.bookDiagnosis') }}
      </v-btn>

      <v-app-bar-nav-icon
        aria-label="Open navigation menu"
        class="d-md-none"
        @click="drawer = !drawer"
      />
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.anchor"
        :title="t(`site.navigation.${item.key}`)"
        @click="onDrawerNav(item.anchor)"
      />

      <v-divider class="my-2" />

      <v-list-item
        :href="githubUrl"
        prepend-icon="mdi-github"
        rel="noopener noreferrer"
        target="_blank"
        title="GitHub"
      />
    </v-list>

    <div class="pa-4">
      <v-btn
        block
        color="primary"
        :href="consultationFormUrl"
        rel="noopener noreferrer"
        target="_blank"
      >
        {{ t('site.cta.bookDiagnosis') }}
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { consultationFormUrl, githubUrl } from '@/config/site'
  import { navigationItems } from '@/data/site'
  import { persistLocale, type AppLocale } from '@/plugins/i18n'

  const { t, locale } = useI18n()
  const drawer = ref(false)
  const isScrolled = ref(false)
  const activeAnchor = ref('top')

  const localeOptions = computed(() => [
    { value: 'zh-TW' as AppLocale, label: t('site.language.zh') },
    { value: 'en' as AppLocale, label: t('site.language.en') },
  ])

  function setLocale (next: AppLocale) {
    locale.value = next
    persistLocale(next)
  }

  function scrollTo (anchor: string) {
    const target = anchor === 'top'
      ? document.body
      : document.getElementById(anchor)

    if (!target) return
    const offset = 72
    const top = anchor === 'top'
      ? 0
      : target.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({ top, behavior: 'smooth' })
  }

  function onDrawerNav (anchor: string) {
    drawer.value = false
    setTimeout(() => scrollTo(anchor), 220)
  }

  function onScroll () {
    isScrolled.value = window.scrollY > 12

    const sections = navigationItems
      .filter(item => item.anchor !== 'top')
      .map(item => ({ anchor: item.anchor, el: document.getElementById(item.anchor) }))
      .filter(s => s.el)

    if (window.scrollY < 240) {
      activeAnchor.value = 'top'
      return
    }

    const probe = window.scrollY + 140
    let current = 'top'
    for (const section of sections) {
      if (!section.el) continue
      if (section.el.offsetTop <= probe) {
        current = section.anchor
      }
    }
    activeAnchor.value = current
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })
</script>

<style scoped>
.site-header {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(18px);
  border-bottom: 1px solid transparent;
  transition: background 320ms ease, border-color 320ms ease, box-shadow 320ms ease;
}

.site-header--scrolled {
  background: rgba(255, 255, 255, 0.92) !important;
  border-bottom-color: rgba(124, 78, 153, 0.12);
  box-shadow: 0 12px 30px -24px rgba(90, 52, 114, 0.4);
}

.site-brand {
  color: inherit;
  text-decoration: none;
}

.brand-name {
  background: linear-gradient(120deg, #5A3472, #7C4E99 60%, #B27CD9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.brand-sub {
  color: rgb(var(--v-theme-textSecondary));
  letter-spacing: 0.02em;
}

.nav-btn {
  font-weight: 600;
  letter-spacing: 0.02em;
  color: rgb(var(--v-theme-textPrimary));
  position: relative;
}

.nav-btn::after {
  content: '';
  position: absolute;
  left: 24%;
  right: 24%;
  bottom: 8px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, #7C4E99, #CC9CD8);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-btn--active::after,
.nav-btn:hover::after {
  transform: scaleX(1);
}

.locale-btn {
  font-weight: 600;
}
</style>
