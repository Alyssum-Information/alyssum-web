<template>
  <section class="py-12 py-md-16">
    <v-container>
      <h1 class="text-h3 text-textPrimary font-weight-bold mb-3">{{ t('services.title') }}</h1>
      <p class="text-body-1 text-textSecondary mb-8 page-subtitle">{{ t('services.subtitle') }}</p>

      <v-expansion-panels variant="accordion">
        <v-expansion-panel
          v-for="item in serviceItems"
          :key="item.key"
          color="surface"
        >
          <v-expansion-panel-title>
            <div class="d-flex align-center ga-3">
              <v-icon color="primary" :icon="item.icon" />

              <span class="text-subtitle-1 font-weight-bold text-textPrimary">
                {{ t(`services.items.${item.key}.title`) }}
              </span>
            </div>
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <p class="text-body-2 text-textSecondary mb-3">
              <span class="font-weight-bold text-textPrimary">{{ t(`services.items.${item.key}.valueTitle`) }}：</span>
              {{ t(`services.items.${item.key}.value`) }}
            </p>

            <p class="text-body-2 text-textSecondary mb-0">
              <span class="font-weight-bold text-textPrimary">{{ t(`services.items.${item.key}.audienceTitle`) }}：</span>
              {{ t(`services.items.${item.key}.audience`) }}
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import { usePageHead } from '@/composables/usePageHead'
  import { serviceItems } from '@/data/site'

  const { t } = useI18n()

  usePageHead('services')
</script>

<style scoped>
.page-subtitle {
  max-width: 720px;
}
</style>
