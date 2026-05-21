<template>
  <v-footer class="site-footer dark-section" color="transparent">
    <v-container>
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="d-flex align-center ga-3 mb-3">
            <v-avatar color="surface" rounded="circle" size="40">
              <v-img alt="Alyssum logo" src="@/assets/logo.png" />
            </v-avatar>
            <div>
              <div class="footer-brand-name">{{ t('site.shortName') }}</div>
              <div class="footer-brand-sub">{{ t('site.name') }}</div>
            </div>
          </div>
          <p class="footer-description">{{ t('site.footer.description') }}</p>

          <div class="footer-socials mt-4">
            <a
              aria-label="GitHub"
              class="footer-social"
              :href="githubUrl"
              rel="noopener noreferrer"
              target="_blank"
            >
              <v-icon icon="mdi-github" />
            </a>
          </div>
        </div>

        <div class="footer-section">
          <div class="footer-section-title">{{ t('site.footer.navigation') }}</div>
          <ul class="footer-list">
            <li v-for="item in navigationItems" :key="item.anchor">
              <a :href="`#${item.anchor === 'top' ? '' : item.anchor}`" @click.prevent="scrollTo(item.anchor)">
                {{ t(`site.navigation.${item.key}`) }}
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <div class="footer-section-title">{{ t('site.footer.companyInfo') }}</div>
          <ul class="footer-list footer-list--info">
            <li>
              <span class="footer-list-key">{{ t('site.footer.taxId') }}</span>
              <span>{{ t('contact.company.taxId') }}</span>
            </li>
            <li>
              <span class="footer-list-key">{{ t('site.footer.address') }}</span>
              <span>{{ t('contact.company.address') }}</span>
            </li>
            <li>
              <span class="footer-list-key">{{ t('site.footer.contactPerson') }}</span>
              <span>{{ t('contact.company.contactName') }}<br>{{ t('contact.company.contactTitle') }}</span>
            </li>
          </ul>
        </div>
      </div>

      <v-divider class="footer-divider" />

      <div class="footer-copyright">
        <span>{{ t('site.footer.copyright', { year: currentYear }) }}</span>
        <v-btn
          color="primary"
          :href="consultationFormUrl"
          rel="noopener noreferrer"
          size="small"
          target="_blank"
          variant="tonal"
        >
          {{ t('site.cta.consultation') }}
        </v-btn>
      </div>
    </v-container>
  </v-footer>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import { consultationFormUrl, githubUrl } from '@/config/site'
  import { navigationItems } from '@/data/site'

  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

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
</script>

<style scoped>
.site-footer {
  padding: 56px 0 28px;
  color: rgb(var(--v-theme-textOnDark));
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr;
  gap: 48px;
  margin-bottom: 32px;
}

.footer-brand-name {
  font-weight: 700;
  font-size: 1.05rem;
  background: linear-gradient(120deg, #FFFFFF, #CC9CD8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.footer-brand-sub {
  font-size: 0.78rem;
  color: rgba(204, 156, 216, 0.85);
}

.footer-description {
  color: rgba(246, 241, 251, 0.7);
  line-height: 1.7;
  max-width: 420px;
}

.footer-socials {
  display: flex;
  gap: 8px;
}

.footer-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(204, 156, 216, 0.25);
  color: rgb(var(--v-theme-textOnDark));
  text-decoration: none;
  transition: background 240ms, transform 240ms;
}

.footer-social:hover {
  background: rgba(204, 156, 216, 0.18);
  transform: translateY(-2px);
}

.footer-section-title {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #CC9CD8;
  margin-bottom: 14px;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-list a {
  color: rgba(246, 241, 251, 0.78);
  text-decoration: none;
  font-size: 0.92rem;
  transition: color 200ms;
}

.footer-list a:hover {
  color: #fff;
}

.footer-list--info li {
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: rgba(246, 241, 251, 0.82);
  font-size: 0.88rem;
}

.footer-list-key {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(204, 156, 216, 0.75);
  font-weight: 600;
}

.footer-divider {
  border-color: rgba(204, 156, 216, 0.18) !important;
  margin-bottom: 20px;
}

.footer-copyright {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  color: rgba(246, 241, 251, 0.62);
  font-size: 0.82rem;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
