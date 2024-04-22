# Starting with JavaScript

![Alt Text](https://www.infragistics.com/community/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-08-70/dev_2D00_tools_2D00_ignite_2D00_ui_2D00_javascript_2D00_2.jpg "JavaScript Logo")

## First of all, what exactly is programming?

Before jumping straight into the language itself, let's first see what programming means and what a program is.

_Programming_ is the process of instructing a computer to perform a task. It involves designing and building a set of instructions, called a program, that a computer can understand and execute.

A _program_, on the other hand, is a set of step-by-step instructions that tell a computer how to perform a specific task or solve a particular problem.

Here's a breakdown of a program's key components:

**Input:** This is the information the program receives. It can be data entered by the user, data from a file, or even data from another program.

**Process:** This is the core of the program, where it takes the input and transforms it according to the given instructions. Think of it as the "magic" happening behind the scenes.

**Output:** This is the result the program produces after processing the input. It can be displayed on the screen, stored in a file, or used by another program.

Examples in JavaScript:

1. Greeting the User

```
console.log("Hello, world!"); // Output a message to the console
```

2. Adding Two Numbers

```
const num1 = 20;
const num2 = 30;
const sum = num1 + num2;

console.log("The sum of", num1, "and", num2, "is:", sum); // Output the sum with labels
```

## What is JavaScript?

JavaScript is a versatile programming language primarily used for adding interactivity to websites. It allows developers to create dynamic, interactive, and user-friendly web applications. Here are some key aspects of JavaScript:

### Client-Side and Server-Side:

- Client-Side JavaScript: This is JavaScript that runs in the browser. It's used to manipulate the Document Object Model (DOM) and interact with the user.

- Server-Side JavaScript: This is JavaScript that runs on the server using platforms like Node.js. It's used to handle server-side logic, perform file operations, and more.

- Execution Environments: Browser: In web browsers, JavaScript is executed by the JavaScript engine that is built into the browser. For example, Google Chrome uses the V8 engine, while Firefox uses SpiderMonkey.

- Node.js: This is a JavaScript runtime built on Chrome's V8 engine. It allows JavaScript to be run on the server-side outside of a browser environment.

- Interpreted Language: JavaScript is an interpreted language, meaning it's not compiled before execution. Instead, the code is read and executed line by line by an interpreter (or a JavaScript engine).

- Single-Threaded, Asynchronous: JavaScript is single-threaded, meaning it can only execute one task at a time. However, it is also asynchronous, which means it can handle multiple tasks at once using callback functions, promises, and async/await.

- Dynamic Typing: JavaScript is dynamically typed, which means you don't need to specify the data type of a variable explicitly. The type of a variable is determined at runtime.

- Prototype-Based Object-Oriented: JavaScript is object-oriented, but it uses a prototype-based model rather than a classical one.

## Console

`console.log` is a method used to log messages to the console, which is a developer tool available in most web browsers. The argument passed to console.log is the message you want to log. In the example below, it's the string "Hello World!". When you run this code, "Hello World!" will be printed to the console, and you can see this output in the browser's developer tools (usually by pressing F12 and navigating to the "Console" tab).

Example:

```
console.log(“Hello World!”)
```

In a Node.js environment, you can use the console.log function in a similar way as you would in a browser environment.

Example:

1. Create a file named index.js with the following content:

```
// index.js

console.log("Hello World!");
```

2. Run the code using Node.js:

- Open your terminal.
- Navigate to the directory where index.js is located.
- Run the following command:

```
node index.js
```

The console.log("Hello World!"); statement logs the message "Hello World!" to the console.
In a Node.js environment, when you run node index.js, it executes the JavaScript file (index.js) using Node.js, and the output will be displayed in the terminal.

## Data types

In JavaScript, data types define the kind of values a variable can hold. They play a crucial role in how your code behaves and interacts with data. Here are the primary data types in JavaScript:

### Primitive Data Types:

**Number:** Represents both integer and floating-point numbers. Examples: 5, 3.14.

**String:** Represents text. Enclose strings in single (') or double (") quotes. Examples: 'Hello', "JavaScript".

**Boolean:** Represents a true or false value. Examples: true, false.

**Undefined:** Represents a variable that has been declared but hasn't been assigned a value. Example: let name;.

**Null:** Represents the absence of any value or object. It's often used to intentionally indicate that a variable has no value.

**Symbol (ES6):** Unique and immutable values, often used as object keys.

**BigInt (ES11):** Represents large integers that cannot be represented by the Number type.

### Reference Data Types:

**Object:** A complex data type that can hold collections of key-value pairs, functions, and more complex structures.

**Array:** A special type of object used to store lists of items. Arrays are ordered and can hold any data type.

**Function:** A reusable block of code that performs a specific task or calculates a value.

### Variables and Constants in JavaScript

**Variables:**

Variables are like containers that store data in a program. They allow us to assign names to values, making it easier to work with and manipulate data.

In JavaScript, you can declare a variable using the let keyword:

`let age = 30;`

Here, age is the variable name, and 30 is the value stored in the variable. You can change the value of a variable:

`age = 31; // Now 'age' is 31`

**Constants:**

Constants are similar to variables, but once you assign a value to a constant, you can't reassign it. They are used for values that should not change throughout the program.

In JavaScript, you can declare a constant using the const keyword:

`const PI = 3.14;`

Once you've assigned a value to PI, you can't change it:

`PI = 3.14159; // Error! You can't reassign a constant.`

**Choosing Between Variables and Constants:**

Use a variable when you expect the value to change during the execution of your program. Use a constant when you want to ensure a value remains fixed.

### var, let, and const: Understanding Scope in JavaScript

**var:**

var is the oldest way to declare variables in JavaScript.
It has function scope, which means it is visible throughout the entire function in which it's defined, regardless of block scope. If you declare a variable with var inside a block (like an if statement or loop), it will still be visible outside of that block.

Example:

```
function exampleFunction() {
if (true) {
var name = "John";
}
console.log(name); // Output: "John"
}
```

**let:**

let was introduced in ES6 (ECMAScript 2015) to address some of the issues with var.
It has block scope, which means it is only visible within the block it's defined in (like an if statement or loop). Using let helps prevent issues caused by variable hoisting (a behavior of var that can lead to unexpected results).

Example:

```
function exampleFunction() {
if (true) {
let name = "John";
}
console.log(name); // Error: name is not defined
}
```

**const:**

const is also introduced in ES6 and is used to declare constants.
Like let, it also has block scope. A constant cannot be reassigned once it's defined. However, if it's an object or array, the properties or elements can still be modified.

Example:

```
const PI = 3.14;
PI = 3.14159; // Error: Assignment to constant variable.

const person = { name: "John" };
person.name = "Jane"; // This is allowed.
```

**When to Use:**

Use const when the value should not be changed.
Use let when you need to reassign the variable.
Minimize the use of var as it may lead to unintended issues due to its function scope and variable hoisting behavior.

**Best Practices:** Use const by default, and switch to let only if you know the value will change. Avoid using var unless working with older code or environments that don't support ES6.

## Mathematical operations

JavaScript provides a set of built-in operators for performing various mathematical operations. These operators allow you to perform addition, subtraction, multiplication, division, and more on numerical values. Here are some common mathematical operators in JavaScript:

```
// Addition (+):
let sum = 5 + 3; // Result: 8

// Subtraction (-):
let difference = 10 - 4; // Result: 6

// Multiplication (*):
let product = 2 * 6; // Result: 12

// Division (/):
let quotient = 16 / 4; // Result: 4

// Modulus (%):
let remainder = 15 % 4; // Result: 3 (remainder of the division)

// Exponentiation (**):
let result = 2 ** 3; // Result: 8 (2 raised to the power of 3)
```

JavaScript also provides the **Math** object, which contains a variety of mathematical functions for more advanced operations. For instance, you can use Math.sqrt() for square root, Math.sin() for sine, and so on.

```
let squareRoot = Math.sqrt(25); // Result: 5
```

### Boolean Algebra in JavaScript:

Boolean algebra in JavaScript involves working with logical values true and false. These values are used to control the flow of a program based on conditions.

**Logical Operators:**

**&&** (Logical AND): This operator returns true if both operands are true.

Example:

```
let x = true;
let y = false;
let result = x && y; // result will be false
```

**||** (Logical OR): This operator returns true if at least one of the operands is true.

Example:

```
let x = true;
let y = false;
let result = x || y; // result will be true
```

**!** (Logical NOT): This operator returns the opposite of the given boolean value.

Example

```
let x = true;
let result = !x; // result will be false
```

Comparison Operators:

**==** (Equal to): Checks if two values are equal.

Example:

```
let x = 5;
let y = 5;
let result = x == y; // result will be true
```

**!=** (Not equal to): Checks if two values are not equal.

Example:

```
let x = 5;
let y = 10;
let result = x != y; // result will be true
```

**>** (Greater than), < (Less than), >= (Greater than or equal to), <= (Less than or equal to): These operators are used for numerical comparisons.

Example:

```
let x = 5;
let y = 10;
let result1 = x > y; // result1 will be false
let result2 = x < y; // result2 will be true
```

Example:

```
let isRainy = true;
let isCold = false;

if (isRainy && !isCold) {
console.log("Take an umbrella");
} else if (isRainy && isCold) {
console.log("Wear a coat and take an umbrella");
} else {
console.log("Enjoy the weather");
}
```

In this example, the program makes decisions based on the boolean variables isRainy and isCold. Depending on their values, different messages will be printed.

Understanding boolean algebra and logical operators is crucial for creating conditional logic in JavaScript. These operators allow you to build dynamic and responsive code that reacts to different situations.

### BONUS:

Comparison Operators in JavaScript: == vs ===

In JavaScript, the comparison operators == and === are used to compare values. However, they have different behaviors:

**==** (Equal Operator):

The == operator checks if two values are equal after converting them to a common type.
It performs type coercion, which means it tries to make both values of the same type before comparing.

Example:

```
let x = 5;
let y = "5";
console.log(x == y); // true
```

In this example, x and y are considered equal because the == operator performs type coercion and converts the string "5" to a number before comparison.

**===** (Strict Equal Operator):

The === operator checks if two values are equal without performing type coercion. It compares both the value and the data type, ensuring that both are identical.

Example:

```
let x = 5;
let y = "5";
console.log(x === y); // false
```

In this example, x and y are considered not equal because the === operator doesn't perform type coercion and the data types are different.

**When to Use Each:**

Use == when you want to check if two values are equal regardless of their data types, and you're aware that type coercion might occur.

Use === when you want to check if two values are equal and you
want to ensure that they have the same data type.

Using === is generally considered good practice as it avoids unexpected type coercion.

Remember, choosing between == and === depends on the specific needs of your code. Always consider the context and requirements of your application.

**The typeof operator in JavaScript**

The typeof operator is a built-in JavaScript keyword that allows you to determine the data type of a value or expression. It returns a string indicating the type of the operand.

**Usage:**

The basic syntax of the typeof operator is: typeof operand
It takes one operand (value or expression) and returns a string representing its type.

Example:

```
let x = 10;
let y = "Hello";
let z = true;

console.log(typeof x); // Output: "number"
console.log(typeof y); // Output: "string"
console.log(typeof z); // Output: "boolean"
```
