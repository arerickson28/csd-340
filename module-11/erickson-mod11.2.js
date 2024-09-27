let arrayOfValues = ["hello", "hi"]
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
}

function deleteLastFromArray() {
    arrayOfValues.splice(-1, 1)

}

function displayArray() {
    // unorderedList.classList.add("ul")
    displayButton.classList.add("hidden")
    for (let i=0; i<arrayOfValues.length; i++) {
        let listItem = document.createElement("li")
        listItem.innerHTML = arrayOfValues[i]
        unorderedList.appendChild(listItem)
    }
    // displayDiv.appendChild(unorderedList)

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
    // unorderedList.removeAttribute("class")
}