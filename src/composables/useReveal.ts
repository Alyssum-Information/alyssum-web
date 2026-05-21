import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

export function useReveal (options: IntersectionObserverInit = { threshold: 0.18 }) {
  const el: Ref<HTMLElement | null> = ref(null)
  const visible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!el.value) return
    if (typeof IntersectionObserver === 'undefined') {
      visible.value = true
      return
    }
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          visible.value = true
          observer?.disconnect()
          break
        }
      }
    }, options)
    observer.observe(el.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { el, visible }
}
