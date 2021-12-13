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

// About Us Page
const aboutUs1 = document.querySelector(".aboutUs1")
const aboutUs2 = document.querySelector(".aboutUs2")
function changeTexts() {
    if (localStorage.getItem('siteLanguange') === "tr") {
        lngBtnTr.classList.add("active");
        lngBtnRu.classList.remove("active");

        link0.innerText = "Ana Sayfa"
        link1.innerText = "Hakkımızda"
        link2.innerText = "Projeler"
        link3.innerText = "İletişim"
        mobileLink1.innerText = "Hakkımızda"
        mobileLink2.innerText = "Projeler"
        mobileLink3.innerText = "İletişim"

        footerBrand.innerText = "NOVUS Proje Danışmanlığı & Yönetimi"

        // About Us Page
        aboutUs1.innerText = "NOVUS PROJE DANIŞMANLIK VE YÖNETİMİ"
        aboutUs2.innerText = "Firmamız Mimari Tasarım ve Uygulama Projeleri hazırlama hizmeti vermektedir. Tüm proje disiplinlerinin eşzamanlı hazırlanması ve projelerdeki uyumun sağlanması prensibi ile çalışmaktadır. Bünyemizde Mimari, Statik, Mekanik ve Elektrik  projeleri  gerçek anlamda uygulama projesi niteliğinde hazırlanmaktadır.  Muhtelif yapı türlerinde proje hizmetleri sunmaktayız. Konut, Ticaret binaları, Yönetim Binaları, Eğitim Binaları ve Endüstriyel tesislerde tecrübemiz bulunmaktadır. Ağırlıklı olarak Yurtdışı projeleri  yapmaktayız. Özellikle Rusya Federasyonu ve eski Sovyet Cumhuriyeti Devletlerinde yerel normlara göre proje çözümleri sunmaktayız.  Bu ülkelerdeki yerel idarelerden gerekli onayları alabilecek deneyim, uzmanlık ve organizasyon yapısına sahibiz  2000 yılından beri Özbekistan ve Kazakistan’da çeşitli yapı sınıflarından onlarca proje tamamladık. Kazakistan’daki Faliyetlerimizi  “Piramida Construction Grup” isimli Grup şirkettimiz üzerinden yapmaktayız. Şirketimizin Kazakistan’da geniş kapsamlı iş  ve proje yapma lisansları bulunmaktadır."
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

        // About Us Page
        aboutUs1.innerText = "NOVUS PROJE DANIŞMANLIK VE YÖNETİMİ (НОВУС ПРОЖЕ ДАНЫШМАНЛЫК ВЕ ЁНЕТИМ) НОВУС КОНСАЛТИНГ И УПРАВЛЕНИЕ ПРОЕКТАМИ"
        aboutUs2.innerText = "Наша компания предоставляет услуги по подготовке архитектурного дизайна и рабочих проектов. Мы работаем по принципу одновременной подготовки всех проектных дисциплин и соответствий в этих проектах. Разрабатываем рабочие проекты разделов архитектурные, конструктивные, инженерные , электрические технические решения. Основная деятельность компании это - зарубежные проекты. Мы предлагаем проектные решения в соответствии с местными строительными нормами и правилами , особенно в Российской Федерации и странах бывшего Советского Союза. Имеем знания и опыт в организации предоставления документов в местные исполнительные органы , которые позволяют получить необходимые разрешения в этих странах. С 2000 года мы реализовали различные проекты в Узбекистане и Казахстане. В Казахстане ,мы осуществляем свою деятельность через ТОО «Pıramida Construction Group» которая входит в нашу группу компаний. Эта компания имеет лицензии на ведение бизнеса и проектирования в Казахстане. Мы предлагаем услуги по проектированию различных типов зданий. У нас есть опыт работы в жилищном строительстве, коммерческих и административных зданиях, образовательных и промышленных объектах."
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