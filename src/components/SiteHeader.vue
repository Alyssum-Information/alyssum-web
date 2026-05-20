<template>
  <v-app-bar class="border-b" color="background" flat>
    <v-container class="d-flex align-center ga-2">
      <RouterLink class="site-brand d-flex align-center ga-3" to="/">
        <v-avatar color="surface" rounded="circle" size="42">
          <v-img alt="Alyssum logo" src="@/assets/logo.png" />
        </v-avatar>

        <div>
          <div class="text-subtitle-1 text-textPrimary font-weight-bold">{{ t('site.shortName') }}</div>
          <div class="text-caption text-textSecondary">{{ t('site.tagline') }}</div>
        </div>
      </RouterLink>

      <v-spacer />

      <div class="d-none d-md-flex align-center ga-1">
        <v-btn
          v-for="item in navigationItems"
          :key="item.to"
          :to="item.to"
          variant="text"
        >
          {{ t(`site.navigation.${item.key}`) }}
        </v-btn>
      </div>

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
        :key="item.to"
        :title="t(`site.navigation.${item.key}`)"
        :to="item.to"
        @click="drawer = false"
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
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { RouterLink } from 'vue-router'
  import { consultationFormUrl } from '@/config/site'
  import { navigationItems } from '@/data/site'

  const { t } = useI18n()
  const drawer = ref(false)
</script>

<style scoped>
.site-brand {
  color: inherit;
  text-decoration: none;
}
</style>
