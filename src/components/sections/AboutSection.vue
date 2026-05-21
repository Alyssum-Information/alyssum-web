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

      <v-row align="center" class="ga-8">
        <v-col cols="12" md="5">
          <div class="philosophy-art">
            <AlyssumFlowerArt :alt="t('about.philosophyImageAlt')" />
          </div>
        </v-col>

        <v-col cols="12" md="7">
          <div class="philosophy-card glass-card">
            <v-icon class="about-card-icon" color="primary" icon="mdi-flower-tulip" size="32" />
            <h3 class="about-card-title">{{ t('about.philosophyTitle') }}</h3>
            <p class="about-card-text">{{ t('about.philosophyDescription') }}</p>
          </div>
        </v-col>
      </v-row>

      <div class="pillars-block">
        <h3 class="pillars-title">{{ t('about.pillarsTitle') }}</h3>

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
  import AlyssumFlowerArt from '@/components/AlyssumFlowerArt.vue'
  import { useReveal } from '@/composables/useReveal'
  import { aboutPillars } from '@/data/site'

  const { t } = useI18n()
  const { el, visible } = useReveal()
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

.philosophy-art {
  max-width: 360px;
  margin: 0 auto;
}

.philosophy-card {
  padding: 36px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.92);
}

.about-card-icon {
  margin-bottom: 16px;
}

.about-card-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: rgb(var(--v-theme-textPrimary));
  margin-bottom: 14px;
}

.about-card-text {
  color: rgb(var(--v-theme-textSecondary));
  line-height: 1.85;
  margin: 0;
}

.pillars-block {
  margin-top: 56px;
  padding: 36px 32px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(124, 78, 153, 0.05), rgba(204, 156, 216, 0.08));
  border: 1px solid rgba(124, 78, 153, 0.14);
}

.pillars-title {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: rgb(var(--v-theme-primaryDeep));
  margin-bottom: 24px;
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
  .philosophy-art { max-width: 280px; }
}

@media (max-width: 720px) {
  .pillars-grid { grid-template-columns: 1fr; }
  .about-section { padding: 80px 0; }
  .philosophy-card { padding: 28px; }
}
</style>
