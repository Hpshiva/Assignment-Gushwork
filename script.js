// sticky header

window.addEventListener("scroll", () => {

    const header = document.getElementById("header")

    if (window.scrollY > 150) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }

})



// carousel

const track = document.querySelector(".carousel-track")
const slides = document.querySelectorAll(".carousel img")

let index = 0

document.querySelector(".next").onclick = () => {
    index++
    if (index >= slides.length) index = 0
    track.style.transform = `translateX(-${index * 100}%)`
}

document.querySelector(".prev").onclick = () => {
    index--
    if (index < 0) index = slides.length - 1
    track.style.transform = `translateX(-${index * 100}%)`
}



// faq

document.querySelectorAll(".faq-question").forEach(btn => {

    btn.onclick = () => {
        const ans = btn.nextElementSibling

        ans.style.display = ans.style.display === "block" ? "none" : "block"

    }

})
//