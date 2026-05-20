<template>
  <section class="py-12 py-md-16">
    <v-container>
      <v-row class="ga-8" justify="space-between">
        <v-col cols="12" md="5">
          <h1 class="text-h3 text-textPrimary font-weight-bold mb-3">{{ t('contact.title') }}</h1>
          <p class="text-h6 text-primary mb-4">{{ t('contact.subtitle') }}</p>
          <p class="text-body-1 text-textSecondary mb-8">{{ t('contact.description') }}</p>

          <v-btn
            color="primary"
            :href="consultationFormUrl"
            rel="noopener noreferrer"
            target="_blank"
          >
            {{ t('contact.form.directForm') }}
          </v-btn>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="pa-6" color="surface" variant="flat">
            <v-form ref="formRef">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.name"
                    :label="t('contact.form.name')"
                    :rules="requiredRules"
                    variant="outlined"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="form.email"
                    :label="t('contact.form.email')"
                    :rules="emailRules"
                    variant="outlined"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="form.company"
                    :label="t('contact.form.company')"
                    :rules="requiredRules"
                    variant="outlined"
                  />
                </v-col>

                <v-col cols="12">
                  <v-select
                    v-model="form.budget"
                    item-title="label"
                    item-value="value"
                    :items="budgetOptions"
                    :label="t('contact.form.budget')"
                    :rules="requiredRules"
                    variant="outlined"
                  />
                </v-col>

                <v-col cols="12">
                  <v-select
                    v-model="form.need"
                    item-title="label"
                    item-value="value"
                    :items="needOptions"
                    :label="t('contact.form.need')"
                    :rules="requiredRules"
                    variant="outlined"
                  />
                </v-col>

                <v-col cols="12">
                  <v-btn block color="primary" @click="onSubmit">
                    {{ t('contact.form.submit') }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar v-model="snackbar" color="success">
      {{ t('contact.form.submitted') }}
    </v-snackbar>
  </section>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { usePageHead } from '@/composables/usePageHead'
  import { consultationFormUrl } from '@/config/site'

  interface ContactFormData {
    name: string
    email: string
    company: string
    budget: string
    need: string
  }

  const { t } = useI18n()

  usePageHead('contact')

  const formRef = ref<{ validate: () => Promise<{ valid: boolean }> } | null>(null)
  const snackbar = ref(false)

  const form = ref<ContactFormData>({
    name: '',
    email: '',
    company: '',
    budget: '',
    need: '',
  })

  const budgetOptions = computed(() => [
    { label: t('contact.budgetOptions.option1'), value: 'option1' },
    { label: t('contact.budgetOptions.option2'), value: 'option2' },
    { label: t('contact.budgetOptions.option3'), value: 'option3' },
    { label: t('contact.budgetOptions.option4'), value: 'option4' },
  ])

  const needOptions = computed(() => [
    { label: t('contact.needOptions.rag'), value: 'rag' },
    { label: t('contact.needOptions.security'), value: 'security' },
    { label: t('contact.needOptions.training'), value: 'training' },
    { label: t('contact.needOptions.fullstack'), value: 'fullstack' },
  ])

  const requiredRules = [
    (value: string) => Boolean(value) || t('contact.validation.required'),
  ]

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const blockedDomains = new Set(['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'])

  const emailRules = [
    (value: string) => Boolean(value) || t('contact.validation.required'),
    (value: string) => emailRegex.test(value) || t('contact.validation.email'),
    (value: string) => {
      const domain = value.split('@')[1]?.toLowerCase() || ''
      return !blockedDomains.has(domain) || t('contact.validation.companyEmail')
    },
  ]

  async function onSubmit () {
    const result = await formRef.value?.validate()

    if (!result?.valid) {
      return
    }

    snackbar.value = true
    window.open(consultationFormUrl, '_blank', 'noopener,noreferrer')
  }
</script>
