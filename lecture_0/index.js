// === Getting started with JavaScript ====
console.log("Hristijan Kostadinoski")

// ova e komentar

// Data Types

// Primitive data types:
var myNumber = 100 // number
var myName = "Hristijan" // string
var myBool = true // boolean
var myUndefined = undefined // undefined
var myNullType = null // null

// Referance data types:

// Object
var myObject = { car: "Mercedes", model: "Benz" }
console.log(myObject.model)

// Array
var myArray = [1, true, "random string", "o", null, [], {}, undefined]
console.log(myArray)

// var, let, const - three different ways to declare a variable
var myVariable = 10

let age = 30 // declaration of a variable
console.log(age)

age = 34 // changing the value of the 'age' variable

console.log(age) // 34

const PI = 3.14
// console.log(PI)
// PI = 90.9 - this will throw an error

// Mathematical operations

// Addition
let sum = 10 + 10
// console.log(sum)

// Subtraction
let difference = 100 - 30
let num1 = 80
let num2 = 42
console.log(num2 - num1)

// Multiplication
let product = 1 * 20

// Division
let div = 10 / 5

// Modulus
let reminder = 15 % 4
console.log(reminder)

let complexOperation = (32 + 23) / 7 - 10 * 2

// Boolean Algebra

// Logical Operators:

// && (Logical AND):
let x = true
let y = true
let z = false

let result = y && z && x
// console.log(result) // this will return false because of 'z'

// || (Logical OR):
let a = true
let b = false
let c = false
let result2 = b || b // -> false || false
// console.log(result2) // false

// ! (Logical NOT):
let d = true
console.log(!d)

//
let test = (a && b) || (c && !d) // --> false || false
// console.log(test)

// Comparison operators

// ==, ===

let number1 = 5
let number2 = 51
let fakeNumber = "5"
console.log(number1 === fakeNumber)
