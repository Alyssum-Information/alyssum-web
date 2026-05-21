<template>
  <span ref="el" class="stat-number">{{ display }}</span>
</template>

<script lang="ts" setup>
  import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

  const props = withDefaults(defineProps<{
    value: string
    duration?: number
    play?: boolean
  }>(), {
    duration: 1500,
    play: true,
  })

  const el = ref<HTMLElement | null>(null)
  const parsed = computed(() => parseNumeric(props.value))
  const animatedValue = ref(0)
  const started = ref(false)
  let raf = 0

  function parseNumeric (raw: string) {
    const match = raw.match(/-?\d+(?:\.\d+)?/)
    if (!match) {
      return { number: 0, prefix: raw, suffix: '', hasNumber: false }
    }
    const num = Number.parseFloat(match[0])
    const startIndex = raw.indexOf(match[0])
    const prefix = raw.slice(0, startIndex)
    const suffix = raw.slice(startIndex + match[0].length)
    return { number: num, prefix, suffix, hasNumber: true }
  }

  const display = computed(() => {
    if (!parsed.value.hasNumber) return props.value
    const target = parsed.value.number
    const current = started.value ? animatedValue.value : 0
    const formatted = Number.isInteger(target)
      ? Math.round(current).toLocaleString()
      : current.toFixed(1)
    return `${parsed.value.prefix}${formatted}${parsed.value.suffix}`
  })

  function start () {
    if (!parsed.value.hasNumber) {
      started.value = true
      return
    }
    started.value = true
    const target = parsed.value.number
    const startTime = performance.now()
    const duration = Math.max(400, props.duration)

    function tick (now: number) {
      const elapsed = now - startTime
      const t = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      animatedValue.value = target * eased
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
  }

  onMounted(() => {
    if (!props.play) return
    if (!el.value || typeof IntersectionObserver === 'undefined') {
      start()
      return
    }
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          start()
          observer.disconnect()
          break
        }
      }
    }, { threshold: 0.4 })
    observer.observe(el.value)
  })

  watch(() => props.value, () => {
    started.value = false
    cancelAnimationFrame(raf)
    start()
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
  })
</script>
