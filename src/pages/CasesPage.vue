<template>
  <section class="py-12 py-md-16">
    <v-container>
      <h1 class="text-h3 text-textPrimary font-weight-bold mb-3">{{ t('cases.title') }}</h1>
      <p class="text-body-1 text-textSecondary mb-8 page-subtitle">{{ t('cases.subtitle') }}</p>

      <v-row>
        <v-col
          v-for="caseKey in caseKeys"
          :key="caseKey"
          cols="12"
        >
          <v-card class="pa-6" color="surface" variant="flat">
            <h2 class="text-h6 text-textPrimary font-weight-bold mb-4">
              {{ t(`cases.items.${caseKey}.title`) }}
            </h2>

            <p class="text-body-2 text-textSecondary mb-2">
              <span class="font-weight-bold text-textPrimary">{{ t('cases.scope') }}：</span>
              {{ t(`cases.items.${caseKey}.scope`) }}
            </p>

            <p class="text-body-2 text-textSecondary mb-2">
              <span class="font-weight-bold text-textPrimary">{{ t('cases.solution') }}：</span>
              {{ t(`cases.items.${caseKey}.solution`) }}
            </p>

            <p class="text-body-2 text-textSecondary mb-0">
              <span class="font-weight-bold text-textPrimary">{{ t('cases.impact') }}：</span>
              {{ t(`cases.items.${caseKey}.impact`) }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import { usePageHead } from '@/composables/usePageHead'
  import { caseKeys } from '@/data/site'

  const { t } = useI18n()

  usePageHead('cases')
</script>

<style scoped>
.page-subtitle {
  max-width: 760px;
}
</style>
