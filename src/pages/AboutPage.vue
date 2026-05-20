<template>
  <section class="py-12 py-md-16">
    <v-container>
      <h1 class="text-h3 text-textPrimary font-weight-bold mb-8">{{ t('about.title') }}</h1>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-6 fill-height" color="surface" variant="flat">
            <h2 class="text-h5 text-textPrimary font-weight-bold mb-4">{{ t('about.philosophyTitle') }}</h2>
            <p class="text-body-1 text-textSecondary mb-0">{{ t('about.philosophyDescription') }}</p>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="pa-6 fill-height" color="surface" variant="flat">
            <h2 class="text-h5 text-textPrimary font-weight-bold mb-4">{{ t('about.founderTitle') }}</h2>
            <p class="text-body-1 text-textSecondary mb-0">{{ t('about.founderDescription') }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import { usePageHead } from '@/composables/usePageHead'

  const { t } = useI18n()

  usePageHead('about')
</script>
