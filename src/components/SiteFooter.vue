<template>
  <v-footer class="py-8" color="surface">
    <v-container>
      <v-row class="ga-4" justify="space-between">
        <v-col cols="12" md="7">
          <div class="text-h6 font-weight-bold text-textPrimary mb-2">{{ t('site.name') }}</div>
          <p class="text-body-2 text-textSecondary mb-0">{{ t('site.footer.description') }}</p>
        </v-col>

        <v-col cols="12" md="4">
          <div class="text-subtitle-2 text-textSecondary mb-2">{{ t('site.navigation.contact') }}</div>

          <v-btn
            color="primary"
            :href="consultationFormUrl"
            rel="noopener noreferrer"
            target="_blank"
            variant="tonal"
          >
            {{ t('site.cta.consultation') }}
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-5" />

      <p class="text-caption text-textSecondary mb-0">
        {{ t('site.footer.copyright', { year: currentYear }) }}
      </p>
    </v-container>
  </v-footer>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import { consultationFormUrl } from '@/config/site'

  const { t } = useI18n()
  const currentYear = new Date().getFullYear()
</script>
