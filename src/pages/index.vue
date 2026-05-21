<template>
  <div class="home-page">
    <HeroSection />
    <ServicesSection />
    <CasesSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script lang="ts" setup>
  import AboutSection from '@/components/sections/AboutSection.vue'
  import CasesSection from '@/components/sections/CasesSection.vue'
  import ContactSection from '@/components/sections/ContactSection.vue'
  import HeroSection from '@/components/sections/HeroSection.vue'
  import ServicesSection from '@/components/sections/ServicesSection.vue'
  import { usePageHead } from '@/composables/usePageHead'

  usePageHead('home')
</script>

<style scoped>
.home-page {
  background: rgb(var(--v-theme-background));
}
</style>
