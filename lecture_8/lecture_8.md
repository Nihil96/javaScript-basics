# Object-oriented programming (OOP) in JavaScript

<p align="center">
  <img src="https://media.licdn.com/dms/image/D4D12AQFHql8Dym1MhQ/article-cover_image-shrink_720_1280/0/1675072633615?e=2147483647&v=beta&t=qI3PSjbYy027naUTvlkZebq6DKs_4Qor77X4ndLxik0" alt="OOP Concepts">
</p>

Object-oriented programming (OOP) in JavaScript is a programming paradigm that revolves around the concept of objects, which are instances of classes defining a blueprint for their structure and behavior. JavaScript, while primarily a prototype-based language, incorporates key OOP principles.

**Objects and Classes:** JavaScript allows the creation of objects directly, and ES6 introduced the class syntax, providing a more familiar way to define and instantiate objects.

**Encapsulation:** Objects encapsulate data and methods, bundling them together to control access and prevent unintended modifications. This helps in organizing and structuring code.

**Inheritance:** Objects can inherit properties and methods from other objects, fostering code reuse. ES6 classes support the classical inheritance model through the extends keyword.

**Polymorphism:** Objects can take on multiple forms, allowing the same method or property to behave differently based on the context. This enhances flexibility and modularity.

**Abstraction:** Abstracting complex systems into simplified, reusable objects and classes promotes a clearer understanding of the codebase, making it more manageable and scalable.

By embracing object-oriented principles in JavaScript, developers can create modular, maintainable, and scalable code, facilitating collaboration and easing the development and maintenance processes.
In JavaScript, there are several ways to create objects. Here are just two common methods:

## Function Constructor

In JavaScript, a function constructor is a way to create objects by defining a function and then using the new keyword to instantiate an instance of that function.

Example:

```
function Person(name, age) {
 this.name = name
 this.age = age
}


// Adding a method to the prototype
Person.prototype.greet = function () {
 console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
}


// Creating an instance using the constructor
const john = new Person("John", 35)
john.greet() // Output: Hello, my name is John and I'm 35 years old.
```

- The Person function serves as a constructor, defining properties (name and age) for the object it will create.
- The new keyword is used to create a new instance of the Person object (john).
- We can add methods to the prototype of the constructor function, which will be shared among all instances.

## What is “prototype” in JavaScript

Every object in JavaScript has a built-in property, which is called its **prototype**. The prototype is itself an object, so the prototype will have its own prototype, making what's called a **prototype chain**. The chain ends when we reach a prototype that has null for its own prototype.

When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

## Class (ES6 and later)

ES6 introduced a more concise and syntactically cleaner way to create objects using the class keyword. Here's an equivalent example using the class syntax.

Example:

```
class Person {
 constructor(name, age) {
   this.name = name
   this.age = age
 }


 greet() {
   console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
 }
}


// Creating an instance using the class
const Alex = new Person("Alex", 30)
john.greet() // Output: Hello, my name is Alex and I'm 30 years old.
```

- The class keyword is used to declare a class (Person in this case).
- The constructor method is used for initializing object properties.
- Additional methods can be added directly within the class body.

The class syntax provides a more intuitive and structured way to define object blueprints, and it often leads to cleaner and more readable code. Under the hood, it still uses prototype-based inheritance similar to function constructors.

## Why Do Classes Exist?

Classes exist to bring structure and organization to code, particularly when dealing with complex applications. They help in modeling real-world entities and their interactions, making the code more maintainable, reusable, and scalable.

## Inheritance

Inheritance is a fundamental concept in object-oriented programming that allows one object to acquire properties and methods of another object. In JavaScript, inheritance is achieved through the prototype chain. Objects can inherit from other objects by sharing their prototypes.

Example:

```
// Parent class
class Person {
 constructor(name, age) {
   this.name = name
   this.age = age
 }


 introduce() {
   console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`)
 }
}


// Child class inheriting from Person
class Professor extends Person {
 constructor(name, age, subject) {
   // Call the parent constructor
   super(name, age)
   this.subject = subject
 }


 teach() {
   console.log(`I teach ${this.subject}.`)
 }
}


// Another child class inheriting from Person
class Student extends Person {
 constructor(name, age, major) {
   // Call the parent constructor
   super(name, age)
   this.major = major
 }


 study() {
   console.log(`I'm studying ${this.major}.`)
 }
}


// Instances
const person = new Person("John Doe", 30)
const professor = new Professor("Dr. Smith", 45, "Computer Science")
const student = new Student("Alice Johnson", 20, "Physics")


// Using inherited methods
person.introduce() // Output: Hi, I'm John Doe and I'm 30 years old.
professor.introduce() // Output: Hi, I'm Dr. Smith and I'm 45 years old.
professor.teach() // Output: I teach Computer Science.
student.introduce() // Output: Hi, I'm Alice Johnson and I'm 20 years old.
student.study() // Output: I'm studying Physics.
```

- Person is the base class with a shared method introduce.
- Professor and Student are child classes that extend Person.
- super(name, age) is used to call the constructor of the parent class.
- teach and study are methods specific to Professor and Student, respectively.

## Static members, setters, getters and private variables

```
class Circle {
 // Static property
 static PI = 3.14


 // Private property
 #radius


 constructor(radius) {
   this.#radius = radius
 }


 // Getter for radius
 get getRadius() {
   return this.#radius
 }


 // Setter for radius
 set setRadius(newRadius) {
   if (newRadius > 0) {
     this.#radius = newRadius
   } else {
     console.error("Radius must be a positive number.")
   }
 }


 // Instance method
 calculateArea() {
   return Circle.PI * this.#radius ** 2
 }


 // Static method
 static createUnitCircle() {
   return new Circle(1)
 }
}


// Creating new instance of Circle
const circle = new Circle(5)


// Accessing static property
console.log(Circle.PI) // Output: 3.14


// Accessing instance property using getter
console.log(circle.getRadius) // Output: 5


// Using setter to update instance property
circle.setRadius = 8
console.log(circle.getRadius) // Output: 8


// Calling instance method
console.log(circle.calculateArea()) // Output: 200.96


// Calling static method to create a unit circle
const unitCircle = Circle.createUnitCircle()
console.log(unitCircle.getRadius) // Output: 1
```

In this example:

- static PI is a static property of the Circle class.
- #radius is a private property in the Circle class
- get radius() and set radius(newRadius) are getter and setter methods for the instance property #radius.
- The getter allows you to access the #radius property as if it were a public property.
- The setter provides a way to update the #radius property with some validation.
- calculateArea() is an instance method that calculates the area of the circle.
- static createUnitCircle() is a static method that creates a Circle instance representing a unit circle with a radius of 1.
