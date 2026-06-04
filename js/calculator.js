/* ============================================================
   CALCULATOR — taxminiy bojxona to‘lovi
   Spec:
   • Aeroport: limit 1000$. Boj = max(ortiqcha qiymatning 30%,
     ortiqcha vaznning har kg uchun 3$) + BHM ning 25% (BHM=412000).
   • Jo‘natma: limit 200$. Bojxona qiymati = ortiqcha tovar qiymati
     + ortiqcha vaznga nisbatan yetkazib berish ulushi. Boj = max(30%,
     3$/kg) + BHM ning 25%.
   Vazn ortiqcha qismi: totalWeight * (excessValue / goodsValue).
   ============================================================ */
window.BHM = 412000;
window.BHM_RATE = 0.25; // BHM yig‘imi 25%
window.DUTY_VAL_RATE = 0.30;
window.DUTY_KG_USD = 3;

window.calcAirport = function(goodsValue, totalWeight, rate){
  goodsValue = +goodsValue || 0;
  totalWeight = +totalWeight || 0;
  rate = +rate || 0;
  const LIMIT = 1000;
  const r = { valid:false, withinLimit:false };
  if(goodsValue <= 0) return r;
  r.valid = true;
  const excessValue = Math.max(0, goodsValue - LIMIT);
  if(excessValue <= 0){ r.withinLimit = true; r.total = 0; return r; }
  const excessWeight = totalWeight > 0 ? totalWeight * (excessValue / goodsValue) : 0;
  const dutyByValue = excessValue * window.DUTY_VAL_RATE;        // USD
  const dutyByWeight = excessWeight * window.DUTY_KG_USD;        // USD
  const dutyUSD = Math.max(dutyByValue, dutyByWeight);
  const dutySom = dutyUSD * rate;
  const bhmFee = window.BHM * window.BHM_RATE;
  r.excessValue = excessValue;
  r.excessWeight = excessWeight;
  r.dutyByValue = dutyByValue;
  r.dutyByWeight = dutyByWeight;
  r.byWeightWins = dutyByWeight > dutyByValue;
  r.dutyUSD = dutyUSD;
  r.dutySom = dutySom;
  r.bhmFee = bhmFee;
  r.total = dutySom + bhmFee;
  return r;
};

window.calcPost = function(goodsValue, totalWeight, deliveryPerKg, rate){
  goodsValue = +goodsValue || 0;
  totalWeight = +totalWeight || 0;
  deliveryPerKg = +deliveryPerKg || 0;
  rate = +rate || 0;
  const LIMIT = 200;
  const r = { valid:false, withinLimit:false };
  if(goodsValue <= 0) return r;
  r.valid = true;
  const excessValue = Math.max(0, goodsValue - LIMIT);
  if(excessValue <= 0){ r.withinLimit = true; r.total = 0; return r; }
  const ratio = excessValue / goodsValue;
  const excessWeight = totalWeight > 0 ? totalWeight * ratio : 0;
  const deliveryTotal = deliveryPerKg * totalWeight;
  const deliveryShare = deliveryTotal * ratio;                  // ortiqcha qismga to‘g‘ri keladigan yetkazib berish
  const customsValue = excessValue + deliveryShare;             // USD
  const dutyByValue = customsValue * window.DUTY_VAL_RATE;       // USD
  const dutyByWeight = excessWeight * window.DUTY_KG_USD;        // USD
  const dutyUSD = Math.max(dutyByValue, dutyByWeight);
  const dutySom = dutyUSD * rate;
  const bhmFee = window.BHM * window.BHM_RATE;
  r.excessValue = excessValue;
  r.excessWeight = excessWeight;
  r.deliveryShare = deliveryShare;
  r.customsValue = customsValue;
  r.dutyByValue = dutyByValue;
  r.dutyByWeight = dutyByWeight;
  r.byWeightWins = dutyByWeight > dutyByValue;
  r.dutyUSD = dutyUSD;
  r.dutySom = dutySom;
  r.bhmFee = bhmFee;
  r.total = dutySom + bhmFee;
  return r;
};

// number formatting
window.fmtSom = function(n){
  return Math.round(n).toLocaleString('ru-RU').replace(/\u00A0/g,' ');
};
window.fmtUSD = function(n){
  return (Math.round(n*100)/100).toLocaleString('en-US',{minimumFractionDigits:0, maximumFractionDigits:2});
};
window.fmtKg = function(n){
  return (Math.round(n*100)/100).toLocaleString('en-US',{minimumFractionDigits:0, maximumFractionDigits:2});
};

/* ---- Markaziy bank (CBU) USD kursini avtomatik olish ---- */
// Eslatma: so‘rov hech qachon cheksiz osilib qolmasligi uchun 7 soniyalik
// timeout qo‘yilgan — internet sekin yoki bloklangan boʻlsa, qoʻlda kiritishga
// silliq qaytadi.
window.fetchCbuUsd = function(cb){
  var done = false;
  function finish(rate, date){ if(done) return; done = true; cb && cb(rate, date); }
  try{
    var ctrl = (typeof AbortController !== "undefined") ? new AbortController() : null;
    var timer = setTimeout(function(){
      if(ctrl){ try{ ctrl.abort(); }catch(e){} }
      finish(null);
    }, 7000);
    fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/USD/", { cache:"no-store", signal: ctrl ? ctrl.signal : undefined })
      .then(function(r){ return r.json(); })
      .then(function(d){
        clearTimeout(timer);
        var item = Array.isArray(d) ? d[0] : d;
        var rate = item && item.Rate ? Math.round(parseFloat(item.Rate)) : 0;
        if(rate > 0){
          try{
            localStorage.setItem("aero_rate", String(rate));
            localStorage.setItem("aero_rate_date", item.Date || "");
            localStorage.setItem("aero_rate_auto", "1");
            localStorage.setItem("aero_rate_ts", String(Date.now()));
          }catch(e){}
          finish(rate, item.Date || "");
        } else { finish(null); }
      })
      .catch(function(){ clearTimeout(timer); finish(null); });
  }catch(e){ finish(null); }
};
