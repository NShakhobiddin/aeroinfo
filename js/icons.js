/* ============================================================
   Icons — Lucide-style line icons (inline SVG path data)
   usage: icon('plane')  ->  <svg ...>
   ============================================================ */
window.ICONS = {
  plane:        '<path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a1 1 0 0 0-.9.3l-.8.8a.8.8 0 0 0 .2 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 2.6 5.7a.8.8 0 0 0 1.3.2l.8-.8a1 1 0 0 0 .3-.9Z"/>',
  planeLanding: '<g style="fill:currentColor;stroke:none" transform="translate(24 0) scale(-1 1)"><path d="M2.5 19h19v2h-19v-2m16.84-5.16c.8.22 1.62-.26 1.84-1.06.22-.8-.26-1.63-1.06-1.84l-5.27-1.41-2.79-8.96L10.12 0l1.32 9.6-4.97-1.33-.93-2.32-1.45-.39v5.17l1.45.39 18.59 4.98z"/></g>',
  planeTakeoff: '<path d="M2 22h20"/><path d="M3.8 8.8 17 5l1.8.5a1.8 1.8 0 0 1 1.2 2.6L19 10l-3 1-4 7-1.5.4 1-7.4-4 1.3-1.7 2.1a1 1 0 0 1-.7.4L3 18l2-5.2-2.1-1.3a1.4 1.4 0 0 1 .1-2.7Z"/>',
  package:      '<path d="m7.5 4.3 9 5.2M3.3 7 12 12l8.7-5M12 22V12"/><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>',
  calculator:   '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="8" x2="8" y1="14" y2="14"/><line x1="12" x2="12" y1="14" y2="14"/><line x1="16" x2="16" y1="14" y2="14"/><line x1="8" x2="8" y1="18" y2="18"/><line x1="12" x2="12" y1="18" y2="18"/><line x1="16" x2="16" y1="18" y2="18"/>',
  smartphone:   '<rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M12 18h.01"/>',
  phone:        '<path d="M13.8 10.2a8 8 0 0 0 3.8 3.8l1.3-1.6a1 1 0 0 1 1-.3 11 11 0 0 0 3.4.5 1 1 0 0 1 .9 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h2.7a1 1 0 0 1 1 .9 11 11 0 0 0 .5 3.4 1 1 0 0 1-.2 1Z"/>',
  mapPin:       '<path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  mail:         '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  search:       '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  alert:        '<path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6A2 2 0 0 0 22 18L13.7 3.9a2 2 0 0 0-3.4 0Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12" y1="17" y2="17"/>',
  ban:          '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
  info:         '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  check:        '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  banknote:     '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/>',
  pill:         '<path d="m10.5 20.5-7-7a4.95 4.95 0 0 1 7-7l7 7a4.95 4.95 0 0 1-7 7Z"/><path d="m8.5 8.5 7 7"/>',
  gem:          '<path d="M6 3h12l4 6-10 12L2 9Z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/>',
  luggage:      '<path d="M6 20a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2"/><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/><path d="M10 20v2M14 20v2"/>',
  doc:          '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/>',
  lanes:        '<path d="M12 21v-6"/><path d="M12 15 6.5 9"/><path d="M12 15l5.5-6"/><path d="M6.5 9h3.2M6.5 9v3.2"/><path d="M17.5 9h-3.2M17.5 9v3.2"/>',
  shield:       '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  globe:        '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/>',
  arrowLeft:    '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  arrowRight:   '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  chevDown:     '<path d="m6 9 6 6 6-6"/>',
  scale:        '<path d="M12 3v18M7 7h10"/><path d="m7 7-3 6a3 3 0 0 0 6 0Z"/><path d="m17 7 3 6a3 3 0 0 1-6 0Z"/><path d="M7 21h10"/>',
  building:     '<rect x="4" y="2" width="16" height="20" rx="1.5"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  truck:        '<path d="M14 18V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1"/><path d="M14 9h4l3 3v5a1 1 0 0 1-1 1h-1"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  warehouse:    '<path d="M22 8.4V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.4a2 2 0 0 1 1.3-1.9l8-3a2 2 0 0 1 1.4 0l8 3A2 2 0 0 1 22 8.4Z"/><path d="M6 18h12M6 14h12M6 22V10h12v12"/>',
  cart:         '<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.5 13h11l2-9H6"/>',
  customs:      '<path d="M3 21h18"/><path d="M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6"/><path d="M9 11h.01M15 11h.01"/>',
  wine:         '<path d="M8 22h8M12 15v7"/><path d="M7 2h10l-.6 6a4.5 4.5 0 0 1-8.8 0Z"/><path d="M6.7 8h10.6"/>',
  list:         '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
  clock:        '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  user:         '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  leaf:         '<path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 8-3 16-9 16a7 7 0 0 1-7-7Z"/><path d="M4 21c2-6 6-9 12-11"/>',
  sun:          '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  play:         '<path d="M8 5v14l11-7z"/>',
  pencil:       '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  image:        '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.8"/><path d="m21 15-4.5-4.5L5 22"/>',
  video:        '<path d="m22 8-6 4 6 4z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  passport:     '<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9.5 16h5"/>',
  camera:       '<path d="M5 7h2l1.5-2h7L17 7h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><circle cx="12" cy="13" r="3.5"/>',
  arrival:      '<path d="M2 21h20"/><path d="M10.5 13.8 4 12a1.4 1.4 0 0 1-1-1.7l.3-1 4 1.3 1.2-5.2 1.8.5.5 5.4 5.2 1.7a1.7 1.7 0 0 1 1.2 1.6 1.2 1.2 0 0 1-1.5 1.1Z"/>',
  departure:    '<path d="M2 21h20"/><path d="M13.5 10.2 20 12a1.4 1.4 0 0 1 1 1.7l-.3 1-4-1.3-1.2 5.2-1.8-.5-.5-5.4-5.2-1.7A1.7 1.7 0 0 1 6.8 9a1.2 1.2 0 0 1 1.5-1.1Z" transform="rotate(180 12 13)"/>',
  bulb:         '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"/>',
  close:        '<path d="M18 6 6 18M6 6l12 12"/>',
  trash:        '<path d="M3 6h18"/><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/>',
  upload:       '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v13"/>',
  googleplay:   '<path d="M4 3.2a1 1 0 0 1 1.5-.87l13 7.8a1 1 0 0 1 0 1.74l-13 7.8A1 1 0 0 1 4 18.8z"/><path d="m4 3 11 9-11 9"/>',
  apple:        '<path d="M14.9 3.4c.1 1-.3 1.9-.9 2.6-.6.7-1.6 1.3-2.5 1.2-.1-1 .4-1.9 1-2.6.6-.7 1.6-1.2 2.4-1.2Z"/><path d="M18.1 16.4c-.5 1.2-1.6 3.2-3 3.2-.9 0-1.4-.6-2.6-.6s-1.7.6-2.6.6c-1.4 0-2.6-2-3.2-3.3C5.4 13.7 6.3 9.8 9 9.8c1 0 1.9.7 2.5.7.6 0 1.8-.8 3-.7 1 0 2 .5 2.7 1.4-2.4 1.5-2 4.6.9 5.2Z"/>',
  telegram:     '<path d="M21.5 4.4 2.6 11.5a.6.6 0 0 0 .05 1.13L7.6 14l1.9 5.6a.6.6 0 0 0 1 .24L13 17l4.7 3.4a.7.7 0 0 0 1.1-.42l2.7-14.8a.66.66 0 0 0-.95-.78Z"/><path d="m7.6 14 9.6-7.1-7 8.3"/>',
  refresh:      '<path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v5h-5"/>'
};

/* Custom raster icons (solid silhouettes) rendered via CSS mask so they
   inherit currentColor and the dark-theme treatment just like the line icons.
   Override existing names so every usage picks them up automatically. */
window.IMG_ICONS = {
  plane:        'assets/icons/airport.png',
  package:      'assets/icons/box.png',
  phone:        'assets/icons/contact.png',
  smartphone:   'assets/icons/cell-phone.png',
  alcohol:      'assets/icons/wine.png',
  cigarettes:   'assets/icons/cigarette.png',
  cigars:       'assets/icons/cigar.png',
  tobacco:      'assets/icons/tobacco.png',
  perfume:      'assets/icons/parfum.png',
  supplements:  'assets/icons/herbal.png',
  rice:         'assets/icons/rice.png',
  bakery:       'assets/icons/bakery.png',
  meat:         'assets/icons/meat.png',
  sugar:        'assets/icons/sugar.png',
  oil:          'assets/icons/oil.png',
  fruitveg:     'assets/icons/fruitveg.png',
  banknote:     'assets/icons/money.png',
  inspection:   'assets/icons/inspection.png',
  telephone:    'assets/icons/telephone.png',
  handphone:    'assets/icons/hand-phone.png',
  declofficer:  'assets/icons/decl-officer.png',
  calculator:   'assets/icons/calculator.png',
  googleplay:   'assets/icons/googleplay.png',
  apple:        'assets/icons/appstore.png',
  noncommercial:'assets/icons/noncommercial.png',
  commercial:   'assets/icons/commercial.png',
  arrival:      'assets/icons/arrival.png',
  planeLanding: 'assets/icons/arrival.png',
  departure:    'assets/icons/departure.png',
  planeTakeoff: 'assets/icons/departure.png',
  customs:    'assets/icons/home.png',
  taxfree:    'assets/icons/tax-free.png',
  quantity:   'assets/icons/quantity.png',
  gem:        'assets/icons/jewelry.png',
  doc:        'assets/icons/manifesto.png',
  pill:       'assets/icons/drugs.png',
  ban:        'assets/icons/cancel.png',
  lanes:      'assets/icons/choice.png',
  taxfreebig: 'assets/icons/taxfree-big.png',
  nodeclbig:  'assets/icons/no-declaration.png',
  calday:     'assets/icons/cal-day.png',
  calmonth:   'assets/icons/cal-month.png',
  cashunlimited:'assets/icons/cash-unlimited.png',
  cashstack:  'assets/icons/cash-stack.png',
  prescription:'assets/icons/prescription.png'
};

/* resolve an asset path to its bundled blob URL when running standalone */
window.__res = function(p){ return (window.__resources && window.__resources[p]) || p; };

window.icon = function(name, cls){
  const src = window.__res(window.IMG_ICONS[name]);
  if(src){
    const m = "-webkit-mask:url('" + src + "') no-repeat center / contain;"
            + "mask:url('" + src + "') no-repeat center / contain;";
    return '<span class="icon icon-img ' + (cls||'') + '" aria-hidden="true" style="' + m + '"></span>';
  }
  const p = window.ICONS[name] || window.ICONS.info;
  return '<svg class="icon ' + (cls||'') + '" viewBox="0 0 24 24" aria-hidden="true">' + p + '</svg>';
};
