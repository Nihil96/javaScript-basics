// Browser APIs and Modules
import { PI, add, randomArray } from "./math.js"
import calculator from "./calculator.js"

// Examples of localStorage and sessionStorage
localStorage.setItem("username", "petko_petkovski")
console.log(localStorage.getItem("username"))

// Small Exercise
localStorage.setItem("theme", "light")
const themeButton = document.querySelector("button")
const bodyElement = document.getElementsByTagName("body")[0]

themeButton.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "light") {
    bodyElement.style.backgroundColor = "black"
    localStorage.setItem("theme", "dark")
  } else {
    bodyElement.style.backgroundColor = "white"
    localStorage.setItem("theme", "light")
  }
})

// sessionStorage
sessionStorage.setItem("tempData", "some_value")
const tempData = sessionStorage.getItem("tempData")
console.log(tempData)

console.log(add(10, 10))
console.log(PI)
console.log(randomArray)
console.log(calculator.exponent(3, 3))
