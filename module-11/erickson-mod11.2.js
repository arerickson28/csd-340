let arrayOfValues = []
let inputBox = document.getElementById("textbox")
let displayDiv = document.getElementById("displayDiv")
let unorderedList = document.getElementById("ul")

let displayButton = document.getElementById("displayButton")
displayButton.addEventListener("click", displayArray)

let closeDisplayButton = document.getElementById("closeDisplay")
closeDisplayButton.addEventListener("click", removeDisplay)

let deleteLastButton = document.getElementById("deleteLastButton")
deleteLastButton.addEventListener("click", deleteLastFromArray)


let addButton = document.getElementById("addButton")
addButton.addEventListener("click", addToArray)

function addToArray() {
    let newValue = inputBox.value
    arrayOfValues.push(newValue)
    inputBox.value = ""

    // if the list is currently being displayed, update the contents right now
    if (displayButton.classList.contains("hidden")) {
        displayArray()
    }
    alert(`"${newValue}" was added at index ${arrayOfValues.indexOf(newValue)}`)
}

function deleteLastFromArray() {
    arrayOfValues.splice(-1, 1)

    // if the list is currently being displayed, update the contents right now
    if (displayButton.classList.contains("hidden")) {
        displayArray()
    }
}

function displayArray() {
    displayButton.classList.add("hidden")

    if (arrayOfValues.length == 0) {
        unorderedList.innerHTML = "[ empty ]"
    } else {
        unorderedList.innerHTML = ""
    }

    for (let i=0; i<arrayOfValues.length; i++) {
        let listItem = document.createElement("li")
        listItem.innerHTML = `Item ${i+1}: ${arrayOfValues[i]}`
        unorderedList.appendChild(listItem)
    }

    displayDiv.classList.remove("hidden")
    closeDisplayButton.removeAttribute("class")
}

function removeDisplay() {
    while (unorderedList.children.length > 0) {
        unorderedList.removeChild(unorderedList.firstElementChild)
    }
    displayButton.removeAttribute("class")
    closeDisplayButton.classList.add("hidden")
    displayDiv.classList.add("hidden")
}