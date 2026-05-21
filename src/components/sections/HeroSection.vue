<template>
  <section id="top" class="hero-section dark-section" data-anchor>
    <div class="grid-overlay" />

    <div class="orb orb-a" />
    <div class="orb orb-b" />
    <div class="orb orb-c" />

    <v-container class="hero-container">
      <v-row align="center" class="ga-10">
        <v-col cols="12" md="7">
          <div class="section-eyebrow mb-5">
            <v-icon icon="mdi-sparkles" size="14" />
            {{ t('home.hero.eyebrow') }}
          </div>

          <h1 class="hero-title">
            <span class="hero-title-line">{{ t('home.hero.titleLine1') }}</span>
            <span class="hero-title-gradient">{{ t('home.hero.titleLine2') }}</span>
          </h1>

          <p class="hero-subtitle">
            {{ t('home.hero.subtitle') }}
          </p>

          <div class="hero-actions">
            <v-btn
              color="primary"
              :href="consultationFormUrl"
              rel="noopener noreferrer"
              size="x-large"
              target="_blank"
            >
              {{ t('site.cta.bookDiagnosis') }}
              <template #append>
                <v-icon icon="mdi-arrow-right" />
              </template>
            </v-btn>

            <v-btn
              class="hero-secondary-btn"
              size="x-large"
              variant="outlined"
              @click="scrollTo('cases')"
            >
              {{ t('site.cta.exploreCases') }}
            </v-btn>
          </div>

          <div class="trust-strip">
            <span
              v-for="badgeKey in trustBadgeKeys"
              :key="badgeKey"
              class="trust-pill"
            >
              <v-icon class="trust-pill-dot" icon="mdi-circle-small" />
              {{ t(`site.trustBadges.${badgeKey}`) }}
            </span>
          </div>
        </v-col>

        <v-col cols="12" md="5">
          <div class="hero-visual">
            <div class="hero-card hero-card--main">
              <div class="hero-card-header">
                <div class="hero-card-dots">
                  <span /><span /><span />
                </div>
                <span class="hero-card-title">alyssum.ts</span>
              </div>

              <pre class="hero-card-code"><code><span class="t-keyword">interface</span> <span class="t-type">Alyssum</span> {{ '{' }}
  <span class="t-key">elegance</span>: <span class="t-string">'engineering as craft'</span>
  <span class="t-key">stack</span>: <span class="t-type">FullStack</span> &amp; <span class="t-type">AI</span> &amp; <span class="t-type">Security</span>
  <span class="t-key">delivery</span>: <span class="t-string">'measurable'</span>
{{ '}' }}</code></pre>
            </div>

            <div class="hero-card hero-card--metric">
              <div class="hero-card-metric-head">
                <v-icon color="accent" icon="mdi-trending-up" size="18" />
                <span class="hero-card-metric-label">Lighthouse · this page</span>
              </div>
              <div class="hero-card-metric-value">
                <AnimatedNumber value="98" />
                <span class="hero-card-metric-unit">/ 100</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <button class="scroll-hint" type="button" @click="scrollTo('services')">
        <span>{{ t('home.hero.scrollHint') }}</span>
        <v-icon icon="mdi-chevron-down" />
      </button>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import AnimatedNumber from '@/components/AnimatedNumber.vue'
  import { consultationFormUrl } from '@/config/site'
  import { trustBadgeKeys } from '@/data/site'

  const { t } = useI18n()

  function scrollTo (anchor: string) {
    const target = document.getElementById(anchor)
    if (!target) return
    const offset = 72
    const top = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
</script>

<style scoped>
.hero-section {
  padding: 140px 0 96px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}

.hero-container {
  position: relative;
  z-index: 1;
}

.orb {
  width: 460px;
  height: 460px;
  opacity: 0.45;
}

.orb-a {
  top: -80px;
  left: -120px;
  background: radial-gradient(circle, #B27CD9, transparent 70%);
}

.orb-b {
  bottom: -120px;
  right: -80px;
  background: radial-gradient(circle, #7C4E99, transparent 70%);
  opacity: 0.55;
}

.orb-c {
  top: 40%;
  left: 50%;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, #CC9CD8, transparent 70%);
  opacity: 0.22;
}

.hero-title {
  line-height: 1.18;
  color: rgb(var(--v-theme-textOnDark));
  font-size: clamp(2.25rem, 4.6vw, 3.6rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  margin-bottom: 28px;
}

.hero-title-line {
  display: block;
}

.hero-title-gradient {
  display: block;
  background: linear-gradient(120deg, #CC9CD8 0%, #B27CD9 40%, #7C4E99 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  color: rgb(var(--v-theme-textOnDarkMuted));
  font-size: 1.05rem;
  max-width: 620px;
  line-height: 1.85;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 36px;
}

.hero-secondary-btn {
  color: rgb(var(--v-theme-textOnDark)) !important;
  border-color: rgba(255, 255, 255, 0.25) !important;
}

.hero-secondary-btn:hover {
  border-color: rgba(204, 156, 216, 0.6) !important;
  background: rgba(204, 156, 216, 0.08) !important;
}

.trust-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.trust-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(204, 156, 216, 0.22);
  color: rgb(var(--v-theme-textOnDarkMuted));
  font-size: 0.78rem;
  letter-spacing: 0.01em;
}

.trust-pill-dot {
  color: #CC9CD8 !important;
  margin-right: 2px;
}

.hero-visual {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 460px;
  margin-left: auto;
}

.hero-card {
  background: rgba(20, 16, 32, 0.78);
  border: 1px solid rgba(204, 156, 216, 0.22);
  border-radius: 16px;
  backdrop-filter: blur(16px);
  box-shadow: 0 30px 80px -40px rgba(124, 78, 153, 0.7);
}

.hero-card--main {
  padding: 18px 22px 24px;
}

.hero-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 14px;
}

.hero-card-dots {
  display: inline-flex;
  gap: 6px;
}

.hero-card-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
}

.hero-card-dots span:first-child { background: #ff5f57; }
.hero-card-dots span:nth-child(2) { background: #febc2e; }
.hero-card-dots span:nth-child(3) { background: #28c840; }

.hero-card-title {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.05em;
}

.hero-card-code {
  margin: 0;
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.86rem;
  line-height: 1.7;
  color: #E9DAFF;
  white-space: pre-wrap;
  word-break: break-word;
}

.t-keyword { color: #f0a3ff; }
.t-type { color: #b3d9ff; }
.t-key { color: #ffe6a3; }
.t-string { color: #c5f5c5; }

.hero-card--metric {
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hero-card-metric-head {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-card-metric-label {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 0.02em;
}

.hero-card-metric-value {
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
}

.hero-card-metric-unit {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
}

.scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 56px auto 0;
  gap: 4px;
  background: transparent;
  border: 0;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 240ms;
}

.scroll-hint:hover {
  color: #CC9CD8;
}

.scroll-hint .v-icon {
  animation: bounce 1.8s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

@media (max-width: 960px) {
  .hero-section {
    padding: 120px 0 72px;
    min-height: auto;
  }

  .hero-visual {
    margin: 0 auto;
  }
}
</style>
