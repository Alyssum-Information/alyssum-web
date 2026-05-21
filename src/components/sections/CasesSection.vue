<template>
  <section id="cases" class="cases-section dark-section" data-anchor>
    <div class="grid-overlay" />

    <v-container class="cases-container">
      <div ref="el" :class="['cases-header reveal', { 'is-visible': visible }]">
        <span class="section-eyebrow">
          <v-icon icon="mdi-chart-line" size="14" />
          {{ t('home.sections.casesEyebrow') }}
        </span>

        <h2 class="text-h4 text-md-h3 font-weight-bold mt-4 mb-3">
          {{ t('home.sections.casesTitle') }}
        </h2>

        <p class="text-body-1 cases-subtitle">
          {{ t('home.sections.casesSubtitle') }}
        </p>
      </div>

      <div class="cases-grid">
        <article
          v-for="item in caseItems"
          :key="item.key"
          class="case-card glass-card"
        >
          <div class="case-card-top">
            <div class="case-icon" :style="{ background: `linear-gradient(135deg, ${item.accent}33, ${item.accent}66)` }">
              <v-icon :color="item.accent" :icon="item.icon" size="22" />
            </div>

            <span class="case-industry">{{ t(`cases.items.${item.key}.industry`) }}</span>
          </div>

          <h3 class="case-title">{{ t(`cases.items.${item.key}.title`) }}</h3>

          <div class="case-metrics">
            <div
              v-for="metricKey in item.metricKeys"
              :key="metricKey"
              class="case-metric"
            >
              <div class="case-metric-value">
                <AnimatedNumber :value="t(`cases.items.${item.key}.metrics.${metricKey}.value`)" />
              </div>
              <div class="case-metric-label">
                {{ t(`cases.items.${item.key}.metrics.${metricKey}.label`) }}
              </div>
            </div>
          </div>

          <div class="case-detail">
            <div class="case-detail-row">
              <span class="case-detail-key">{{ t('cases.scope') }}</span>
              <span class="case-detail-value">{{ t(`cases.items.${item.key}.scope`) }}</span>
            </div>
            <div class="case-detail-row">
              <span class="case-detail-key">{{ t('cases.solution') }}</span>
              <span class="case-detail-value">{{ t(`cases.items.${item.key}.solution`) }}</span>
            </div>
            <div class="case-detail-row case-detail-row--impact">
              <span class="case-detail-key">{{ t('cases.impact') }}</span>
              <span class="case-detail-value">{{ t(`cases.items.${item.key}.impact`) }}</span>
            </div>
          </div>
        </article>
      </div>

      <div class="cases-demo mt-12">
        <PerformanceDemo />
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import AnimatedNumber from '@/components/AnimatedNumber.vue'
  import PerformanceDemo from '@/components/PerformanceDemo.vue'
  import { useReveal } from '@/composables/useReveal'
  import { caseItems } from '@/data/site'

  const { t } = useI18n()
  const { el, visible } = useReveal()
</script>

<style scoped>
.cases-section {
  padding: 120px 0;
  position: relative;
}

.cases-container {
  position: relative;
  z-index: 1;
}

.cases-header {
  max-width: 760px;
  margin-bottom: 56px;
}

.cases-subtitle {
  color: rgb(var(--v-theme-textOnDarkMuted));
  line-height: 1.75;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.case-card {
  padding: 28px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.case-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.case-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.case-industry {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(204, 156, 216, 0.85);
  font-weight: 600;
}

.case-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: rgb(var(--v-theme-textOnDark));
  line-height: 1.45;
}

.case-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 18px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(178, 124, 217, 0.12), rgba(124, 78, 153, 0.08));
  border: 1px solid rgba(204, 156, 216, 0.18);
}

.case-metric {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
}

.case-metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(120deg, #CC9CD8, #FFFFFF);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.1;
}

.case-metric-label {
  font-size: 0.72rem;
  color: rgba(204, 156, 216, 0.85);
}

.case-detail {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.case-detail-row {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 12px;
  font-size: 0.88rem;
  line-height: 1.7;
}

.case-detail-key {
  color: rgba(204, 156, 216, 0.85);
  font-weight: 600;
  letter-spacing: 0.04em;
}

.case-detail-value {
  color: rgba(246, 241, 251, 0.82);
}

.case-detail-row--impact .case-detail-value {
  color: #ffffff;
  font-weight: 500;
}

@media (max-width: 960px) {
  .cases-grid { grid-template-columns: 1fr; }
}

@media (max-width: 520px) {
  .case-metrics { grid-template-columns: repeat(3, minmax(0, 1fr)); padding: 14px 8px; }
  .case-metric-value { font-size: 1.1rem; }
}
</style>
