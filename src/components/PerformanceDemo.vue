<template>
  <div class="perf-demo">
    <div class="perf-demo-header">
      <div class="perf-demo-intro">
        <span class="section-eyebrow">
          <v-icon icon="mdi-speedometer" size="14" />
          INTERACTIVE
        </span>
        <h3 class="perf-title">{{ t('cases.demo.title') }}</h3>
        <p class="perf-subtitle">{{ t('cases.demo.subtitle') }}</p>
      </div>

      <div class="perf-toggle">
        <v-switch
          v-model="optimized"
          color="accent"
          density="comfortable"
          hide-details
          inset
          :label="optimized ? t('cases.demo.toggleOff') : t('cases.demo.toggleOn')"
        />
      </div>
    </div>

    <div class="perf-metrics">
      <PerformanceMetric
        :after="afterValues.lcp"
        :before="beforeValues.lcp"
        format-suffix="s"
        :label="t('cases.demo.metric1')"
        lower-is-better
        :max="4"
        :optimized="optimized"
      />

      <PerformanceMetric
        :after="afterValues.inp"
        :before="beforeValues.inp"
        format-suffix="ms"
        :label="t('cases.demo.metric2')"
        lower-is-better
        :max="500"
        :optimized="optimized"
        :precision="0"
      />

      <PerformanceMetric
        :after="afterValues.cls"
        :before="beforeValues.cls"
        :label="t('cases.demo.metric3')"
        lower-is-better
        :max="0.5"
        :optimized="optimized"
        :precision="2"
      />

      <PerformanceMetric
        :after="afterValues.score"
        :before="beforeValues.score"
        :label="t('cases.demo.metric4')"
        :max="100"
        :optimized="optimized"
        :precision="0"
        suffix="/ 100"
      />
    </div>

    <p class="perf-tip">{{ t('cases.demo.tip') }}</p>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import PerformanceMetric from './PerformanceMetric.vue'

  const { t } = useI18n()
  const optimized = ref(true)

  const beforeValues = {
    lcp: 3.8,
    inp: 380,
    cls: 0.32,
    score: 42,
  }

  const afterValues = {
    lcp: 1.1,
    inp: 80,
    cls: 0.02,
    score: 98,
  }
</script>

<style scoped>
.perf-demo {
  padding: 36px;
  border-radius: 22px;
  background:
    linear-gradient(160deg, rgba(178, 124, 217, 0.14), rgba(124, 78, 153, 0.06)),
    rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(204, 156, 216, 0.28);
  backdrop-filter: blur(18px);
  box-shadow: 0 30px 80px -50px rgba(124, 78, 153, 0.6);
  color: rgb(var(--v-theme-textOnDark));
}

.perf-demo-header {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 28px;
}

.perf-demo-intro {
  flex: 1 1 360px;
  min-width: 0;
}

.perf-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: rgb(var(--v-theme-textOnDark));
  margin: 14px 0 6px;
}

.perf-subtitle {
  color: rgba(246, 241, 251, 0.78);
  max-width: 560px;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.75;
}

.perf-toggle {
  flex: 0 1 260px;
  min-width: 220px;
  display: flex;
  justify-content: flex-end;
}

.perf-toggle :deep(.v-label) {
  color: rgba(246, 241, 251, 0.88) !important;
  opacity: 1 !important;
  font-weight: 600;
}

.perf-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.perf-tip {
  margin: 20px 0 0;
  font-size: 0.78rem;
  color: rgba(204, 156, 216, 0.75);
  letter-spacing: 0.02em;
}

@media (max-width: 720px) {
  .perf-demo { padding: 26px; }
  .perf-metrics { grid-template-columns: 1fr; }
  .perf-toggle { justify-content: flex-start; }
}
</style>
