const pomo = document.getElementById("pomo")
const edwiges = document.getElementById("edwiges")
const dobby = document.getElementById("dobby")
const mapa = document.getElementById("mapa")

const elementosFlutuantes = [pomo, edwiges, dobby, mapa]
let index = 0;


function displayElement(element) {
    element.style.opacity = "1"
}

function hideElement(element) {
    setTimeout(() => element.style.opacity = "0", 2500)
}

const displayWithInterval = setInterval(() => {
    if (index < elementosFlutuantes.length) {
      displayElement(elementosFlutuantes[index])
      hideElement(elementosFlutuantes[index])
      index++;
    } else {
      index = 0
    }
  }, 2500);

displayWithInterval
