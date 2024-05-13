// Complex Data Types and Loops in JavaScript

// Arrays[]
let fruits = ["apple", "banana", "cherry", "lemon"]
// apple - index 0
// banana - index 1
// cherry - index 2

// console.log(fruits[1]) // banana
// console.log(fruits[5]) // undefined
// console.log("This array has length of:", fruits.length)

// modifying elements in array
fruits[2] = "grape"
// console.log(fruits)

// adding elements:
fruits.push("orange")
// console.log(fruits)

// remove the last element
let removedLastElement = fruits.pop()
// console.log(removedLastElement)

// remove the first element
let removeFirstElement = fruits.shift()
// console.log(removeFirstElement)

// unshift
let animals = ["dog", "cat"]
console.log(animals[0]) // dog
animals.unshift("donkey")
console.log(animals[0]) // donkey

// concat
let musicGenre1 = ["rap", "rock"]
let musicGenre2 = ["metal", "pop"]
let allMusicGenres = musicGenre1.concat(musicGenre2)
console.log(allMusicGenres)

// revrse
let numbers = [10, 20, 30, 40, 50]
console.log(numbers.reverse())

// Objects
let person = {
  name: "Hristijan",
  age: 28,
  isStudent: false,
}

// accessing properties
// console.log(person.age)

// modifying properties
person.name = "Marko"
// console.log(person)

// adding new properties
person.email = "marko@gmail.com"
// console.log(person)

// nested objects
let student = {
  name: "Sonja",
  grades: [76, 80, 100],
  address: {
    city: "Skopje",
    zipCode: "1000",
  },
}

// accessing properties using 'dot notation'
// console.log(student.address.city)

// accessing properties using 'bracket notation'
//console.log(student["grades"][1]) // prints 80

// Different types of for loops

// normal for loop
// for (let i = 0; i <= 5; i++) {
//   console.log(i)
// }

// 0
// 1
// 2
// 3
// 4
// 5

// example 1
let cars = ["Mercedes", "BMW", "Toyota", "Ford", "Ferrari", "Audi", "Fiat"]

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// }

// for-in loop
let person2 = {
  name: "John",
  surname: "Doe",
  age: 32,
}

// for (let key in person2) {
//   console.log(key + ": " + person2[key])
// }

// for-of loop
let colors = ["yellow", "red", "green", "purple", "blue"]

for (let color of colors) {
  console.log(color)
}

// while loop
let count = 0

// infinite loop
// while (count < 10) {
//   console.log("Hello World")
// }

// while (count < 10) {
//   console.log("Hello World")
//   count++
// }

// while (count <= 5) {
//   if (count % 2 === 0) {
//     console.log("This is even number", count)
//   } else {
//     console.log("This is odd number", count)
//   }
//   count++
// }

// do/while loop
let randomNumber = 8
let sum = 0

do {
  sum += randomNumber
  randomNumber++
} while (randomNumber <= 6)

console.log("Total sum", sum)

// iteration 1: sum = 0 + 1 = 1
// iteration 2: sum = 1 + 2 = 3
// iteration 3: sum = 3 + 3 = 6
// iteration 4: sum = 6 + 4 = 10
// iteration 5: sum = 10 + 5 = 15
// iteration 6: sum = 15 + 6 = 21
