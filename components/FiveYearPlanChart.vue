<template>
  <div class="five-year-chart" aria-label="5年間の売上と営業利益の推移グラフ">
    <svg viewBox="0 0 1080 420" role="img">
      <rect width="1080" height="420" fill="#ffffff" />
      <text x="40" y="42" class="title">売上・営業利益の推移</text>
      <text x="40" y="68" class="sub">単位：百万円。3年目で黒字化、5年目に営業利益 246M へ。</text>

      <circle cx="730" cy="34" r="7" fill="#E5006E" />
      <text x="746" y="39" class="legend">売上</text>
      <circle cx="822" cy="34" r="7" fill="#0B1F3A" />
      <text x="838" y="39" class="legend">営業利益</text>
      <rect x="926" y="26" width="86" height="24" rx="12" fill="#FDF2F8" />
      <text x="969" y="43" class="profit-badge" text-anchor="middle">黒字化</text>

      <g class="grid">
        <line x1="92" y1="78" x2="1010" y2="78" />
        <line x1="92" y1="150.9" x2="1010" y2="150.9" />
        <line x1="92" y1="223.9" x2="1010" y2="223.9" />
        <line x1="92" y1="326" x2="1010" y2="326" />
      </g>
      <line x1="92" y1="296.8" x2="1010" y2="296.8" stroke="#0B1F3A" stroke-width="1.25" />

      <g class="y-axis" text-anchor="end">
        <text x="52" y="82">300</text>
        <text x="52" y="154.9">200</text>
        <text x="52" y="227.9">100</text>
        <text x="52" y="300.8">0</text>
        <text x="52" y="330">-40</text>
      </g>

      <line
        x1="570"
        y1="78"
        x2="570"
        y2="326"
        stroke="#F9A8D4"
        stroke-width="1.75"
        stroke-dasharray="5 8"
      />
      <rect x="522" y="82" width="96" height="30" rx="15" fill="#FDF2F8" />
      <text x="570" y="102" class="profit-badge" text-anchor="middle">3年目黒字化</text>

      <polyline
        points="150,293.5 360,280.4 570,264 780,198.3 990,99.9"
        fill="none"
        stroke="#E5006E"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <polyline
        points="150,311 360,297.9 570,281.5 780,215.8 990,117.4"
        fill="none"
        stroke="#0B1F3A"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g fill="#ffffff" stroke="#E5006E" stroke-width="2.75">
        <circle cx="150" cy="293.5" r="5.5" />
        <circle cx="360" cy="280.4" r="5.5" />
        <circle cx="570" cy="264" r="5.5" />
        <circle cx="780" cy="198.3" r="5.5" />
        <circle cx="990" cy="99.9" r="5.5" />
      </g>
      <g fill="#ffffff" stroke="#0B1F3A" stroke-width="2.75">
        <circle cx="150" cy="311" r="5.5" />
        <circle cx="360" cy="297.9" r="5.5" />
        <circle cx="570" cy="281.5" r="5.5" />
        <circle cx="780" cy="215.8" r="5.5" />
        <circle cx="990" cy="117.4" r="5.5" />
      </g>

      <g class="x-axis" text-anchor="middle">
        <text x="150" y="360">1年目</text>
        <text x="360" y="360">2年目</text>
        <text x="570" y="360">3年目</text>
        <text x="780" y="360">4年目</text>
        <text x="990" y="360">5年目</text>
      </g>

      <text x="990" y="78" class="sales-label" text-anchor="middle">270M</text>
      <text x="990" y="142" class="profit-label" text-anchor="middle">246M</text>
      <text x="150" y="333" class="negative-label" text-anchor="middle">-19.5M</text>
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
