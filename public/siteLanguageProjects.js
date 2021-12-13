const lngBtnTr = document.querySelector(".lng1")
const lngBtnRu = document.querySelector(".lng2")

// Navbar
const link0 = document.querySelector(".link0")
const link1 = document.querySelector(".link1")
const link2 = document.querySelector(".link2")
const link3 = document.querySelector(".link3")

const mobileLink0 = document.querySelector(".mobileLink0")
const mobileLink1 = document.querySelector(".mobileLink1")
const mobileLink2 = document.querySelector(".mobileLink2")
const mobileLink3 = document.querySelector(".mobileLink3")

// Footer
const footerBrand = document.querySelector(".footerBrand")

// Projects Page
// Card Button x
const cardButton1 = document.querySelector(".card-button1")
const cardButton2 = document.querySelector(".card-button2")
const cardButton3 = document.querySelector(".card-button3")
const cardButton4 = document.querySelector(".card-button4")
const cardButton5 = document.querySelector(".card-button5")
const cardButton6 = document.querySelector(".card-button6")
const cardButton7 = document.querySelector(".card-button7")
const cardButton8 = document.querySelector(".card-button8")

// Project Title x
const pt1 = document.querySelector(".project1Title")
const pt2 = document.querySelector(".project2Title")
const pt3 = document.querySelector(".project3Title")
const pt4 = document.querySelector(".project4Title")
const pt5 = document.querySelector(".project5Title")
const pt6 = document.querySelector(".project6Title")
const pt7 = document.querySelector(".project7Title")
const pt8 = document.querySelector(".project8Title")

//  Project x Description x
const p1d1 = document.querySelector(".project1Description1")
const p1d2 = document.querySelector(".project1Description2")
const p1d3 = document.querySelector(".project1Description3")
const p1d4 = document.querySelector(".project1Description4")
const p1d5 = document.querySelector(".project1Description5")
const p2d1 = document.querySelector(".project2Description1")
const p2d2 = document.querySelector(".project2Description2")
const p2d3 = document.querySelector(".project2Description3")
const p2d4 = document.querySelector(".project2Description4")
const p2d5 = document.querySelector(".project2Description5")
const p3d1 = document.querySelector(".project3Description1")
const p3d2 = document.querySelector(".project3Description2")
const p3d3 = document.querySelector(".project3Description3")
const p3d4 = document.querySelector(".project3Description4")
const p3d5 = document.querySelector(".project3Description5")
const p4d1 = document.querySelector(".project4Description1")
const p4d2 = document.querySelector(".project4Description2")
const p4d3 = document.querySelector(".project4Description3")
const p4d4 = document.querySelector(".project4Description4")
const p4d5 = document.querySelector(".project4Description5")
const p5d1 = document.querySelector(".project5Description1")
const p5d2 = document.querySelector(".project5Description2")
const p5d3 = document.querySelector(".project5Description3")
const p5d4 = document.querySelector(".project5Description4")
const p5d5 = document.querySelector(".project5Description5")
const p6d1 = document.querySelector(".project6Description1")
const p6d2 = document.querySelector(".project6Description2")
const p6d3 = document.querySelector(".project6Description3")
const p6d4 = document.querySelector(".project6Description4")
const p6d5 = document.querySelector(".project6Description5")
const p7d1 = document.querySelector(".project7Description1")
const p7d2 = document.querySelector(".project7Description2")
const p7d3 = document.querySelector(".project7Description3")
const p7d4 = document.querySelector(".project7Description4")
const p7d5 = document.querySelector(".project7Description5")
const p8d1 = document.querySelector(".project8Description1")
const p8d2 = document.querySelector(".project8Description2")
const p8d3 = document.querySelector(".project8Description3")
const p8d4 = document.querySelector(".project8Description4")
const p8d5 = document.querySelector(".project8Description5")
const p8d6 = document.querySelector(".project8Description6")
const p8d7 = document.querySelector(".project8Description7")
const p8d8 = document.querySelector(".project8Description8")
const p8d9 = document.querySelector(".project8Description9")

function changeTexts() {
    if (localStorage.getItem('siteLanguange') === "tr") {
        lngBtnTr.classList.add("active");
        lngBtnRu.classList.remove("active");

        link0.innerText = "Ana Sayfa"
        link1.innerText = "Hakkımızda"
        link2.innerText = "Projeler"
        link3.innerText = "İletişim"
        mobileLink0.innerText = "Ana Sayfa"
        mobileLink1.innerText = "Hakkımızda"
        mobileLink2.innerText = "Projeler"
        mobileLink3.innerText = "İletişim"

        footerBrand.innerText = "NOVUS Proje Danışmanlığı & Yönetimi"

        // Projects Page
        cardButton1.innerText = "Detaylar"
        cardButton2.innerText = "Detaylar"
        cardButton3.innerText = "Detaylar"
        cardButton4.innerText = "Detaylar"
        cardButton5.innerText = "Detaylar"
        cardButton6.innerText = "Detaylar"
        cardButton7.innerText = "Detaylar"
        cardButton8.innerText = "Detaylar"

        pt1.innerText = "Aktau Resort Rixos Hotel"
        pt2.innerText = "Aktau Rixos Golf Resort"
        pt3.innerText = "Aktau Tema Park"
        pt4.innerText = "Astana City Palace Business Center"
        pt5.innerText = "Bolasak Business Complex"
        pt6.innerText = "Khan Tengri"
        pt7.innerText = "Mont-Blanc Housing Complex"
        pt8.innerText = "Nazarbaev University"

        p1d1.innerText = "Konumu: Kazakistan Aktau şehri"
        p1d2.innerText = "5 yıldızlı otel komplexi olarak planlanmıştır. Aquapark, yüzme havuzları, dalga havuzu ve diğer aktiviteleri barındırmaktadır. İnşaat alanı 65 000 m2. Mimari ve Statik uygulama projeleri yapılmıştır. Projler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır."

        p2d1.innerText = "Konumu: Kazakistan Aktau şehri"
        p2d2.innerText = "İnşaat alanı 52 000 m2"
        p2d3.innerText = "Golf Klübü binası ve 100 adet villadan oluşan komplex şeklinde planlanmıştır. Mimari, Statik, Mekanik ve Elektrik uygulama projeleri yapılmıştır. Projler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır. "

        p3d1.innerText = "Konumu: Kazakistan Aktau şehri"
        p3d2.innerText = "İnşaat alanı 25 000 m2"
        p3d3.innerText = "Çeşitli atraksiyonları barındıran dinlenme ve eğlence merkezi olarak planlanıştır. Yeme içme üniteleri, farklı yaş grupları için çeşitli atraksiyonlar, eğlence alanları barındırmaktadır. Mimari, Statik, Mekanik ve Elektrik uygulama projeleri yapılmıştır. Projler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır. "

        p4d1.innerText = "“CITY PALACE” ALIŞVERIŞ MERKEZİ"
        p4d2.innerText = "Konumu: Kazakistan Nursultan şehri"
        p4d2.innerText = "Alanı: 65 000 m2 "
        p4d3.innerText = "'City Palace' Alış Veriş  Merkezi  Nursultan  şehri Respublika caddesi üzerinde 4 katlı  olarak planlanmıştır. Proje  AVM, sinema, lokanta ve kafelerden oluşmaktadır. 1200 araçlık kapalı otoparkı mevcuttur. Mimari, statik, Mekanik ve Elektrik uygulama projeleri yapılmıştır. Projeler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır."

        p5d1.innerText = "BOLAŞAK İŞ MERKEZİ"
        p5d2.innerText = "Konumu: Kazakistan Nursultan şehri Sarıarka Reyonu"
        p5d3.innerText = "Alanı: 36 000 m2"
        p5d4.innerText = "İş Merkezi için modern gereksinimler göz önünde bulundurularak Ofis binası olarak Planlanmıştır. Bina, yüksek kaliteli ofis ve ortak alanlara sahiptir. Mimari, statik, Mekanik ve Elektrik uygulama projeleri yapılmıştır. Projler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır. "

        p6d1.innerText = "'HAN TENGRİ' KONUT KOMPLEKSİ"
        p6d2.innerText = "Konumu: Kazakistan Nursultan şehri"
        p6d3.innerText = "Alanı: 52 000 m2"
        p6d4.innerText = "'Han Tengri' Konut kompleksi, birinci sınıf 355 daire ve  Ofis bloğundan oluşmaktadır. Zemin katlar ticaret alanı olarak planlanmıştır. Mimari statik Mekanik Elektrik uygulama projleri projleri yapılmıştır. Projler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır. "

        p7d1.innerText = "MON BLAN DE LUXE (MONT BLANC DE LUXE ) KONUT KOMPLEKSİ"
        p7d2.innerText = "Konumu: Kazakistan Nursultan şehri"
        p7d3.innerText = "Alanı: 32 000 m2"
        p7d4.innerText = "Başkentin A+ sınıf konutlarının parlak bir temsilcisi  Mon Blan De lux  konut kompleksidir. 3 konut bloğu ve 1 A+ sınıf ofis bloğundan oluşmaktadır. Mimari, Statik, Mekanik, Elektrik uygulama projeleri yapılmıştır. Projler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır. "

        p8d1.innerText = "NAZARBAYEV ÜNİVERSİTESİ"
        p8d2.innerText = "Konumu: Kazakistan Nursultan şehri"
        p8d3.innerText = "Nazarbayev Üniversitesi, Nursultan şehrinde Modern bir üniversite olarak palnlanmıştır. Eğitim binaları, Öğrenci yurtları, Öğretim görevlisi lojmanları, Teknopark, Kütüphane, Konferans salonları ve diğer yapılardan oluşmaktadır. Nursultan sert iklim şartları dikkate alınarak planlanmıştır. "
        p8d4.innerText = "1. Etap "
        p8d5.innerText = "Rektörlük binası, fakülte blokları, Kütüphane, Yemekhane, laboratuvar  bloğu, 4 adet Yurt bloğu ve Atriumdur.İnşaat alanı 130 000 m2.Mimari, Statik, Mekanik ve Elektrik uygulama projeleri yapılmıştır.Projler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır."
        p8d6.innerText = "2. Etap"
        p8d7.innerText = "Yurt Blokları (2 blok), Lojman Bloğu (2 blok), Spor salonu komplexi, Spor salonu Olimpik yüzme havuzu, basketbol, Voleybol ve Hentbol sahaları, Kapalı Tenis kortu, Güreş, Boks, Eskrim sahaları, Kondüsyon merkezi, Squash kortları ve diğer donatıları içermektedir. İnşaat alanı 115 000 m2. Mimari, Statik, Mekanik ve Elektrik uygulama projeleri yapılmıştır. Projler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır. "
        p8d8.innerText = "3. Etap"
        p8d9.innerText = "Yurt Blokları (2 blok) Fakülte blokları (2 blok) Kütüphane Bloğu (1 blok) İnşaat alanı 96 000 m2. Mimari, Statik, Mekanik ve Elektrik uygulama projeleri yapılmıştır. Projler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır. "

    } else if (localStorage.getItem('siteLanguange') === "ru") {
        lngBtnTr.classList.remove("active");
        lngBtnRu.classList.add("active");

        link0.innerText = "Главная"
        link1.innerText = "О нас"
        link2.innerText = "Проекты"
        link3.innerText = "Контакт"
        mobileLink0.innerText = "Главная"
        mobileLink1.innerText = "О нас"
        mobileLink2.innerText = "Проекты"
        mobileLink3.innerText = "Контакт"

        footerBrand.innerText = "Проектная компания- «NOVUS DANIŞMANLIK & PROJE YÖNETİMİ»."

        // Projects Page
        cardButton1.innerText = "Подробнее"
        cardButton2.innerText = "Подробнее"
        cardButton3.innerText = "Подробнее"
        cardButton4.innerText = "Подробнее"
        cardButton5.innerText = "Подробнее"
        cardButton6.innerText = "Подробнее"
        cardButton7.innerText = "Подробнее"
        cardButton8.innerText = "Подробнее"

        pt1.innerText = "Aktau Resort Rixos Hotel"
        pt2.innerText = "Aktau Rixos Golf Resort"
        pt3.innerText = "Aktau Tema Park"
        pt4.innerText = "Astana City Palace Business Center"
        pt5.innerText = "Bolasak Business Complex"
        pt6.innerText = "Khan Tengri"
        pt7.innerText = "Mont-Blanc Housing Complex"
        pt8.innerText = "Nazarbaev University"

        p1d1.innerText = "Konumu: Kazakistan Aktau şehri"
        p1d2.innerText = "5 yıldızlı otel komplexi olarak planlanmıştır. Aquapark, yüzme havuzları, dalga havuzu ve diğer aktiviteleri barındırmaktadır. İnşaat alanı 65 000 m2. Mimari ve Statik uygulama projeleri yapılmıştır. Projler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır."

        p2d1.innerText = "Konumu: Kazakistan Aktau şehri"
        p2d2.innerText = "İnşaat alanı 52 000 m2"
        p2d3.innerText = "Golf Klübü binası ve 100 adet villadan oluşan komplex şeklinde planlanmıştır. Mimari, Statik, Mekanik ve Elektrik uygulama projeleri yapılmıştır. Projler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır. "

        p3d1.innerText = "Konumu: Kazakistan Aktau şehri"
        p3d2.innerText = "İnşaat alanı 25 000 m2"
        p3d3.innerText = "Çeşitli atraksiyonları barındıran dinlenme ve eğlence merkezi olarak planlanıştır. Yeme içme üniteleri, farklı yaş grupları için çeşitli atraksiyonlar, eğlence alanları barındırmaktadır. Mimari, Statik, Mekanik ve Elektrik uygulama projeleri yapılmıştır. Projler yerel normlara uygun olarak hazırlanmış ve yerel idarelerden onaylatılmıştır. "

        p4d1.innerText = "'СИТИ ПАЛАС' ТОРГОВЫЙ ЦЕНТР"
        p4d2.innerText = "Местонахождения: город Нур-Султан, Казахстан."
        p4d2.innerText = "Площадь: 65 000 м2"
        p4d3.innerText = "Торговый центр 'Сити Палас' -  четырех  этажное здание  на улице Республики в городе Нур-Султан.  Проект  состоит из кинотеатров, ресторанов и кафе и торговых бутиков . Есть крытая автостоянка на 1200 машиномест. Разработка рабочих  проектов   разделов:  архитектурные, конструктивные, инженерные , электрические технические  решения.. Проекты разработаны в соответствии с местными строительными  нормами и правилами одобрены местными властями."

        p5d1.innerText = "БИЗНЕС-ЦЕНТР « БОЛАШАК»"
        p5d2.innerText = "Местонахождения: район Сарыарка, город Нур-Султан, Казахстан"
        p5d3.innerText = "Площадь: 36 000 м2"
        p5d4.innerText = "Разработка проектов  Офисного здания с учетом современных требований к Бизнес-центру. В здании качественные офисные помещения и помещения общего пользования. Разработка рабочих  проектов   разделов:  архитектурные, конструктивные, инженерные , электрические технические  решения.. Проекты разработаны в соответствии с местными строительными  нормами и правилами одобрены местными властями."

        p6d1.innerText = "'ХАН ТЕНГРИ' ЖИЛОЙ КОМПЛЕКС"
        p6d2.innerText = "Местонахождения: город Нур-Султан, Казахстан."
        p6d3.innerText = "Площадь: 52 000 м2"
        p6d4.innerText = "Жилой комплекс 'Хан Тенгри' состоит из 355 квартир первого класса и офисного блока. Первые этажи спроектированы как коммерческая площадь. Разработка рабочих  проектов   разделов:  архитектурные, конструктивные, инженерные , электрические технические  решения.. Проекты разработаны в соответствии с местными строительными  нормами и правилами одобрены местными властями. "

        p7d1.innerText = "МОН БЛАН ДЕ ЛЮКС (MONT BLANC DE LUXE) ЖИЛОЙ КОМПЛЕКС"
        p7d2.innerText = "Местонахождения: город Нур-Султан, Казахстан."
        p7d3.innerText = "Площадь: 32 000 м2"
        p7d4.innerText = "Ярким представителем жилья бизнес-класса столицы является жилой комплекс Mon Blan De lux. Состоит из 3 жилых блоков и 1 офисного блока класса А. Разработка рабочих  проектов   разделов:  архитектурные, конструктивные, инженерные , электрические технические  решения... Проекты разработаны в соответствии с местными строительными  нормами и правилами одобрены местными властями. "

        p8d1.innerText = "НАЗАРБАЕВ УНИВЕРСИТЕТ"
        p8d2.innerText = "Местонахождения: город Нур-Султан, Казахстан."
        p8d3.innerText = "Назарбаев Университет задуман как современный университет в городе Нур-Султан. Он состоит из учебных корпусов, студенческих общежитий, дома для  преподавателей , технопарка, библиотеки, конференц-залов и других зданий. Проект разработан с учетом  суровых климатических условий города  Нур-Султан."
        p8d4.innerText = "1 этап"
        p8d5.innerText = "Здание ректората, состоит из 4-х корпусов общежития факультетских корпусов, библиотеки, кафетерий, лабораторного блока и атриума. Площадь застройки составляет 130 000 м2. Разработка рабочих  проектов   разделов:  архитектурные, конструктивные, инженерные , электрические технические  решения... Проекты разработаны в соответствии с местными строительными  нормами и правилами одобрены местными властями. "
        p8d6.innerText = "2 этап"
        p8d7.innerText = "Блок общежитий (2 блока) Жилой корпус (2 блока) Комплекс спортивного зала, В тренажерном зале есть олимпийский бассейн, площадки для баскетбола, волейбола и гандбола, крытый теннисный корт, площадки для борьбы, бокса, фехтования, центр кондиционирования, корты для сквоша и другие сооружения. Площадь застройки 115 000 м2.Разработка рабочих  проектов   разделов:  архитектурные, конструктивные, инженерные , электрические технические  решения... Проекты разработаны в соответствии с местными строительными  нормами и правилами одобрены местными властями."
        p8d8.innerText = "3 этап"
        p8d9.innerText = "Блоки общежития (2 блока) Блоки факультетов (2 блока) Блок библиотеки (1 блок) Площадь застройки 96 000 м2. Разработка рабочих  проектов   разделов:  архитектурные, конструктивные, инженерные , электрические технические  решения... Проекты разработаны в соответствии с местными строительными  нормами и правилами одобрены местными властями. "
    }
}

document.querySelector(".lng1").addEventListener("click", () => {
    localStorage.setItem('siteLanguange', 'tr');
    changeTexts()
})

document.querySelector(".lng2").addEventListener("click", () => {
    localStorage.setItem('siteLanguange', 'ru');
    changeTexts()
})

changeTexts()