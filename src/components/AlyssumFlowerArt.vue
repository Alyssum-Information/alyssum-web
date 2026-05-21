<template>
  <svg
    :aria-label="alt"
    class="alyssum-art"
    role="img"
    viewBox="0 0 360 360"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="alyssum-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#F4E6FB" />
        <stop offset="55%" stop-color="#E2C7F0" />
        <stop offset="100%" stop-color="#A877C4" />
      </radialGradient>

      <radialGradient id="alyssum-petal" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="60%" stop-color="#F5E6FF" />
        <stop offset="100%" stop-color="#C9A6E0" />
      </radialGradient>

      <radialGradient id="alyssum-petal-deep" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#F0DCFA" />
        <stop offset="60%" stop-color="#D9B5EE" />
        <stop offset="100%" stop-color="#8E5BB0" />
      </radialGradient>

      <linearGradient id="alyssum-stem" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#7BAE6B" />
        <stop offset="100%" stop-color="#3F6B3A" />
      </linearGradient>

      <symbol id="alyssum-flower" viewBox="-20 -20 40 40">
        <g>
          <ellipse cx="0" cy="-9" fill="url(#alyssum-petal)" rx="6" ry="8" />
          <ellipse cx="9" cy="0" fill="url(#alyssum-petal)" rx="8" ry="6" />
          <ellipse cx="0" cy="9" fill="url(#alyssum-petal)" rx="6" ry="8" />
          <ellipse cx="-9" cy="0" fill="url(#alyssum-petal)" rx="8" ry="6" />
          <circle cx="0" cy="0" fill="#F2C947" r="2.4" />
          <circle cx="0" cy="0" fill="#FBE38B" opacity="0.55" r="3.6" />
        </g>
      </symbol>

      <symbol id="alyssum-flower-deep" viewBox="-20 -20 40 40">
        <g>
          <ellipse cx="0" cy="-8" fill="url(#alyssum-petal-deep)" rx="5" ry="7" />
          <ellipse cx="8" cy="0" fill="url(#alyssum-petal-deep)" rx="7" ry="5" />
          <ellipse cx="0" cy="8" fill="url(#alyssum-petal-deep)" rx="5" ry="7" />
          <ellipse cx="-8" cy="0" fill="url(#alyssum-petal-deep)" rx="7" ry="5" />
          <circle cx="0" cy="0" fill="#E9B23A" r="2" />
        </g>
      </symbol>
    </defs>

    <circle cx="180" cy="180" fill="url(#alyssum-bg)" r="160" />

    <!-- background leaves -->
    <g opacity="0.55">
      <path
        d="M120 240 C95 220, 80 195, 90 165 C 110 175, 125 200, 130 235 Z"
        fill="url(#alyssum-stem)"
      />
      <path
        d="M250 250 C 275 230, 285 200, 270 170 C 250 185, 240 215, 240 245 Z"
        fill="url(#alyssum-stem)"
      />
      <path
        d="M180 290 C 165 270, 160 240, 178 215 C 196 240, 198 270, 180 290 Z"
        fill="url(#alyssum-stem)"
      />
    </g>

    <!-- stems -->
    <g opacity="0.7" stroke="url(#alyssum-stem)" stroke-linecap="round" stroke-width="3" fill="none">
      <path d="M180 270 C 170 220, 165 180, 160 140" />
      <path d="M180 270 C 195 230, 215 195, 230 150" />
      <path d="M180 270 C 175 230, 160 200, 130 170" />
      <path d="M180 270 C 190 230, 205 215, 230 200" />
      <path d="M180 270 C 168 240, 150 220, 120 215" />
    </g>

    <!-- back layer of flowers (smaller, slightly deeper colour) -->
    <g>
      <use href="#alyssum-flower-deep" height="32" width="32" x="120" y="120" />
      <use href="#alyssum-flower-deep" height="30" width="30" x="208" y="118" />
      <use href="#alyssum-flower-deep" height="28" width="28" x="174" y="100" />
      <use href="#alyssum-flower-deep" height="26" width="26" x="240" y="148" />
      <use href="#alyssum-flower-deep" height="28" width="28" x="100" y="160" />
      <use href="#alyssum-flower-deep" height="26" width="26" x="200" y="170" />
      <use href="#alyssum-flower-deep" height="26" width="26" x="140" y="180" />
    </g>

    <!-- front layer (brighter, larger) -->
    <g>
      <use href="#alyssum-flower" height="44" width="44" x="146" y="118" />
      <use href="#alyssum-flower" height="40" width="40" x="194" y="132" />
      <use href="#alyssum-flower" height="38" width="38" x="126" y="148" />
      <use href="#alyssum-flower" height="42" width="42" x="216" y="170" />
      <use href="#alyssum-flower" height="40" width="40" x="156" y="172" />
      <use href="#alyssum-flower" height="38" width="38" x="196" y="200" />
      <use href="#alyssum-flower" height="36" width="36" x="126" y="200" />
      <use href="#alyssum-flower" height="34" width="34" x="170" y="208" />
      <use href="#alyssum-flower" height="32" width="32" x="232" y="208" />
    </g>

    <!-- glow highlights -->
    <circle cx="160" cy="140" fill="#ffffff" opacity="0.18" r="20" />
    <circle cx="220" cy="160" fill="#ffffff" opacity="0.12" r="14" />

    <title>{{ alt }}</title>
  </svg>
</template>

<script lang="ts" setup>
  withDefaults(defineProps<{
    alt?: string
  }>(), {
    alt: 'Cluster of alyssum flowers',
  })
</script>

<style scoped>
.alyssum-art {
  display: block;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 18px 40px rgba(124, 78, 153, 0.22));
}
</style>
