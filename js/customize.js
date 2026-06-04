/* ============================================================
   CUSTOMIZE — user-uploadable backgrounds (per screen)
   and icons (per section). Stored as dataURLs in localStorage.
   Keys: aero_bg_<screen> · aero_icon_<sectionId>
   ============================================================ */
(function(){
  "use strict";
  function lang(){ var l=localStorage.getItem("aero_lang")||"uz"; return (window.I18N&&window.I18N[l])?l:"uz"; }
  function L(o){ var l=lang(); return o? (o[l]||o.uz||"") : ""; }
  function ic(n){ return window.icon ? window.icon(n) : ""; }

  var UI = {
    title:{uz:"Sozlamalar",ru:"Настройки",en:"Customize",zh:"自定义"},
    sub:{uz:"Har bir oyna uchun orqa fon va bo‘lim ikonlarini yuklang.",ru:"Загрузите фон для каждого экрана и иконки разделов.",en:"Upload a background for each screen and section icons.",zh:"为每个屏幕上传背景和栏目图标。"},
    bgGroup:{uz:"Orqa fon rasmlari",ru:"Фоновые изображения",en:"Background images",zh:"背景图片"},
    illoGroup:{uz:"Illyustratsiyalar (rasmlar)",ru:"Иллюстрации",en:"Illustrations",zh:"插图"},
    iconGroup:{uz:"Bo‘lim ikonlari",ru:"Иконки разделов",en:"Section icons",zh:"栏目图标"},
    upload:{uz:"Yuklash",ru:"Загрузить",en:"Upload",zh:"上传"},
    replace:{uz:"Almashtirish",ru:"Заменить",en:"Replace",zh:"更换"},
    remove:{uz:"O‘chirish",ru:"Удалить",en:"Remove",zh:"删除"},
    resetAll:{uz:"Hammasini tiklash",ru:"Сбросить всё",en:"Reset all",zh:"全部重置"},
    btn:{uz:"Sozlamalar",ru:"Настройки",en:"Customize",zh:"自定义"},
    tooBig:{uz:"Rasm juda katta — saqlash xotirasi to‘ldi. Kichikroq rasm tanlang.",ru:"Изображение слишком большое — память хранилища заполнена. Выберите меньше.",en:"Image too large — storage is full. Choose a smaller one.",zh:"图片过大——存储已满。请选择更小的图片。"},
    notImg:{uz:"Iltimos, rasm fayli tanlang.",ru:"Пожалуйста, выберите файл изображения.",en:"Please choose an image file.",zh:"请选择图片文件。"},
    resetConfirm:{uz:"Barcha yuklangan fon va ikonlar o‘chirilsinmi?",ru:"Удалить все загруженные фоны и иконки?",en:"Remove all uploaded backgrounds and icons?",zh:"删除所有已上传的背景和图标？"}
  };

  var SCREENS = [
    {key:"intro",       l:{uz:"Zastavka (kirish) oynasi",ru:"Заставка (вход)",en:"Intro (splash) screen",zh:"启动（欢迎）屏幕"}},
    {key:"home",        l:{uz:"Bosh sahifa",ru:"Главная",en:"Home",zh:"首页"}},
    {key:"airport",     l:{uz:"Xalqaro aeroport",ru:"Аэропорт",en:"Airport",zh:"机场"}},
    {key:"airport-in",  l:{uz:"Aeroport — Uchib kelish",ru:"Аэропорт — Въезд",en:"Airport — Entry",zh:"机场——入境"}},
    {key:"airport-out", l:{uz:"Aeroport — Uchib ketish",ru:"Аэропорт — Выезд",en:"Airport — Exit",zh:"机场——出境"}},
    {key:"post",        l:{uz:"Pochta va kuryerlik",ru:"Почта и курьер",en:"Post & courier",zh:"邮政与快递"}},
    {key:"calc",        l:{uz:"Bojxona kalkulyatori",ru:"Калькулятор",en:"Calculator",zh:"计算器"}},
    {key:"mobile",      l:{uz:"Mobil qurilmalar",ru:"Мобильные устройства",en:"Mobile devices",zh:"移动设备"}},
    {key:"contacts",    l:{uz:"Bog‘lanish",ru:"Контакты",en:"Contacts",zh:"联系方式"}},
    {key:"prohibited",  l:{uz:"Taqiqlangan tovarlar",ru:"Запрещённые товары",en:"Prohibited goods",zh:"禁止物品"}}
  ];
  var SECTIONS = [
    {key:"airport",  fb:"plane",      l:{uz:"Xalqaro aeroport",ru:"Аэропорт",en:"Airport",zh:"机场"}},
    {key:"post",     fb:"package",    l:{uz:"Pochta va kuryerlik jo‘natmalari",ru:"Почта и курьер",en:"Post & courier",zh:"邮政与快递"}},
    {key:"mobile",   fb:"smartphone", l:{uz:"Mobil qurilmalar",ru:"Мобильные устройства",en:"Mobile devices",zh:"移动设备"}},
    {key:"contacts", fb:"phone",      l:{uz:"Bog‘lanish",ru:"Контакты",en:"Contacts",zh:"联系方式"}}
  ];

  function getBg(k){ try{ return localStorage.getItem("aero_bg_"+k)||""; }catch(e){ return ""; } }
  function getIcon(k){ try{ return localStorage.getItem("aero_icon_"+k)||""; }catch(e){ return ""; } }
  function getIllo(k){ try{ return localStorage.getItem("aero_illo_"+k)||""; }catch(e){ return ""; } }
  var ILLOS = [
    {key:"hero",        l:{uz:"Bosh sahifa rasmi (hero)",ru:"Изображение главной",en:"Home hero image",zh:"首页主图"}},
    {key:"airport-in",  l:{uz:"Aeroport — Uchib kelish",ru:"Аэропорт — Въезд",en:"Airport — Entry",zh:"机场——入境"}},
    {key:"airport-out", l:{uz:"Aeroport — Uchib ketish",ru:"Аэропорт — Выезд",en:"Airport — Exit",zh:"机场——出境"}},
    {key:"post",        l:{uz:"Pochta va kuryerlik",ru:"Почта и курьер",en:"Post & courier",zh:"邮政与快递"}}
  ];

  /* resize + store an uploaded image */
  function processAndStore(file, storeKey, kind, done){
    if(!file || !/^image\//.test(file.type)){ alert(L(UI.notImg)); return; }
    var isIcon = kind==="icon";
    var url = URL.createObjectURL(file);
    var img = new Image();
    img.onload = function(){
      var maxW = kind==="icon" ? 256 : kind==="proimg" ? 360 : 1800;
      var scale = Math.min(1, maxW/img.width);
      var cw = Math.max(1,Math.round(img.width*scale)), ch = Math.max(1,Math.round(img.height*scale));
      var c = document.createElement("canvas"); c.width=cw; c.height=ch;
      c.getContext("2d").drawImage(img,0,0,cw,ch);
      var data = isIcon ? c.toDataURL("image/png") : c.toDataURL("image/jpeg", 0.82);
      URL.revokeObjectURL(url);
      try{ localStorage.setItem(storeKey, data); }
      catch(err){ alert(L(UI.tooBig)); return; }
      done && done();
    };
    img.onerror = function(){ URL.revokeObjectURL(url); alert(L(UI.notImg)); };
    img.src = url;
  }

  function refreshAfterChange(){
    if(window.aeroRender) window.aeroRender();
    if(window.aeroApplyBg) window.aeroApplyBg(location.hash||"#/");
    // intro live update if visible
    var intro = document.getElementById("intro");
    if(intro && intro.style.display!=="none" && !intro.classList.contains("hide")){
      var ib = getBg("intro");
      intro.style.backgroundImage = ib
        ? 'linear-gradient(180deg, rgba(255,255,255,.72) 0%, rgba(255,255,255,.28) 42%, rgba(255,255,255,.50) 100%), url("'+ib+'")'
        : "";
    }
    buildBody();
  }

  /* ---------- panel ---------- */
  var root, fileInput, pending=null;

  function open(){ root.classList.add("open"); document.body.style.overflow="hidden"; buildBody(); }
  function close(){ root.classList.remove("open"); document.body.style.overflow=""; }

  function thumb(data, isIcon){
    if(data) return '<span class="cz-thumb '+(isIcon?'icon':'')+'" style="background-image:url('+data+')"></span>';
    return '<span class="cz-thumb empty '+(isIcon?'icon':'')+'">'+ic("image")+'</span>';
  }

  function row(kind, item){
    var isIcon = kind==="icon";
    var data = isIcon ? getIcon(item.key) : getBg(item.key);
    var has = !!data;
    var preview = isIcon && !has ? '<span class="cz-thumb icon fb">'+ic(item.fb)+'</span>' : thumb(data, isIcon);
    return '<div class="cz-row">'
      + preview
      + '<div class="cz-rl"><div class="cz-name">'+L(item.l)+'</div></div>'
      + '<div class="cz-actions">'
      +   '<button class="cz-btn up" data-kind="'+kind+'" data-key="'+item.key+'" data-icon="'+(isIcon?1:0)+'">'+ic("upload")+'<span>'+L(has?UI.replace:UI.upload)+'</span></button>'
      +   (has?'<button class="cz-btn rm" data-rm="'+kind+'" data-key="'+item.key+'" aria-label="'+L(UI.remove)+'">'+ic("trash")+'</button>':'')
      + '</div>'
      + '</div>';
  }

  function buildBody(){
    var body = root.querySelector(".cz-body");
    if(!body) return;
    body.innerHTML =
      '<div class="cz-group"><div class="cz-gh">'+ic("image")+'<span>'+L(UI.bgGroup)+'</span></div>'
        + SCREENS.map(function(s){return row("bg", s);}).join("")
      + '</div>'
      + '<div class="cz-group"><div class="cz-gh">'+ic("image")+'<span>'+L(UI.illoGroup)+'</span></div>'
        + ILLOS.map(function(s){return row("illo", s);}).join("")
      + '</div>'
      + '<div class="cz-group"><div class="cz-gh">'+ic("luggage")+'<span>'+L(UI.iconGroup)+'</span></div>'
        + SECTIONS.map(function(s){return row("icon", s);}).join("")
      + '</div>'
      + '<button class="cz-reset" data-reset>'+ic("trash")+'<span>'+L(UI.resetAll)+'</span></button>';
  }

  function build(){
    root = document.createElement("div");
    root.id = "cust-panel";
    root.innerHTML =
      '<div class="cz-backdrop" data-close></div>'
      + '<aside class="cz-drawer" role="dialog" aria-label="'+L(UI.title)+'">'
      +   '<div class="cz-head">'
      +     '<div><div class="cz-title">'+L(UI.title)+'</div><div class="cz-sub">'+L(UI.sub)+'</div></div>'
      +     '<button class="cz-x" data-close aria-label="close">'+ic("close")+'</button>'
      +   '</div>'
      +   '<div class="cz-body"></div>'
      + '</aside>';
    document.body.appendChild(root);

    fileInput = document.createElement("input");
    fileInput.type = "file"; fileInput.accept = "image/*"; fileInput.style.display="none";
    document.body.appendChild(fileInput);

    fileInput.addEventListener("change", function(){
      var f = fileInput.files && fileInput.files[0];
      fileInput.value = "";
      if(!f || !pending) return;
      var prefix = pending.kind==="icon" ? "aero_icon_" : pending.kind==="illo" ? "aero_illo_" : pending.kind==="proimg" ? "aero_proimg_" : "aero_bg_";
      var storeKey = prefix + pending.key;
      processAndStore(f, storeKey, pending.kind, refreshAfterChange);
    });

    root.addEventListener("click", function(e){
      if(e.target.closest("[data-close]")){ close(); return; }
      var up = e.target.closest(".cz-btn.up");
      if(up){ pending = {kind:up.getAttribute("data-kind"), key:up.getAttribute("data-key")}; fileInput.click(); return; }
      var rm = e.target.closest("[data-rm]");
      if(rm){
        var rmKind = rm.getAttribute("data-rm");
        var rmPrefix = rmKind==="icon" ? "aero_icon_" : rmKind==="illo" ? "aero_illo_" : "aero_bg_";
        var k = rmPrefix + rm.getAttribute("data-key");
        try{ localStorage.removeItem(k); }catch(err){}
        refreshAfterChange(); return;
      }
      if(e.target.closest("[data-reset]")){
        if(!confirm(L(UI.resetConfirm))) return;
        try{
          Object.keys(localStorage).forEach(function(k){ if(/^aero_(bg|icon|illo)_/.test(k)) localStorage.removeItem(k); });
        }catch(err){}
        refreshAfterChange(); return;
      }
    });
  }

  function mountButton(){
    var btn = document.getElementById("cust-toggle");
    if(!btn) return;
    btn.innerHTML = ic("camera");
    btn.setAttribute("title", L(UI.btn));
    btn.setAttribute("aria-label", L(UI.btn));
    btn.addEventListener("click", open);
  }

  function init(){ build(); mountButton();
    // inline uploader hook (e.g. hero illustration "upload your own" button)
    window.aeroUploadIllo = function(key){
      pending = { kind:"illo", key:key||"hero" };
      if(fileInput) fileInput.click();
    };
    // per-prohibited-item small image uploader
    window.aeroUploadProImg = function(num){
      pending = { kind:"proimg", key:String(num) };
      if(fileInput) fileInput.click();
    };
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.aeroCustomizeRelabel = function(){ // called on language change
    var btn=document.getElementById("cust-toggle");
    if(btn){ btn.setAttribute("title", L(UI.btn)); btn.setAttribute("aria-label", L(UI.btn)); }
    if(root){ var t=root.querySelector(".cz-title"); if(t) t.textContent=L(UI.title);
      var s=root.querySelector(".cz-sub"); if(s) s.textContent=L(UI.sub);
      if(root.classList.contains("open")) buildBody(); }
  };
})();
