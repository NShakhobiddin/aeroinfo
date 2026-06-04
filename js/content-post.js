/* ============================================================
   CONTENT — Xalqaro pochta va kuryerlik jo‘natmalari
   ============================================================ */
window.DATA = window.DATA || {};

DATA.post = [
  {
    id: "post-duty-free", icon: "package", type: "info", tag:"200 / 100 $",
    facts: [
      { v:"200 $", l:{uz:"Kuryerlik jo‘natmasi",ru:"Курьерское отправление",en:"Courier shipment",zh:"快递包裹"} },
      { v:"100 $", l:{uz:"Pochta jo‘natmasi",ru:"Почтовое отправление",en:"Postal shipment",zh:"邮政包裹"} },
      { v:{uz:"1 oy",ru:"1 месяц",en:"1 month",zh:"1 个月"}, l:{uz:"kuryer normasi davri",ru:"период курьерской нормы",en:"courier limit period",zh:"快递限额周期"} }
    ],
    title: { uz:"Bojsiz olib kirish", ru:"Беспошлинный ввоз", en:"Duty-free import", zh:"免税入境" },
    short: {
      uz:"Kuryerlik jo‘natmalari — 200 AQSH dollari; pochta jo‘natmalari — 100 AQSH dollari bojsiz.",
      ru:"Курьерские отправления — 200 долларов США; почтовые — 100 долларов США беспошлинно.",
      en:"Courier shipments — USD 200; postal shipments — USD 100 duty-free.",
      zh:"快递包裹——200 美元；邮政包裹——100 美元免税。" },
    important: {
      uz:"Kuryerlik normasi bir kalendar oy davomida qo‘llanadi (oyning 1-sanasidan so‘nggi sanasigacha).",
      ru:"Курьерская норма применяется в течение календарного месяца (с 1-го по последнее число).",
      en:"The courier limit applies within a calendar month (from the 1st to the last day).",
      zh:"快递限额按日历月计（从当月 1 日至最后一日）。" },
    legal: [
      { p:{
        uz:"“Xalqaro kuryerlik joʻnatmalari orqali — 200 AQSH dollari; xalqaro pochta joʻnatmalari orqali — 100 AQSH dollari.”",
        ru:"«Через международные курьерские отправления — 200 долларов США; через международные почтовые отправления — 100 долларов США.»",
        en:"“Through international courier shipments — USD 200; through international postal shipments — USD 100.”",
        zh:"「通过国际快递——200 美元；通过国际邮政——100 美元。」" } },
      { p:{
        uz:"“Kuryerlik joʻnatmalari orqali jismoniy shaxslar nomiga olib kelinadigan tovarlarga nisbatan bojsiz olib kirishning belgilangan normalari bir kalendar oy davomida qoʻllanadi.”",
        ru:"«Установленные нормы беспошлинного ввоза товаров, доставляемых на имя физических лиц курьерскими отправлениями, применяются в течение одного календарного месяца.»",
        en:"“The set duty-free import limits for goods delivered to individuals via courier shipments apply within one calendar month.”",
        zh:"「通过快递送达个人名下物品的免税进口限额按一个日历月计算。」" } },
      { p:{
        uz:"Kalendar oy – oyning 1-sanasidan boshlab so‘nggi sanasigacha bo‘lgan uzluksiz davr. Misol uchun, 1-yanvardan 31-yanvargacha.",
        ru:"Календарный месяц — непрерывный период с 1-го по последнее число месяца. Например, с 1 по 31 января.",
        en:"A calendar month is a continuous period from the 1st to the last day of the month. For example, from 1 to 31 January.",
        zh:"日历月是指从当月 1 日至最后一日的连续时段。例如，从 1 月 1 日至 1 月 31 日。" } }
    ]
  },
  {
    id: "post-quantity", icon: "quantity", type: "warning",
    title: { uz:"Miqdoriy cheklovlar", ru:"Количественные ограничения", en:"Quantity limits", zh:"数量限制" },
    short: {
      uz:"Ayrim tovarlar bo‘yicha miqdoriy normalar (aeroportdagi kabi) qo‘llanadi.",
      ru:"По ряду товаров действуют количественные нормы (как в аэропорту).",
      en:"Quantity limits apply to certain goods (same as at the airport).",
      zh:"部分商品适用数量限额（与机场相同）。" },
    norms: [
      { ico:"alcohol", name:{uz:"Alkogol (shu jumladan pivo)",ru:"Алкоголь (включая пиво)",en:"Alcohol (incl. beer)",zh:"酒类（含啤酒）"}, val:{uz:"2 litr",ru:"2 литра",en:"2 litres",zh:"2 升"} },
      { ico:"cigarettes", name:{uz:"Sigaret",ru:"Сигареты",en:"Cigarettes",zh:"香烟"}, val:{uz:"200 dona",ru:"200 шт.",en:"200 pcs",zh:"200 支"} },
      { ico:"cigars", name:{uz:"Sigara",ru:"Сигары",en:"Cigars",zh:"雪茄"}, val:{uz:"5 dona",ru:"5 шт.",en:"5 pcs",zh:"5 支"} },
      { ico:"tobacco", name:{uz:"Tabak",ru:"Табак",en:"Tobacco",zh:"烟草"}, val:{uz:"100 gramm",ru:"100 г",en:"100 g",zh:"100 克"} },
      { ico:"perfume", name:{uz:"Atir va ifor suvlari",ru:"Парфюмерия",en:"Perfume",zh:"香水"}, val:{uz:"3 dona (≤300 ml)",ru:"3 шт. (≤300 мл)",en:"3 pcs (≤300 ml)",zh:"3 件 (≤300 毫升)"} },
      { ico:"supplements", name:{uz:"Biologik faol qo‘shimchalar (BAA)",ru:"БАД",en:"Dietary supplements",zh:"膳食补充剂"}, val:{uz:"10 nom (≤3 kg)",ru:"10 наим. (≤3 кг)",en:"10 names (≤3 kg)",zh:"10 种 (≤3 公斤)"} }
    ],
    important: {
      uz:"Alkogol va tamaki mahsulotlarini xalqaro pochta va kuryerlik jo‘natmalari orqali olib kirish taqiqlanadi.",
      ru:"Ввоз алкоголя и табака международными почтовыми и курьерскими отправлениями запрещён.",
      en:"Import of alcohol and tobacco via international post and courier is prohibited.",
      zh:"禁止通过国际邮政和快递携带酒类和烟草制品入境。" }
  },
  {
    id: "post-purpose", icon: "inspection", type: "info",
    title: { uz:"Tovar maqsadini aniqlash", ru:"Определение цели товара", en:"Determining the purpose of goods", zh:"确定货物用途" },
    short: {
      uz:"Tovar shaxsiy ehtiyoj uchunmi yoki tijoratmi — oluvchining yoshi, manzili, takroriyligi va tovar turi bo‘yicha aniqlanadi.",
      ru:"Личное или коммерческое назначение определяется по возрасту, адресу получателя, повторности и виду товара.",
      en:"Personal or commercial purpose is judged by the recipient's age, address, frequency and type of goods.",
      zh:"个人或商业用途依据收件人年龄、地址、频次和货物类型判定。" },
    legal: [
      { h:{ uz:"Pochta/kuryer uchun qo‘shimcha mezonlar:", ru:"Дополнительные критерии для почты/курьера:", en:"Additional criteria for post/courier:", zh:"邮政/快递的附加标准：" } },
      { ul:[
        { uz:"oluvchining (shu jumladan 16 yoshga to‘lmagan farzandlarining) yoshi tovar xususiyatiga muvofiqligi;",
          ru:"соответствие возраста получателя (в том числе его детей младше 16 лет) характеру товара;",
          en:"whether the recipient’s age (including children under 16) matches the nature of the goods;",
          zh:"收件人（含其 16 岁以下子女）的年龄与物品性质是否相符；" },
        { uz:"bir manzilda yashovchi shaxslar tomonidan bir xil turdagi tovarlarni olib o‘tish takroriyligi;",
          ru:"повторность перемещения однотипных товаров лицами, проживающими по одному адресу;",
          en:"the frequency of moving goods of the same type by people living at one address;",
          zh:"同一地址居住者携带同类物品的频次；" },
        { uz:"qabul qiluvchi manzilning shaxs ro‘yxatdan o‘tgan joyi bilan farqliligi.",
          ru:"отличие адреса получателя от места регистрации лица.",
          en:"a difference between the delivery address and the person’s registered address.",
          zh:"收货地址与本人登记地址不一致。" },
        { uz:"tovarning xususiyati, miqdori va olib o‘tish takroriyligi (umumiy mezonlar).",
          ru:"характер, количество товара и повторность перемещения (общие критерии).",
          en:"the nature, quantity and frequency of movement of the goods (general criteria).",
          zh:"物品的性质、数量及携带频次（一般标准）。" }
      ]}
    ]
  },
  {
    id: "post-clearance", icon: "warehouse", type: "info",
    title: { uz:"Rasmiylashtirish tartibi", ru:"Порядок оформления", en:"Clearance procedure", zh:"清关程序" },
    short: {
      uz:"Jo‘natma nazoratdan o‘tadi; xabarnoma YIDXP yoki mobil ilova orqali keladi va tasdiqlash/rad etish mumkin.",
      ru:"Отправление проходит контроль; уведомление приходит через ЕПИГУ или мобильное приложение — можно подтвердить/отклонить.",
      en:"The shipment is inspected; a notice arrives via the e-gov portal or mobile app and can be confirmed/rejected.",
      zh:"包裹经查验；通知通过电子政务门户或手机应用发送，可确认/拒绝。" },
    important: {
      uz:"Tasdiqlash/rad etish past va o‘rta xavfli jo‘natmalar uchun ixtiyoriy, yuqori xavflilar uchun majburiy.",
      ru:"Подтверждение/отклонение добровольно для отправлений низкого и среднего риска, обязательно для высокого.",
      en:"Confirmation/rejection is optional for low- and medium-risk shipments, mandatory for high-risk ones.",
      zh:"低、中风险包裹的确认/拒绝为自愿，高风险为强制。" },
    legal: [
      { p:{
        uz:"Jo‘natmalar deklaratsiyasi tizimda ro‘yxatga olingach, har bir kuryerlik jo‘natmasi bo‘yicha xabarnoma qabul qiluvchiga YIDXP yoki mobil ilova orqali avtomatik yuboriladi.",
        ru:"После регистрации декларации на отправления в системе по каждому курьерскому отправлению получателю автоматически направляется уведомление через ЕПИГУ или мобильное приложение.",
        en:"Once the shipment declaration is registered in the system, a notice for each courier shipment is sent to the recipient automatically via the e-gov portal or the mobile app.",
        zh:"包裹申报在系统中登记后，每个快递包裹的通知会通过电子政务门户或手机应用自动发送给收件人。" } },
      { p:{
        uz:"Qabul qiluvchi ixtiyoriy ravishda YIDXP/mobil ilova orqali yoki eng yaqin bojxona organiga murojaat qilib xabarnomani tasdiqlaydi yoki rad etadi.",
        ru:"Получатель добровольно подтверждает или отклоняет уведомление через ЕПИГУ/мобильное приложение либо обратившись в ближайший таможенный орган.",
        en:"The recipient voluntarily confirms or rejects the notice via the e-gov portal/mobile app or by applying to the nearest customs office.",
        zh:"收件人可自愿通过电子政务门户/手机应用，或向最近的海关申请，确认或拒绝该通知。" } },
      { h:{ uz:"Jo‘natma quyidagi hollarda vaqtincha saqlovga olinishi mumkin:", ru:"Отправление может быть помещено на временное хранение в следующих случаях:", en:"A shipment may be placed in temporary storage in the following cases:", zh:"在以下情形包裹可被暂时存放：" } },
      { ul:[
        { uz:"bojxona to‘lovi to‘lanishi lozim bo‘lgan tovarlar aniqlanganda;",
          ru:"при выявлении товаров, по которым подлежит уплате таможенный платёж;",
          en:"when goods subject to a customs payment are identified;",
          zh:"发现需缴纳海关税费的物品时；" },
        { uz:"tovar maqsadini aniqlashda nizoli holat yuzaga kelganda;",
          ru:"при возникновении спорной ситуации при определении цели товара;",
          en:"when a dispute arises in determining the purpose of the goods;",
          zh:"在确定物品用途时出现争议时；" },
        { uz:"namuna va sinamalar olinib, o‘rganish yakunlanmaganda;",
          ru:"когда взяты образцы и пробы, а исследование не завершено;",
          en:"when samples and specimens have been taken but the study is not complete;",
          zh:"已提取样品和样本但检验尚未完成时；" },
        { uz:"Xavfni boshqarish tizimi topshirig‘i asosida;",
          ru:"на основании указания системы управления рисками;",
          en:"on the instruction of the risk-management system;",
          zh:"根据风险管理系统的指令；" },
        { uz:"qo‘shimcha hujjat/ma’lumot talab qilinib, tekshiruv tugamaganda;",
          ru:"когда запрошены дополнительные документы/сведения, а проверка не завершена;",
          en:"when additional documents/information are required and the check is not finished;",
          zh:"需要补充单证/信息且审查尚未完成时；" },
        { uz:"bojxona ko‘rigi yoki ekspertizasi yakunlanmaganda.",
          ru:"когда таможенный досмотр или экспертиза не завершены.",
          en:"when the customs inspection or expert examination is not complete.",
          zh:"海关查验或鉴定尚未完成时。" }
      ]}
    ]
  },
  {
    id: "post-prohibited", icon: "ban", type: "danger", link: "prohibited-post",
    title: { uz:"Jo‘natmalarda taqiqlangan va cheklangan tovarlar", ru:"Запрещённые и ограниченные товары в отправлениях", en:"Prohibited & restricted goods in shipments", zh:"邮寄中禁止和限制的物品" },
    short: {
      uz:"To‘liq qidiruvli ro‘yxat. Pochta uchun qo‘shimcha taqiqlar: valyuta, qimmatbaho buyumlar, tirik hayvonlar.",
      ru:"Полный список с поиском. Доп. запреты для почты: валюта, ценности, живые животные.",
      en:"Full searchable list. Extra postal bans: currency, valuables, live animals.",
      zh:"可搜索的完整清单。邮寄的额外禁令：货币、贵重物品、活体动物。" }
  }
];
