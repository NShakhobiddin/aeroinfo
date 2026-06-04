/* ============================================================
   ILLUSTRATIONS — airport line-art (navy stroke + light fills)
   Style matches the approved mockup: clean, editorial, official.
   Classes used inside:
     .il-s  stroke (navy)      .il-f  light fill
     .il-s2 lighter stroke     .il-g  green accent (fill)
     .il-gs green stroke
   Colors come from currentColor + CSS classes in styles.css.
   ============================================================ */
window.ILLO = {

  /* Control tower + terminal — hero / intro backdrop */
  terminal: `
  <svg class="illo illo-terminal" viewBox="0 0 520 300" fill="none" aria-hidden="true">
    <line class="il-s2" x1="8" y1="262" x2="512" y2="262"/>
    <!-- control tower -->
    <g>
      <path class="il-f" d="M150 262 L158 120 L178 120 L186 262 Z"/>
      <path class="il-s" d="M150 262 L158 120 L178 120 L186 262"/>
      <path class="il-f2" d="M146 96 L190 96 L182 122 L154 122 Z"/>
      <path class="il-s" d="M146 96 L190 96 L182 122 L154 122 Z"/>
      <path class="il-s" d="M168 96 L168 78"/>
      <circle class="il-s" cx="168" cy="74" r="4"/>
      <line class="il-s2" x1="158" y1="150" x2="178" y2="150"/>
      <line class="il-s2" x1="156" y1="186" x2="180" y2="186"/>
      <line class="il-s2" x1="154" y1="224" x2="182" y2="224"/>
    </g>
    <!-- terminal building with curved roof -->
    <g>
      <path class="il-f" d="M214 262 L214 188 Q214 160 252 154 L360 140 Q404 134 404 174 L404 262 Z"/>
      <path class="il-s" d="M214 262 L214 188 Q214 160 252 154 L360 140 Q404 134 404 174 L404 262"/>
      <line class="il-s2" x1="214" y1="210" x2="404" y2="196"/>
      <line class="il-s2" x1="246" y1="208" x2="250" y2="262"/>
      <line class="il-s2" x1="288" y1="204" x2="290" y2="262"/>
      <line class="il-s2" x1="330" y1="200" x2="332" y2="262"/>
      <line class="il-s2" x1="372" y1="196" x2="372" y2="262"/>
    </g>
    <!-- jet bridge / smaller wing -->
    <path class="il-f2" d="M404 262 L404 214 L470 214 L470 262 Z"/>
    <path class="il-s" d="M404 214 L470 214 L470 262"/>
    <line class="il-s2" x1="420" y1="214" x2="420" y2="262"/>
    <line class="il-s2" x1="444" y1="214" x2="444" y2="262"/>
    <!-- parked plane -->
    <g>
      <path class="il-s" d="M60 250 l64 -8 q10 -1 16 5 l10 10 -22 1 -8 -6 -28 4 4 8 -12 1 -10 -10 q-6 -6 -14 -10 z"/>
    </g>
  </svg>`,

  /* Paper plane + dashed arc — hero accent / 404 */
  paperPlane: `
  <svg class="illo illo-pp" viewBox="0 0 240 200" fill="none" aria-hidden="true">
    <path class="il-dash" d="M14 176 C 70 150, 96 70, 196 44"/>
    <circle class="il-dot" cx="14" cy="176" r="4"/>
    <g class="pp-body">
      <path class="il-f" d="M150 28 L226 56 L176 70 L168 112 L150 78 L120 70 Z"/>
      <path class="il-s" d="M226 56 L150 28 L120 70 L150 78 L176 70 L226 56 Z"/>
      <path class="il-s" d="M150 78 L168 112 L176 70"/>
      <path class="il-s" d="M150 28 L168 112"/>
    </g>
  </svg>`,

  /* GREEN CHANNEL sign + luggage + landing plane — entry banner */
  greenChannel: `
  <svg class="illo illo-scene" viewBox="0 0 360 240" fill="none" aria-hidden="true">
    <line class="il-s2" x1="20" y1="206" x2="340" y2="206"/>
    <!-- landing plane -->
    <path class="il-s" d="M214 54 l70 14 q12 2 14 12 -2 8 -14 8 l-58 -2 -30 18 -12 -3 14 -19 -34 -2 -16 12 -10 -3 12 -16 q4 -5 12 -6 z"/>
    <!-- green channel sign -->
    <g>
      <rect class="il-g" x="78" y="92" width="150" height="56" rx="8"/>
      <rect class="il-gs" x="78" y="92" width="150" height="56" rx="8"/>
      <path class="il-arrow" d="M196 110 l18 10 -18 10 v-6 h-22 v-8 h22 z"/>
      <line class="il-gw" x1="96" y1="112" x2="170" y2="112"/>
      <line class="il-gw2" x1="96" y1="128" x2="156" y2="128"/>
    </g>
    <path class="il-s" d="M120 148 L120 206"/>
    <path class="il-s" d="M186 148 L186 206"/>
    <!-- luggage -->
    <g>
      <rect class="il-f" x="244" y="150" width="52" height="56" rx="8"/>
      <rect class="il-s" x="244" y="150" width="52" height="56" rx="8"/>
      <path class="il-s" d="M258 150 v-10 q0 -6 6 -6 h12 q6 0 6 6 v10"/>
      <line class="il-s2" x1="270" y1="150" x2="270" y2="206"/>
      <circle class="il-s" cx="256" cy="210" r="4"/>
      <circle class="il-s" cx="284" cy="210" r="4"/>
    </g>
  </svg>`,

  /* Departure board / rules sign + departing plane — exit banner */
  departure: `
  <svg class="illo illo-scene" viewBox="0 0 360 240" fill="none" aria-hidden="true">
    <line class="il-s2" x1="20" y1="206" x2="340" y2="206"/>
    <!-- departing plane (climbing) -->
    <path class="il-s" d="M150 150 l54 -40 q10 -8 20 -4 l-2 12 -34 26 26 12 -14 12 -30 -10 -22 16 q-8 6 -16 4 l8 -22 -28 -10 12 -12 z"/>
    <!-- information / rules board -->
    <g>
      <rect class="il-f" x="60" y="96" width="120" height="74" rx="8"/>
      <rect class="il-s" x="60" y="96" width="120" height="74" rx="8"/>
      <rect class="il-fa" x="72" y="108" width="20" height="14" rx="3"/>
      <line class="il-s2" x1="102" y1="112" x2="166" y2="112"/>
      <line class="il-s2" x1="102" y1="120" x2="150" y2="120"/>
      <rect class="il-fa" x="72" y="132" width="20" height="14" rx="3"/>
      <line class="il-s2" x1="102" y1="136" x2="166" y2="136"/>
      <line class="il-s2" x1="102" y1="144" x2="150" y2="144"/>
    </g>
    <path class="il-s" d="M120 170 L120 206"/>
    <circle class="il-s2" cx="120" cy="92" r="4"/>
    <line class="il-s2" x1="120" y1="92" x2="120" y2="96"/>
  </svg>`,

  /* Globe + plane orbit + delivery truck + route — post banner */
  globe: `
  <svg class="illo illo-scene" viewBox="0 0 360 240" fill="none" aria-hidden="true">
    <g>
      <circle class="il-f" cx="130" cy="106" r="66"/>
      <circle class="il-s" cx="130" cy="106" r="66"/>
      <ellipse class="il-s2" cx="130" cy="106" rx="66" ry="26"/>
      <ellipse class="il-s2" cx="130" cy="106" rx="28" ry="66"/>
      <line class="il-s2" x1="64" y1="106" x2="196" y2="106"/>
    </g>
    <!-- orbit + plane -->
    <ellipse class="il-dash" cx="130" cy="106" rx="92" ry="50" transform="rotate(-18 130 106)"/>
    <path class="il-s" d="M210 58 l26 4 q6 1 7 6 -1 5 -7 5 l-22 -1 -12 8 -6 -2 6 -8 -14 -1 -7 5 -5 -2 6 -7 q2 -3 6 -3 z"/>
    <!-- dashed route to truck -->
    <path class="il-dash" d="M150 168 C 200 200, 250 196, 286 196"/>
    <!-- delivery truck -->
    <g>
      <rect class="il-f" x="246" y="150" width="52" height="34" rx="4"/>
      <rect class="il-s" x="246" y="150" width="52" height="34" rx="4"/>
      <path class="il-fa" d="M298 160 h16 l12 12 v12 h-28 z"/>
      <path class="il-s" d="M298 160 h16 l12 12 v12 h-28"/>
      <circle class="il-f2" cx="262" cy="190" r="9"/><circle class="il-s" cx="262" cy="190" r="9"/>
      <circle class="il-f2" cx="312" cy="190" r="9"/><circle class="il-s" cx="312" cy="190" r="9"/>
    </g>
  </svg>`,

  /* Smartphone + signal waves + shield check — mobile banner */
  phone: `
  <svg class="illo illo-scene" viewBox="0 0 360 240" fill="none" aria-hidden="true">
    <g>
      <rect class="il-f" x="132" y="44" width="96" height="160" rx="16"/>
      <rect class="il-s" x="132" y="44" width="96" height="160" rx="16"/>
      <line class="il-s2" x1="166" y1="56" x2="194" y2="56"/>
      <!-- shield check on screen -->
      <path class="il-fa" d="M180 92 l24 9 v16 c0 18 -16 28 -24 32 -8 -4 -24 -14 -24 -32 v-16 z"/>
      <path class="il-gs" d="M180 92 l24 9 v16 c0 18 -16 28 -24 32 -8 -4 -24 -14 -24 -32 v-16 z"/>
      <path class="il-gw" d="M170 124 l7 7 13 -15"/>
    </g>
    <!-- signal waves -->
    <path class="il-s2" d="M250 96 q16 16 0 48"/>
    <path class="il-s2" d="M266 80 q30 32 0 80"/>
    <path class="il-s2" d="M110 96 q-16 16 0 48"/>
    <path class="il-s2" d="M94 80 q-30 32 0 80"/>
  </svg>`,

  /* Hero scene — ABSTRACT CUSTOMS: checkpoint boom barrier + customs shield + official stamp + cleared path */
  hero: `
  <svg class="illo illo-hero" viewBox="0 0 460 360" fill="none" aria-hidden="true">
    <!-- dashed path sweeping through the gateway -->
    <path class="il-dash" d="M40 304 C 120 268, 150 210, 250 198 S 380 210, 412 150"/>
    <circle class="il-dot" cx="40" cy="304" r="4"/>
    <!-- ground -->
    <line class="il-s2" x1="40" y1="322" x2="420" y2="322"/>

    <!-- gateway arch (abstract customs threshold) -->
    <path class="il-f" d="M150 322 L150 178 Q150 92 250 92 Q350 92 350 178 L350 322 Z"/>
    <path class="il-s" d="M150 322 L150 178 Q150 92 250 92 Q350 92 350 178 L350 322"/>
    <path class="il-s2" d="M178 322 L178 182 Q178 120 250 120 Q322 120 322 182 L322 322"/>
    <line class="il-s2" x1="150" y1="250" x2="350" y2="250"/>

    <!-- abstract floating chips -->
    <rect class="il-f2" x="300" y="150" width="40" height="40" rx="9" transform="rotate(14 320 170)"/>
    <rect class="il-s" x="300" y="150" width="40" height="40" rx="9" transform="rotate(14 320 170)"/>
    <circle class="il-fa" cx="168" cy="232" r="16"/>
    <circle class="il-s" cx="168" cy="232" r="16"/>
    <path class="il-f2" d="M362 296 l22 0 -11 -20 z"/>
    <path class="il-s" d="M362 296 l22 0 -11 -20 z"/>

    <!-- official seal over the crown -->
    <circle class="il-fa" cx="250" cy="112" r="42"/>
    <circle class="il-s" cx="250" cy="112" r="42"/>
    <circle class="il-s2" cx="250" cy="112" r="33"/>
    <path class="il-gw" d="M234 112 l11 12 22 -26"/>
    <line class="il-s2" x1="271.5" y1="133.5" x2="276" y2="138"/>
    <line class="il-s2" x1="228.5" y1="133.5" x2="224" y2="138"/>
    <line class="il-s2" x1="228.5" y1="90.5" x2="224" y2="86"/>
    <line class="il-s2" x1="271.5" y1="90.5" x2="276" y2="86"/>

    <!-- floating plane entering -->
    <g class="pp-body" transform="translate(-44,86) scale(0.92)">
      <path class="il-f" d="M210 58 l26 4 q6 1 7 6 -1 5 -7 5 l-22 -1 -12 8 -6 -2 6 -8 -14 -1 -7 5 -5 -2 6 -7 q2 -3 6 -3 z"/>
      <path class="il-s" d="M210 58 l26 4 q6 1 7 6 -1 5 -7 5 l-22 -1 -12 8 -6 -2 6 -8 -14 -1 -7 5 -5 -2 6 -7 q2 -3 6 -3 z"/>
    </g>
  </svg>`
};
