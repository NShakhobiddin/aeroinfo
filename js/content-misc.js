/* ============================================================
   CONTENT — Mobil qurilmalar (qadamlar) + Bog‘lanish (aloqa)
   ============================================================ */
window.DATA = window.DATA || {};

DATA.mobile_steps = [
  {
    icon: "doc", icoImg:"assets/icons/step-declare.png",
    title: { uz:"Deklaratsiyada ko‘rsatish", ru:"Указать в декларации", en:"Declare the device", zh:"在申报单中申报" },
    text: {
      uz:"Mobil qurilma yo‘lovchi bojxona deklaratsiyasida yoki jo‘natmalar deklaratsiyasida ko‘rsatilgan bo‘lishi kerak.<br>Yoʻlovchi bojxona deklaratsiyasini onlayn toʻldirish uchun ilovani yuklab oling:",
      ru:"Мобильное устройство должно быть указано в пассажирской таможенной декларации или в декларации на отправление.<br>Скачайте приложение для онлайн-заполнения пассажирской таможенной декларации:",
      en:"The mobile device must be listed in the passenger customs declaration or the shipment declaration.<br>Download the app to fill in the passenger customs declaration online:",
      zh:"移动设备须列入旅客海关申报单或包裹申报单。<br>下载应用以在线填写旅客海关申报单：" },
    ways: [
      { ico:"googleplay", uz:"Android uchun", ru:"Android uchun", en:"Android uchun", zh:"Android uchun", url:"https://play.google.com/store/apps/details?id=uz.eskishahar.app.yulovchideklaratsiyasi&hl=ru" },
      { ico:"apple", uz:"iOS uchun", ru:"iOS uchun", en:"iOS uchun", zh:"iOS uchun", url:"https://apps.apple.com/uz/app/yolovchi-deklaratsiyasi/id6753123613" }
    ],
    video: {
      url:"https://docs.google.com/videos/d/1nag42Fjy_9knvgr1s2N-8QE9MXGMgK6y-xuXYnmM4_s/edit?usp=sharing",
      title:{uz:"Video qo‘llanma",ru:"Видеоинструкция",en:"Video guide",zh:"视频指南"},
      sub:{uz:"Deklaratsiya toʻldirish",ru:"Пошаговое видео по оформлению",en:"Step-by-step clearance video",zh:"观看分步清关视频"}
    }
  },
  {
    icon: "search", icoImg:"assets/icons/step-check.png",
    title: { uz:"Rasmiylashtirishni tekshirish", ru:"Проверить оформление", en:"Check clearance status", zh:"查询清关状态" },
    text: {
      uz:"Bojxonada rasmiylashtirilganlik holatini tekshiring.",
      ru:"Проверьте статус таможенного оформления.",
      en:"Check the customs clearance status of the device.",
      zh:"查询设备的海关清关状态。" },
    link: { url:"https://uzimei.customs.uz", label:"uzimei.customs.uz" }
  },
  {
    icon: "smartphone", icoImg:"assets/icons/step-apply.png",
    title: { uz:"Ariza qoldirish", ru:"Подать заявление", en:"Submit an application", zh:"提交申请" },
    text: {
      uz:"Agar qurilma bojxonada rasmiylashtirilmagan bo‘lsa, ariza qoldirishingiz mumkin (umumiy qiymatidan yagona bojxona to‘lovi undiriladi).",
      ru:"Если устройство не оформлено, можно подать заявление (с общей стоимости взимается единый таможенный платёж).",
      en:"If the device is not cleared, you may submit an application (a single customs payment is charged on its total value).",
      zh:"若设备未清关，可提交申请（按总价值征收统一海关税费）。" },
    link: { url:"https://imei.customs.uz", label:"imei.customs.uz" }
  },
  {
    icon: "shield", icoImg:"assets/icons/uzimei-glyph.png",
    title: { uz:"UZIMEI ro‘yxatdan o‘tkazish", ru:"Регистрация в UZIMEI", en:"Register in UZIMEI", zh:"在 UZIMEI 注册" },
    text: {
      uz:"UZIMEI ro‘yxatdan o‘tkazishning bir necha yo‘li mavjud:",
      ru:"Существует несколько способов регистрации в UZIMEI:",
      en:"There are several ways to register in UZIMEI:",
      zh:"在 UZIMEI 注册有多种方式：" },
    ways: [
      { uz:"uzimei.uz", ru:"uzimei.uz", en:"uzimei.uz", zh:"uzimei.uz", url:"https://uzimei.uz" },
      { uz:"Birda ilovasi", ru:"Приложение Birda", en:"Birda app", zh:"Birda 应用", url:"https://birda.uz" },
      { uz:"my.gov.uz", ru:"my.gov.uz", en:"my.gov.uz", zh:"my.gov.uz", url:"https://my.gov.uz" },
      { uz:"UZIMEI manzili", ru:"Офис UZIMEI", en:"UZIMEI office", zh:"UZIMEI 办公室" },
      { uz:"Pochta aloqa punktlari", ru:"Почтовые пункты", en:"Postal points", zh:"邮政网点" },
      { uz:"Mobil operator ofislari", ru:"Офисы мобильных операторов", en:"Mobile operator offices", zh:"移动运营商门店" }
    ]
  }
];

// Contact extension group label helper translations
DATA.contacts = [
  {
    id:"ibk", icon:"customs",
    name:"“Toshkent-AERO” IBK",
    phone:"55-502-86-30",
    email:"toshkent_aero@customs.uz",
    addr:{ uz:"Toshkent sh., Sergeli tumani, Qumariq ko‘chasi, 13/1",
           ru:"г. Ташкент, Сергелийский р-н, ул. Кумарык, 13/1",
           en:"Tashkent, Sergeli district, Qumariq street, 13/1",
           zh:"塔什干市谢尔盖利区库马里克街 13/1" },
    map:"https://yandex.ru/navi/org/187089998812?si=1ykdnqfqkte5knkjtjdd6mz83w",
    ext:[
      { l:{uz:"Kadrlar bo‘limi",ru:"Отдел кадров",en:"HR department",zh:"人事部"}, n:"41-16, 41-19" },
      { l:{uz:"Tashkiliy nazorat",ru:"Орг. контроль",en:"Organisational control",zh:"组织监督"}, n:"41-12, 41-56" },
      { l:{uz:"Bojxona nazorati",ru:"Таможенный контроль",en:"Customs control",zh:"海关监管"}, n:"41-35…41-37" },
      { l:{uz:"Valyuta nazorati",ru:"Валютный контроль",en:"Currency control",zh:"货币监管"}, n:"41-41" },
      { l:{uz:"Surishtiruv",ru:"Дознание",en:"Inquiry",zh:"调查"}, n:"41-45…41-50" },
      { l:{uz:"Bojxona to‘lovlari",ru:"Таможенные платежи",en:"Customs payments",zh:"海关税费"}, n:"41-31…41-33" },
      { l:{uz:"TIFTN ekspert",ru:"Эксперт ТНВЭД",en:"HS code expert",zh:"商品编码专家"}, n:"41-39" },
      { l:{uz:"Tadbirkorlikni qo‘llab-quvvatlash",ru:"Поддержка предпринимательства",en:"Business support",zh:"企业支持"}, n:"41-43" },
      { l:{uz:"Audit",ru:"Аудит",en:"Audit",zh:"审计"}, n:"41-22, 41-25" }
    ]
  },
  {
    id:"airport", icon:"plane",
    name:"“Toshkent” xalqaro aeroporti CH/P",
    phone:"55-502-86-30",
    addr:{ uz:"Toshkent sh., Sergeli tumani, Qumariq ko‘chasi, 4",
           ru:"г. Ташкент, Сергелийский р-н, ул. Кумарык, 4",
           en:"Tashkent, Sergeli district, Qumariq street, 4",
           zh:"塔什干市谢尔盖利区库马里克街 4 号" },
    map:"https://yandex.ru/navi/org/187089998812?si=1ykdnqfqkte5knkjtjdd6mz83w",
    ext:[
      { l:{uz:"Post boshlig‘i",ru:"Начальник поста",en:"Post chief",zh:"口岸负责人"}, n:"41-64" },
      { l:{uz:"Boshliq o‘rinbosari",ru:"Зам. начальника",en:"Deputy chief",zh:"副负责人"}, n:"41-20, 41-17" },
      { l:{uz:"Smena boshlig‘i",ru:"Начальник смены",en:"Shift chief",zh:"班次负责人"}, n:"41-30" },
      { l:{uz:"TIF guruhi",ru:"Группа ВЭД",en:"Foreign trade group",zh:"外贸小组"}, n:"41-63" },
      { l:{uz:"IMEI guruhi",ru:"Группа IMEI",en:"IMEI group",zh:"IMEI 小组"}, n:"41-92, 41-84" }
    ]
  },
  {
    id:"avia", icon:"truck",
    name:"“Avia yuklar” TIF",
    phone:"55-502-86-30",
    addr:{ uz:"Toshkent sh., Sergeli tumani, Qumariq ko‘chasi",
           ru:"г. Ташкент, Сергелийский р-н, ул. Кумарык",
           en:"Tashkent, Sergeli district, Qumariq street",
           zh:"塔什干市谢尔盖利区库马里克街" },
    map:"https://yandex.ru/navi/org/155385460485?si=1ykdnqfqkte5knkjtjdd6mz83w",
    ext:[
      { l:{uz:"Post boshlig‘i",ru:"Начальник поста",en:"Post chief",zh:"口岸负责人"}, n:"41-68" },
      { l:{uz:"Post boshlig‘i o‘rinbosari",ru:"Зам. начальника поста",en:"Deputy post chief",zh:"口岸副负责人"}, n:"41-57" },
      { l:{uz:"Smena xodimlari",ru:"Сотрудники смены",en:"Shift staff",zh:"班次人员"}, n:"41-73" },
      { l:{uz:"Tranzit guruhi",ru:"Группа транзита",en:"Transit group",zh:"过境小组"}, n:"41-74" }
    ]
  },
  {
    id:"etijorat", icon:"warehouse",
    name:"“Elektron tijorat” TIF",
    phone:"55-502-86-30",
    addr:{ uz:"CPT Pochta: Sergeli tumani, Qumariq ko‘chasi, 102 · Xalqaro pochtamt: Mirobod tumani, Turkiston ko‘chasi, 4",
           ru:"CPT Почта: Сергелийский р-н, ул. Кумарык, 102 · Международный почтамт: Мирабадский р-н, ул. Туркистон, 4",
           en:"CPT Post: Sergeli district, Qumariq street, 102 · International Post Office: Mirobod district, Turkiston street, 4",
           zh:"CPT 邮政：谢尔盖利区库马里克街 102 · 国际邮局：米罗巴德区图尔基斯坦街 4 号" },
    map:"https://yandex.ru/navi/org/54103356254?si=1ykdnqfqkte5knkjtjdd6mz83w",
    ext:[
      { l:{uz:"CPT Pochta — post boshlig‘i",ru:"CPT Почта — нач. поста",en:"CPT Post — chief",zh:"CPT 邮政——负责人"}, n:"44-11" },
      { l:{uz:"CPT Pochta — xodimlar",ru:"CPT Почта — сотрудники",en:"CPT Post — staff",zh:"CPT 邮政——人员"}, n:"44-10, 44-13" },
      { l:{uz:"CPT Pochta — IMEI bo‘limi",ru:"CPT Почта — отдел IMEI",en:"CPT Post — IMEI dept",zh:"CPT 邮政——IMEI 部门"}, n:"44-19" },
      { l:{uz:"Xalqaro pochtamt — punkt boshlig‘i",ru:"Международный почтамт — нач. пункта",en:"Int'l Post — chief",zh:"国际邮局——负责人"}, n:"44-22" },
      { l:{uz:"Xalqaro pochtamt — xodimlar",ru:"Международный почтамт — сотрудники",en:"Int'l Post — staff",zh:"国际邮局——人员"}, n:"44-14…44-16" }
    ]
  }
];
