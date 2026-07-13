/* ============================================================
   APP — router, render, i18n switching, intro
   ============================================================ */
(function(){
  "use strict";
  const LANGS = ["uz","ru","en","zh"];
  let lang = localStorage.getItem("aero_lang") || "uz";
  if(!LANGS.includes(lang)) lang = "uz";

  const t  = (k) => (window.I18N[lang] && window.I18N[lang][k]) || window.I18N.uz[k] || k;
  const L  = (obj) => (obj==null) ? "" : (typeof obj==="string" ? obj : (obj[lang] || obj.uz || ""));
  const ic = window.icon;

  /* ---- home main sections meta ---- */
  const SECTIONS = [
    { route:"#/airport", icon:"plane",
      title:{uz:"Xalqaro aeroport",ru:"Международный аэропорт",en:"International airport",zh:"国际机场"},
      desc:{uz:"Xalqaro aeroport orqali uchib kelayotgan va uchib ketayotgan fuqarolar uchun. Ichida: Uchib kelish va Uchib ketish.",
            ru:"Для пассажиров, въезжающих или выезжающих через аэропорт. Внутри: Въезд и Выезд.",
            en:"For passengers entering or leaving via the airport. Inside: Entry and Exit.",
            zh:"面向经机场入境或出境的旅客。内含：入境与出境。"} },
    { route:"#/post", icon:"package",
      title:{uz:"Pochta va kuryerlik jo‘natmalari",ru:"Почтовые и курьерские отправления",en:"Postal & courier shipments",zh:"邮政与快递包裹"},
      desc:{uz:"Xalqaro internet do‘konlardan buyurtma qilgan, pochta yoki kuryerlik jo‘natmasi orqali tovar olayotgan fuqarolar uchun.",
            ru:"Для тех, кто получает товары через интернет-заказ, почту или курьера.",
            en:"For people receiving goods via online order, post or courier.",
            zh:"面向通过网购、邮政或快递收货的人员。"} },
    { route:"#/mobile", icon:"smartphone",
      title:{uz:"Mobil qurilmalarni deklaratsiyalash",ru:"Декларирование мобильных устройств",en:"Declaring mobile devices",zh:"移动设备申报"},
      desc:{uz:"Mobil qurilma bilan bog‘liq masalalar.",
            ru:"Для телефона, планшета или устройства с модулем связи: проверка, заявление, UZIMEI.",
            en:"For phones, tablets or devices with a mobile module: check, application, UZIMEI.",
            zh:"针对手机、平板或带通信模块的设备：查询、申请、UZIMEI。"} },
    { route:"#/contacts", icon:"phone",
      title:{uz:"Bojxona organlari bilan bog‘lanish",ru:"Связь с таможенными органами",en:"Contact the customs authorities",zh:"联系海关机关"},
      desc:{uz:"Aloqa raqamlari, manzil va lokatsiya.",
            ru:"Телефоны, адреса и локации: ТТП, пост аэропорта, отделы ВЭД.",
            en:"Phone numbers, addresses and locations: customs post, airport post, units.",
            zh:"电话、地址和位置：海关站、机场口岸、各部门。"} }
  ];

  const TITLES = {
    "#/airport":{uz:"Xalqaro aeroport",ru:"Международный аэропорт",en:"International airport",zh:"国际机场"},
    "#/post":{uz:"Pochta va kuryerlik jo‘natmalari",ru:"Почтовые и курьерские отправления",en:"Postal & courier shipments",zh:"邮政与快递包裹"},
    "#/calc":{uz:"Bojxona kalkulyatori",ru:"Таможенный калькулятор",en:"Customs calculator",zh:"海关计算器"},
    "#/mobile":{uz:"Mobil qurilmalar",ru:"Мобильные устройства",en:"Mobile devices",zh:"移动设备"},
    "#/contacts":{uz:"Bog‘lanish",ru:"Контакты",en:"Contacts",zh:"联系方式"},
    "#/prohibited":{uz:"Taqiqlangan va cheklangan tovarlar",ru:"Запрещённые и ограниченные товары",en:"Prohibited & restricted goods",zh:"禁止和限制物品"},
    "#/prohibited-post":{uz:"Jo‘natmalarda taqiqlangan tovarlar",ru:"Запрещённые товары в отправлениях",en:"Prohibited goods in shipments",zh:"邮寄禁止物品"},
    "#/airport/in":{uz:"Aeroport — Uchib kelish",ru:"Аэропорт — Въезд",en:"Airport — Entry",zh:"机场——入境"},
    "#/airport/out":{uz:"Aeroport — Uchib ketish",ru:"Аэропорт — Выезд",en:"Airport — Exit",zh:"机场——出境"}
  };

  const ENTRY_LEADS = {
    in:{uz:"O‘zbekistonga olib kirish qoidalari. Kerakli qoidani ochish uchun kartochkani bosing.",
        ru:"Правила ввоза в Узбекистан. Нажмите карточку, чтобы открыть нужное правило.",
        en:"Rules for bringing goods into Uzbekistan. Tap a card to open the rule you need.",
        zh:"入境乌兹别克斯坦的规则。点击卡片查看所需规则。"},
    out:{uz:"O‘zbekistondan olib chiqish qoidalari. Kerakli qoidani ochish uchun kartochkani bosing.",
        ru:"Правила вывоза из Узбекистана. Нажмите карточку, чтобы открыть нужное правило.",
        en:"Rules for taking goods out of Uzbekistan. Tap a card to open the rule you need.",
        zh:"从乌兹别克斯坦出境的规则。点击卡片查看所需规则。"},
    post:{uz:"Xalqaro pochta va kuryerlik jo‘natmalari qoidalari.",
        ru:"Правила международных почтовых и курьерских отправлений.",
        en:"Rules for international postal and courier shipments.",
        zh:"国际邮政和快递包裹规则。"}
  };

  /* ============================ RENDERERS ============================ */

  const HERO_STATS = [
    { v:"1 000 $", cls:"", l:{uz:"Aeroportda bojsiz",ru:"В аэропорту беспошлинно",en:"Airport duty-free",zh:"机场免税"} },
    { v:"5 000 $", cls:"green", l:{uz:"Olib chiqish limiti",ru:"Лимит вывоза",en:"Export limit",zh:"出境限额"} },
    { v:"200 $", cls:"", l:{uz:"Kuryer jo‘natma",ru:"Курьерское",en:"Courier shipment",zh:"快递包裹"} },
    { v:"100 mln", cls:"", l:{uz:"Valyuta deklaratsiya",ru:"Декларация валюты",en:"Currency declaration",zh:"货币申报"} }
  ];

  /* ============================ RENDERERS ============================ */

  function homeView(){
    return `
    <section class="hero">
      <div class="hero-bg"></div><div class="hero-grid-lines"></div>
      <div class="wrap hero-inner hero-split">
        <div class="hero-copy">
          <div class="hero-eyebrow">${ic("customs")}<span id="hero-brand">${t("brandName")}</span></div>
          <h1>${t("hero_title")}</h1>
          <p class="hero-lead">${t("hero_lead")}</p>
          <div class="hero-cta">
            <button class="btn btn-primary" data-scroll="home-sections">${t("hero_cta")} ${ic("arrowRight")}</button>
            <button class="btn btn-ghost" data-nav="#/calc">${ic("calculator")} ${t("hero_cta2")}</button>
          </div>
        </div>
        <div class="hero-illo">${illoOrImg("hero", '<img class="illo illo-emblem" src="'+window.__res('assets/customs-emblem.webp')+'" alt="O‘zbekiston Respublikasi Davlat bojxona xizmati" />')}
          <div class="hero-illo-cap" aria-hidden="true">
            <span class="hic-name">${t("brandName")}</span>
            <span class="hic-sub">${t("brandSub")}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="section wrap" id="home-sections">
      <div class="section-head">
        <div><h2>${t("sections_title")}</h2><p>${t("sections_sub")}</p></div>
      </div>
      <div class="card-grid">
        ${SECTIONS.map((s,i)=>`
          <button class="nav-card reveal" data-nav="${s.route}">
            <span class="nc-index">0${i+1}</span>
            <span class="ico-wrap">${sectionIco(s.route.replace('#/',''), s.icon)}</span>
            <h3>${L(s.title)}</h3>
            <p class="nc-desc">${L(s.desc)}</p>
            <span class="nc-go">${t("choose")} ${ic("arrowRight")}</span>
          </button>`).join("")}
      </div>
      <div class="disclaimer">${ic("info")}<span>${t("disclaimer")}</span></div>
    </section>`;
  }

  /* illustrated banner for section pages */
  function banner(illoKey, tone, capObj, extraCls){
    return `<div class="page-banner ${tone||''} ${extraCls||''} reveal">
      <div class="pb-illo">${window.ILLO[illoKey]||''}</div>
      <div class="pb-cap">${ic("info")}<span>${L(capObj)}</span></div>
    </div>`;
  }

  function airportSplitView(){
    return `${pageHead("plane", TITLES["#/airport"], {uz:"Avval yo‘nalishni tanlang — uchib kelish va uchib ketish qoidalari farq qiladi.",ru:"Сначала выберите направление — правила въезда и выезда различаются.",en:"First choose a direction — entry and exit rules differ.",zh:"请先选择方向——入境和出境规则不同。"})}
    <section class="section wrap" style="padding-top:8px">
      <div class="split">
        <button class="split-card in" data-nav="#/airport/in">
          <span class="ico-wrap">${ic("arrival")}</span>
          <h3>${({uz:"Uchib kelish",ru:"Въезд",en:"Entry",zh:"入境"})[lang]}</h3>
          <p>${({uz:"O‘zbekistonga olib kirish me’yorlari va qoidalari.",ru:"Нормы и правила ввоза в Узбекистан.",en:"Limits and rules for entering Uzbekistan.",zh:"入境乌兹别克斯坦的限额与规则。"})[lang]}</p>
          <span class="nc-go">${t("choose")} ${ic("arrowRight")}</span>
        </button>
        <button class="split-card out" data-nav="#/airport/out">
          <span class="ico-wrap">${ic("departure")}</span>
          <h3>${({uz:"Uchib ketish",ru:"Выезд",en:"Exit",zh:"出境"})[lang]}</h3>
          <p>${({uz:"O‘zbekistondan olib chiqish me’yorlari va qoidalari.",ru:"Нормы и правила вывоза из Узбекистана.",en:"Limits and rules for leaving Uzbekistan.",zh:"从乌兹别克斯坦出境的限额与规则。"})[lang]}</p>
          <span class="nc-go">${t("choose")} ${ic("arrowRight")}</span>
        </button>
      </div>
      <div class="disclaimer">${ic("info")}<span>${t("disclaimer")}</span></div>
    </section>`;
  }

  /* ===================== RULE PAGES (sidebar + content) ===================== */
  let ruleState = { list:[], idx:-1, illo:"", tone:"", overview:null };

  const OVERVIEWS = {
    "airport-in": { illo:"greenChannel", tone:"green",
      badge:{uz:"Aeroport — Kirish",ru:"Аэропорт — Въезд",en:"Airport — Entry",zh:"机场——入境"},
      title:{uz:"Kirish",ru:"Въезд",en:"Entry",zh:"入境"},
      text:{uz:"Xalqaro aeroportlar orqali uchib kelishda rioya qilishingiz talab etiladigan bojxona qoidalari bilan tanishing.",ru:"Каждый прибывший в международный аэропорт пассажир проходит въезд с соблюдением таможенных правил. Выберите нужное правило из карточек ниже.",en:"Every passenger arriving at the international airport passes through entry in line with customs rules. Pick a rule from the cards below.",zh:"每位抵达国际机场的旅客均按海关规则办理入境。请从下方卡片中选择规则。"} },
    "airport-out": { illo:"departure", tone:"",
      badge:{uz:"Aeroport — Chiqish",ru:"Аэропорт — Выезд",en:"Airport — Exit",zh:"机场——出境"},
      title:{uz:"Chiqish",ru:"Выезд",en:"Exit",zh:"出境"},
      text:{uz:"Aeroportdan chiqish jarayonida bojxona qoidalari va cheklovlariga rioya qilish muhim.",ru:"При выезде из аэропорта важно соблюдать таможенные правила и ограничения. Выберите нужное правило из карточек ниже.",en:"When leaving the airport it is important to follow customs rules and limits. Pick a rule from the cards below.",zh:"离开机场时务必遵守海关规则和限制。请从下方卡片中选择规则。"} },
    "post": { illo:"globe", tone:"",
      badge:{uz:"Pochta va kuryerlik",ru:"Почта и курьер",en:"Post & courier",zh:"邮政与快递"},
      title:{uz:"Xalqaro pochta va<br>kuryerlik jo‘natmalari",ru:"Международные почтовые и курьерские отправления",en:"International postal & courier shipments",zh:"国际邮政和快递包裹"},
      text:{uz:"Xalqaro pochta va kuryerlik jo‘natmalari uchun bojxona to‘lovsiz va belgilangan me’yorlar doirasida tovarlarni olib kirish mumkin.",ru:"Через международные почтовые и курьерские отправления можно ввозить товары без пошлин в пределах установленных норм. Выберите нужное правило из карточек ниже.",en:"Through international postal and courier shipments goods may be imported duty-free within set limits. Pick a rule from the cards below.",zh:"通过国际邮政和快递可在规定限额内免税进口商品。请从下方卡片中选择规则。"} }
  };

  /* section config for the grid → detail navigation */
  const RULE_SECTIONS = {
    "airport/in":  { get list(){ return window.DATA.airport_in; },  key:"airport-in",  icon:"planeLanding", route:"#/airport/in",  title:TITLES["#/airport/in"],  lead:ENTRY_LEADS.in },
    "airport/out": { get list(){ return window.DATA.airport_out; }, key:"airport-out", icon:"planeTakeoff", route:"#/airport/out", title:TITLES["#/airport/out"], lead:ENTRY_LEADS.out },
    "post":        { get list(){ return window.DATA.post; },        key:"post",        icon:"package",      route:"#/post",        title:TITLES["#/post"],        lead:ENTRY_LEADS.post }
  };

  /* a tappable sub-section card (opens its own detail screen) */
  function ruleCard(r, i, route){
    const go = r.tag
      ? `<span class="rule-tag rt-${r.type}">${r.tag}</span>`
      : `<span class="rc-card-go">${ic("arrowRight")}</span>`;
    return `<button class="rule-card reveal rt-${r.type}" data-nav="${route}/${i}">
      <span class="rc-card-ico">${ic(r.icon)}</span>
      <span class="rc-card-main">
        <span class="rc-card-title">${L(r.title)}</span>
        <span class="rc-card-short">${L(r.short)}</span>
      </span>
      ${go}
    </button>`;
  }

  /* LIST screen — overview + a grid of sub-section cards */
  function ruleGridView(cfg){
    const list = cfg.list;
    const ov = OVERVIEWS[cfg.key] || null;
    ruleState = { list:list, key:cfg.key, idx:-1, illo:(ov||{}).illo||"", tone:(ov||{}).tone||"", overview:ov };
    return `${pageHead(cfg.icon, cfg.title, cfg.lead)}
    <section class="section wrap rule-section">
      ${ruleOverview()}
      <div class="rule-grid">${list.map((r,i)=>ruleCard(r,i,cfg.route)).join("")}</div>
      <div class="disclaimer">${ic("info")}<span>${t("disclaimer")}</span></div>
    </section>`;
  }

  /* previous / next rule within the same section */
  function ruleDetailNav(cfg, idx){
    const list = cfg.list;
    const prev = idx>0 ? list[idx-1] : null;
    const next = idx<list.length-1 ? list[idx+1] : null;
    if(!prev && !next) return "";
    return `<div class="detail-nav">
      ${prev?`<button class="dnav prev" data-nav="${cfg.route}/${idx-1}">${ic("arrowLeft")}<span class="dnav-t">${L(prev.title)}</span></button>`:`<span class="dnav-sp"></span>`}
      ${next?`<button class="dnav next" data-nav="${cfg.route}/${idx+1}"><span class="dnav-t">${L(next.title)}</span>${ic("arrowRight")}</button>`:`<span class="dnav-sp"></span>`}
    </div>`;
  }

  /* DETAIL screen — one rule, with a back button to its list */
  function ruleDetailView(cfg, idx){
    const r = cfg.list[idx];
    const ov = OVERVIEWS[cfg.key] || null;
    ruleState = { list:cfg.list, key:cfg.key, idx:idx, illo:(ov||{}).illo||"", tone:(ov||{}).tone||"", overview:ov };
    return `${pageHead(cfg.icon, cfg.title, null, cfg.route)}
    <section class="section wrap rule-section" style="padding-top:4px">
      <div class="rule-content reveal" id="rule-content">${renderRuleContent(r)}</div>
      ${ruleDetailNav(cfg, idx)}
      <div class="disclaimer">${ic("info")}<span>${t("disclaimer")}</span></div>
    </section>`;
  }

  function ruleNavItems(){
    return ruleState.list.map((r,i)=>{
      return `<button class="rn-item ${i===ruleState.idx?'active':''}" data-rule-idx="${i}">
        <span class="rn-ico">${ic(r.icon)}</span><span class="rn-t">${L(r.title)}</span>
        ${r.tag?`<span class="rn-tag rt-${r.type}">${r.tag}</span>`:`<span class="rn-chev">${ic("arrowRight")}</span>`}</button>`;
    }).join("");
  }

  function ruleOverview(){
    const o = ruleState.overview || {};
    const exitCls = ruleState.key==="airport-out" ? " rc-overview-exit" : (ruleState.key==="airport-in" ? " rc-overview-entry" : (ruleState.key==="post" ? " rc-overview-post" : ""));
    return `<div class="rc-overview${exitCls}">
      <div class="rc-otext">
        ${o.badge?`<span class="rc-badge">${L(o.badge)}</span>`:""}
        <h2>${L(o.title)}</h2>
        <div class="rc-divider"></div>
        <p>${L(o.text)}</p>
      </div>
      <div class="rc-illo ${ruleState.tone}">${illoOrImg(ruleState.key, window.ILLO[ruleState.illo]||"")}</div>
    </div>`;
  }

  function ruleBody(r){
    let body = "";
    const legalBlock = (r.legal && r.legal.length)
      ? `<div class="legal-note">${ic("doc")}${t("legal_note")}</div><div class="legal">${renderLegal(r.legal)}</div>`
      : "";
    if(r.legalFirst) body += legalBlock;
    if(r.facts && r.facts.length){
      body += `<div class="facts">${r.facts.map(f=>`<div class="fact${(f.ico||f.icoImg)?' fact-ico-row':''}">${f.ico?`<span class="fact-ico">${ic(f.ico)}</span>`:(f.icoImg?`<img class="fact-ico-img" src="${window.__res(f.icoImg)}" alt="" />`:"")}<div class="fact-text"><div class="fv">${typeof f.v==="string"?f.v:L(f.v)}</div><div class="fl">${L(f.l)}</div></div></div>`).join("")}</div>`;
    }
    if(r.important){
      const cl = r.importantTone || (r.type==="danger" ? "danger" : (r.type==="warning" ? "warn" : (r.type==="success"?"ok":"info")));
      body += `<div class="callout ${cl}">${ic("alert")}<span><strong>${t("important")}:</strong> ${L(r.important)}</span></div>`;
    }
    if(r.norms){
      body += `<div class="legal-note">${ic("list")}${t("norms_title")}</div>
        <div class="norm-grid">${r.norms.map(n=>`<div class="norm"><span class="norm-lead">${n.ico?`<span class="norm-ico">${ic(n.ico)}</span>`:""}<span class="norm-name">${L(n.name)}</span></span><span class="norm-val">${L(n.val)}</span></div>`).join("")}</div>`;
    }
    if(!r.legalFirst) body += legalBlock;
    if(r.legalBasis){
      body += `<div class="legal-basis">${ic("scale")}<span>${t("legal_basis")}: ${r.legalBasis}</span></div>`;
    }
    return body;
  }

  function ruleDetail(r){
    return `<div class="rc-detail rt-${r.type} rule-${r.id}">
      <div class="rc-dhead">
        <span class="rule-ico">${ic(r.icon)}</span>
        <div class="rc-dtitle"><h2>${L(r.title)}</h2><p class="rc-short">${L(r.short)}</p></div>
        ${r.tag?`<span class="rule-tag">${r.tag}</span>`:""}
      </div>
      <div class="rc-bodywrap">${ruleBody(r)}</div>
    </div>`;
  }

  /* prohibited list rendered inline inside the rule-detail pane */
  function prohibitedDetail(r){
    const scope = r.proScope === "post" ? "post" : "all";
    proState = { q:"", filter:"all", scope:scope };
    const lead = r.short || (scope==="post"
      ? {uz:"Jo‘natmalar orqali olib o‘tish taqiqlangan va cheklangan tovarlar ro‘yxati.",ru:"Список товаров, запрещённых и ограниченных к перемещению в отправлениях.",en:"List of goods prohibited and restricted in shipments.",zh:"邮寄中禁止和限制的物品清单。"}
      : {uz:"Qidiruv va status bo‘yicha filtrlash mumkin. Huquqiy asos har bir tovar ostida ko‘rsatilgan.",ru:"Можно искать и фильтровать по статусу. Правовое основание указано под каждым товаром.",en:"Search and filter by status. The legal basis is shown under each item.",zh:"可按状态搜索和筛选。每件物品下方注明法律依据。"});
    return `<div class="rc-detail rt-${r.type} rule-${r.id}">
      <div class="rc-dhead">
        <span class="rule-ico">${ic(r.icon)}</span>
        <div class="rc-dtitle"><h2 class="rc-title">${L(r.title)}</h2><p class="rc-short">${L(lead)}</p></div>
      </div>
      <div class="rc-bodywrap">
        <div class="search-bar">
          <label class="search-input">${ic("search")}<input id="pro-search" type="text" placeholder="${t("search_ph")}" /></label>
        </div>
        <div class="filters" id="pro-filters">
          <button class="chip active" data-filter="all">${t("filter_all")}</button>
          <button class="chip" data-filter="prohibited">${ic("ban")}${t("st_prohibited")}</button>
          <button class="chip" data-filter="restricted">${ic("alert")}${t("st_restricted")}</button>
        </div>
        <div class="prohibited-list" id="pro-list">${renderProItems()}</div>
      </div>
    </div>`;
  }
  function renderRuleContent(r){ return r.proScope ? prohibitedDetail(r) : ruleDetail(r); }

  function renderLegal(blocks){
    return blocks.map(b=>{
      if(b.channel){
        const isGreen = b.channel==="green";
        const lbl = isGreen
          ? ({uz:"“Yashil” yo‘lak",ru:"«Зелёный» коридор",en:"“Green” lane",zh:"“绿色”通道"})[lang]
          : ({uz:"“Qizil” yo‘lak",ru:"«Красный» коридор",en:"“Red” lane",zh:"“红色”通道"})[lang];
        return `<div class="lane-card lane-${b.channel}">
          <div class="lane-head"><span class="lane-dot"></span>${lbl}</div>
          <p class="lane-text">${L(b.p)}</p>
        </div>`;
      }
      if(b.h) return `<p class="legal-h${b.ico?' legal-h-ico':''}" style="font-weight:700;color:var(--navy)">${b.ico?`<span class="legal-h-icon">${ic(b.ico)}</span>`:""}<span>${L(b.h)}</span></p>`;
      if(b.ul) return `<ul>${b.ul.map(li=>`<li>${L(li)}</li>`).join("")}</ul>`;
      if(b.note) return `<div class="legal-ex${b.tone?' tone-'+b.tone:''}">${ic(b.ico||"info")}<span>${L(b.note)}</span></div>`;
      if(b.ex) return `<div class="legal-ex ex">${ic("bulb")}<span>${L(b.ex)}</span></div>`;
      if(b.mark){
        const phrase = L(b.mark);
        let txt = L(b.p);
        if(phrase) txt = txt.split(phrase).join(`<span class="emph-key">${phrase}</span>`);
        const knLead = b.img ? `<img class="key-note-img" src="${b.img}" alt="" />` : (b.keyIco ? `<span class="key-note-ico">${ic(b.keyIco)}</span>` : ic("alert"));
        return `<div class="key-note">${knLead}<p>${txt}</p></div>`;
      }
      if(b.tgbot) return `<a class="tg-bot" href="${b.url||'https://t.me/'}" target="_blank" rel="noopener">
        <span class="tg-ico">${ic("telegram")}</span>
        <span class="tg-txt"><span class="tg-title">${L(b.title)}</span><span class="tg-sub">${L(b.sub)}</span></span>
        ${ic("arrowRight")}
      </a>`;
      if(b.btn) return `<a class="legal-cta" href="${b.url||'#'}" target="_blank" rel="noopener">
        <span class="legal-cta-ico">${ic(b.ico||"check")}</span>
        <span class="legal-cta-txt"><span class="legal-cta-title">${L(b.btn)}</span>${b.sub?`<span class="legal-cta-sub">${L(b.sub)}</span>`:""}</span>
        ${ic("arrowRight")}
      </a>`;
      if(b.frame) return `<div class="legal-frame frame-${b.frame}">${b.frameIco?`<span class="legal-frame-ico">${ic(b.frameIco)}</span>`:""}<p>${L(b.p)}</p></div>`;
      if(b.apps) return `<div class="app-dl">
        <div class="app-dl-label">${ic("smartphone")}<span>${L({uz:"«Yoʻlovchi bojxona deklaratsiyasi» ilovasini yuklab oling:",ru:"Скачайте приложение «Пассажирская таможенная декларация»:",en:"Download the “Passenger customs declaration” app:",zh:"下载「旅客海关申报」应用："})}</span></div>
        <div class="app-dl-btns">
          <a class="app-dl-btn" href="https://play.google.com/store/apps/details?id=uz.eskishahar.app.yulovchideklaratsiyasi&hl=ru" target="_blank" rel="noopener">${ic("googleplay")}<span>Android</span></a>
          <a class="app-dl-btn" href="https://apps.apple.com/uz/app/yolovchi-deklaratsiyasi/id6753123613" target="_blank" rel="noopener">${ic("apple")}<span>iOS</span></a>
        </div>
      </div>`;
      return `<p>${L(b.p)}</p>`;
    }).join("");
  }

  /* ---- prohibited list ---- */
  let proState = { q:"", filter:"all", scope:"all" };
  function prohibitedView(scope){
    proState = { q:"", filter:"all", scope:scope };
    const titleObj = scope==="post" ? TITLES["#/prohibited-post"] : TITLES["#/prohibited"];
    const lead = scope==="post"
      ? {uz:"Jo‘natmalar orqali olib o‘tish taqiqlangan va cheklangan tovarlar ro‘yxati.",ru:"Список товаров, запрещённых и ограниченных к перемещению отправлениями.",en:"List of goods prohibited and restricted for movement by shipment.",zh:"邮寄禁止和限制移动的物品清单。"}
      : {uz:"Qidiruv va status bo‘yicha filtrlash mumkin. Huquqiy asos har bir tovar ostida ko‘rsatilgan.",ru:"Можно искать и фильтровать по статусу. Правовая основа указана под каждым товаром.",en:"Search and filter by status. The legal basis is shown under each item.",zh:"可按状态搜索和筛选。每项物品下方注明法律依据。"};
    return `${pageHead("ban", titleObj, lead)}
    <section class="section wrap" style="padding-top:10px">
      <div class="search-bar">
        <label class="search-input">${ic("search")}<input id="pro-search" type="text" placeholder="${t("search_ph")}" /></label>
      </div>
      <div class="filters" id="pro-filters">
        <button class="chip active" data-filter="all">${t("filter_all")}</button>
        <button class="chip" data-filter="prohibited">${ic("ban")}${t("st_prohibited")}</button>
        <button class="chip" data-filter="restricted">${ic("alert")}${t("st_restricted")}</button>
      </div>
      <div class="prohibited-list" id="pro-list">${renderProItems()}</div>
    </section>`;
  }
  /* highlight key tokens (numbers, limits, deadlines, key action words) in dense texts */
  const HL_WORDS = {
    uz:["taqiqlanadi","taqiqlangan","taqiqlanmaydi","ruxsatnomasiz","ruxsatnomasi","ruxsatnoma","deklaratsiya","majburiy","cheklanadi","cheklangan","ekspertizasi","ekspertiza"],
    ru:["запрещены","запрещён","запрещена","запрещено","разрешения","разрешение","декларация","обязательна","обязательно","ограничены","ограничен","ограничено","экспертиза"],
    en:["prohibited","banned","permits","permit","declaration","mandatory","restricted","expertise","required"],
    zh:["禁止","许可","申报","鉴定","强制","必须","限制"]
  };
  function escapeRe(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"); }
  function emphasize(text){
    if(!text) return "";
    let html = text;
    const words = HL_WORDS[lang] || [];
    if(words.length){
      const re = new RegExp("("+words.map(escapeRe).join("|")+")","g");
      html = html.replace(re, '<b class="hl">$1</b>');
    }
    // numbers with optional currency/unit/percent
    html = html.replace(/(\d+(?:[.,\u2013\u2014–-]\d+)*\s?(?:\$|%|kg|mln|g)?)/g, '<b class="hl">$1</b>');
    return html;
  }
  function renderProItems(){
    const items = window.DATA.prohibited.filter(it=>{
      if(proState.scope !== "post" && it.scope === "post") return false;
      if(proState.filter !== "all" && it.status !== proState.filter) return false;
      if(proState.q){
        const hay = (L(it.name) + " " + L(it.note) + " " + it.basis).toLowerCase();
        if(!hay.includes(proState.q.toLowerCase())) return false;
      }
      return true;
    });
    if(!items.length) return `<div class="empty">${ic("search")}<div style="margin-top:10px">${t("no_results")}</div></div>`;
    return items.map(it=>{
      const badgeCl = it.status==="prohibited" ? "danger" : "warn";
      const badgeIco = it.status==="prohibited" ? "ban" : "alert";
      const badgeTxt = it.status==="prohibited" ? t("st_prohibited") : t("st_restricted");
      const proIcon = window.PRO_ICONS && window.PRO_ICONS[it.num];
      const thumb = proIcon
        ? `<span class="pro-thumb-ico ${badgeCl}"><img src="${window.__res('assets/icons/pro/'+proIcon+'.png')}" alt="" /></span>`
        : `<span class="pro-num">${it.num}</span>`;
      return `<div class="pro-item">
        ${thumb}
        <div class="pro-main">
          <div class="pro-top">
            <div class="pro-name">${L(it.name)}</div>
            <span class="badge ${badgeCl}">${ic(badgeIco)}${badgeTxt}</span>
          </div>
          <div class="pro-note">${emphasize(L(it.note))}</div>
          <div class="pro-basis">${ic("scale")}<span>${t("legal_basis")}: ${it.basis}</span></div>
        </div>
      </div>`;
    }).join("");
  }

  /* ---- calculator ---- */
  let calcMode = "airport";
  function calcLimitNote(){
    return calcMode==='airport'
      ? L({uz:"Bojsiz limit: 1000$",ru:"Беспошлинный лимит: 1000$",en:"Duty-free limit: $1,000",zh:"免税额度：1000美元"})
      : L({uz:"Bojsiz limit: 200$",ru:"Беспошлинный лимит: 200$",en:"Duty-free limit: $200",zh:"免税额度：200美元"});
  }
  function calcView(){
    return `${pageHead("calculator", TITLES["#/calc"], {uz:"Taxminiy bojxona to‘lovini hisoblang. Dollar kursi Markaziy bankdan avtomatik olinadi.",ru:"Рассчитайте примерный таможенный платёж. Курс доллара берётся автоматически из ЦБ.",en:"Estimate the customs payment. The USD rate is fetched automatically from the CBU.",zh:"估算海关税费。美元汇率自动取自乌兹央行。"})}
    <section class="section wrap" style="padding-top:10px">
      <div class="calc-tabs" id="calc-tabs">
        <button data-mode="airport" class="${calcMode==='airport'?'active':''}">${ic("plane")} ${t("calc_airport")}</button>
        <button data-mode="post" class="${calcMode==='post'?'active':''}">${ic("package")} ${t("calc_post")}</button>
      </div>
      <div class="calc-wrap">
        <div class="calc-card">
          <h3>${t("calc_inputs")}</h3>
          <p class="sub" id="calc-limit-note">${calcLimitNote()}</p>
          <div id="calc-fields">${calcFields()}</div>
          <div class="rate-status" id="rate-status">${rateStatusHtml()}</div>
        </div>
        <div id="calc-result">${calcResult()}</div>
      </div>
    </section>`;
  }
  function field(id, label, val, unit, ph){
    return `<div class="field"><label>${label}</label><div class="input"><input id="${id}" type="number" inputmode="decimal" min="0" value="${val!=null?val:''}" placeholder="${ph||'0'}"/><span class="unit">${unit}</span></div></div>`;
  }
  function calcFields(){
    const rate = (+(localStorage.getItem("aero_rate") || 11970)).toFixed(2);
    if(calcMode==="airport"){
      return field("ci-val", t("calc_goods_val"), getV("ci-val"), "$") +
             field("ci-w", t("calc_weight"), getV("ci-w"), "kg") +
             field("ci-rate", t("calc_rate"), getV("ci-rate", rate), t("som"));
    }
    return field("cp-val", t("calc_goods_val"), getV("cp-val"), "$") +
           field("cp-w", t("calc_weight"), getV("cp-w"), "kg") +
           field("cp-del", t("calc_delivery"), getV("cp-del"), "$/kg") +
           field("cp-rate", t("calc_rate"), getV("cp-rate", rate), t("som"));
  }
  const calcStore = {};
  function getV(id, def){ return calcStore[id] != null ? calcStore[id] : (def!=null?def:""); }
  function rateStatusHtml(state){
    const date = localStorage.getItem("aero_rate_date")||"";
    const rate = localStorage.getItem("aero_rate")||"";
    if(state==="loading") return `<span class="rs-load">${ic("clock")}<span>${L({uz:"Markaziy bank kursi yuklanmoqda…",ru:"Загрузка курса ЦБ…",en:"Loading the CBU rate…",zh:"正在加载央行汇率…"})}</span></span>`;
    if(state==="fail") return `<span class="rs-fail">${ic("alert")}<span>${L({uz:"Kursni avtomatik olish imkoni boʻlmadi — qoʻlda kiriting",ru:"Не удалось получить курс — введите вручную",en:"Couldn’t fetch the rate — enter it manually",zh:"无法自动获取汇率——请手动输入"})}</span></span><button class="rs-refresh" id="rate-refresh" type="button" aria-label="refresh">${ic("refresh")}</button>`;
    if(localStorage.getItem("aero_rate_auto")!=="1") return `<span class="rs-man">${ic("info")}<span>${L({uz:"Kursni yangilash uchun bosing",ru:"Нажмите, чтобы обновить курс",en:"Tap to refresh the rate",zh:"点击刷新汇率"})}</span></span><button class="rs-refresh" id="rate-refresh" type="button" aria-label="refresh">${ic("refresh")}</button>`;
    return `<span class="rs-ok">${ic("check")}<span>${L({uz:"Markaziy bank kursi",ru:"Курс ЦБ РУз",en:"CBU official rate",zh:"乌兹央行官方汇率"})}: <b>${fmtRate(+rate)} ${t("som")}</b>${date?` · ${date}`:""}</span></span><button class="rs-refresh" id="rate-refresh" type="button" aria-label="refresh">${ic("refresh")}</button>`;
  }
  function initCalcRate(){
    const status = document.getElementById("rate-status");
    const fid = calcMode==="airport" ? "ci-rate" : "cp-rate";
    // sync the rate input to the stored official rate (unless the user typed their own)
    function syncField(){
      if(calcStore[fid]==null){
        const inp = document.getElementById(fid);
        const stored = localStorage.getItem("aero_rate");
        if(inp && stored){ inp.value = (+stored).toFixed(2); }
      }
      const res = document.getElementById("calc-result"); if(res) res.innerHTML = calcResult();
    }
    const ts = +(localStorage.getItem("aero_rate_ts")||0);
    const fresh = (Date.now() - ts) < 6*3600*1000;
    if(fresh && localStorage.getItem("aero_rate_auto")==="1"){
      if(status) status.innerHTML = rateStatusHtml("ok");
      syncField();
      return;
    }
    if(status) status.innerHTML = rateStatusHtml("loading");
    window.fetchCbuUsd(function(rate){
      const st = document.getElementById("rate-status");
      if(rate){
        if(st) st.innerHTML = rateStatusHtml("ok");
        syncField();
      } else {
        if(st) st.innerHTML = rateStatusHtml("fail");
      }
    });
  }

  function calcResult(){
    let r;
    if(calcMode==="airport"){
      r = window.calcAirport(getV("ci-val"), getV("ci-w"), getV("ci-rate", localStorage.getItem("aero_rate")||"11970"));
    } else {
      r = window.calcPost(getV("cp-val"), getV("cp-w"), getV("cp-del"), getV("cp-rate", localStorage.getItem("aero_rate")||"11970"));
    }
    let rows = "";
    if(!r.valid){
      return `<div class="calc-card" style="display:flex;flex-direction:column;justify-content:center;min-height:200px;text-align:center;color:var(--muted)">
        ${ic("calculator","")}<p style="margin-top:12px">${t("calc_empty")}</p></div>
        <div class="calc-disclaimer">${ic("alert")}<span>${t("calc_disclaimer")}</span></div>`;
    }
    if(r.withinLimit){
      return `<div class="result-card" style="background:linear-gradient(160deg,var(--ok) 0%, #0a6b41 100%)">
        <h3>${t("calc_result")}</h3>
        <div class="result-total">0 <span class="cur">${t("som")}</span></div>
        <div class="result-rows"><div class="result-row hl"><span class="rl">${({uz:"Bojsiz limit doirasida",ru:"В пределах беспошлинного лимита",en:"Within the duty-free limit",zh:"在免税额度内"})[lang]}</span><span class="rv">✓</span></div></div>
      </div>
      <div class="calc-disclaimer">${ic("alert")}<span>${t("calc_disclaimer")}</span></div>`;
    }
    const row = (l,v,hl)=>`<div class="result-row ${hl?'hl':''}"><span class="rl">${l}</span><span class="rv">${v}</span></div>`;
    rows += row(t("calc_r_excessVal"), "$"+fmtUSD(r.excessValue));
    if(calcMode==="post"){
      rows += row(t("calc_r_delivery"), "$"+fmtUSD(r.deliveryShare));
      rows += row(t("calc_r_customsVal"), "$"+fmtUSD(r.customsValue), true);
    }
    rows += row(calcMode==="airport" ? t("calc_weight") : t("calc_r_excessWeight"), fmtKg(r.excessWeight)+" kg");
    rows += row(t("calc_r_dutyVal"), "$"+fmtUSD(r.dutyByValue), !r.byWeightWins);
    rows += row(t("calc_r_dutyWeight"), "$"+fmtUSD(r.dutyByWeight), r.byWeightWins);
    rows += row(t("calc_r_duty"), fmtSom(r.dutySom)+" "+t("som"));
    rows += row(t("calc_r_bhm"), fmtSom(r.bhmFee)+" "+t("som"));
    return `<div class="result-card">
      <h3>${t("calc_result")}</h3>
      <div class="result-total">${fmtSom(r.total)} <span class="cur">${t("som")}</span></div>
      <div class="result-rows">${rows}</div>
    </div>
    <div class="calc-disclaimer">${ic("alert")}<span>${t("calc_disclaimer")}</span></div>`;
  }

  /* ---- mobile steps ---- */
  function mobileView(){
    return `${pageHead("smartphone", TITLES["#/mobile"], {uz:"Mobil qurilmani rasmiylashtirish",ru:"4 шага оформления мобильного устройства.",en:"4 steps to clear a mobile device.",zh:"移动设备清关的 4 个步骤。"})}
    <section class="section wrap" style="padding-top:10px">
      ${banner("phone","",{uz:"Telefon, planshet va mobil aloqa moduliga ega qurilmalar deklaratsiyalanadi",ru:"Декларируются телефоны, планшеты и устройства с модулем мобильной связи.",en:"Phones, tablets and devices with a mobile-communication module are declared.",zh:"电话、平板及带移动通信模块的设备均须申报。"},"banner-mobile")}
      <a class="video-guide" href="https://docs.google.com/videos/d/1YY6R-4RuQs6hUeFv4FCyL-q1cUK61gv32BYgTRbhWkA/edit?usp=sharing" target="_blank" rel="noopener">
        <span class="vg-ico">${ic("play")}</span>
        <span class="vg-txt">
          <span class="vg-title">${({uz:"Mobil qurilmani deklaratsiyalash",ru:"Декларирование мобильного устройства",en:"Declaring a mobile device",zh:"移动设备申报"})[lang]}</span>
          <span class="vg-sub">${({uz:"Video qo‘llanma",ru:"Видеоинструкция",en:"Video guide",zh:"视频指南"})[lang]}</span>
        </span>
        ${ic("arrowRight")}
      </a>
      <a class="video-guide web-declare" href="https://ybdweb.customs.uz/" target="_blank" rel="noopener">
        <span class="vg-ico">${ic("globe")}</span>
        <span class="vg-txt">
          <span class="vg-title">${({uz:"Web sahifa orqali telefonni deklaratsiyalash",ru:"Декларирование телефона через веб-страницу",en:"Declare your phone via the web page",zh:"通过网页申报手机"})[lang]}</span>
          <span class="vg-sub">ybdweb.customs.uz</span>
        </span>
        ${ic("arrowRight")}
      </a>
      <div class="steps">
        ${window.DATA.mobile_steps.map((s,i)=>{
          let extra = "";
          if(s.link) extra += `<div class="step-ways"><a class="step-way" href="${s.link.url}" target="_blank" rel="noopener">${ic("globe")}${s.link.label}</a></div>`;
          if(s.ways) extra += `<div class="step-ways">${s.ways.map(w=>{
            const inner = `${ic(w.ico || (w.url?"globe":"check"))}${L(w)}`;
            return w.url
              ? `<a class="step-way is-link" href="${w.url}" target="_blank" rel="noopener">${inner}</a>`
              : `<span class="step-way">${inner}</span>`;
          }).join("")}</div>`;
          if(s.video) extra += `<a class="step-video" href="${s.video.url}" target="_blank" rel="noopener">${ic("play")}<span class="sv-txt"><span class="sv-title">${L(s.video.title)}</span><span class="sv-sub">${L(s.video.sub)}</span></span>${ic("arrowRight")}</a>`;
          return `<div class="step reveal">
            <span class="step-ico">${s.icoImg?`<img src="${window.__res(s.icoImg)}" alt="" />`:''}<span class="step-ico-num">${i+1}</span></span>
            <div class="step-main">
              <h3>${L(s.title)}</h3>
              <p>${L(s.text)}</p>
              ${extra}
            </div>
          </div>`;
        }).join("")}
      </div>
      <div class="disclaimer">${ic("info")}<span>${t("disclaimer")}</span></div>
    </section>`;
  }

  /* ---- contacts ---- */
  function contactsView(){
    return `${pageHead("phone", TITLES["#/contacts"], {uz:"Aloqa raqamlari, manzillar va lokatsiyalar.",ru:"Телефоны, адреса и локации.",en:"Phone numbers, addresses and locations.",zh:"电话、地址和位置。"})}
    <section class="section wrap" style="padding-top:10px">
      <div class="contact-grid">
        ${window.DATA.contacts.map(renderContact).join("")}
      </div>
      <div class="disclaimer">${ic("info")}<span>${t("disclaimer")}</span></div>
    </section>`;
  }
  function renderContact(c){
    const rows = [];
    rows.push(`<div class="contact-rowitem">${ic("mapPin")}<span>${L(c.addr)}</span></div>`);
    if(c.phone) rows.push(`<div class="contact-rowitem">${ic("telephone")}<span>${t("c_phone")}: ${c.phone}</span></div>`);
    if(c.email) rows.push(`<div class="contact-rowitem">${ic("mail")}<span>${c.email}</span></div>`);
    const acts = [];
    if(c.phone) acts.push(`<a class="c-act call" href="tel:${c.phone.replace(/[^\d+]/g,'')}">${ic("telephone")}${t("c_call")}</a>`);
    if(c.email) acts.push(`<a class="c-act mail" href="mailto:${c.email}">${ic("mail")}${t("c_mail")}</a>`);
    if(c.map) acts.push(`<a class="c-act map" href="${c.map}" target="_blank" rel="noopener">${ic("mapPin")}${t("c_map")}</a>`);
    let ext = "";
    if(c.ext && c.ext.length){
      ext = `<div class="ext-list">
        <button class="ext-toggle" data-ext>${ic("chevDown")} ${t("c_ext")} (${c.ext.length})</button>
        <div class="ext-rows"><div class="ext-rows-inner"><div class="ext-grid">
          ${c.ext.map(e=>`<div class="ext-item"><span class="en">${L(e.l)}</span><span class="num">${e.n}</span></div>`).join("")}
        </div></div></div>
      </div>`;
    }
    return `<div class="contact reveal">
      <div class="contact-head"><span class="ico-wrap">${ic(c.icon)}</span><h3>${c.name}</h3></div>
      <div class="contact-rows">${rows.join("")}</div>
      <div class="contact-actions">${acts.join("")}</div>
      ${ext}
    </div>`;
  }

  /* ---- shared page head + breadcrumb ---- */
  /* hierarchical parent of a route — the back button always goes one level up */
  function parentOf(hash){
    hash = hash || "#/";
    const detail = hash.match(/^#\/(airport\/in|airport\/out|post)\/\d+$/);
    if(detail) return "#/" + detail[1];                 // a rule → its sub-section list
    if(hash === "#/airport/in" || hash === "#/airport/out") return "#/airport"; // list → airport
    if(hash === "#/prohibited-post") return "#/post";   // post-prohibited → post
    return "#/";                                         // airport, post, calc, mobile, contacts, prohibited → home
  }
  function pageHead(iconName, titleObj, leadObj, backHash){
    return `<div class="wrap">
      ${breadcrumb(titleObj)}
      <button class="back-btn" data-nav="${parentOf(location.hash)}">${ic("arrowLeft")} ${t("back")}</button>
      <div class="page-head">
        <div class="page-kicker">${ic(iconName)} ${t("brandName")}</div>
        <h1 class="page-title">${L(titleObj)}</h1>
        ${leadObj?`<p class="page-lead">${L(leadObj)}</p>`:""}
      </div>
    </div>`;
  }
  function breadcrumb(titleObj){
    const hash = location.hash || "#/";
    const parts = [`<button data-nav="#/">${t("home")}</button>`];
    const detail = hash.match(/^#\/(airport\/in|airport\/out|post)\/\d+$/);
    const ruleCrumb = (detail && ruleState.list[ruleState.idx])
      ? `<span class="sep">/</span><span class="cur">${L(ruleState.list[ruleState.idx].title)}</span>` : "";
    if(hash.startsWith("#/airport/")){
      parts.push(`<span class="sep">/</span><button data-nav="#/airport">${L(TITLES["#/airport"])}</button>`);
      parts.push(`<span class="sep">/</span>${detail?`<button data-nav="#/${detail[1]}">${L(titleObj)}</button>`:`<span class="cur">${L(titleObj)}</span>`}`);
      parts.push(ruleCrumb);
    } else if(detail){
      parts.push(`<span class="sep">/</span><button data-nav="#/post">${L(titleObj)}</button>`);
      parts.push(ruleCrumb);
    } else if(hash === "#/prohibited" || hash === "#/prohibited-post"){
      parts.push(`<span class="sep">/</span><span class="cur">${L(titleObj)}</span>`);
    } else {
      parts.push(`<span class="sep">/</span><span class="cur">${L(titleObj)}</span>`);
    }
    return `<nav class="breadcrumb">${parts.join("")}</nav>`;
  }

  /* ============================ ROUTER ============================ */
  function render(){
    const hash = location.hash || "#/";
    const main = document.getElementById("app");
    let html = "";
    switch(true){
      case hash === "#/": html = homeView(); break;
      case hash === "#/airport": html = airportSplitView(); break;
      case hash === "#/airport/in": html = ruleGridView(RULE_SECTIONS["airport/in"]); break;
      case hash === "#/airport/out": html = ruleGridView(RULE_SECTIONS["airport/out"]); break;
      case hash === "#/post": html = ruleGridView(RULE_SECTIONS["post"]); break;
      case /^#\/(airport\/in|airport\/out|post)\/\d+$/.test(hash): {
        const mm = hash.match(/^#\/(airport\/in|airport\/out|post)\/(\d+)$/);
        const cfg = RULE_SECTIONS[mm[1]];
        if(!cfg.list[+mm[2]]){ location.hash = cfg.route; return; }
        html = ruleDetailView(cfg, +mm[2]); break;
      }
      case hash === "#/calc": html = calcView(); break;
      case hash === "#/mobile": html = mobileView(); break;
      case hash === "#/contacts": html = contactsView(); break;
      case hash === "#/prohibited": html = prohibitedView("all"); break;
      case hash === "#/prohibited-post": html = prohibitedView("post"); break;
      default: location.hash = "#/"; return;
    }
    main.innerHTML = `<div class="view">${html}</div>`;
    window.scrollTo({top:0, behavior:"instant"});
    document.documentElement.lang = lang;
    applyScreenBg(hash);
    setupReveal();
    if(hash === "#/calc") initCalcRate();
  }

  /* ---- per-screen custom background + per-section custom icon ---- */
  function custBg(key){ try{ return localStorage.getItem("aero_bg_"+key) || ""; }catch(e){ return ""; } }
  function custIcon(id){ try{ return localStorage.getItem("aero_icon_"+id) || ""; }catch(e){ return ""; } }
  function custIllo(id){ try{ return localStorage.getItem("aero_illo_"+id) || ""; }catch(e){ return ""; } }
  function proImg(num){ try{ return localStorage.getItem("aero_proimg_"+num) || ""; }catch(e){ return ""; } }
  function illoOrImg(id, svg){
    const d = custIllo(id);
    return d ? `<img class="illo-img" src="${d}" alt="" />` : svg;
  }
  function sectionIco(id, name){
    const d = custIcon(id);
    return d ? `<img class="cust-ico" src="${d}" alt="" />` : ic(name);
  }
  function screenKeyFor(hash){
    hash = hash.replace(/\/\d+$/, ""); // rule-detail sub-routes share their list's background
    const map = {
      "#/":"home", "#/airport":"airport", "#/airport/in":"airport-in", "#/airport/out":"airport-out",
      "#/post":"post", "#/calc":"calc", "#/mobile":"mobile", "#/contacts":"contacts",
      "#/prohibited":"prohibited", "#/prohibited-post":"prohibited"
    };
    return map[hash] || "";
  }
  function applyScreenBg(hash){
    const el = document.getElementById("screen-bg");
    if(!el) return;
    const key = screenKeyFor(hash);
    const d = key ? custBg(key) : "";
    if(d){ el.style.backgroundImage = `url("${d}")`; el.classList.add("on"); }
    else { el.style.backgroundImage = "none"; el.classList.remove("on"); }
  }
  window.aeroRender = render;
  window.aeroApplyBg = applyScreenBg;

  let _io;
  function setupReveal(){
    const els = document.querySelectorAll(".reveal:not(.seen)");
    if(!("IntersectionObserver" in window)){ els.forEach(e=>e.classList.add("seen")); return; }
    if(_io) _io.disconnect();
    _io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("seen"); _io.unobserve(en.target); } });
    }, { rootMargin:"0px 0px -6% 0px", threshold:0.04 });
    els.forEach(e=>_io.observe(e));
    // safety net: reveal anything already in the viewport immediately
    requestAnimationFrame(function(){
      els.forEach(function(e){ const r=e.getBoundingClientRect(); if(r.top < window.innerHeight*0.97){ e.classList.add("seen"); } });
    });
  }

  /* ============================ EVENTS ============================ */
  function navigate(hash){ if(location.hash === hash) render(); else location.hash = hash; }

  document.addEventListener("click", function(e){
    const up = e.target.closest("[data-upload-illo]");
    if(up){ e.preventDefault(); if(window.aeroUploadIllo) window.aeroUploadIllo(up.getAttribute("data-upload-illo")); return; }
    const rmIllo = e.target.closest("[data-remove-illo]");
    if(rmIllo){
      e.preventDefault();
      try{ localStorage.removeItem("aero_illo_"+rmIllo.getAttribute("data-remove-illo")); }catch(err){}
      render();
      return;
    }
    const rmProImg = e.target.closest("[data-proimg-rm]");
    if(rmProImg){
      e.preventDefault(); e.stopPropagation();
      try{ localStorage.removeItem("aero_proimg_"+rmProImg.getAttribute("data-proimg-rm")); }catch(err){}
      render();
      return;
    }
    const upProImg = e.target.closest("[data-proimg]");
    if(upProImg){ e.preventDefault(); if(window.aeroUploadProImg) window.aeroUploadProImg(upProImg.getAttribute("data-proimg")); return; }
    const rateRefresh = e.target.closest("#rate-refresh");
    if(rateRefresh){
      e.preventDefault();
      try{ localStorage.removeItem("aero_rate_ts"); }catch(err){}
      const fid = calcMode==="airport" ? "ci-rate" : "cp-rate";
      delete calcStore[fid];
      initCalcRate();
      return;
    }
    const nav = e.target.closest("[data-nav]");
    if(nav){ e.preventDefault(); navigate(nav.getAttribute("data-nav")); return; }
    const scrollTo = e.target.closest("[data-scroll]");
    if(scrollTo){
      e.preventDefault();
      const el = document.getElementById(scrollTo.getAttribute("data-scroll"));
      if(el){ const top = el.getBoundingClientRect().top + window.scrollY - 70; window.scrollTo({top:top, behavior:"smooth"}); }
      return;
    }
    const back = e.target.closest("[data-back]");
    if(back){ e.preventDefault(); history.length>1 ? history.back() : navigate("#/"); return; }
    const toggle = e.target.closest("[data-toggle]");
    if(toggle){
      const rule = toggle.closest("[data-rule]");
      const open = rule.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open?"true":"false");
      return;
    }
    const ri = e.target.closest("[data-rule-idx]");
    if(ri){
      ruleState.idx = +ri.getAttribute("data-rule-idx");
      const content = document.getElementById("rule-content");
      if(content){
        content.classList.remove("seen"); content.classList.add("reveal");
        content.innerHTML = renderRuleContent(ruleState.list[ruleState.idx]);
        requestAnimationFrame(()=>content.classList.add("seen"));
      }
      document.querySelectorAll("#rule-nav .rn-item").forEach(el=>{
        el.classList.toggle("active", el.getAttribute("data-rule-idx") === String(ruleState.idx));
      });
      if(window.innerWidth < 860 && content){
        const top = content.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({top:top, behavior:"smooth"});
      }
      return;
    }
    const extBtn = e.target.closest("[data-ext]");
    if(extBtn){
      extBtn.classList.toggle("open");
      const rows = extBtn.parentElement.querySelector(".ext-rows");
      rows.classList.toggle("open");
      return;
    }
    const filter = e.target.closest("[data-filter]");
    if(filter){
      proState.filter = filter.getAttribute("data-filter");
      document.querySelectorAll("#pro-filters .chip").forEach(c=>{
        c.classList.remove("active","danger","warn");
      });
      filter.classList.add("active");
      if(proState.filter==="prohibited") filter.classList.add("danger");
      if(proState.filter==="restricted") filter.classList.add("warn");
      document.getElementById("pro-list").innerHTML = renderProItems();
      return;
    }
    const tab = e.target.closest("#calc-tabs button");
    if(tab){
      calcMode = tab.getAttribute("data-mode");
      document.querySelectorAll("#calc-tabs button").forEach(b=>b.classList.toggle("active", b===tab));
      document.getElementById("calc-fields").innerHTML = calcFields();
      document.getElementById("calc-result").innerHTML = calcResult();
      const ln = document.getElementById("calc-limit-note"); if(ln) ln.innerHTML = calcLimitNote();
      return;
    }
  });

  // search + calc inputs
  document.addEventListener("input", function(e){
    if(e.target.id === "pro-search"){
      proState.q = e.target.value;
      document.getElementById("pro-list").innerHTML = renderProItems();
      return;
    }
    if(/^c[ip]-/.test(e.target.id||"")){
      calcStore[e.target.id] = e.target.value;
      if(e.target.id.endsWith("-rate")) localStorage.setItem("aero_rate", e.target.value);
      document.getElementById("calc-result").innerHTML = calcResult();
      var rt = document.querySelector(".result-total");
      if(rt){ rt.classList.remove("pop"); void rt.offsetWidth; rt.classList.add("pop"); }
      return;
    }
  });

  /* ---- language switch ---- */
  function buildLangSwitch(){
    const el = document.getElementById("lang-switch");
    el.innerHTML = LANGS.map(l=>`<button data-lang="${l}" class="${l===lang?'active':''}">${window.I18N[l]._short}</button>`).join("");
    el.querySelectorAll("button").forEach(b=>{
      b.addEventListener("click", ()=>{
        lang = b.getAttribute("data-lang");
        localStorage.setItem("aero_lang", lang);
        applyLang();
        render();
        if(window.aeroCustomizeRelabel) window.aeroCustomizeRelabel();
      });
    });
  }
  function applyLang(){
    document.documentElement.lang = lang;
    document.getElementById("brand-name").innerHTML = t("brandName");
    var bs = document.getElementById("brand-sub"); if(bs) bs.textContent = t("brandSub");
    document.querySelectorAll("#lang-switch button").forEach(b=>{
      b.classList.toggle("active", b.getAttribute("data-lang")===lang);
    });
    updateThemeToggle();
  }

  /* ---- theme toggle ---- */
  function currentTheme(){ return document.documentElement.getAttribute("data-theme")==="dark" ? "dark" : "light"; }
  function updateThemeToggle(){
    var btn = document.getElementById("theme-toggle");
    if(!btn) return;
    var dark = currentTheme()==="dark";
    btn.innerHTML = ic(dark ? "sun" : "leaf");
    var label = dark ? t("theme_light") : t("theme_dark");
    btn.setAttribute("title", label);
    btn.setAttribute("aria-label", label);
  }
  function buildThemeToggle(){
    var btn = document.getElementById("theme-toggle");
    if(!btn) return;
    updateThemeToggle();
    btn.addEventListener("click", function(){
      var next = currentTheme()==="dark" ? "light" : "dark";
      if(next==="dark") document.documentElement.setAttribute("data-theme","dark");
      else document.documentElement.removeAttribute("data-theme");
      try{ localStorage.setItem("aero_theme", next); }catch(e){}
      updateThemeToggle();
    });
  }

  /* ---- intro ---- */
  function runIntro(){
    const intro = document.getElementById("intro");
    document.getElementById("intro-title").textContent = t("intro_title");
    document.getElementById("intro-sub").textContent = t("intro_sub");
    const ib = custBg("intro");
    if(ib){ intro.style.backgroundImage = `linear-gradient(180deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.28) 42%, rgba(255,255,255,.50) 100%), url("${ib}")`; }
    if(sessionStorage.getItem("aero_intro_seen")){
      intro.style.display = "none";
      return;
    }
    let done = false;
    function dismiss(){
      if(done) return; done = true;
      intro.classList.add("hide");
      sessionStorage.setItem("aero_intro_seen","1");
      setTimeout(()=>{ intro.style.display="none"; }, 750);
    }
    const timer = setTimeout(dismiss, 3500);
    // tap anywhere to skip the splash (handy on phones)
    intro.addEventListener("click", function(){ clearTimeout(timer); dismiss(); });
  }

  /* ---- init ---- */
  function safeRender(){
    try { render(); }
    catch(err){
      var a = document.getElementById("app");
      if(a) a.innerHTML = '<pre style="padding:30px;color:#c0362b;white-space:pre-wrap;font:13px monospace">RENDER ERROR:\n'+(err && err.stack ? err.stack : err)+'</pre>';
    }
  }
  window.addEventListener("hashchange", safeRender);
  function init(){
    buildLangSwitch();
    buildThemeToggle();
    applyLang();
    runIntro();
    if(!location.hash){ history.replaceState(null, "", "#/"); }
    safeRender();
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
