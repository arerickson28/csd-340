let awesomeSpan = document.getElementById("awesome")
let terrificSpan = document.getElementById("terrific")
let magnificentSpan = document.getElementById("magnificent")
let wonderfulSpan = document.getElementById("wonderful")

function awesomeTime() {
    if (awesomeSpan.classList.length == 0) {
        awesomeSpan.innerHTML = " awesome "
        awesomeSpan.classList.add("awesome")
    } else {
        awesomeSpan.innerHTML = "________"
        awesomeSpan.classList.remove("awesome")
    }
}

function terrificTime() {
    if (terrificSpan.classList.length === 0) {
        terrificSpan.innerHTML = " terrific "
        terrificSpan.classList.add("terrific")
    } else {
        terrificSpan.innerHTML = "________"
        terrificSpan.classList.remove("terrific")
    }
}

function magnificentTime() {
    if (magnificentSpan.classList.length === 0) {
        magnificentSpan.innerHTML = " magnificent "
        magnificentSpan.classList.add("magnificent")
    } else {
        magnificentSpan.innerHTML = "________"
        magnificentSpan.classList.remove("magnificent")
    }
}

function wonderfulTime() {
    if (wonderfulSpan.classList.length === 0) {
        wonderfulSpan.innerHTML = " wonderful "
        wonderfulSpan.classList.add("wonderful")
    } else {
        wonderfulSpan.innerHTML = "________"
        wonderfulSpan.classList.remove("wonderful")
    }
}
