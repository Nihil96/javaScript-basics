# Manipulating Arrays and ES6 features

<p align="center">
 <img src="https://miro.medium.com/v2/resize:fit:640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg" alt="ES6">
</p>

## Introduction to ECMAScript 6 (ES6)

ECMAScript 6, also known as ES6 or ECMAScript 2015, is a significant update to the JavaScript language, which was officially released in June 2015. This version of the ECMAScript standard introduced a wide range of new features and improvements, aiming to enhance the language's readability, maintainability, and performance. The introduction of ES6 was a major milestone in the evolution of JavaScript, addressing many of the limitations and inconsistencies of previous versions and paving the way for more robust and scalable applications.

### Why ECMAScript 6 Exists

The primary motivations for the development and release of ES6 were:

Modernization: To bring JavaScript up to date with modern programming paradigms and practices.

Simplicity and Readability: To make the language easier to use and understand, reducing common pitfalls and enhancing developer productivity.

Maintainability: To facilitate the development of large-scale applications by introducing new syntax and constructs that promote cleaner and more maintainable code.

Performance: To improve the performance of JavaScript code execution across different environments.

### Key Features Introduced in ECMAScript 6

**Here are the most notable features introduced in ES6:**

- Block-Scoped Variables
- Arrow Functions
- Classes
- Template Literals
- Destructuring Assignment
- Default Parameters
- Rest and Spread Operators
- Modules
- Promises

## Build-in High Order Functions in JS

Higher-order functions are functions that take other functions as arguments or return them as results. They are powerful tools in JavaScript for working with arrays and collections of data.

### Important Higher-Order Functions

**sort()** - Sorts the elements of an array in place and returns the sorted array.

Example:

```
let numbers = [3, 1, 2, 5, 4];
let sortedNumbers = numbers.sort((a, b) => a - b);
// Result: sortedNumbers = [1, 2, 3, 4, 5]
```

**reduce()** - Executes a reducer function on each element of the array, resulting in a single output value.

Example:

```
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// Result: sum = 10
```

**map()** - Creates a new array with the results of applying a provided function to every element in the calling array.

Example:

```
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(num => num ** 2);
// Result: squaredNumbers = [1, 4, 9, 16]
```

**filter()** - Creates a new array with all elements that pass the test implemented by the provided function.

Example:

```
let numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(num => num % 2 === 0);
// Result: evenNumbers = [2, 4]
```

**find()** - Returns the first element in an array that passes a test (provided as a function).

Example:

```
let numbers = [10, 20, 30, 40];
let found = numbers.find(num => num > 20);
// Result: found = 30
```

**forEach()** - Executes a provided function once for each array element.

Example:

```
let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit));
// Result: 'apple', 'banana', 'cherry'
```

**some()** - Checks if at least one element in the array passes the test implemented by the provided function.

Example:

```
let numbers = [1, 2, 3, 4];
let hasEven = numbers.some(num => num % 2 === 0);
// Result: hasEven = true
```

### Spread Operator, Ternary Operator and Destructuring

**Spread Operator**

The spread operator (...) is a powerful tool in JavaScript that allows you to expand elements of an array or properties of an object. It provides an efficient way to copy arrays, concatenate them, and pass elements as arguments to functions.

- Usage with Arrays

Example 1: Copying an Array

```
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
// Result: copiedArray = [1, 2, 3]
```

Example 2: Concatenating Arrays

```
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
// Result: combinedArray = [1, 2, 3, 4, 5, 6]
```

Example 3: Passing Elements to a Function

```
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);
// Result: result = 6
```

**Ternary Operator**

The ternary operator, also known as the conditional operator, provides a concise way to write simple conditional statements. It takes three operands and returns a value based on a condition. The syntax of the ternary operator is:

- Syntax

condition ? expression_if_true : expression_if_false;

- Condition: A boolean expression that evaluates to either true or false.
- Expression if True: The value to be returned if the condition is true.
- Expression if False: The value to be returned if the condition is false.

Example:

```
const isEven = (num) => (num % 2 === 0 ? 'Even' : 'Odd');
console.log(isEven(4)); // Output: 'Even'
console.log(isEven(7)); // Output: 'Odd'
```

In this example, the ternary operator checks if the number is even (num % 2 === 0). If true, it returns the string 'Even'; otherwise, it returns 'Odd'.

Example:

```
const isLoggedIn = true;
const userStatus = isLoggedIn ? 'Logged In' : 'Logged Out';

console.log(userStatus); // Output: 'Logged In'
```

Here, the ternary operator assigns the value 'Logged In' to userStatus if isLoggedIn is true; otherwise, it assigns 'Logged Out'.

Example:

```
const temperature = 25;
const weatherType = temperature > 30 ? 'Hot' : temperature > 20 ? 'Warm' : 'Cool';

console.log(weatherType); // Output: 'Warm'
```

In this example, a nested ternary operator is used to determine the weatherType based on the temperature.
Ternary operators are concise alternatives to simple if-else statements. They can be used to assign values, determine function return values, or construct conditional expressions.

**Destructuring**

Destructuring is a convenient way to extract values from arrays or properties from objects into distinct variables. It provides a more concise and readable syntax when working with complex data structures.

- Destructuring Arrays

Example 1: Basic Array Destructuring

```
const [first, second] = [1, 2];
// Result: first = 1, second = 2
```

Example 2: Skipping Elements

```
const [first, , third] = [1, 2, 3];
// Result: first = 1, third = 3
```

- Destructuring Objects

Example 3: Basic Object Destructuring

```
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;
// Result: firstName = "John", lastName = "Doe"
```

Example 4: Renaming Variables

```
const { firstName: fName, lastName: lName } = person;
// Result: fName = "John", lName = "Doe"
```

The spread operator and destructuring are essential features in JavaScript for working with arrays and objects. They improve code readability and allow for more concise expressions.
