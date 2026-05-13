<template>
  <div class="demand-chart" aria-label="35歳以上への需要拡大余地を示す概念チャート">
    <svg viewBox="0 0 740 220" role="img">
      <rect width="740" height="220" fill="#ffffff" />
      <text x="34" y="38" class="title">推し活需要の浸透イメージ</text>
      <text x="34" y="62" class="sub">現状の参加層に加え、可処分所得のある層へ広がる余地</text>

      <line x1="162" y1="172" x2="682" y2="172" stroke="#E5E7EB" stroke-width="1.5" />
      <text x="162" y="194" class="axis">現在</text>
      <text x="632" y="194" class="axis">伸長余地</text>

      <text x="34" y="104" class="label">若年層</text>
      <rect x="162" y="84" width="510" height="30" rx="15" fill="#FCE7F3" />
      <rect x="162" y="84" width="398" height="30" rx="15" fill="#E5006E" />
      <text x="580" y="104" class="note">すでに大きい</text>

      <text x="34" y="150" class="label">35歳以上</text>
      <rect x="162" y="130" width="510" height="30" rx="15" fill="#E5E7EB" />
      <rect x="162" y="130" width="224" height="30" rx="15" fill="#0B1F3A" />
      <rect x="402" y="130" width="270" height="30" rx="15" fill="#FCE7F3" />
      <path
        d="M 416 130 L 404 160 M 456 130 L 444 160 M 496 130 L 484 160 M 536 130 L 524 160 M 576 130 L 564 160 M 616 130 L 604 160 M 656 130 L 644 160"
        stroke="#E5006E"
        stroke-width="1.5"
        opacity="0.55"
      />
      <text x="418" y="150" class="growth">拡大余地</text>
    </svg>
  </div>
</template>

<style scoped>
.demand-chart {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
}

svg {
  display: block;
  width: 100%;
  height: 100%;
}

.title,
.sub,
.axis,
.label,
.note,
.growth {
  font-family: "Inter", "Noto Sans JP", sans-serif;
}

.title {
  fill: #0b1f3a;
  font-size: 18px;
  font-weight: 800;
}

.sub,
.axis {
  fill: #9ca3af;
  font-size: 12px;
}

.label {
  fill: #374151;
  font-size: 16px;
  font-weight: 700;
}

.note {
  fill: #0b1f3a;
  font-size: 13px;
  font-weight: 700;
}

.growth {
  fill: #e5006e;
  font-size: 13px;
  font-weight: 800;
}
</style>
