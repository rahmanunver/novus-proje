const lngBtnTr = document.querySelector(".lng1")
const lngBtnRu = document.querySelector(".lng2")

// Navbar
const link1 = document.querySelector(".link1")
const link2 = document.querySelector(".link2")
const link3 = document.querySelector(".link3")

const mobileLink1 = document.querySelector(".mobileLink1")
const mobileLink2 = document.querySelector(".mobileLink2")
const mobileLink3 = document.querySelector(".mobileLink3")

// Footer
const footerBrand = document.querySelector(".footerBrand")

// About Us Page
const aboutUsText1 = document.querySelector(".aboutUsText1")
const aboutUsText2 = document.querySelector(".aboutUsText2")
const aboutUsText3 = document.querySelector(".aboutUsText3")
const aboutUsText4 = document.querySelector(".aboutUsText4")
const aboutUsText5 = document.querySelector(".aboutUsText5")

function changeTexts() {
    if (localStorage.getItem('siteLanguange') === "tr") {
        lngBtnTr.classList.add("active");
        lngBtnRu.classList.remove("active");

        link1.innerText = "Hakkımızda"
        link2.innerText = "Projeler"
        link3.innerText = "İletişim"
        mobileLink1.innerText = "Hakkımızda"
        mobileLink2.innerText = "Projeler"
        mobileLink3.innerText = "İletişim"

        footerBrand.innerText = "NOVUS Proje Danışmanlığı & Yönetimi"

        // About Us Page
        aboutUsText1.innerText = "NOVUS DANIŞMANLIK & PROJE YÖNETİMİ"
        aboutUsText2.innerText = "Şirketimiz bünyesinde Mimari, statik, mekanik, elektrik projeleri hizmeti verilmektedir. Şirket merkezi Kazakistan Astana şehrindedir. Şirketimizin Türkiye'de de ofisi bulunmaktadır. Kazakistan ve Rusya federasyonu bölgesinde yerel normlara uygun proje hizmeti vermektedir."
        aboutUsText3.innerText = "Grup Şirketleri"
        aboutUsText4.innerText = "PİRAMİDA CONSTRUCTION GROUP, Kazakistan"
        aboutUsText5.innerText = "ARGOS CONSTRCUTION, Özbekistan"
    } else if (localStorage.getItem('siteLanguange') === "ru") {
        lngBtnTr.classList.remove("active");
        lngBtnRu.classList.add("active");

        link1.innerText = "О нас"
        link2.innerText = "Проекты"
        link3.innerText = "Контакт"
        mobileLink1.innerText = "О нас"
        mobileLink2.innerText = "Проекты"
        mobileLink3.innerText = "Контакт"

        footerBrand.innerText = "Проектная компания- «NOVUS DANIŞMANLIK & PROJE YÖNETİMİ»."

        // About Us Page
        aboutUsText1.innerText = "Проектная компания- «NOVUS DANIŞMANLIK & PROJE YÖNETİMİ»."
        aboutUsText2.innerText = "В нашей компании предоставляются услуги в сфере  архитектурной деятельности: Головной офис находится на территории Казахстана в г.Нур-Cултан и на территории Турции в г.Стамбул.Наша компания предоставляет проектные услуги в соответсвии с местными нормами в регионе Казахстана и Российской Феферации."
        aboutUsText3.innerText = "Группы компаний:"
        aboutUsText4.innerText = "PIRAMİDA CONSTRUCTION GROUP, Казахстан"
        aboutUsText5.innerText = "ARGOS CONSTRUCTION, Узбекистан"
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