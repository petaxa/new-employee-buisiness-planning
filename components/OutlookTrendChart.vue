<script setup lang="ts">
defineProps<{
  variant: "entertainment" | "creator";
}>();
</script>

<template>
  <div class="trend-chart" :class="variant" :aria-label="`${variant} trend chart`">
    <svg v-if="variant === 'entertainment'" viewBox="0 0 460 150" role="img">
      <rect width="460" height="150" fill="#ffffff" />
      <text x="24" y="30" class="dark-title">ライブ・エンタメ市場</text>
      <line x1="46" y1="118" x2="420" y2="118" stroke="#F3F4F6" stroke-width="1.5" />
      <rect x="82" y="54" width="62" height="64" rx="8" fill="#FCE7F3" />
      <rect x="199" y="41" width="62" height="77" rx="8" fill="#FBCFE8" />
      <rect x="316" y="32" width="62" height="86" rx="8" fill="#E5006E" />
      <text x="113" y="48" class="muted-value" text-anchor="middle">5,652億</text>
      <text x="230" y="35" class="muted-value" text-anchor="middle">6,857億</text>
      <text x="347" y="26" class="accent-value" text-anchor="middle">7,605億</text>
      <text x="113" y="137" class="axis" text-anchor="middle">2022</text>
      <text x="230" y="137" class="axis" text-anchor="middle">2023</text>
      <text x="347" y="137" class="axis" text-anchor="middle">2024</text>
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
  </div>
</template>

<style scoped>
.trend-chart {
  border-radius: 10px;
  overflow: hidden;
}

.entertainment {
  background: #ffffff;
  border: 1px solid #fbcfe8;
}

.creator {
  background: #ffffff;
  border: 1px solid #e5e7eb;
}

svg {
  display: block;
  width: 100%;
  height: 100%;
}

text {
  font-family: "Inter", "Noto Sans JP", sans-serif;
}

.dark-title {
  font-size: 14px;
  font-weight: 900;
}

.dark-title {
  fill: #0b1f3a;
}

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
</style>
