<template>
  <v-app class="page-shell">
    <SiteHeader />

    <v-main>
      <router-view />
    </v-main>

    <SiteFooter />
  </v-app>
</template>

<script lang="ts" setup>
  import SiteFooter from '@/components/SiteFooter.vue'
  import SiteHeader from '@/components/SiteHeader.vue'
</script>
