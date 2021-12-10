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

// Contact Us Page
const contactUsTitle = document.querySelector(".contactUsTitle")
const contactUsInfo1 = document.querySelector(".contactUsInfo1")
const contactUsInfo2 = document.querySelector(".contactUsInfo2")

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

        // Contact Us Page
        contactUsTitle.innerText = "Contact Us Title Tr"
        contactUsInfo1.innerText = "Contact Us Info1 Tr"
        contactUsInfo2.innerText = "Contact Us Info2 Tr"

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

        // Contact Us Page
        contactUsTitle.innerText = "Contact Us Title Ru"
        contactUsInfo1.innerText = "Contact Us Info1 Ru"
        contactUsInfo2.innerText = "Contact Us Info2 Ru"
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