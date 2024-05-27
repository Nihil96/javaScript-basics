// Event Listeners

const myButton = document.getElementById("my-button")

// click event
const clickButton = () => {
  console.log("click button function")
  alert("The Button has been clicked!")
  // myButton.removeEventListener("click", clickButton) // removing the event listener
}

myButton.addEventListener("click", clickButton)

// const funnyTitle = document.getElementsByTagName("h1")[0] // one way
const funnyTitle = document.querySelector("h1")

funnyTitle.addEventListener("mouseenter", () => {
  funnyTitle.style.fontSize = "45px"
  funnyTitle.style.transition = "font-size 0.3s ease-in-out"
})

funnyTitle.addEventListener("mouseleave", () => {
  funnyTitle.style.fontSize = "25px"
})

// preventDefault() and stopPropagation()
const googleLink = document.querySelector("a")

googleLink.addEventListener("click", (event) => {
  event.preventDefault()
  googleLink.style.color = "green"
})

const parentElement = document.getElementsByClassName("parent-element")[0]
const childElement = document.getElementsByClassName("child-element")[0]

parentElement.addEventListener("click", () => {
  console.log("You clicked on the PARENT element")
})

childElement.addEventListener("click", (event) => {
  event.stopPropagation() // prevents the trigger of the parent event listener
  console.log("You clicked on the CHILD element")
})

// retriving data from input fields
const submitBtn = document.getElementById("submitButton")

submitBtn.addEventListener("click", () => {
  const inputElement = document.getElementById("myInput")
  alert(`Hello ${inputElement.value}`)
})

// keyboard events
const bodyElement = document.body

function changeBodyColor(event) {
  if (event.key === "y") {
    bodyElement.style.backgroundColor = "yellow"
  } else if (event.key === "r") {
    bodyElement.style.backgroundColor = "red"
  }
}

bodyElement.addEventListener("keydown", changeBodyColor)
