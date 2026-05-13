<template>
  <div class="five-year-chart" aria-label="5年間の売上と営業利益の推移グラフ">
    <svg viewBox="0 0 1080 420" role="img">
      <rect width="1080" height="420" fill="#ffffff" />
      <text x="40" y="42" class="title">売上・営業利益の推移</text>
      <text x="40" y="68" class="sub">
        単位：百万円。4年目で黒字化、5年目に営業利益 126.3M へ。
      </text>

      <circle cx="730" cy="34" r="7" fill="#E5006E" />
      <text x="746" y="39" class="legend">売上</text>
      <circle cx="822" cy="34" r="7" fill="#0B1F3A" />
      <text x="838" y="39" class="legend">営業利益</text>
      <rect x="926" y="26" width="86" height="24" rx="12" fill="#FDF2F8" />
      <text x="969" y="43" class="profit-badge" text-anchor="middle">黒字化</text>

      <g class="grid">
        <line x1="92" y1="96.4" x2="1010" y2="96.4" />
        <line x1="92" y1="188.2" x2="1010" y2="188.2" />
        <line x1="92" y1="280.1" x2="1010" y2="280.1" />
        <line x1="92" y1="326" x2="1010" y2="326" />
      </g>
      <line x1="92" y1="280.1" x2="1010" y2="280.1" stroke="#0B1F3A" stroke-width="1.25" />

      <g class="y-axis" text-anchor="end">
        <text x="52" y="100.4">200</text>
        <text x="52" y="192.2">100</text>
        <text x="52" y="284.1">0</text>
        <text x="52" y="330">-50</text>
      </g>

      <line
        x1="780"
        y1="78"
        x2="780"
        y2="326"
        stroke="#F9A8D4"
        stroke-width="1.75"
        stroke-dasharray="5 8"
      />
      <rect x="732" y="82" width="96" height="30" rx="15" fill="#FDF2F8" />
      <text x="780" y="102" class="profit-badge" text-anchor="middle">4年目黒字化</text>

      <polyline
        points="150,277.7 360,265.2 570,243.9 780,182.3 990,88.4"
        fill="none"
        stroke="#E5006E"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <polyline
        points="150,302.1 360,296.9 570,282.0 780,234.9 990,164.1"
        fill="none"
        stroke="#0B1F3A"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g fill="#ffffff" stroke="#E5006E" stroke-width="2.75">
        <circle cx="150" cy="277.7" r="5.5" />
        <circle cx="360" cy="265.2" r="5.5" />
        <circle cx="570" cy="243.9" r="5.5" />
        <circle cx="780" cy="182.3" r="5.5" />
        <circle cx="990" cy="88.4" r="5.5" />
      </g>
      <g fill="#ffffff" stroke="#0B1F3A" stroke-width="2.75">
        <circle cx="150" cy="302.1" r="5.5" />
        <circle cx="360" cy="296.9" r="5.5" />
        <circle cx="570" cy="282.0" r="5.5" />
        <circle cx="780" cy="234.9" r="5.5" />
        <circle cx="990" cy="164.1" r="5.5" />
      </g>

      <g class="x-axis" text-anchor="middle">
        <text x="150" y="360">1年目</text>
        <text x="360" y="360">2年目</text>
        <text x="570" y="360">3年目</text>
        <text x="780" y="360">4年目</text>
        <text x="990" y="360">5年目</text>
      </g>

      <text x="990" y="72" class="sales-label" text-anchor="middle">208.7M</text>
      <text x="990" y="150" class="profit-label" text-anchor="middle">126.3M</text>
      <text x="150" y="323" class="negative-label" text-anchor="middle">-24.0M</text>
    </svg>
  </div>
</template>

<style scoped>
.five-year-chart {
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

text {
  font-family: "Inter", "Noto Sans JP", sans-serif;
}

.title {
  fill: #0b1f3a;
  font-size: 22px;
  font-weight: 900;
}

.sub,
.y-axis,
.negative-label {
  fill: #9ca3af;
  font-size: 12px;
}

.legend,
.x-axis {
  fill: #6b7280;
  font-size: 13px;
  font-weight: 700;
}

.grid line {
  stroke: #f3f4f6;
  stroke-width: 1;
}

.profit-badge {
  fill: #e5006e;
  font-size: 12px;
  font-weight: 800;
}

.sales-label {
  fill: #e5006e;
  font-size: 15px;
  font-weight: 900;
}

.profit-label {
  fill: #0b1f3a;
  font-size: 15px;
  font-weight: 900;
}

.negative-label {
  font-weight: 700;
}
</style>
