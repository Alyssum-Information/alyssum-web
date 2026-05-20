<template>
  <div>
    <section class="hero-section py-14 py-md-16">
      <v-container>
        <v-row align="center" class="ga-8" justify="space-between">
          <v-col cols="12" md="7">
            <p class="text-overline text-primary mb-3">{{ t('site.shortName') }}</p>

            <h1 class="text-h3 text-md-h2 font-weight-bold text-textPrimary mb-5">
              {{ t('home.hero.title') }}
            </h1>

            <p class="text-body-1 text-textSecondary mb-8 hero-subtitle">
              {{ t('home.hero.subtitle') }}
            </p>

            <div class="d-flex flex-wrap ga-3">
              <v-btn
                color="primary"
                :href="consultationFormUrl"
                rel="noopener noreferrer"
                size="large"
                target="_blank"
              >
                {{ t('site.cta.bookDiagnosis') }}
              </v-btn>

              <v-btn
                color="primary"
                size="large"
                to="/cases"
                variant="outlined"
              >
                {{ t('site.cta.exploreCases') }}
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <v-sheet border class="pa-6" color="surface">
              <h2 class="text-h6 text-textPrimary font-weight-bold mb-4">
                {{ t('home.sections.trustTitle') }}
              </h2>

              <v-chip
                v-for="badgeKey in trustBadgeKeys"
                :key="badgeKey"
                class="mr-2 mb-2"
                color="secondary"
                variant="tonal"
              >
                {{ t(`site.trustBadges.${badgeKey}`) }}
              </v-chip>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="py-12">
      <v-container>
        <h2 class="text-h4 text-textPrimary font-weight-bold mb-6">{{ t('home.sections.servicesTitle') }}</h2>

        <v-row>
          <v-col
            v-for="item in serviceItems"
            :key="item.key"
            cols="12"
            md="4"
          >
            <v-card class="fill-height pa-6" color="surface" variant="flat">
              <v-icon class="mb-4" color="primary" :icon="item.icon" size="34" />

              <h3 class="text-h6 text-textPrimary font-weight-bold mb-3">
                {{ t(`home.services.${item.key}.title`) }}
              </h3>

              <p class="text-body-2 text-textSecondary mb-0">
                {{ t(`home.services.${item.key}.description`) }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import { usePageHead } from '@/composables/usePageHead'
  import { consultationFormUrl } from '@/config/site'
  import { serviceItems, trustBadgeKeys } from '@/data/site'

  const { t } = useI18n()

  usePageHead('home')
</script>

<style scoped>
.hero-section {
  background: linear-gradient(160deg, #ffffff 0%, #fdfbff 100%);
}

.hero-subtitle {
  max-width: 680px;
}
</style>
