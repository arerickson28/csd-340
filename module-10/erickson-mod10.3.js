let lightingRoadString = "./images/roadNoLightning.jpg"
let noLightningRoadString = "./images/roadLightning.jpg"

let summerTreeString = "./images/treeSummer.jpg"
let autumnTreeString = "./images/treeAutumn.jpg"

let roadImage = document.getElementById("road")
roadImage.setAttribute("src", lightingRoadString)

let treeImage = document.getElementById("tree")
treeImage.setAttribute("src", summerTreeString)

function toggleRoad() {
    let roadSrc = roadImage.getAttribute("src")
    if (roadSrc == lightingRoadString) {
        roadImage.setAttribute("src", noLightningRoadString)
    } else {
        roadImage.setAttribute("src", lightingRoadString)
    }
}

function toggleTree() {
    let treeSrc = treeImage.getAttribute("src")
    if (treeSrc == summerTreeString) {
        treeImage.setAttribute("src", autumnTreeString)
    } else {
        treeImage.setAttribute("src", summerTreeString)
    }
}