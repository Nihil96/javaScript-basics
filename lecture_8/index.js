// Object-oriented programming(OOP) in JavaScript

// Function Constructor
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// Person.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
// }

// Making instance of Person
// const marko = new Person("Marko", 21)
// const jana = new Person("Jana", 30)

// marko.greet()
// jana.greet()

// Classes
class Person2 {
  constructor(name, surname, age) {
    this.name = name
    this.surname = surname
    this.age = age
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
  }

  printSurname() {
    console.log(`My surname is ${this.surname}`)
  }
}

const sanja = new Person2("Sanja", "Petkovska", 35)
const mirko = new Person2("Mirko", "Mirkovski", 16)

sanja.printSurname()
mirko.greet()

// Inheritance
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
  }
}

// This class inherits from the class Person
class Professor extends Person {
  constructor(name, age, subject) {
    super(name, age)
    this.subject = subject
  }

  teach() {
    console.log("I teach", this.subject)
  }
}

// This class inherits from the class Person as well
class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }

  study() {
    console.log(`I am styding ${this.major}`)
  }
}

// Creating the instances
const professor = new Professor("Martin", 45, "Computer Science")
const student = new Student("Hristijan", 20, "Backend development")

// professor.introduce()
// student.introduce()
// student.study()

// Static members, setters, getters and private variables
class Circle {
  // static property
  static PI = 3.14

  // private variable
  #radius

  constructor(radius) {
    this.#radius = radius
  }

  // getter for the radius variable
  get getRadius() {
    return this.#radius
  }

  set setRadius(newRadius) {
    if (newRadius > 0) {
      this.#radius = newRadius
    } else {
      console.log("The radius must be a positive number")
    }
  }

  calculateArea() {
    return Circle.PI * this.#radius ** 2
  }
}

const circleOne = new Circle(30)
console.log(circleOne.getRadius)
console.log(Circle.PI) // accessing static property

circleOne.setRadius = 25 // changing the value of the radius
console.log(circleOne.getRadius)

console.log(circleOne.calculateArea())
