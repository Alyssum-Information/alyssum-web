<template>
  <section id="about" class="about-section gradient-mesh" data-anchor>
    <v-container>
      <div ref="el" :class="['about-header reveal', { 'is-visible': visible }]">
        <span class="section-eyebrow">
          <v-icon icon="mdi-flower-outline" size="14" />
          {{ t('home.sections.aboutEyebrow') }}
        </span>

        <h2 class="text-h4 text-md-h3 font-weight-bold mt-4 mb-3">
          {{ t('home.sections.aboutTitle') }}
        </h2>
      </div>

      <article class="philosophy-card">
        <figure class="philosophy-photo">
          <img
            :alt="t('about.philosophyImageAlt')"
            loading="lazy"
            :src="philosophyPhoto.src"
            :srcset="philosophyPhoto.srcset"
            sizes="(max-width: 960px) 100vw, 480px"
          >
          <span class="philosophy-photo-meta">
            <v-icon icon="mdi-camera-outline" size="14" />
            {{ t('about.philosophyImageCredit') }}
          </span>
          <div class="philosophy-photo-glow" />
        </figure>

        <div class="philosophy-content">
          <span class="section-eyebrow philosophy-eyebrow">
            <v-icon icon="mdi-flower-tulip" size="14" />
            ALYSSUM · LOBULARIA MARITIMA
          </span>

          <h3 class="philosophy-title">{{ t('about.philosophyTitle') }}</h3>

          <p class="philosophy-text">{{ t('about.philosophyDescription') }}</p>

          <div class="philosophy-quote">
            <v-icon class="philosophy-quote-icon" icon="mdi-format-quote-open" size="22" />
            <span>{{ t('site.tagline') }}</span>
          </div>
        </div>
      </article>

      <div class="pillars-block">
        <div class="pillars-header">
          <h3 class="pillars-title">{{ t('about.pillarsTitle') }}</h3>
          <div class="pillars-accent" aria-hidden="true">
            <img
              alt=""
              loading="lazy"
              :src="pillarsAccent.src"
            >
          </div>
        </div>

        <div class="pillars-grid">
          <div
            v-for="pillar in aboutPillars"
            :key="pillar.key"
            class="pillar-item"
          >
            <div class="pillar-icon">
              <v-icon color="primary" :icon="pillar.icon" size="22" />
            </div>
            <div>
              <h4 class="pillar-item-title">{{ t(`about.pillars.${pillar.key}.title`) }}</h4>
              <p class="pillar-item-text">{{ t(`about.pillars.${pillar.key}.description`) }}</p>
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
  import { aboutPillars } from '@/data/site'

  const { t } = useI18n()
  const { el, visible } = useReveal()

  // Unsplash · Aleksandr Kadykov — "white cluster flowers in close up photography"
  // Unsplash License: free for commercial & personal use, no attribution required (credited below for courtesy)
  const philosophyPhoto = {
    src: 'https://images.unsplash.com/photo-1618772573306-704dc9fb96ac?w=960&q=80&auto=format&fit=crop',
    srcset: [
      'https://images.unsplash.com/photo-1618772573306-704dc9fb96ac?w=480&q=80&auto=format&fit=crop 480w',
      'https://images.unsplash.com/photo-1618772573306-704dc9fb96ac?w=720&q=80&auto=format&fit=crop 720w',
      'https://images.unsplash.com/photo-1618772573306-704dc9fb96ac?w=960&q=80&auto=format&fit=crop 960w',
    ].join(', '),
  }

  // Unsplash · Annie Gavin — "a bunch of white flowers with green leaves"
  const pillarsAccent = {
    src: 'https://images.unsplash.com/photo-1632261462778-2389b26c1ad9?w=320&q=70&auto=format&fit=crop',
  }
</script>

<style scoped>
.about-section {
  padding: 120px 0;
  background: linear-gradient(180deg, #FFFFFF 0%, #F7F4FB 100%);
  position: relative;
}

.about-header {
  max-width: 720px;
  margin-bottom: 48px;
}

/* ============ Philosophy magazine card ============ */
.philosophy-card {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  gap: 0;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(124, 78, 153, 0.12);
  box-shadow: 0 30px 80px -50px rgba(90, 52, 114, 0.45);
}

.philosophy-photo {
  position: relative;
  margin: 0;
  min-height: 360px;
  overflow: hidden;
}

.philosophy-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.02);
  transition: transform 8s ease-out;
}

.philosophy-card:hover .philosophy-photo img {
  transform: scale(1.08);
}

.philosophy-photo-glow {
  position: absolute;
  inset: auto -10% -25% auto;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(178, 124, 217, 0.45), transparent 70%);
  pointer-events: none;
  mix-blend-mode: screen;
}

.philosophy-photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, transparent 55%, rgba(20, 16, 32, 0.4) 100%),
    linear-gradient(120deg, transparent 60%, rgba(124, 78, 153, 0.18) 100%);
  pointer-events: none;
}

.philosophy-photo-meta {
  position: absolute;
  bottom: 14px;
  left: 16px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  background: rgba(20, 16, 32, 0.55);
  backdrop-filter: blur(8px);
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
}

.philosophy-content {
  padding: 44px 44px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.philosophy-eyebrow {
  align-self: flex-start;
}

.philosophy-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: rgb(var(--v-theme-textPrimary));
  margin: 0;
  line-height: 1.35;
}

.philosophy-text {
  color: rgb(var(--v-theme-textSecondary));
  line-height: 1.9;
  margin: 0;
  font-size: 1rem;
}

.philosophy-quote {
  position: relative;
  padding: 18px 22px 18px 56px;
  background: linear-gradient(135deg, rgba(124, 78, 153, 0.07), rgba(204, 156, 216, 0.12));
  border-left: 3px solid rgb(var(--v-theme-primary));
  border-radius: 0 14px 14px 0;
  color: rgb(var(--v-theme-primaryDeep));
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-top: 12px;
}

.philosophy-quote-icon {
  position: absolute;
  left: 18px;
  top: 16px;
  color: rgba(124, 78, 153, 0.6);
}

/* ============ Pillars ============ */
.pillars-block {
  margin-top: 56px;
  padding: 36px 32px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(124, 78, 153, 0.05), rgba(204, 156, 216, 0.08));
  border: 1px solid rgba(124, 78, 153, 0.14);
  position: relative;
  overflow: hidden;
}

.pillars-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.pillars-title {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: rgb(var(--v-theme-primaryDeep));
  margin: 0;
}

.pillars-accent {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(204, 156, 216, 0.4);
  box-shadow: 0 12px 26px -16px rgba(90, 52, 114, 0.6);
  flex-shrink: 0;
}

.pillars-accent img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.pillar-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.pillar-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(124, 78, 153, 0.15), rgba(204, 156, 216, 0.22));
  display: flex;
  align-items: center;
  justify-content: center;
}

.pillar-item-title {
  font-size: 1rem;
  font-weight: 700;
  color: rgb(var(--v-theme-textPrimary));
  margin: 4px 0;
}

.pillar-item-text {
  font-size: 0.88rem;
  color: rgb(var(--v-theme-textSecondary));
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 960px) {
  .philosophy-card {
    grid-template-columns: 1fr;
  }
  .philosophy-photo {
    min-height: 280px;
  }
  .philosophy-content {
    padding: 32px 28px 32px;
  }
}

@media (max-width: 720px) {
  .pillars-grid { grid-template-columns: 1fr; }
  .pillars-accent { width: 64px; height: 64px; }
  .about-section { padding: 80px 0; }
}
</style>
