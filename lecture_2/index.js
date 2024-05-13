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

// accessing properties using bracket notation
//console.log(student["grades"][1]) // prints 80

// Different types of for loops

// normal for loop
for (let i = 0; i <= 5; i++) {
  console.log(i)
}

// 0
// 1
// 2
// 3
// 4
// 5
