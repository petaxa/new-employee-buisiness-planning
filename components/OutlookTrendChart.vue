<script setup lang="ts">
defineProps<{
  variant: "oshi" | "creator" | "performance";
}>();
</script>

<template>
  <div class="trend-chart" :class="variant" :aria-label="`${variant} trend chart`">
    <svg v-if="variant === 'oshi'" viewBox="0 0 460 150" role="img">
      <rect width="460" height="150" fill="#ffffff" />
      <text x="24" y="30" class="dark-title">推し活人口</text>
      <line x1="46" y1="118" x2="420" y2="118" stroke="#F3F4F6" stroke-width="1.5" />
      <rect x="86" y="69" width="58" height="49" rx="8" fill="#FCE7F3" />
      <rect x="202" y="57" width="58" height="61" rx="8" fill="#FBCFE8" />
      <rect x="318" y="32" width="58" height="86" rx="8" fill="#E5006E" />
    </svg>

    <svg v-else-if="variant === 'creator'" viewBox="0 0 460 150" role="img">
      <rect width="460" height="150" fill="#ffffff" />
      <text x="24" y="30" class="dark-title">個人活動の音楽家数</text>
      <line x1="46" y1="118" x2="420" y2="118" stroke="#E5E7EB" stroke-width="1.5" />
      <rect x="78" y="82" width="46" height="36" rx="7" fill="#CBD5E1" />
      <rect x="158" y="73" width="46" height="45" rx="7" fill="#A7B4C8" />
      <rect x="238" y="55" width="46" height="63" rx="7" fill="#697B95" />
      <rect x="318" y="35" width="46" height="83" rx="7" fill="#0B1F3A" />
    </svg>

    <svg v-else viewBox="0 0 460 150" role="img">
      <rect width="460" height="150" fill="#102B4A" />
      <text x="24" y="30" class="light-title">公演市場</text>
      <text x="322" y="30" class="light-note">回復から拡大へ</text>
      <line x1="46" y1="118" x2="420" y2="118" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" />
      <polyline
        points="62,88 138,112 214,90 294,62 398,42"
        fill="none"
        stroke="#FFD2E4"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="138" cy="112" r="5" fill="#ffffff" opacity="0.75" />
      <circle cx="398" cy="42" r="6.5" fill="#E5006E" />
      <text x="62" y="137" class="light-axis" text-anchor="middle">2019</text>
      <text x="138" y="137" class="light-axis" text-anchor="middle">2020</text>
      <text x="398" y="137" class="light-axis" text-anchor="middle">2024</text>
    </svg>
  </div>
</template>

<style scoped>
.trend-chart {
  border-radius: 10px;
  overflow: hidden;
}

.oshi {
  background: #ffffff;
  border: 1px solid #fbcfe8;
}

.creator {
  background: #ffffff;
  border: 1px solid #e5e7eb;
}

.performance {
  background: #102b4a;
  border: 1px solid rgba(255, 255, 255, 0.14);
}

svg {
  display: block;
  width: 100%;
  height: 100%;
}

text {
  font-family: "Inter", "Noto Sans JP", sans-serif;
}

.dark-title,
.light-title {
  font-size: 14px;
  font-weight: 900;
}

.dark-title,
.small-note {
  fill: #0b1f3a;
}

.light-title {
  fill: #ffffff;
}

.accent-title,
.accent-value {
  fill: #e5006e;
  font-size: 14px;
  font-weight: 900;
}

.muted-value {
  fill: #9ca3af;
  font-size: 13px;
  font-weight: 700;
}

.accent-value {
  font-size: 13px;
}

.axis {
  fill: #6b7280;
  font-size: 12px;
  font-weight: 700;
}

.small-note {
  font-size: 12px;
  font-weight: 800;
}

.light-note {
  fill: #ffd2e4;
  font-size: 12px;
  font-weight: 800;
}

.light-axis {
  fill: #d1d5db;
  font-size: 12px;
  font-weight: 700;
}
</style>
