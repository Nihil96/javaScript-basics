// Manipulating Arrays and ES6 Features

// Built-in high order functions(HOF)

// callback function
function myNameIs() {
  console.log("My name is Hristijan")
}

// high order function
function printMyName(func) {
  return func()
}

// printMyName(myNameIs)

// forEach()
let fruits = ["apple", "banana", "cherry", "mango", "lemon"]
const fruitsWithCharBiggerThanFive = (fruit) => {
  if (fruit.length > 5) {
    console.log(fruit)
  }
}

// fruits.forEach(fruitsWithCharBiggerThanFive)

// map()
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newNumbersArray = numbersArray.map((number) => number + 1)
// console.log(numbersArray)
// console.log(newNumbersArray)

// sort()
let randomNumsArray = [10, 13, 1, 15, 9, 34, 101, 78]
let sortedArray = randomNumsArray.sort((a, b) => a - b)
// console.log(sortedArray)

let randomChars = ["d", "g", "b", "a", "y"]
let sortedChars = randomChars.sort()
// console.log(sortedChars)

// reduce()
let sumOfRandomNumbers = randomNumsArray.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber,
  0
)
// console.log(sumOfRandomNumbers)

// Exercise: find the maximum value in this array
const numbers = [5, 3, 22, 303, 87, 0]

// solution 1
const maxNum = numbers.sort((a, b) => b - a)[0]
// console.log(maxNum)

// solution 2
const maxNum2 = numbers.reduce((accumulator, currentNumber) => {
  if (currentNumber > accumulator) {
    return currentNumber
  } else {
    return accumulator
  }
}, numbers[0])

// console.log(maxNum2)

// filter()
let evenNumbers = [10, 20, 40, 60, 80, 100, 200, 240]
let numbersBiggerThenEighty = evenNumbers.filter((num) => num > 80)
// console.log(numbersBiggerThenEighty)

// find()
let oddNumbersArr = [1, 3, 5, 7, 9, 11, 13, 15]
let firstNumberBiggerThenSeven = oddNumbersArr.find((num) => num > 7)
// console.log(firstNumberBiggerThenSeven)

// some()
let numArray = [11, 1, 3, 21, 13, 91, 1, 7]
let numArrayHasEvenNumber = numArray.some((number) => number % 2 === 0)
// console.log(numArrayHasEvenNumber)

// chaining high-order functions
let randomNumbersArray = [15, 23, 4, 15, 9, 34, 101, 78, 90, 84]
let isEveryNumberEven = randomNumbersArray
  .filter((num) => num >= 60)
  .every((number) => number % 2 !== 0)
console.log(isEveryNumberEven)

// Spread operator, Ternary operator, Destructuring
let animals = ["cat", "dog", "horse", "donkey"]
let copyAnimalsArray = [...animals]
console.log(copyAnimalsArray)

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
let combinedArrays = arr1.concat(arr2) // one way

let combinedArrays2 = [...arr1, ...arr2, 10, true, ["a", "b"]]
console.log(combinedArrays2)

// ternary operator
const checkNum = (num) => {
  num % 2 === 0
    ? console.log("This number is even")
    : console.log("This number is odd")

  // this is the same
  //   if (num % 2 === 0) {
  //     console.log("This number is even")
  //   } else {
  //     console.log("This number is odd")
  //   }
}

checkNum(11)

// array destructuring
let [firstNumber, secondNumber, , forthNumber, , , , randomNum] = [
  1, 2, 3, 4, 5,
]
console.log(firstNumber, secondNumber, forthNumber, randomNum)

// object destructuring
const randomPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
}
// console.log(randomPerson.firstName) // one way

const { firstName: fn, age } = randomPerson
console.log(fn)
