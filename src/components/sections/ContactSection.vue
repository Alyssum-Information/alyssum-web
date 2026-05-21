<template>
  <section id="contact" class="contact-section dark-section" data-anchor>
    <div class="grid-overlay" />

    <v-container class="contact-container">
      <div ref="el" :class="['contact-shell glass-card reveal', { 'is-visible': visible }]">
        <div class="contact-eyebrow section-eyebrow">
          <v-icon icon="mdi-email-outline" size="14" />
          {{ t('home.sections.contactEyebrow') }}
        </div>

        <h2 class="contact-title text-h4 text-md-h3 font-weight-bold">
          {{ t('home.sections.contactTitle') }}
        </h2>

        <p class="contact-subtitle">{{ t('contact.subtitle') }}</p>
        <p class="contact-description">{{ t('contact.description') }}</p>

        <v-btn
          class="mt-4"
          color="primary"
          :href="consultationFormUrl"
          rel="noopener noreferrer"
          size="x-large"
          target="_blank"
        >
          <template #prepend>
            <v-icon icon="mdi-google" />
          </template>
          {{ t('contact.openForm') }}
        </v-btn>

        <div class="company-info mt-10">
          <h3 class="company-info-title">{{ t('contact.companyInfoTitle') }}</h3>

          <div class="company-info-grid">
            <div class="company-info-row">
              <v-icon color="accent" icon="mdi-domain" size="18" />
              <div>
                <span class="company-info-key">{{ t('site.footer.companyInfo') }}</span>
                <span class="company-info-value">
                  {{ t('contact.company.name') }}
                  <span class="company-info-secondary">{{ t('contact.company.nameEn') }}</span>
                </span>
              </div>
            </div>

            <div class="company-info-row">
              <v-icon color="accent" icon="mdi-identifier" size="18" />
              <div>
                <span class="company-info-key">{{ t('site.footer.taxId') }}</span>
                <span class="company-info-value">{{ t('contact.company.taxId') }}</span>
              </div>
            </div>

            <div class="company-info-row">
              <v-icon color="accent" icon="mdi-map-marker-outline" size="18" />
              <div>
                <span class="company-info-key">{{ t('site.footer.address') }}</span>
                <span class="company-info-value">{{ t('contact.company.address') }}</span>
              </div>
            </div>

            <div class="company-info-row">
              <v-icon color="accent" icon="mdi-account-circle-outline" size="18" />
              <div>
                <span class="company-info-key">{{ t('site.footer.contactPerson') }}</span>
                <span class="company-info-value">
                  {{ t('contact.company.contactName') }}
                  <span class="company-info-secondary">{{ t('contact.company.contactTitle') }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import { useReveal } from '@/composables/useReveal'
  import { consultationFormUrl } from '@/config/site'

  const { t } = useI18n()
  const { el, visible } = useReveal()
</script>

<style scoped>
.contact-section {
  padding: 120px 0;
  position: relative;
}

.contact-container {
  position: relative;
  z-index: 1;
}

.contact-shell {
  max-width: 900px;
  margin: 0 auto;
  padding: 48px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.06) !important;
  border: 1px solid rgba(204, 156, 216, 0.22);
}

.contact-eyebrow {
  margin-bottom: 16px;
}

.contact-title {
  color: rgb(var(--v-theme-textOnDark));
  margin-bottom: 12px;
}

.contact-subtitle {
  font-size: 1.05rem;
  font-weight: 600;
  color: #CC9CD8;
  margin-bottom: 12px;
}

.contact-description {
  color: rgba(246, 241, 251, 0.78);
  line-height: 1.75;
  max-width: 640px;
}

.company-info {
  padding-top: 32px;
  border-top: 1px dashed rgba(204, 156, 216, 0.28);
}

.company-info-title {
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #CC9CD8;
  margin-bottom: 18px;
  font-weight: 700;
}

.company-info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px 28px;
}

.company-info-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.company-info-row > div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.company-info-key {
  font-size: 0.72rem;
  color: rgba(204, 156, 216, 0.85);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
}

.company-info-value {
  color: rgb(var(--v-theme-textOnDark));
  font-weight: 500;
  line-height: 1.5;
}

.company-info-secondary {
  display: block;
  font-size: 0.78rem;
  color: rgba(204, 156, 216, 0.78);
  font-weight: 400;
}

@media (max-width: 720px) {
  .contact-section { padding: 80px 0; }
  .contact-shell { padding: 32px 24px; }
  .company-info-grid { grid-template-columns: 1fr; }
}
</style>
