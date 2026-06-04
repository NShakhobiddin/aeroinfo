/* ============================================================
   CONTENT — Taqiqlangan va cheklangan tovarlar (shared)
   status: "prohibited" | "restricted"
   scope:  "all" (aeroport+pochta) | "post" (faqat jo‘natma)
   name => 4 langs · note => 4 langs (qisqartirilgan) · basis => kod
   ============================================================ */
window.DATA = window.DATA || {};

window.PRO_ICONS = {
  1:"narcotics", 2:"weapon", 3:"radio", 4:"religion", 5:"wildanimal",
  6:"fertilizer", 7:"chemical", 8:"cultural", 9:"animalfood", 10:"vape",
  11:"explosive", 12:"gambling", 13:"explosive", 14:"laser", 15:"drone",
  16:"furnace", 17:"extremist", 18:"currency", 19:"liveanimal", 20:"valuables"
};

DATA.prohibited = [
  { num:1, status:"prohibited", scope:"all", basis:"VMQ 330-son, 1-band, 5–7-ilovalar",
    name:{uz:"Giyohvandlik vositalari, psixotrop moddalar, prekursorlar",ru:"Наркотические средства, психотропные вещества, прекурсоры",en:"Narcotic drugs, psychotropic substances, precursors",zh:"麻醉药品、精神药物、前体"},
    note:{uz:"Ushbu moddalar muomalasi cheklangan.",ru:"Оборот ограничен.",en:"Circulation is restricted.",zh:"流通受限。"} },
  { num:2, status:"restricted", scope:"all", basis:"O‘RQ-550, 31–32-moddalar; VMQ 366-son",
    name:{uz:"Fuqaroviy qurol va uning o‘q-dorilari",ru:"Гражданское оружие и боеприпасы к нему",en:"Civilian weapons and ammunition",zh:"民用武器及弹药"},
    note:{uz:"IIV ruxsatnomasi talab etiladi.",ru:"Требуется разрешение МВД.",en:"MIA permit required.",zh:"需内务部许可。"} },
  { num:3, status:"restricted", scope:"all", basis:"VMQ 801-son 4-ilova; VMQ 417-son",
    name:{uz:"Radioelektron vositalar va yuqori chastotali qurilmalar",ru:"Радиоэлектронные средства и высокочастотные устройства",en:"Radio-electronic and high-frequency devices",zh:"无线电电子及高频设备"},
    note:{uz:"EMMM ruxsatnomasi bilan olib kiriladi.",ru:"Ввозится с разрешением ЕММ.",en:"Imported with an EMM permit.",zh:"凭 EMM 许可入境。"} },
  { num:4, status:"prohibited", scope:"all", basis:"VMQ 180-son Nizom 11-band",
    name:{uz:"Ijobiy xulosasiz va gologrammasiz diniy materiallar",ru:"Религиозные материалы без заключения и голограммы",en:"Religious materials without opinion/hologram",zh:"无鉴定及防伪标识的宗教材料"},
    note:{uz:"Ijobiy xulosa olinmagan va gologramma bilan tamg‘alanmagan materiallar hududga olib kirilishi taqiqlanadi.",ru:"Материалы без положительного заключения и голограммы ввозить запрещено.",en:"Materials without a positive opinion and hologram are prohibited from import.",zh:"未取得合格鉴定且无防伪标识的材料禁止入境。"} },
  { num:5, status:"prohibited", scope:"all", basis:"VMQ 736-son 1-ilova; VMQ 821-son",
    name:{uz:"Saqlanishi taqiqlangan yovvoyi hayvonlar",ru:"Дикие животные, запрещённые к содержанию",en:"Wild animals prohibited to keep",zh:"禁止饲养的野生动物"},
    note:{uz:"VMQ 736-son 1-ilovada zaharli va yirtqich hayvonlar ro‘yxati berilgan.<br>VMQ 821-son hujjat bunday hayvonlarni olib kirishni taqiqlaydi va ruxsatnoma berilishini rad etadi.",ru:"В прил.1 №736 — перечень ядовитых и хищных животных.<br>Документ №821 запрещает их ввоз и отказывает в разрешении.",en:"Annex 1 of No.736 lists venomous and predatory animals.<br>Doc No.821 prohibits their import and refuses permits.",zh:"第736号附件1列有毒性及猛兽清单。<br>第821号文件禁止其入境并拒发许可。"} },
  { num:6, status:"restricted", scope:"all", basis:"VMQ 481-son, 1–2-ilovalar",
    name:{uz:"Mineral o‘g‘itlar va kimyoviy himoya vositalari",ru:"Минеральные удобрения и средства химзащиты",en:"Mineral fertilisers and chemical protection agents",zh:"矿物肥料及化学防护剂"},
    note:{uz:"Agentlik ruxsatnomasi talab etiladi. O‘z ehtiyoji uchun import qilgan shaxs faqat o‘z yer maydonida foydalanishi mumkin; ulgurji/chakana savdo taqiqlanadi.",ru:"Требуется разрешение агентства. Импортёр для личных нужд использует только на своём участке; опт/розница запрещены.",en:"Agency permit required. A personal-use importer may use them only on their own plot; wholesale/retail is prohibited.",zh:"需机构许可。自用进口者仅可在自家地块使用；禁止批发/零售。"} },
  { num:7, status:"prohibited", scope:"all", basis:"VMQ 481-son, 9-band “o”",
    name:{uz:"O‘g‘it/kimyoviy vositalarni qo‘l yuki, bagaj, pochta orqali olib kirish",ru:"Удобрения/химия в ручной клади, багаже, почте",en:"Fertilisers/chemicals via hand luggage, baggage, post",zh:"经手提行李、行李、邮寄携带肥料/化学品"},
    note:{uz:"Xorijdan qo‘l yuki, bagaj yoki pochta jo‘natmasida olib o‘tish taqiqlanadi.",ru:"Перевозка в ручной клади, багаже или почте запрещена.",en:"Carrying via hand luggage, baggage or post is prohibited.",zh:"禁止以手提行李、行李或邮寄方式携带。"} },
  { num:8, status:"restricted", scope:"all", basis:"Madaniy boyliklar Qonuni 5-modda; VMQ 131-son",
    name:{uz:"Madaniy boyliklar",ru:"Культурные ценности",en:"Cultural valuables",zh:"文化珍品"},
    note:{uz:"Import va eksport yagona davlat tartibiga, ro‘yxatga olish va ekspertizaga bo‘ysunadi.",ru:"Импорт/экспорт — по единому госпорядку, с регистрацией и экспертизой.",en:"Import/export follows a unified state procedure with registration and expertise.",zh:"进出口须按统一国家程序进行，需登记和鉴定。"} },
  { num:9, status:"restricted", scope:"all", basis:"PQ-4508, 1-band",
    name:{uz:"Hayvonotga mansub oziq-ovqat mahsulotlari",ru:"Пищевая продукция животного происхождения",en:"Food products of animal origin",zh:"动物源食品"},
    note:{uz:"Qo‘l yuki, bagaj va pochta orqali olib kiriladigan hayvonot mahsulotlarida ishlab chiqarish o‘rovi majburiy.",ru:"Для ввоза в ручной клади, багаже и почте обязательна заводская упаковка.",en:"Factory packaging is mandatory for import via hand luggage, baggage and post.",zh:"经手提行李、行李及邮寄入境的须有原厂包装。"} },
  { num:10, status:"prohibited", scope:"all", basis:"O‘RQ-844 (2023), 37-modda",
    name:{uz:"Nikotinli suyuqlik va moslamalar (elektron sigaretalar)",ru:"Никотиновые жидкости и устройства (вейпы)",en:"Nicotine liquids and devices (e-cigarettes)",zh:"含尼古丁液体及装置（电子烟）"},
    note:{uz:"Olib kirish va realizatsiya taqiqlanadi.",ru:"Ввоз и реализация запрещены.",en:"Import and sale are prohibited.",zh:"禁止入境和销售。"} },
  { num:11, status:"prohibited", scope:"all", basis:"VMQ 213 (2004), 2-band",
    name:{uz:"Portlovchi materiallar va masofadan portlatish qurilmalari",ru:"Взрывчатые материалы и устройства дистанционного подрыва",en:"Explosive materials and remote detonation devices",zh:"爆炸材料及遥控引爆装置"},
    note:{uz:"Jismoniy shaxslar tomonidan olib kirish qat’iyan taqiqlangan (kuzatilmaydigan bagajda ham).",ru:"Ввоз физлицами строго запрещён (в т.ч. в несопровождаемом багаже).",en:"Import by individuals is strictly prohibited (including unaccompanied baggage).",zh:"严禁个人携带入境（含非随身行李）。"} },
  { num:12, status:"prohibited", scope:"all", basis:"VMQ 176 (2007), 1-band",
    name:{uz:"Pul yutug‘i bo‘lgan o‘yin avtomatlari",ru:"Игровые автоматы с денежным выигрышем",en:"Gambling machines with money winnings",zh:"现金博彩游戏机"},
    note:{uz:"Umuman olib kirish taqiqlanadi.",ru:"Ввоз полностью запрещён.",en:"Import is entirely prohibited.",zh:"完全禁止入境。"} },
  { num:13, status:"prohibited", scope:"all", basis:"VMQ 309 (2009), 1-band",
    name:{uz:"Pirotexnika vositalari (II xavf sinfi)",ru:"Пиротехника (II класс опасности)",en:"Pyrotechnics (hazard class II)",zh:"烟花爆竹（II 类危险）"},
    note:{uz:"Olib kirish, ishlab chiqarish, saqlash, realizatsiya va foydalanish vaqtincha taqiqlangan.",ru:"Ввоз, производство, хранение, реализация и использование временно запрещены.",en:"Import, production, storage, sale and use are temporarily prohibited.",zh:"暂时禁止进口、生产、储存、销售和使用。"} },
  { num:14, status:"prohibited", scope:"all", basis:"VMQ 50 (2013), 1-band; TN 9013 20 0000",
    name:{uz:"Portativ lazerli nur tarqatuvchilar",ru:"Портативные лазерные излучатели",en:"Portable laser emitters",zh:"便携式激光发射器"},
    note:{uz:"2013-yil 1-martdan chetdan kirishi va savdosi taqiqlangan.",ru:"С 1 марта 2013 г. ввоз и продажа запрещены.",en:"Banned from import and sale since 1 March 2013.",zh:"自 2013 年 3 月 1 日起禁止进口和销售。"} },
  { num:15, status:"restricted", scope:"all", basis:"VMQ 658 (2022), Nizom 3-ilova",
    name:{uz:"Uchuvchisiz uchish apparatlari (dronlar)",ru:"Беспилотные летательные аппараты (дроны)",en:"Unmanned aerial vehicles (drones)",zh:"无人驾驶飞行器（无人机）"},
    note:{uz:"Umumiy tartibda Fuqarolik aviatsiyasi agentligi ruxsatnomasi talab qilinadi.",ru:"В общем порядке требуется разрешение Агентства гражд. авиации.",en:"Generally requires a Civil Aviation Agency permit.",zh:"通常需民航局许可。"} },
  { num:16, status:"prohibited", scope:"all", basis:"VMQ 999 (2019), 1-band; TN 8514 20 1000",
    name:{uz:"3 yildan ortiq ishlatilgan induksion pechlar va kameralar",ru:"Б/у индукционные печи и камеры старше 3 лет",en:"Used induction furnaces and chambers over 3 years old",zh:"使用超过 3 年的二手感应炉及炉室"},
    note:{uz:"2020-yil 1-martdan shaxsiy import uchun 3 yildan ortiq ishlatilgani olib kirish taqiqlanadi.",ru:"С 1 марта 2020 г. для личного импорта старше 3 лет ввоз запрещён.",en:"Since 1 March 2020, personal import of units over 3 years old is prohibited.",zh:"自 2020 年 3 月 1 日起，禁止个人进口使用超过 3 年的设备。"} },
  { num:17, status:"prohibited", scope:"all", basis:"PF-5286 (2017), 2-ilova",
    name:{uz:"Ekstremistik, terrorchilik, zo‘ravonlik, irqchilik, pornografiya materiallari",ru:"Экстремистские, террористические, насильственные, расистские, порнографические материалы",en:"Extremist, terrorist, violent, racist, pornographic materials",zh:"极端主义、恐怖主义、暴力、种族主义、色情材料"},
    note:{uz:"Bunday mazmundagi materiallar importi va tarqatilishi umuman taqiqlangan.",ru:"Импорт и распространение таких материалов полностью запрещены.",en:"Import and distribution of such materials is entirely prohibited.",zh:"完全禁止进口和传播此类材料。"} },
  // ---- faqat jo‘natma (post/courier) ----
  { num:18, status:"prohibited", scope:"post", basis:"AV-2219, 3-ilova",
    name:{uz:"O‘zbekiston pul belgilari va xorijiy valyuta (pochta orqali)",ru:"Денежные знаки Узбекистана и инвалюта (почтой)",en:"Uzbek banknotes and foreign currency (by post)",zh:"乌兹别克货币及外币（邮寄）"},
    note:{uz:"Markaziy bank va uning muassasalari yuboradiganlaridan tashqari pochta orqali jo‘natish taqiqlanadi.",ru:"Пересылка почтой запрещена, кроме отправляемых Центральным банком и его учреждениями.",en:"Sending by post is prohibited, except by the Central Bank and its institutions.",zh:"除中央银行及其机构外，禁止邮寄。"} },
  { num:19, status:"prohibited", scope:"post", basis:"AV-2219, 3-ilova",
    name:{uz:"Tirik hayvonlar (pochta orqali)",ru:"Живые животные (почтой)",en:"Live animals (by post)",zh:"活体动物（邮寄）"},
    note:{uz:"Pochta jo‘natmalari orqali tirik hayvonlarni jo‘natish taqiqlanadi.",ru:"Пересылка живых животных почтовыми отправлениями запрещена.",en:"Sending live animals by postal shipment is prohibited.",zh:"禁止通过邮政邮寄活体动物。"} },
  { num:20, status:"prohibited", scope:"post", basis:"AV-2219, 3-ilova",
    name:{uz:"Qimmatbaho buyumlar qiymati e’lon qilinmagan posilkalarda",ru:"Ценности в посылках без объявленной ценности",en:"Valuables in parcels without declared value",zh:"未声明价值包裹中的贵重物品"},
    note:{uz:"Qiymati e’lon qilinmagan posilkalarda tangalar, bank/kredit chiptalari, yo‘l cheklari, platina, oltin, kumush buyumlar, qimmatbaho toshlar va zargarlik jo‘natish taqiqlanadi.",ru:"В посылках без объявленной ценности запрещены монеты, банкноты, дорожные чеки, изделия из платины/золота/серебра, драгоценные камни и ювелирные изделия.",en:"In parcels without declared value, coins, banknotes, travellers' cheques, platinum/gold/silver items, precious stones and jewellery are prohibited.",zh:"未声明价值的包裹中禁止寄送硬币、纸币、旅行支票、铂金/黄金/白银制品、宝石及珠宝。"} }
];
