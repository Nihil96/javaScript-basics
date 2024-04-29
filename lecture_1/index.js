// Conditions and Functions in JS

// if statement
const globalVariable = 100

if (false) {
  // this is a block
  console.log("Hello World!")
}
// console.log("Outside of the if condition")

// else
let num = 20

// if (num > 21) {
//   console.log("The number is greater than 21")
// } else {
//   console.log("The number is smaller than 21")
// }

// else-if
let randomNum = -57

if (randomNum > 5) {
  console.log("The number is greater than 5")
} else if (randomNum === 5) {
  console.log("The number is equal to 5")
} else {
  console.log("The number is less than 5")
}

// Switch Statement
let day = "Monday"

switch (day) {
  case "Monday":
    console.log("It's the start of the week!")
    break
  case "Friday":
    console.log("It's almost the weekend!")
    break
  default:
    console.log("It's antoher day of the week!")
}

// console.log("Outside of the switch")

// Functions

let result = 90 + 10
let result2 = 10 + 40

// definition or declaration of a function
function addNumbers(num1, num2) {
  let sum = num1 + num2
  return sum
}

// invoke of the function
// console.log(addNumbers(10, 70))
addNumbers(125, 15)
addNumbers(15, 135)

function printMyName() {
  console.log("My name is Hristijan")
}

// printMyName()

// simple version
function printMyNumber(number) {
  if (number > 100) {
    return "Ovoj broj e pogolem od 100"
  } else {
    return "Ovoj broj e pomal od 100"
  }
}

console.log(printMyNumber(657))
