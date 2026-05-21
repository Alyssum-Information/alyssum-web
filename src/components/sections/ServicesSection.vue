<template>
  <section id="services" class="services-section gradient-mesh" data-anchor>
    <v-container>
      <div ref="el" :class="['services-header reveal', { 'is-visible': visible }]">
        <span class="section-eyebrow">
          <v-icon icon="mdi-hexagon-multiple-outline" size="14" />
          {{ t('home.sections.servicesEyebrow') }}
        </span>

        <h2 class="text-h4 text-md-h3 font-weight-bold mt-4 mb-3">
          {{ t('home.sections.servicesTitle') }}
        </h2>

        <p class="text-body-1 services-subtitle">
          {{ t('home.sections.servicesSubtitle') }}
        </p>
      </div>

      <div class="services-grid">
        <article
          v-for="(item, index) in serviceItems"
          :key="item.key"
          class="service-card glass-card"
          :style="{ animationDelay: `${index * 80}ms` }"
        >
          <div class="service-icon">
            <v-icon color="primary" :icon="item.icon" size="32" />
          </div>

          <div class="service-index">0{{ index + 1 }}</div>

          <h3 class="service-title">{{ t(`services.items.${item.key}.title`) }}</h3>
          <p class="service-subtitle">{{ t(`services.items.${item.key}.subtitle`) }}</p>

          <p class="service-value">{{ t(`services.items.${item.key}.value`) }}</p>

          <div class="service-audience">
            <v-icon class="mr-1" color="accent" icon="mdi-account-group-outline" size="16" />
            <span>{{ t(`services.items.${item.key}.audience`) }}</span>
          </div>

          <div class="service-tags">
            <span
              v-for="tag in serviceTags(item.key)"
              :key="tag"
              class="tech-chip"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  import { useReveal } from '@/composables/useReveal'
  import { serviceItems } from '@/data/site'

  const { t, tm } = useI18n()
  const { el, visible } = useReveal()

  function serviceTags (key: string): string[] {
    const raw = tm(`services.items.${key}.tags`)
    return Array.isArray(raw) ? (raw as string[]) : []
  }
</script>

<style scoped>
.services-section {
  padding: 120px 0;
  background: linear-gradient(180deg, #F7F4FB 0%, #FFFFFF 100%);
  position: relative;
}

.services-header {
  max-width: 760px;
  margin-bottom: 56px;
}

.services-subtitle {
  color: rgb(var(--v-theme-textSecondary));
  line-height: 1.75;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 1180px) {
  .services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 640px) {
  .services-grid { grid-template-columns: 1fr; }
}

.service-card {
  position: relative;
  padding: 32px 28px 28px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: rgba(255, 255, 255, 0.85);
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #7C4E99, #CC9CD8);
  opacity: 0;
  transition: opacity 320ms;
}

.service-card:hover::before {
  opacity: 1;
}

.service-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(124, 78, 153, 0.12), rgba(204, 156, 216, 0.22));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.service-index {
  position: absolute;
  top: 20px;
  right: 24px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: rgba(124, 78, 153, 0.32);
}

.service-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-textPrimary));
}

.service-subtitle {
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
}

.service-value {
  color: rgb(var(--v-theme-textSecondary));
  line-height: 1.7;
  font-size: 0.95rem;
  flex-grow: 1;
}

.service-audience {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.82rem;
  color: rgb(var(--v-theme-textSecondary));
  padding-top: 12px;
  border-top: 1px dashed rgba(124, 78, 153, 0.14);
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

@media (max-width: 640px) {
  .services-section { padding: 80px 0; }
  .service-card { padding: 26px 22px; }
}
</style>
