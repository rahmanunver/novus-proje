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

        // Projects Page
        cardButton1.innerText = "Detaylar"
        cardButton2.innerText = "Detaylar"
        cardButton3.innerText = "Detaylar"
        cardButton4.innerText = "Detaylar"
        cardButton5.innerText = "Detaylar"
        cardButton6.innerText = "Detaylar"
        cardButton7.innerText = "Detaylar"
        cardButton8.innerText = "Detaylar"

        pt1.innerText = "Project X Title"
        pt2.innerText = "Project X Title"
        pt3.innerText = "Project X Title"
        pt4.innerText = "Project X Title"
        pt5.innerText = "Project X Title"
        pt6.innerText = "Project X Title"
        pt7.innerText = "Project X Title"
        pt8.innerText = "Project X Title"

        p1d1.innerText = "Lorem ama 30 kelime"
        p1d2.innerText = "Lorem ama 30 kelime"
        p1d3.innerText = "Lorem ama 30 kelime"
        p1d4.innerText = "Lorem ama 30 kelime"
        p1d5.innerText = "Lorem ama 30 kelime"
        p2d1.innerText = "Lorem ama 30 kelime"
        p2d2.innerText = "Lorem ama 30 kelime"
        p2d3.innerText = "Lorem ama 30 kelime"
        p2d4.innerText = "Lorem ama 30 kelime"
        p2d5.innerText = "Lorem ama 30 kelime"
        p3d1.innerText = "Lorem ama 30 kelime"
        p3d2.innerText = "Lorem ama 30 kelime"
        p3d3.innerText = "Lorem ama 30 kelime"
        p3d4.innerText = "Lorem ama 30 kelime"
        p3d5.innerText = "Lorem ama 30 kelime"
        p4d1.innerText = "Lorem ama 30 kelime"
        p4d2.innerText = "Lorem ama 30 kelime"
        p4d3.innerText = "Lorem ama 30 kelime"
        p4d4.innerText = "Lorem ama 30 kelime"
        p4d5.innerText = "Lorem ama 30 kelime"
        p5d1.innerText = "Lorem ama 30 kelime"
        p5d2.innerText = "Lorem ama 30 kelime"
        p5d3.innerText = "Lorem ama 30 kelime"
        p5d4.innerText = "Lorem ama 30 kelime"
        p5d5.innerText = "Lorem ama 30 kelime"
        p6d1.innerText = "Lorem ama 30 kelime"
        p6d2.innerText = "Lorem ama 30 kelime"
        p6d3.innerText = "Lorem ama 30 kelime"
        p6d4.innerText = "Lorem ama 30 kelime"
        p6d5.innerText = "Lorem ama 30 kelime"
        p7d1.innerText = "Lorem ama 30 kelime"
        p7d2.innerText = "Lorem ama 30 kelime"
        p7d3.innerText = "Lorem ama 30 kelime"
        p7d4.innerText = "Lorem ama 30 kelime"
        p7d5.innerText = "Lorem ama 30 kelime"
        p8d1.innerText = "Lorem ama 30 kelime"
        p8d2.innerText = "Lorem ama 30 kelime"
        p8d3.innerText = "Lorem ama 30 kelime"
        p8d4.innerText = "Lorem ama 30 kelime"
        p8d5.innerText = "Lorem ama 30 kelime"
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

        // Projects Page
        cardButton1.innerText = "Подробнее"
        cardButton2.innerText = "Подробнее"
        cardButton3.innerText = "Подробнее"
        cardButton4.innerText = "Подробнее"
        cardButton5.innerText = "Подробнее"
        cardButton6.innerText = "Подробнее"
        cardButton7.innerText = "Подробнее"
        cardButton8.innerText = "Подробнее"

        p1d1.innerText = "russki lorem"
        p1d2.innerText = "russki lorem"
        p1d3.innerText = "russki lorem"
        p1d4.innerText = "russki lorem"

        p1d5.innerText = "russki lorem"
        p2d1.innerText = "russki lorem"
        p2d2.innerText = "russki lorem"
        p2d3.innerText = "russki lorem"
        p2d4.innerText = "russki lorem"
        p2d5.innerText = "russki lorem"

        p3d1.innerText = "russki lorem"
        p3d2.innerText = "russki lorem"
        p3d3.innerText = "russki lorem"
        p3d4.innerText = "russki lorem"
        p3d5.innerText = "russki lorem"

        p4d1.innerText = "russki lorem"
        p4d2.innerText = "russki lorem"
        p4d3.innerText = "russki lorem"
        p4d4.innerText = "russki lorem"
        p4d5.innerText = "russki lorem"

        p5d1.innerText = "russki lorem"
        p5d2.innerText = "russki lorem"
        p5d3.innerText = "russki lorem"
        p5d4.innerText = "russki lorem"
        p5d5.innerText = "russki lorem"

        p6d1.innerText = "russki lorem"
        p6d2.innerText = "russki lorem"
        p6d3.innerText = "russki lorem"
        p6d4.innerText = "russki lorem"
        p6d5.innerText = "russki lorem"

        p7d1.innerText = "russki lorem"
        p7d2.innerText = "russki lorem"
        p7d3.innerText = "russki lorem"
        p7d4.innerText = "russki lorem"
        p7d5.innerText = "russki lorem"

        p8d1.innerText = "russki lorem"
        p8d2.innerText = "russki lorem"
        p8d3.innerText = "russki lorem"
        p8d4.innerText = "russki lorem"
        p8d5.innerText = "russki lorem"
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