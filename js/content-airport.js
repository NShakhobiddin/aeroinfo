/* ============================================================
   CONTENT — Xalqaro aeroport: Kirish & Chiqish
   Per card: title/short/important/norms/legal => 4 langs.
   legal blocks: { p:{4} } | { h:{4} } | { ul:[{4}, ...] }
   ============================================================ */
window.DATA = window.DATA || {};

DATA.airport_in = [
  {
    id: "in-duty-free", icon: "taxfree", type: "info", tag:"1 000 $",
    facts: [
      { v:"1 000 $", ico:"taxfreebig", l:{uz:"Bojsiz olib kirish me’yori",ru:"Беспошлинная норма ввоза",en:"Duty-free import limit",zh:"免税进口限额"} },
      { v:{uz:"3 kalendar kun",ru:"3 кал. дня",en:"3 calendar days",zh:"3 个日历日"}, ico:"calday", l:{uz:"3 kalendar kundan ko‘p vaqt xorijda bo‘lganda imtiyoz beriladi",ru:"Льгота при пребывании за рубежом более 3 календарных дней",en:"Allowance applies when abroad more than 3 calendar days",zh:"在境外停留超过 3 个日历日时享受免税"} },
      { v:{uz:"3+ marta",ru:"3+ раз",en:"3+ times",zh:"3+ 次"}, ico:"calmonth", l:{uz:"Kalendar oyda 3 va undan ortiq xorijda bo‘lganda imtiyoz yo‘q",ru:"Если 3 и более раз в кал. месяц — льготы нет",en:"No allowance if abroad 3+ times in a calendar month",zh:"一个日历月内 3 次及以上则无免税"} }
    ],
    title: { uz:"Bojsiz olib kirish me’yorlari", ru:"Нормы беспошлинного ввоза", en:"Duty-free import limits", zh:"免税入境限额" },
    short: {
      uz:"Havo transportida shaxsiy ehtiyoj uchun 1000 AQSH dollarigacha bo‘lgan tovarlarni bojsiz olib kirish mumkin.",
      ru:"Воздушным транспортом можно ввезти беспошлинно товары для личных нужд на сумму до 1000 долларов США.",
      en:"By air, goods for personal use worth up to USD 1,000 may be imported duty-free.",
      zh:"通过航空运输，可免税携带价值不超过 1000 美元的个人物品。" },
    important: {
      uz:"Imtiyoz xorijda 3 kalendar kundan kam bo‘lganda yoki bir kalendar oyda 3 va undan ortiq marta kelganda qo‘llanilmaydi.",
      ru:"Льгота не применяется при пребывании за рубежом менее 3 календарных дней или при въезде 3 и более раз в календарный месяц.",
      en:"The allowance does not apply if you stayed abroad less than 3 calendar days, or entered 3+ times in a calendar month.",
      zh:"若在境外停留少于 3 个日历日，或在一个日历月内入境 3 次及以上，则不适用该免税额。" },
    legal: [
      { mark:{uz:"shaxsiy ehtiyoji uchun notijorat maqsadlarida",ru:"для личных нужд в некоммерческих целях",en:"personal, non-commercial use",zh:"个人因私非商业目的"}, p:{
        uz:"“Jismoniy shaxslar tomonidan shaxsiy ehtiyoji uchun notijorat maqsadlarida respublikaga olib kiriladigan tovarlarning bojsiz olib kirish normasi havo transportida — 1000 AQSH dollari etib belgilangan.<br>Ushbu me’yor xorijiy davlatda uch kalendar kundan kam va bir kalendar oyda 3 va undan ortiq marotaba boʻlganda qoʻllanilmaydi.”",
        ru:"«Норма беспошлинного ввоза товаров, ввозимых физическими лицами для личных нужд в некоммерческих целях, воздушным транспортом установлена в размере 1000 долларов США. Данная норма не применяется при пребывании в иностранном государстве менее трёх календарных дней и при въезде 3 и более раз в течение календарного месяца.»",
        en:"“The duty-free import limit for goods brought into the republic by individuals for personal, non-commercial use by air is set at USD 1,000. This limit does not apply if the person stayed abroad less than three calendar days, or entered 3 or more times within one calendar month.”",
        zh:"「个人因私非商业目的经航空运输携带入境物品的免税限额定为 1000 美元。若在外国停留少于三个日历日，或在一个日历月内入境 3 次及以上，则不适用该限额。」" } },
      { h:{ uz:"Kalendar kun nima?", ru:"Что такое календарный день?", en:"What is a calendar day?", zh:"什么是日历日？" }, ico:"calday" },
      { note:{
        uz:"Kalendar kun – kalendar jadvalda belgilangan kun bo‘lib, uzluksiz 24 soatlik davrni anglatadi va unda hech qanday kunlar (“dam olish”, “bayram” yoki “bank kuni” kabi) istisno qilinmaydi. Ya’ni chet davlatda to‘liq bo‘lgan 3 kuningiz e’tiborga olinadi.",
        ru:"Календарный день — обозначенный в календаре день, означающий непрерывный 24-часовой период, при этом никакие дни (например, «выходные», «праздничные» или «банковские») не исключаются. То есть учитываются 3 полных дня, проведённые за рубежом.",
        en:"A calendar day is a day marked in the calendar — a continuous 24-hour period — with no days (such as “weekends”, “holidays” or “bank days”) excluded. That is, your 3 full days abroad are counted.",
        zh:"日历日是指日历上标示的一天，即连续 24 小时的时段，不排除任何日子（如「周末」「节假日」或「银行工作日」）。即按您在境外停留的 3 个完整日计算。" } },
      { ex:{
        uz:"Misol uchun, 1-yanvar kuni 10:00 da uchib ketdingiz va 5-yanvar kuni 15:00 da qaytdingiz. Demak Siz chet davlatda to‘liq (00:00 dan 23:59 gacha) 2, 3, 4-yanvar kunlari bo‘lgansiz — imtiyoz olasiz. Agar 4-yanvarda qaytganingizda imtiyoz qo‘llanilmasdi.",
        ru:"Например, вы вылетели 1 января в 10:00 и вернулись 5 января в 15:00. Значит, вы полностью (с 00:00 до 23:59) находились за рубежом 2, 3 и 4 января — льгота предоставляется. Если бы вы вернулись 4 января, льгота не применялась бы.",
        en:"For example, you flew out on 1 January at 10:00 and returned on 5 January at 15:00. So you were fully abroad (00:00–23:59) on 2, 3 and 4 January — you get the allowance. Had you returned on 4 January, it would not apply.",
        zh:"例如，您于 1 月 1 日 10:00 出境，1 月 5 日 15:00 返回。即您在 1 月 2、3、4 日完整地（00:00 至 23:59）身处境外——可享受免税。若您在 1 月 4 日返回，则不适用。" } },
      { h:{ uz:"Kalendar oy nima?", ru:"Что такое календарный месяц?", en:"What is a calendar month?", zh:"什么是日历月？" }, ico:"calmonth" },
      { note:{
        uz:"Kalendar oy – kalendar jadvalda belgilangan oy bo‘lib, oyning 1-sanasidan boshlab so‘nggi sanasigacha bo‘lgan uzluksiz davrni anglatadi. Misol uchun, 1-yanvardan 31-yanvargacha.",
        ru:"Календарный месяц — обозначенный в календаре месяц, означающий непрерывный период с 1-го по последнее число месяца. Например, с 1 по 31 января.",
        en:"A calendar month is a month marked in the calendar — a continuous period from the 1st to the last day of the month. For example, from 1 to 31 January.",
        zh:"日历月是指日历上标示的月份，即从当月 1 日至最后一日的连续时段。例如，从 1 月 1 日至 1 月 31 日。" } }
    ]
  },
  {
    id: "in-quantity", icon: "quantity", type: "warning", tag:"21+",
    title: { uz:"Miqdoriy cheklovlar", ru:"Количественные ограничения", en:"Quantity limits", zh:"数量限制" },
    short: {
      uz:"Alkogol, sigaret, sigara, tabak, atir va biologik faol qo‘shimchalar bo‘yicha alohida miqdoriy normalar belgilangan.",
      ru:"Установлены отдельные нормы по алкоголю, сигаретам, сигарам, табаку, парфюмерии и БАД.",
      en:"Separate limits apply to alcohol, cigarettes, cigars, tobacco, perfume and dietary supplements.",
      zh:"对酒类、香烟、雪茄、烟草、香水和膳食补充剂设有单独限额。" },
    norms: [
      { ico:"alcohol", name:{uz:"Alkogol (shu jumladan pivo)",ru:"Алкоголь (включая пиво)",en:"Alcohol (incl. beer)",zh:"酒类（含啤酒）"}, val:{uz:"2 litr",ru:"2 литра",en:"2 litres",zh:"2 升"} },
      { ico:"cigarettes", name:{uz:"Sigaret",ru:"Сигареты",en:"Cigarettes",zh:"香烟"}, val:{uz:"200 dona",ru:"200 шт.",en:"200 pcs",zh:"200 支"} },
      { ico:"cigars", name:{uz:"Sigara",ru:"Сигары",en:"Cigars",zh:"雪茄"}, val:{uz:"5 dona",ru:"5 шт.",en:"5 pcs",zh:"5 支"} },
      { ico:"tobacco", name:{uz:"Tabak",ru:"Табак",en:"Tobacco",zh:"烟草"}, val:{uz:"100 gramm",ru:"100 г",en:"100 g",zh:"100 克"} },
      { ico:"perfume", name:{uz:"Atir va ifor suvlari",ru:"Парфюмерия",en:"Perfume",zh:"香水"}, val:{uz:"3 dona (≤300 ml)",ru:"3 шт. (≤300 мл)",en:"3 pcs (≤300 ml)",zh:"3 件 (≤300 毫升)"} },
      { ico:"supplements", name:{uz:"Biologik faol qo‘shimchalar (BAA)",ru:"БАД",en:"Dietary supplements",zh:"膳食补充剂"}, val:{uz:"10 nom (≤3 kg)",ru:"10 наим. (≤3 кг)",en:"10 names (≤3 kg)",zh:"10 种 (≤3 公斤)"} }
    ],
    important: {
      uz:"Alkogol va tamaki mahsulotlarini 21 yoshga to‘lmagan shaxslar olib kirishi taqiqlanadi.",
      ru:"Ввоз алкоголя и табачных изделий лицами младше 21 года запрещён.",
      en:"Import of alcohol and tobacco by persons under 21 is prohibited.",
      zh:"禁止 21 岁以下人员携带酒类和烟草制品入境。" },
    legal: [
      { p:{
        uz:"Biologik faol qoʻshimchalar — 10 ta turli nomdagi va birlamchi qadoqda boʻlgan (umumiy ogʻirligi 3 kg dan hamda har bir nomdagi biologik faol qoʻshimcha 1 ta qadoqdan oshmagan miqdorda).",
        ru:"Биологически активные добавки — 10 различных наименований в первичной упаковке (общим весом не более 3 кг, при этом каждое наименование БАД — не более 1 упаковки).",
        en:"Dietary supplements — 10 different names in primary packaging (total weight no more than 3 kg, and no more than 1 package of each named supplement).",
        zh:"膳食补充剂——10 种不同名称、原厂包装（总重量不超过 3 公斤，且每种补充剂不超过 1 包）。" } }
    ]
  },
  {
    id: "in-purpose", icon: "inspection", type: "info",
    title: { uz:"Tovar maqsadini aniqlash", ru:"Определение цели товара", en:"Determining the purpose of goods", zh:"确定货物用途" },
    short: {
      uz:"Tovar shaxsiy (notijorat) yoki tijorat maqsadidami — xususiyat, miqdor, takroriylik va safar holatlari bo‘yicha aniqlanadi.",
      ru:"Личное (некоммерческое) или коммерческое назначение определяется по характеру, количеству, повторности и обстоятельствам поездки.",
      en:"Personal (non-commercial) or commercial purpose is judged by nature, quantity, frequency and trip circumstances.",
      zh:"个人（非商业）或商业用途依据物品性质、数量、频次和出行情况判定。" },
    legal: [
      { ico:"noncommercial", tone:"ok", note:{
        uz:"<span class='tx-ok'>Notijorat maqsadlar uchun tovarlar</span> — jismoniy shaxslar tomonidan bojxona chegarasi orqali olib oʻtiladigan shaxsiy, oilaviy (ota-onasi, turmush oʻrtogʻi va farzandlari) ehtiyojlari uchun moʻljallangan hamda tadbirkorlik yoki boshqa tijorat faoliyatini amalga oshirish bilan bogʻliq boʻlmagan tovarlar",
        ru:"«<span class='tx-ok'>товары для некоммерческих целей</span> — товары, перемещаемые физическими лицами через таможенную границу, предназначенные для личных, семейных (родителей, супруга и детей) нужд и не связанные с осуществлением предпринимательской или иной коммерческой деятельности;»",
        en:"“<span class='tx-ok'>goods for non-commercial purposes</span> — goods moved across the customs border by individuals, intended for personal and family (parents, spouse and children) needs and not related to entrepreneurial or other commercial activity;”",
        zh:"「<span class='tx-ok'>非商业目的物品</span>——由个人经海关边境携带、用于个人及家庭（父母、配偶和子女）需要，且与经营或其他商业活动无关的物品；」" } },
      { ico:"commercial", tone:"warn", note:{
        uz:"<span class='tx-warn'>Tijorat maqsadlar uchun tovarlar</span> — bojxona chegarasi orqali olib oʻtiladigan ishlab chiqarish, tadbirkorlik yoki boshqa tijorat faoliyati uchun moʻljallangan tovarlar",
        ru:"«<span class='tx-warn'>товары для коммерческих целей</span> — товары, перемещаемые через таможенную границу, предназначенные для производственной, предпринимательской или иной коммерческой деятельности.»",
        en:"“<span class='tx-warn'>goods for commercial purposes</span> — goods moved across the customs border, intended for manufacturing, entrepreneurial or other commercial activity.”",
        zh:"「<span class='tx-warn'>商业目的物品</span>——经海关边境携带、用于生产、经营或其他商业活动的物品。」" } },
      { h:{ uz:"Mansabdor shaxs quyidagi mezonlarga asoslanadi:", ru:"Должностное лицо руководствуется следующими критериями:", en:"The official relies on the following criteria:", zh:"工作人员依据以下标准：" } },
      { ul:[
        { uz:"<b class='tx-key'>tovarlarning xususiyati</b> — isteʼmol xususiyatlari shaxsiy, oilaviy va maishiy ehtiyojlar uchun moʻljallanganligi;",
          ru:"<b class='tx-key'>характер товаров</b> — потребительские свойства предназначены для личных, семейных и бытовых нужд;",
          en:"<b class='tx-key'>the nature of the goods</b> — whether their consumer properties are meant for personal, family and household needs;",
          zh:"<b class='tx-key'>物品性质</b>——其消费属性是否用于个人、家庭和日常需要；" },
        { uz:"<b class='tx-key'>tovarlarning miqdori</b> — bir turdagi tovarlar shaxs va oilasi ehtiyojidan ortiq boʻlsa, <b class='tx-warn'>aksi isbotlanmaguncha tijorat deb eʼtirof etiladi</b>;",
          ru:"<b class='tx-key'>количество товаров</b> — если однотипных товаров больше, чем нужно лицу и его семье, <b class='tx-warn'>они признаются коммерческими, пока не доказано обратное</b>;",
          en:"<b class='tx-key'>the quantity of goods</b> — if goods of one type exceed the needs of the person and family, <b class='tx-warn'>they are deemed commercial unless proven otherwise</b>;",
          zh:"<b class='tx-key'>物品数量</b>——若同类物品超出本人及家庭需要，<b class='tx-warn'>除非另有证明，否则视为商业用途</b>；" },
        { uz:"<b class='tx-key'>olib oʻtishning takroriyligi</b> — bir turdagi tovarlar bir necha bor olib kirilsa, <b class='tx-warn'>aksi isbotlanmaguncha tijorat deb eʼtirof etiladi</b> <i>(pasportdagi shtamp yoki elektron qayd asos boʻladi)</i>;",
          ru:"<b class='tx-key'>повторность перемещения</b> — если однотипные товары ввозятся неоднократно, <b class='tx-warn'>они признаются коммерческими, пока не доказано обратное</b> <i>(основанием служит штамп в паспорте или электронная запись)</i>;",
          en:"<b class='tx-key'>the frequency of movement</b> — if goods of one type are brought in repeatedly, <b class='tx-warn'>they are deemed commercial unless proven otherwise</b> <i>(a passport stamp or electronic record serves as basis)</i>;",
          zh:"<b class='tx-key'>携带的频次</b>——若同类物品多次携带入境，<b class='tx-warn'>除非另有证明，否则视为商业用途</b><i>（以护照印章或电子记录为依据）</i>；" },
        { uz:"<b class='tx-key'>safarning holatlari</b> — maqsadi, davomiyligi va kelish davlati;",
          ru:"<b class='tx-key'>обстоятельства поездки</b> — её цель, продолжительность и страна прибытия;",
          en:"<b class='tx-key'>the circumstances of the trip</b> — its purpose, duration and country of arrival;",
          zh:"<b class='tx-key'>出行情况</b>——目的、时长及到达国家；" },
        { uz:"huquqni muhofaza qiluvchi organlardan kelib tushgan maʼlumotlar.",
          ru:"сведения, поступившие от правоохранительных органов.",
          en:"information received from law-enforcement bodies.",
          zh:"执法机关提供的信息。" }
      ]}
    ]
  },
  {
    id: "in-currency", icon: "banknote", type: "info", tag:"100 mln",
    facts: [
      { v:{uz:"Cheklanmagan",ru:"Без лимита",en:"Unlimited",zh:"不限"}, ico:"cashunlimited", l:{uz:"Miqdorda naqd valyuta olib kirish mumkin",ru:"Ввоз наличной валюты",en:"Bringing in cash",zh:"携带现金入境"} },
      { v:"100 mln", ico:"cashstack", l:{uz:"so‘mdan ortig‘i — deklaratsiya",ru:"свыше сумов — декларация",en:"above this — declare",zh:"超过需申报"} }
    ],
    title: { uz:"Valyuta olib kirish", ru:"Ввоз валюты", en:"Bringing in currency", zh:"携带货币入境" },
    short: {
      uz:"Naqd valyuta cheklanmagan miqdorda olib kiriladi;<br>100 mln so‘m ekvivalentidan ortig‘i deklaratsiya qilinadi.",
      ru:"Наличная валюта ввозится без ограничений; свыше эквивалента 100 млн сумов — декларируется.",
      en:"Cash currency may be brought in without limit; above the equivalent of 100M soms it must be declared.",
      zh:"现金货币入境不限额；超过 1 亿苏姆等值须申报。" },
    important: {
      uz:"100 mln so‘m ekvivalentidan ortiq naqd pul yo‘lovchi bojxona deklaratsiyasi orqali rasmiylashtiriladi.",
      ru:"Наличные свыше эквивалента 100 млн сумов оформляются через пассажирскую таможенную декларацию.",
      en:"Cash above the equivalent of 100M soms is processed via a passenger customs declaration.",
      zh:"超过 1 亿苏姆等值的现金须通过旅客海关申报单办理。" },
    legal: [
      { p:{
        uz:"“Jismoniy shaxslar tomonidan Oʻzbekiston Respublikasi hududiga bojxona nazorati qoidalariga rioya qilgan holda, naqd valyuta mablagʻlarini olib kirish cheklanmagan miqdorda amalga oshiriladi.”",
        ru:"«Ввоз физическими лицами наличных валютных средств на территорию Республики Узбекистан при соблюдении правил таможенного контроля осуществляется без ограничения суммы.»",
        en:"“Individuals may bring cash currency into the Republic of Uzbekistan without any limit on the amount, subject to customs control rules.”",
        zh:"「个人在遵守海关监管规定的前提下，携带现金外币入境乌兹别克斯坦共和国不限金额。」" } },
      { p:{
        uz:"“Olib kirilayotgan 100 000 000 (yuz million) soʻm ekvivalentidan ortiq miqdordagi naqd valyuta yoʻlovchi bojxona deklaratsiyasini toʻldirish va bojxona organi xodimiga taqdim etish yoʻli bilan bojxona nazoratidan oʻtkaziladi.”",
        ru:"«Ввозимые наличные валютные средства в размере, превышающем эквивалент 100 000 000 (ста миллионов) сумов, проходят таможенный контроль путём заполнения пассажирской таможенной декларации и её представления сотруднику таможенного органа.»",
        en:"“Cash currency being brought in that exceeds the equivalent of UZS 100,000,000 (one hundred million) is cleared through customs by filling in a passenger customs declaration and submitting it to a customs officer.”",
        zh:"「携带入境的现金外币若超过 1 亿（100,000,000）苏姆等值，须通过填写旅客海关申报单并提交海关工作人员办理海关手续。」" } },
      { p:{
        uz:"“100 000 000 soʻm ekvivalentiga teng yoki undan oshmaydigan miqdordagi naqd valyuta mablagʻlari ham deklaratsiya qilinishi mumkin.”",
        ru:"«Наличные валютные средства в размере, равном или не превышающем эквивалент 100 000 000 сумов, также могут быть задекларированы.»",
        en:"“Cash currency equal to or below the equivalent of UZS 100,000,000 may also be declared.”",
        zh:"「等于或不超过 1 亿苏姆等值的现金外币也可以申报。」" } }
    ]
  },
  {
    id: "in-lanes", icon: "lanes", type: "info",
    title: { uz:"Yo‘lak tanlash tartibi", ru:"Выбор коридора", en:"Choosing a lane", zh:"选择通道" },
    short: {
      uz:"“Yashil” yo‘lak — deklaratsiya talab qilinmaydigan tovarlar uchun;<br>“Qizil” yo‘lak — yozma deklaratsiya lozim bo‘lganda.",
      ru:"«Зелёный» коридор — для товаров без декларации; «красный» — когда требуется письменная декларация.",
      en:"“Green” lane — for goods needing no declaration; “red” lane — when a written declaration is required.",
      zh:"“绿色”通道——无需申报的物品；“红色”通道——需书面申报时。" },
    important: {
      uz:"Yashil yo‘lakdan o‘tib, deklaratsiya qilinishi lozim bo‘lgan tovar topilsa, shaxs qonunchilikka muvofiq javobgarlikka tortiladi.",
      ru:"Если в «зелёном» коридоре обнаружены товары, подлежащие декларированию, лицо привлекается к ответственности.",
      en:"If goods requiring declaration are found in the green lane, the person is held liable under the law.",
      zh:"若在绿色通道发现应申报物品，将依法追责。" },
    legal: [
      { channel:"green", p:{
        uz:"«YASHIL» yoʻlak — jismoniy shaxslarning qoʻl yuki va kuzatib borilayotgan bagajida yozma deklaratsiyalash talab etilmaydigan tovarlarni olib oʻtish uchun moʻljallangan joy. ",
        ru:"«„зелёный“ коридор — место, предназначенное для перемещения физическими лицами через таможенную границу товаров в ручной клади и сопровождаемом багаже.»",
        en:"“the ‘green’ lane — a place intended for individuals to move goods in hand luggage and accompanied baggage across the customs border.”",
        zh:"「『绿色』通道——供个人将手提行李和随身托运行李中的物品经海关边境携带通过的场所。」" } },
      { channel:"red", p:{
        uz:"«QIZIL» yoʻlak— yozma shaklda deklaratsiyalanishi lozim boʻlgan tovarlarni, shuningdek ixtiyoriy deklaratsiyalanadigan tovarlarni olib oʻtish uchun moʻljallangan joy.",
        ru:"«„красный“ коридор — место, предназначенное для перемещения товаров, подлежащих письменному декларированию, а также товаров, декларируемых добровольно.»",
        en:"“the ‘red’ lane — a place intended for moving goods that must be declared in writing, as well as goods declared voluntarily.”",
        zh:"「『红色』通道——供携带须以书面形式申报的物品以及自愿申报物品通过的场所。」" } },
      { p:{
        uz:"“Yashil” yoʻlakda quyidagilardan tashqari tovarlar ogʻzaki deklaratsiyalashtiriladi: taqiqlangan/cheklangan tovarlar; bojsiz normadan oshgan tovarlar; yozma deklaratsiyalanadigan valyuta mablagʻlari.",
        ru:"В «зелёном» коридоре товары декларируются устно, кроме следующих: запрещённые/ограниченные товары; товары сверх беспошлинной нормы; валютные средства, подлежащие письменному декларированию.",
        en:"In the green lane goods are declared orally, except for: prohibited/restricted goods; goods exceeding the duty-free limit; currency subject to written declaration.",
        zh:"在「绿色」通道，除以下情形外物品均以口头申报：禁止/限制物品；超出免税限额的物品；须书面申报的外币。" } }
    ]
  },
  {
    id: "in-declaration", icon: "doc", type: "info",
    title: { uz:"Yo‘lovchi bojxona deklaratsiyasi", ru:"Пассажирская таможенная декларация", en:"Passenger customs declaration", zh:"旅客海关申报单" },
    short: {
      uz:"Deklaratsiya qog‘oz yoki elektron shaklda to‘ldiriladi; 16 yoshga to‘lgan shaxslar tovar bilan birga taqdim etadi.",
      ru:"Декларация заполняется в бумажной или электронной форме; лица старше 16 лет подают её вместе с товаром.",
      en:"The declaration is filled in on paper or electronically; persons aged 16+ submit it together with the goods.",
      zh:"申报单可填写纸质或电子表格；16 岁以上人员须随物品一并提交。" },
    legal: [
      { frame:"green", frameIco:"declofficer", p:{
        uz:"Deklaratsiya <b class='tx-key'>qogʻoz shaklda</b> yoki <b class='tx-key'>elektron shaklda</b> <b class='tx-key'>bojxona hududidan chiqqunga qadar</b> toʻldiriladi.",
        ru:"Декларация заполняется в <b class='tx-key'>бумажной или электронной</b> форме <b class='tx-key'>до выхода с таможенной территории</b>.",
        en:"The declaration is filled in <b class='tx-key'>on paper or electronically</b> <b class='tx-key'>before leaving the customs area</b>.",
        zh:"申报单以<b class='tx-key'>纸质或电子形式</b><b class='tx-key'>在离开海关区域前</b>填写。" } },
      { h:{ uz:"Deklaratsiya quyidagi hollarda to‘ldiriladi:", ru:"Декларация заполняется в следующих случаях:", en:"The declaration is filled in in the following cases:", zh:"在以下情形须填写申报单：" } },
      { ul:[
        { uz:"bojxona toʻlovlari undirilmaydigan <b class='tx-key'>cheklangan meʼyorlardan oshadigan</b> tovarlarga;",
          ru:"на товары, <b class='tx-key'>превышающие ограниченные нормы</b>, в пределах которых таможенные платежи не взимаются;",
          en:"for goods <b class='tx-key'>exceeding the limits</b> within which no customs payments are charged;",
          zh:"对于<b class='tx-key'>超出免征海关税费限额</b>的物品；" },
        { uz:"yashash joyi oʻzgarganda <b class='tx-key'>shaxsiy mol-mulk</b> boʻlgan tovarlarga (avtotransport mustasno);",
          ru:"на товары, являющиеся <b class='tx-key'>личным имуществом</b>, при смене места жительства (кроме автотранспорта);",
          en:"for goods that are <b class='tx-key'>personal property</b> when changing place of residence (except motor vehicles);",
          zh:"对于变更居住地时作为<b class='tx-key'>个人财产</b>的物品（机动车除外）；" },
        { uz:"notijorat maqsadlardagi <b class='tx-key'>transport vositalariga</b> (Bojxona kodeksi 158, 160-moddalari);",
          ru:"на <b class='tx-key'>транспортные средства</b> некоммерческого назначения (статьи 158, 160 Таможенного кодекса);",
          en:"for <b class='tx-key'>transport vehicles</b> for non-commercial purposes (Articles 158, 160 of the Customs Code);",
          zh:"对于非商业用途的<b class='tx-key'>交通工具</b>（海关法典第 158、160 条）；" },
        { uz:"yozma deklaratsiyalanishi lozim boʻlgan <b class='tx-key'>naqd valyuta va valyuta boyliklariga</b>;",
          ru:"на <b class='tx-key'>наличную валюту и валютные ценности</b>, подлежащие письменному декларированию;",
          en:"for <b class='tx-key'>cash currency and currency valuables</b> subject to written declaration;",
          zh:"对于须书面申报的<b class='tx-key'>现金外币和外汇贵重物品</b>；" },
        { uz:"<b class='tx-key'>alohida kuzatib boriladigan bagajdagi</b> notijorat tovarlarga;",
          ru:"на некоммерческие товары в <b class='tx-key'>отдельно следующем багаже</b>;",
          en:"for non-commercial goods in <b class='tx-key'>separately accompanied baggage</b>;",
          zh:"对于<b class='tx-key'>单独托运行李</b>中的非商业物品；" },
        { uz:"<b class='tx-key'>mobil qurilmalarga</b> (UZIMEI da avval roʻyxatga olingan, respublikada sotib olinganlar mustasno);",
          ru:"на <b class='tx-key'>мобильные устройства</b> (кроме ранее зарегистрированных в UZIMEI и приобретённых в республике);",
          en:"for <b class='tx-key'>mobile devices</b> (except those previously registered in UZIMEI and bought in the republic);",
          zh:"对于<b class='tx-key'>移动设备</b>（此前已在 UZIMEI 注册并在境内购买的除外）；" },
        { uz:"tegishli <b class='tx-key'>taqiq va/yoki cheklovlar</b> belgilangan tovarlarga.",
          ru:"на товары, в отношении которых установлены соответствующие <b class='tx-key'>запреты и/или ограничения</b>.",
          en:"for goods subject to relevant <b class='tx-key'>prohibitions and/or restrictions</b>.",
          zh:"对于设有相关<b class='tx-key'>禁令和/或限制</b>的物品。" }
      ]},
      { frame:"yellow", p:{
        uz:"“Deklaratsiya <b class='tx-warn'>16 yoshga toʻlgan shaxslar</b> tomonidan bojxona chegarasini kesib oʻtayotganda <b class='tx-key'>tovar(lar) bilan bir vaqtda</b> taqdim etiladi.”",
        ru:"«Декларация представляется <b class='tx-warn'>лицами, достигшими 16 лет</b>, <b class='tx-key'>одновременно с товаром(ами)</b> при пересечении таможенной границы.»",
        en:"“The declaration is submitted by <b class='tx-warn'>persons aged 16 and over</b> <b class='tx-key'>together with the goods</b> when crossing the customs border.”",
        zh:"「申报单由<b class='tx-warn'>年满 16 岁的人员</b>在跨越海关边境时<b class='tx-key'>随物品一并提交</b>。」" } },
      { apps:true }
    ]
  },
  {
    id: "in-mobile", icon: "smartphone", type: "warning", tag:"×2", legalFirst:true,
    facts: [],
    title: { uz:"Mobil qurilmalar", ru:"Мобильные устройства", en:"Mobile devices", zh:"移动设备" },
    short: {
      uz:"Mobil qurilmalar bojsiz me’yordan qat’i nazar deklaratsiya qilinadi. Aviatsiya punktida norma — 2 dona (har kelishda).",
      ru:"Мобильные устройства декларируются независимо от лимита. Норма в авиапунктах — 2 шт. (при каждом въезде).",
      en:"Mobile devices are declared regardless of the limit. The norm at aviation points is 2 units (per entry).",
      zh:"无论是否超限，移动设备均须申报。航空口岸限额为每次入境 2 件。" },
    important: {
      uz:"UZIMEI tizimida avval ro‘yxatga olingan va O‘zbekistonda sotib olingan qurilmalar bundan mustasno.",
      ru:"Исключение — устройства, ранее зарегистрированные в UZIMEI и купленные в Узбекистане.",
      en:"Exception: devices previously registered in UZIMEI and bought in Uzbekistan.",
      zh:"例外：此前已在 UZIMEI 注册并在乌兹别克斯坦购买的设备。" },
    legal: [
      { mark:{uz:"deklaratsiyalanishi lozim",ru:"подлежат декларированию",en:"must be declared",zh:"均须申报"}, keyIco:"handphone", p:{
        uz:"Oʻzbekiston Respublikasiga olib kirishda mobil qurilmalar bojxona toʻlovlari undirilmaydigan cheklangan meʼyorlardan qatʼiy nazar deklaratsiyalanishi lozim.",
        ru:"При ввозе в Республику Узбекистан мобильные устройства подлежат декларированию независимо от ограниченных норм, в пределах которых таможенные платежи не взимаются.",
        en:"When imported into the Republic of Uzbekistan, mobile devices must be declared regardless of the limits within which no customs payments are charged.",
        zh:"携带入境乌兹别克斯坦共和国时，无论是否在免征海关税费的限额内，移动设备均须申报。" } },
      { p:{
        uz:"Mustasno: Oʻzbekiston Respublikasi hududida sotib olingan hamda UZIMEI tizimida roʻyxatga olingan mobil qurilmalar.",
        ru:"Исключение: мобильные устройства, приобретённые на территории Республики Узбекистан и зарегистрированные в системе UZIMEI.",
        en:"Exception: mobile devices bought in the Republic of Uzbekistan and registered in the UZIMEI system.",
        zh:"例外：在乌兹别克斯坦共和国境内购买并已在 UZIMEI 系统注册的移动设备。" } },
      { p:{
        uz:"“Telefon apparati, shu jumladan mobil aloqa moduliga ega boʻlgan mobil telefonlar va qurilmalar – 2 dona (chegarani har bir kesib oʻtishda).”",
        ru:"«Телефонные аппараты, в том числе мобильные телефоны и устройства с модулем мобильной связи — 2 штуки (при каждом пересечении границы).»",
        en:"“Telephone sets, including mobile phones and devices with a mobile-communication module — 2 units (per each border crossing).”",
        zh:"「电话设备，包括带移动通信模块的手机和设备——2 件（每次跨境）。」" } }
    ]
  },
  {
    id: "in-medicine", icon: "pill", type: "info",
    title: { uz:"Dori vositalari", ru:"Лекарственные средства", en:"Medicines", zh:"药品" },
    short: {
      uz:"Shaxsiy foydalanish uchun dorilar belgilangan o‘ram va miqdor me’yorlarida olib kiriladi; ba’zilari uchun tibbiy hujjat talab etiladi.",
      ru:"Лекарства для личного пользования ввозятся в установленных нормах; для некоторых нужен медицинский документ.",
      en:"Medicines for personal use are imported within set packaging and quantity limits; some require a medical document.",
      zh:"个人用药品在规定的包装和数量范围内携带；部分需医疗证明。" },
    legal: [
      { frame:"red", frameIco:"prescription", p:{
        uz:"<b class='tx-red'>Tibbiyot muassasasi hujjati taqdim etilmasdan</b> shaxsiy foydalanish uchun:<br>- turli nomdagi <b class='tx-warn'>10 tagacha</b> dori preparati (har biri uchun <b class='tx-warn'>5 oʻramdan</b> ortiq emas) va<br>- <b class='tx-warn'>5 birlikdan</b> ortiq boʻlmagan tibbiy buyumlar olib kiriladi.",
        ru:"<b class='tx-red'>Без представления документа медицинского учреждения</b> для личного пользования ввозятся:<br>- <b class='tx-warn'>до 10 наименований</b> лекарственных препаратов (не более <b class='tx-warn'>5 упаковок</b> каждого) и<br>- не более <b class='tx-warn'>5 единиц</b> медицинских изделий.",
        en:"<b class='tx-red'>Without a document from a medical institution</b>, for personal use one may bring:<br>- <b class='tx-warn'>up to 10 named medicines</b> (no more than <b class='tx-warn'>5 packages</b> of each) and<br>- no more than <b class='tx-warn'>5 units</b> of medical devices.",
        zh:"<b class='tx-red'>无需提供医疗机构证明</b>，供个人使用可携带：<br>- <b class='tx-warn'>最多 10 种药品</b>（每种不超过 <b class='tx-warn'>5 包</b>）和<br>- 不超过 <b class='tx-warn'>5 件</b>医疗用品。" } },
      { h:{ uz:"Bir oʻramdagi maksimal miqdor:", ru:"Максимальное количество в одной упаковке:", en:"Maximum quantity per package:", zh:"每包最大数量：" } },
      { ul:[
        { uz:"qattiq shakllar (tabletka, draje, granula, kukun, kapsula) — <b class='tx-warn'>100 birlik</b>dan ortiq emas;",
          ru:"твёрдые формы (таблетки, драже, гранулы, порошок, капсулы) — не более <b class='tx-warn'>100 единиц</b>;",
          en:"solid forms (tablets, dragées, granules, powder, capsules) — no more than <b class='tx-warn'>100 units</b>;",
          zh:"固体剂型（片剂、糖衣丸、颗粒、粉末、胶囊）——不超过 <b class='tx-warn'>100 单位</b>；" },
        { uz:"eritma uchun kukunlar — <b class='tx-warn'>500 gramm</b>dan ortiq emas;",
          ru:"порошки для раствора — не более <b class='tx-warn'>500 граммов</b>;",
          en:"powders for solution — no more than <b class='tx-warn'>500 grams</b>;",
          zh:"配制溶液用粉末——不超过 <b class='tx-warn'>500 克</b>；" },
        { uz:"gomeopatik granulalar — <b class='tx-warn'>50 gramm</b>dan ortiq emas;",
          ru:"гомеопатические гранулы — не более <b class='tx-warn'>50 граммов</b>;",
          en:"homeopathic granules — no more than <b class='tx-warn'>50 grams</b>;",
          zh:"顺势疗法颗粒——不超过 <b class='tx-warn'>50 克</b>；" },
        { uz:"infuzion va oral eritmalar — <b class='tx-warn'>500 millilitr</b>dan ortiq emas;",
          ru:"инфузионные и оральные растворы — не более <b class='tx-warn'>500 миллилитров</b>;",
          en:"infusion and oral solutions — no more than <b class='tx-warn'>500 millilitres</b>;",
          zh:"输液剂和口服溶液——不超过 <b class='tx-warn'>500 毫升</b>；" },
        { uz:"inyeksiya eritmalari — <b class='tx-warn'>10 ampula yoki 10 flakon</b>dan ortiq emas;",
          ru:"растворы для инъекций — не более <b class='tx-warn'>10 ампул или 10 флаконов</b>;",
          en:"injection solutions — no more than <b class='tx-warn'>10 ampoules or 10 vials</b>;",
          zh:"注射溶液——不超过 <b class='tx-warn'>10 安瓿或 10 瓶</b>；" },
        { uz:"tashqi dorilar — <b class='tx-warn'>200 millilitr yoki 200 gramm</b>dan ortiq emas.",
          ru:"наружные средства — не более <b class='tx-warn'>200 миллилитров или 200 граммов</b>.",
          en:"topical medicines — no more than <b class='tx-warn'>200 millilitres or 200 grams</b>.",
          zh:"外用药——不超过 <b class='tx-warn'>200 毫升或 200 克</b>。" }
      ]},
      { frame:"red", p:{
        uz:"<b class='tx-red'>Giyohvandlik vositalari</b> — <b class='tx-warn'>7 sutkalik ehtiyojdan</b> ortiq boʻlmagan miqdorda, <b class='tx-key'>tegishli tibbiy hujjat mavjud boʻlganda</b>;<br><b class='tx-red'>Psixotrop moddalar</b> — <b class='tx-warn'>5 tagacha</b> nomdagi preparat (har biridan 2 oʻramdan ortiq emas), <b class='tx-key'>tegishli tibbiy hujjat mavjud boʻlganda</b>;",
        ru:"<b class='tx-red'>Наркотические средства</b> — в количестве не более <b class='tx-warn'>потребности на 7 суток</b>, <b class='tx-key'>при наличии соответствующего медицинского документа</b>;<br><b class='tx-red'>Психотропные вещества</b> — <b class='tx-warn'>до 5 наименований</b> препаратов (не более 2 упаковок каждого), <b class='tx-key'>при наличии соответствующего медицинского документа</b>;",
        en:"<b class='tx-red'>Narcotic drugs</b> — no more than a <b class='tx-warn'>7-day supply</b>, <b class='tx-key'>with the relevant medical document</b>;<br><b class='tx-red'>Psychotropic substances</b> — <b class='tx-warn'>up to 5 named preparations</b> (no more than 2 packages of each), <b class='tx-key'>with the relevant medical document</b>;",
        zh:"<b class='tx-red'>麻醉药品</b>——不超过 <b class='tx-warn'>7 日用量</b>，<b class='tx-key'>且须有相应医疗证明</b>；<br><b class='tx-red'>精神药物</b>——<b class='tx-warn'>最多 5 种制剂</b>（每种不超过 2 包），<b class='tx-key'>且须有相应医疗证明</b>；" } },
      { tgbot:true, url:"https://t.me/moddacheckbot/check",
        title:{uz:"Telegram-bot orqali dori tarkibini tekshirish",ru:"Проверка лекарства через Telegram-бот",en:"Check a medicine via Telegram bot",zh:"通过 Telegram 机器人查询药品"},
        sub:{uz:"Dori vositasini olib kirish maqomini aniqlang",ru:"Определите статус ввоза лекарства",en:"Find out the import status of a medicine",zh:"查询药品的进口状态"} }
    ]
  },
  {
    id: "in-prohibited", icon: "ban", type: "danger", proScope: "all",
    title: { uz:"Taqiqlangan va cheklangan tovarlar", ru:"Запрещённые и ограниченные товары", en:"Prohibited & restricted goods", zh:"禁止和限制物品" },
    short: {
      uz:"Qidiruvli to‘liq ro‘yxat: taqiqlangan (qizil) va cheklangan (amber) tovarlar, huquqiy asoslari bilan.",
      ru:"Полный список с поиском: запрещённые (красный) и ограниченные (амбер) товары с правовой основой.",
      en:"Full searchable list: prohibited (red) and restricted (amber) goods, with legal basis.",
      zh:"可搜索的完整清单：禁止（红色）和限制（琥珀色）物品及法律依据。" }
  }
];

DATA.airport_out = [
  {
    id: "out-duty-free", icon: "taxfree", type: "success", importantTone:"warn", tag:"5 000 $",
    facts: [
      { v:"5 000 $", ico:"nodeclbig", l:{uz:"Ekvivalentida deklaratsiyasiz olib chiqish mumkin",ru:"Эквивалент — вывоз без декларации",en:"Equivalent — export without declaration",zh:"等值——可免申报出境"} }
    ],
    title: { uz:"Bojsiz olib chiqish", ru:"Беспошлинный вывоз", en:"Duty-free export", zh:"免税出境" },
    short: {
      uz:"Qiymati 5000 AQSH dollari ekvivalentigacha bo‘lgan tovarlar deklaratsiyasiz olib chiqilishi mumkin.",
      ru:"Товары стоимостью до эквивалента 5000 долларов США можно вывозить без декларации.",
      en:"Goods worth up to the equivalent of USD 5,000 may be exported without a declaration.",
      zh:"价值不超过 5000 美元等值的物品可免申报出境。" },
    important: {
      uz:"Eksport bojxona boji stavkalari belgilangan tovarlar bundan mustasno.",
      ru:"Исключение — товары, по которым установлены ставки экспортной пошлины.",
      en:"Exception: goods subject to export customs duty rates.",
      zh:"例外：已设定出口关税税率的物品。" },
    legal: [
      { p:{
        uz:"“Jismoniy shaxslar tomonidan qiymati 5 000 AQSH dollari ekvivalentigacha boʻlgan tovarlar bojxona deklaratsiyasini taqdim etmagan holda respublikadan olib chiqilishi mumkin, qonunchilik hujjatlari bilan eksport bojxona boji stavkalari belgilangan tovarlar bundan mustasno.”",
        ru:"«Товары стоимостью до эквивалента 5 000 долларов США могут вывозиться физическими лицами из республики без представления таможенной декларации, за исключением товаров, по которым законодательством установлены ставки экспортной таможенной пошлины.»",
        en:"“Goods worth up to the equivalent of USD 5,000 may be taken out of the republic by individuals without submitting a customs declaration, except for goods for which export customs duty rates are set by law.”",
        zh:"「价值不超过 5000 美元等值的物品，个人可不提交海关申报单而携带出境，但法律规定有出口关税税率的物品除外。」" } },
      { p:{
        uz:"Ushbu qiymat doirasidagi tijorat maqsadidagi tovarlar kuzatuv hujjatlaridan foydalanilgan holda statistik maqsadlarda hisobga olinadi.",
        ru:"Товары коммерческого назначения в пределах этой стоимости учитываются в статистических целях с использованием сопроводительных документов.",
        en:"Commercial goods within this value are recorded for statistical purposes using accompanying documents.",
        zh:"在此价值范围内的商业用途物品，将使用随附单证用于统计目的进行登记。" } }
    ]
  },
  {
    id: "out-quantity", icon: "quantity", type: "warning",
    title: { uz:"Olib chiqishda miqdoriy cheklovlar", ru:"Количественные ограничения при вывозе", en:"Quantity limits on export", zh:"出境数量限制" },
    short: {
      uz:"Ayrim oziq-ovqat mahsulotlarini bojsiz olib chiqish bo‘yicha vazn normalari belgilangan.",
      ru:"Установлены весовые нормы беспошлинного вывоза для ряда продуктов питания.",
      en:"Weight limits apply to duty-free export of certain food products.",
      zh:"对部分食品的免税出境设有重量限额。" },
    norms: [
      { ico:"rice", name:{uz:"Guruch",ru:"Рис",en:"Rice",zh:"大米"}, val:{uz:"≤ 3 kg",ru:"≤ 3 кг",en:"≤ 3 kg",zh:"≤ 3 公斤"} },
      { ico:"bakery", name:{uz:"Non-bulka mahsulotlari",ru:"Хлебобулочные",en:"Bakery products",zh:"面包制品"}, val:{uz:"≤ 5 kg",ru:"≤ 5 кг",en:"≤ 5 kg",zh:"≤ 5 公斤"} },
      { ico:"meat", name:{uz:"Go‘sht mahsulotlari",ru:"Мясопродукты",en:"Meat products",zh:"肉类制品"}, val:{uz:"≤ 2 kg",ru:"≤ 2 кг",en:"≤ 2 kg",zh:"≤ 2 公斤"} },
      { ico:"sugar", name:{uz:"Shakar",ru:"Сахар",en:"Sugar",zh:"糖"}, val:{uz:"≤ 2 kg",ru:"≤ 2 кг",en:"≤ 2 kg",zh:"≤ 2 公斤"} },
      { ico:"oil", name:{uz:"O‘simlik yog‘i",ru:"Растительное масло",en:"Vegetable oil",zh:"植物油"}, val:{uz:"≤ 2 kg",ru:"≤ 2 кг",en:"≤ 2 kg",zh:"≤ 2 公斤"} },
      { ico:"fruitveg", name:{uz:"Meva-sabzavot, uzum, dukkaklilar",ru:"Овощи-фрукты, бобовые",en:"Fruit & veg, legumes",zh:"果蔬、豆类"}, val:{uz:"≤ 40 kg",ru:"≤ 40 кг",en:"≤ 40 kg",zh:"≤ 40 公斤"} }
    ],
    legal: [
      { p:{
        uz:"Yangi uzilgan meva-sabzavot mahsulotlari, uzum, poliz ekinlari, dukkakli oʻsimliklar hamda quritilgan sabzavot va mevalar — umumiy ogʻirligi 40 kg dan koʻp boʻlmagan.",
        ru:"Свежие плодоовощные продукты, виноград, бахчевые культуры, бобовые растения, а также сушёные овощи и фрукты — общим весом не более 40 кг.",
        en:"Fresh fruit and vegetables, grapes, melons/gourds, legumes, as well as dried vegetables and fruit — with a total weight of no more than 40 kg.",
        zh:"新鲜果蔬、葡萄、瓜类作物、豆类植物以及干制蔬菜和水果——总重量不超过 40 公斤。" } }
    ]
  },
  {
    id: "out-currency", icon: "banknote", type: "info", tag:"100 mln",
    facts: [
      { v:"100 mln", ico:"cashstack", l:{uz:"so‘mgacha — cheklovsiz",ru:"до сумов — без лимита",en:"soms — unlimited",zh:"苏姆以内——不限"} }
    ],
    title: { uz:"Valyuta olib chiqish", ru:"Вывоз валюты", en:"Taking out currency", zh:"携带货币出境" },
    short: {
      uz:"100 mln so‘m ekvivalentigacha cheklovsiz olib chiqiladi; undan ortig‘i faqat alohida holatlarda ruxsat etiladi.",
      ru:"До эквивалента 100 млн сумов — без ограничений; свыше — только в отдельных случаях.",
      en:"Up to the equivalent of 100M soms without limit; above that only in special cases.",
      zh:"等值 1 亿苏姆以内不限；超过则仅在特殊情况下允许。" },
    important: {
      uz:"Belgilangan summadan ortiq naqd valyutani olib chiqishga umumiy tartibda yo‘l qo‘yilmaydi.",
      ru:"Вывоз наличной валюты сверх установленной суммы в общем порядке не допускается.",
      en:"Taking out cash above the set amount is generally not permitted.",
      zh:"一般情况下不允许携带超过规定金额的现金出境。" },
    legal: [
      { p:{
        uz:"“Ekvivalenti 100 000 000 soʻmga teng yoki undan oshmaydigan miqdordagi naqd valyuta mablagʻlari bojxona nazorati qoidalariga rioya etilgan holda cheklovlarsiz olib chiqiladi. Belgilangan summadan ortiq miqdordagi naqd valyuta mablagʻlarining olib chiqilishiga yoʻl qoʻyilmaydi.”",
        ru:"«Наличные валютные средства в размере, равном или не превышающем эквивалент 100 000 000 сумов, вывозятся без ограничений при соблюдении правил таможенного контроля. Вывоз наличных валютных средств сверх установленной суммы не допускается.»",
        en:"“Cash currency equal to or below the equivalent of UZS 100,000,000 may be taken out without restriction, subject to customs control rules. Taking out cash currency above the set amount is not permitted.”",
        zh:"「等于或不超过 1 亿苏姆等值的现金外币，在遵守海关监管规定的前提下可不受限制地携带出境。不允许携带超过规定金额的现金外币出境。」" } },
      { h:{ uz:"Istisno holatlar (100 mln so‘mdan ortiq):", ru:"Исключительные случаи (свыше 100 млн сумов):", en:"Exceptional cases (above 100M soms):", zh:"例外情形（超过 1 亿苏姆）：" } },
      { ul:[
        { uz:"rezidentlar — Hukumat delegatsiyasi aʼzolari uchun Vazirlar Mahkamasi farmoyishi asosida;",
          ru:"резиденты — для членов правительственной делегации на основании распоряжения Кабинета Министров;",
          en:"residents — for members of a government delegation, by order of the Cabinet of Ministers;",
          zh:"居民——政府代表团成员，依部长内阁指令；" },
        { uz:"norezidentlar — kirishda rasmiylashtirilgan deklaratsiyada koʻrsatilgan, foydalanilmagan qoldiq doirasida;",
          ru:"нерезиденты — в пределах неиспользованного остатка, указанного в декларации, оформленной при въезде;",
          en:"non-residents — within the unused balance shown in the declaration filed on entry;",
          zh:"非居民——在入境时所填申报单注明的未使用余额范围内；" },
        { uz:"xalqaro musobaqalar sovrindorlari — mablagʻ qonuniyligini tasdiqlovchi hujjatlar asosida;",
          ru:"призёры международных соревнований — на основании документов, подтверждающих законность средств;",
          en:"prize-winners of international competitions — on the basis of documents confirming the legality of the funds;",
          zh:"国际比赛获奖者——凭证明资金合法性的单证；" },
        { uz:"“Termiz xalqaro savdo markazi” erkin savdo zonasida zargarlik sotishdan olingan valyuta doirasida.",
          ru:"в пределах валюты, полученной от продажи ювелирных изделий в зоне свободной торговли «Международный торговый центр Термез».",
          en:"within the currency obtained from selling jewellery in the ‘Termez International Trade Centre’ free-trade zone.",
          zh:"在「铁尔梅兹国际贸易中心」自由贸易区销售珠宝所得外币范围内。" }
      ]}
    ]
  },
  {
    id: "out-jewelry", icon: "gem", type: "info", tag:"65 / 200 g",
    facts: [
      { v:"65 g", icoImg:"assets/icons/jewelry-gold.png", l:{uz:"Oltin (tayyor zargarlik buyumi) — deklaratsiyasiz",ru:"Золото — без декл.",en:"Gold — no declaration",zh:"黄金——无需申报"} },
      { v:"200 g", icoImg:"assets/icons/jewelry-silver.png", l:{uz:"Kumush (tayyor zargarlik buyumi) — deklaratsiyasiz",ru:"Серебро — без декл.",en:"Silver — no declaration",zh:"白银——无需申报"} }
    ],
    title: { uz:"Zargarlik buyumlari", ru:"Ювелирные изделия", en:"Jewellery", zh:"珠宝首饰" },
    short: {
      uz:"Tayyor zargarlik buyumi:<br>- 200 grammgacha boʻlgan kumushdan<br>- 65 grammgacha boʻlgan oltin va boshqa qimmatbaho metallardan yasalgan tayyor zargarlik buyumlarini deklaratsiyasiz olib chiqish mumkin.",
      ru:"Серебро до 200 г, золото и др. драгметаллы до 65 г — без декларации.",
      en:"Silver up to 200 g, gold and other precious metals up to 65 g — without declaration.",
      zh:"白银不超过 200 克、黄金及其他贵金属不超过 65 克——无需申报。" },
    important: {
      uz:"Ushbu miqdorlardan ortig‘i yo‘lovchi bojxona deklaratsiyasi asosida olib chiqiladi.",
      ru:"Сверх этих норм — на основании пассажирской таможенной декларации.",
      en:"Above these limits — based on a passenger customs declaration.",
      zh:"超出上述限额——须凭旅客海关申报单。" },
    legal: [
      { p:{
        uz:"“Jismoniy shaxslarga ogʻirligi 200 grammgacha boʻlgan kumushdan hamda 65 grammgacha boʻlgan oltin va boshqa qimmatbaho metallardan yasalgan tayyor zargarlik buyumlarini yoʻlovchi bojxona deklaratsiyasini toʻldirmasdan, ushbu miqdorlardan ortiq boʻlganlarini deklaratsiya asosida olib chiqishga ruxsat beriladi.”",
        ru:"«Физическим лицам разрешается вывозить готовые ювелирные изделия из серебра весом до 200 граммов, а также из золота и других драгоценных металлов весом до 65 граммов без заполнения пассажирской таможенной декларации, а сверх этих норм — на основании декларации.»",
        en:"“Individuals are allowed to take out finished jewellery made of silver weighing up to 200 grams, and of gold and other precious metals up to 65 grams, without filling in a passenger customs declaration; amounts above these limits — on the basis of a declaration.”",
        zh:"「允许个人不填写旅客海关申报单携带重量不超过 200 克的白银以及不超过 65 克的黄金及其他贵金属制成的成品珠宝出境；超出上述限额的，须凭申报单。」" } }
    ]
  },
  {
    id: "out-declaration", icon: "doc", type: "info",
    title: { uz:"Yo‘lovchi bojxona deklaratsiyasi", ru:"Пассажирская таможенная декларация", en:"Passenger customs declaration", zh:"旅客海关申报单" },
    short: {
      uz:"Chiqishda cheklangan me’yordan oshgan tovarlar va yozma deklaratsiyalanadigan valyuta uchun deklaratsiya to‘ldiriladi.",
      ru:"При вывозе декларация заполняется на товары сверх норм и на валюту, подлежащую письменному декларированию.",
      en:"On exit, a declaration is filled for goods above limits and for currency subject to written declaration.",
      zh:"出境时，对超限物品及须书面申报的货币填写申报单。" },
    legal: [
      { frame:"green", frameIco:"declofficer", p:{
        uz:"<b class='tx-ok'>Deklaratsiya bojxona hududidan chiqqunga qadar toʻldiriladi:</b><br>- olib chiqishning cheklangan meʼyoridan oshadigan tovarlarga<br>- yozma deklaratsiyalanishi lozim boʻlgan naqd valyutaga",
        ru:"«Декларация заполняется в бумажной или электронной форме.» Заполняется на товары, превышающие ограниченную норму вывоза с территории республики, а также на наличную валюту, подлежащую письменному декларированию.",
        en:"“The declaration is filled in on paper or electronically.” It is filled for goods exceeding the export limit from the republic and for cash currency subject to written declaration.",
        zh:"「申报单以纸质或电子形式填写。」适用于超出从境内携出限额的物品以及须书面申报的现金外币。" } },
      { p:{
        uz:"“Deklaratsiya <b class='tx-warn'>16 yoshga toʻlgan shaxslar</b> tomonidan bojxona chegarasini kesib oʻtayotganda <b class='tx-red'>tovar(lar) bilan bir vaqtda</b> taqdim etiladi.”",
        ru:"«Декларация представляется <b class='tx-warn'>лицами, достигшими 16 лет</b>, <b class='tx-key'>одновременно с товаром(ами)</b> при пересечении таможенной границы.»",
        en:"“The declaration is submitted by <b class='tx-warn'>persons aged 16 and over</b> <b class='tx-key'>together with the goods</b> when crossing the customs border.”",
        zh:"「申报单由<b class='tx-warn'>年满 16 岁的人员</b>在跨越海关边境时<b class='tx-key'>随物品一并提交</b>。」" } },
      { apps:true }
    ]
  },
  {
    id: "out-medicine", icon: "pill", type: "info",
    title: { uz:"Dori vositalari", ru:"Лекарственные средства", en:"Medicines", zh:"药品" },
    short: {
      uz:"Davolash kursi doirasida shaxsiy foydalanish uchun dorilar belgilangan miqdorda; ba’zilari uchun tibbiy hujjat zarur.",
      ru:"В рамках курса лечения для личного пользования в установленных нормах; для некоторых нужен медицинский документ.",
      en:"For personal use within a treatment course in set limits; some require a medical document.",
      zh:"在疗程范围内供个人使用，按规定数量；部分需医疗证明。" },
    legal: [
      { frame:"red", frameIco:"prescription", p:{
        uz:"Shaxsiy foydalanish uchun:<br>- turli nomdagi <b class='tx-warn'>10 tagacha</b> dori preparati (har biri uchun <b class='tx-warn'>5 oʻramdan</b> ortiq emas) va<br>- <b class='tx-warn'>5 birlikdan</b> ortiq boʻlmagan tibbiy buyumlar <b class='tx-red'>(tibbiy hujjatsiz)</b>.",
        ru:"Для личного пользования:<br>- до <b class='tx-warn'>10 наименований</b> лекарственных препаратов (не более <b class='tx-warn'>5 упаковок</b> каждого) и<br>- не более <b class='tx-warn'>5 единиц</b> медицинских изделий <b class='tx-red'>(без медицинского документа)</b>.",
        en:"For personal use:<br>- up to <b class='tx-warn'>10 named medicines</b> (no more than <b class='tx-warn'>5 packages</b> of each) and<br>- no more than <b class='tx-warn'>5 units</b> of medical devices <b class='tx-red'>(without a medical document)</b>.",
        zh:"供个人使用：<br>- 最多 <b class='tx-warn'>10 种药品</b>（每种不超过 <b class='tx-warn'>5 包</b>）和<br>- 不超过 <b class='tx-warn'>5 件</b>医疗用品 <b class='tx-red'>（无需医疗证明）</b>。" } },
      { p:{
        uz:"Giyohvandlik vositalarini 7 sutkalik ehtiyojdan ortiq boʻlmagan miqdorda olib chiqishga davolash-maslahat komissiyasi muhri bilan tasdiqlangan xulosa mavjud boʻlganda ruxsat beriladi.",
        ru:"Вывоз наркотических средств в количестве не более потребности на 7 суток разрешается при наличии заключения, заверенного печатью лечебно-консультативной комиссии.",
        en:"Taking out narcotic drugs in an amount not exceeding a 7-day supply is allowed if there is a conclusion certified by the seal of the medical advisory board.",
        zh:"携带麻醉药品出境，数量不超过 7 日用量的，须持有经治疗咨询委员会盖章确认的结论方可。" } },
      { p:{
        uz:"Psixotrop moddalar — turli nomdagi 5 tagacha preparat, har biridan 2 oʻramdan ortiq emas.",
        ru:"Психотропные вещества — до 5 наименований препаратов, не более 2 упаковок каждого.",
        en:"Psychotropic substances — up to 5 named preparations, no more than 2 packages of each.",
        zh:"精神药物——最多 5 种制剂，每种不超过 2 包。" } },
      { tgbot:true, url:"https://t.me/moddacheckbot/check",
        title:{uz:"Telegram-bot orqali dori tarkibini tekshirish",ru:"Проверка лекарства через Telegram-бот",en:"Check a medicine via Telegram bot",zh:"通过 Telegram 机器人查询药品"},
        sub:{uz:"Dori vositasini olib chiqish maqomini aniqlang",ru:"Определите статус вывоза лекарства",en:"Find out the export status of a medicine",zh:"查询药品的出口状态"} }
    ]
  },
  {
    id: "out-prohibited", icon: "ban", type: "danger", proScope: "all",
    title: { uz:"Taqiqlangan va cheklangan tovarlar", ru:"Запрещённые и ограниченные товары", en:"Prohibited & restricted goods", zh:"禁止和限制物品" },
    short: {
      uz:"Qidiruv va rangli status badge bilan to‘liq ro‘yxat.",
      ru:"Полный список с поиском и цветными бейджами статуса.",
      en:"Full list with search and coloured status badges.",
      zh:"带搜索和彩色状态标签的完整清单。" }
  }
];
