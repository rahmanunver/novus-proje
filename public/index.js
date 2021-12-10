document.getElementById("year").innerHTML = new Date().getFullYear();

let isOpen = false

const linesMobile = document.querySelector(".linesMobile")
const mobileMenu = document.querySelector(".mobileMenu")

const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")

document.querySelector(".rightMobile").addEventListener("click", () => {
    if (!isOpen) {
        isOpen = true
        mobileMenu.style.right = "0"
        line1.style.transform = "rotate(45deg) translate(9.5px, 9.5px)"
        // line1.style.backgroundColor = "#fafafa"
        line2.style.opacity = "0"
        line3.style.transform = "rotate(-45deg) translate(9.5px, -9.5px)"
        // line3.style.backgroundColor = "#fafafa"
    } else {
        isOpen = false
        mobileMenu.style.right = "-260px"
        line1.style.transform = ""
        line1.style.backgroundColor = ""
        line2.style.opacity = ""
        line3.style.transform = ""
        line3.style.backgroundColor = ""
    }
})