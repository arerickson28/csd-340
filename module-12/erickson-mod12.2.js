let topToBottomBtn = document.getElementById("topToBottom")
let bottomToTopBtn = document.getElementById("bottomToTop")
let orderedList = document.getElementById("orderedList")

bookArray = [
    "Life of Pi by Yann Martel",
    "Things Fall Apart by Chinua Achebe",
    "Enders Game by Orson Scott Card",
    "The Last Hours of Ancient Sunlight by Thom Hartmann",
    "Moonwalking With Einstein by Joshua Foer",
    "Atomic Habits by James Clear",
    "Born To Run by Christopher McDougall",
    "Power of Now by Eckhart Tolle",
    "Siddhartha by Herman Hesse",
    "Johnathon Livingston Seagull by Richard Bach"
]

function fillTopToBottom() {
    for (let i=1, j=0; i<11; i++, j++) {
        document.getElementById(`${i}`).innerHTML = bookArray[j]
    }
    topToBottomBtn.classList.add("selected")
    bottomToTopBtn.classList.remove("selected")
    orderedList.removeAttribute("reversed", false)
}

function fillBottomToTop() {
    for (let i=1, j=9; i<11; i++, j--) {
        document.getElementById(`${i}`).innerHTML = bookArray[j]
    }
    topToBottomBtn.classList.remove("selected")
    bottomToTopBtn.classList.add("selected")
    orderedList.setAttribute("reversed", true)
}

topToBottomBtn.addEventListener("click", fillTopToBottom)
bottomToTopBtn.addEventListener("click", fillBottomToTop)