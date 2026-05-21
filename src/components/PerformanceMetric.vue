<template>
  <div :class="['perf-metric', { 'perf-metric--good': isGood }]">
    <div class="perf-metric-head">
      <span class="perf-metric-label">{{ label }}</span>
      <v-icon
        :color="isGood ? '#A3F0B5' : '#FFC58A'"
        :icon="isGood ? 'mdi-check-circle' : 'mdi-alert-circle-outline'"
        size="18"
      />
    </div>

    <div class="perf-metric-value">
      <span class="perf-metric-current">{{ formatted }}</span>
      <span v-if="suffix" class="perf-metric-suffix">{{ suffix }}</span>
    </div>

    <div class="perf-bar">
      <div class="perf-bar-track" />
      <div
        :class="['perf-bar-fill', { 'perf-bar-fill--good': isGood }]"
        :style="{ width: `${barWidth}%` }"
      />
    </div>

    <div class="perf-metric-meta">
      <span class="perf-metric-tag perf-metric-tag--neutral">
        {{ t('cases.demo.before') }} · {{ formatValue(before) }}{{ formatSuffix }}
      </span>
      <span class="perf-metric-tag perf-metric-tag--good">
        {{ t('cases.demo.after') }} · {{ formatValue(after) }}{{ formatSuffix }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, onBeforeUnmount, ref, watch } from 'vue'
  import { useI18n } from 'vue-i18n'

  const props = withDefaults(defineProps<{
    label: string
    before: number
    after: number
    max: number
    optimized: boolean
    lowerIsBetter?: boolean
    suffix?: string
    formatSuffix?: string
    precision?: number
  }>(), {
    lowerIsBetter: false,
    suffix: '',
    formatSuffix: '',
    precision: 1,
  })

  const { t } = useI18n()

  const current = ref(props.optimized ? props.after : props.before)
  let raf = 0

  function animateTo (target: number) {
    cancelAnimationFrame(raf)
    const start = current.value
    const duration = 700
    const startTime = performance.now()
    function tick (now: number) {
      const elapsed = now - startTime
      const tNorm = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - tNorm, 3)
      current.value = start + (target - start) * eased
      if (tNorm < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
  }

  watch(() => props.optimized, value => {
    animateTo(value ? props.after : props.before)
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
  })

  function formatValue (value: number) {
    if (props.precision === 0) return Math.round(value).toString()
    return value.toFixed(props.precision)
  }

  const formatted = computed(() => `${formatValue(current.value)}${props.formatSuffix}`)

  const isGood = computed(() => {
    const midpoint = (props.before + props.after) / 2
    const slack = (props.after - props.before) * 0.1
    if (props.lowerIsBetter) return current.value <= midpoint + slack
    return current.value >= midpoint + slack
  })

  const barWidth = computed(() => {
    const pct = (current.value / props.max) * 100
    return Math.max(4, Math.min(100, pct))
  })
</script>

<style scoped>
.perf-metric {
  padding: 18px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(204, 156, 216, 0.2);
  transition: border-color 320ms, background 320ms;
  color: rgb(var(--v-theme-textOnDark));
}

.perf-metric--good {
  border-color: rgba(163, 240, 181, 0.4);
  background: rgba(163, 240, 181, 0.05);
}

.perf-metric-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.perf-metric-label {
  font-size: 0.78rem;
  color: rgba(246, 241, 251, 0.78);
  font-weight: 600;
  letter-spacing: 0.02em;
}

.perf-metric-value {
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-weight: 700;
  margin-bottom: 12px;
}

.perf-metric-current {
  font-size: 1.95rem;
  color: #FFFFFF;
  font-feature-settings: 'tnum' 1;
  font-variant-numeric: tabular-nums;
}

.perf-metric-suffix {
  font-size: 0.85rem;
  color: rgba(204, 156, 216, 0.85);
  font-weight: 500;
}

.perf-bar {
  position: relative;
  height: 8px;
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 12px;
}

.perf-bar-track {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.08);
}

.perf-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, #FFB070, #FF6F61);
  transition: width 700ms cubic-bezier(0.22, 1, 0.36, 1), background 500ms;
}

.perf-bar-fill--good {
  background: linear-gradient(90deg, #B27CD9, #7AE6A5);
}

.perf-metric-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.perf-metric-tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.22rem 0.6rem;
  border-radius: 999px;
  letter-spacing: 0.02em;
}

.perf-metric-tag--neutral {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(246, 241, 251, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.perf-metric-tag--good {
  background: rgba(204, 156, 216, 0.18);
  color: #E9DAFF;
  border: 1px solid rgba(204, 156, 216, 0.32);
}
</style>
