# Conditions and Functions in JS:

![Alt Text](https://www.scientecheasy.com/wp-content/uploads/2021/04/java-if-else-flowchart.png "JavaScript Logo")

Conditions in JavaScript allow you to control the flow of your program based on certain criteria. They enable your program to make decisions and execute different code blocks depending on whether a condition is true or false.

### if Statement:

1. The if statement executes a block of code if a specified condition is true.

Example:

```
let num = 10;

if (num > 5) {
console.log("The number is greater than 5");
}
```

2. else-if Statement:
   The else-if statement provides an alternative condition to check if the initial condition is false.

Example:

```
let num = 3;

if (num > 5) {
console.log("The number is greater than 5");
} else if (num === 5) {
console.log("The number is equal to 5");
} else {
console.log("The number is less than 5");
}
```

3. else Statement:
   The else statement specifies code to be executed if the condition in the if statement is false.

Example:

```
let num = 3;

if (num > 5) {
console.log("The number is greater than 5");
} else {
console.log("The number is not greater than 5");
}
```

### Switch Statement:

The switch statement is used to perform different actions based on different conditions. It evaluates an expression and executes the corresponding code block.

Example:

```
let day = "Monday";

switch (day) {
case "Monday":
console.log("It's the start of the week");
break;
case "Friday":
console.log("It's almost the weekend");
break;
default:
console.log("It's another day");
}
```

These conditional statements are essential tools for building logic and making decisions in your programs. They allow you to create dynamic and responsive code that can handle different scenarios.

**When to use if/else and when switch statements:**

Use **if/else** statements when:

1. Handling simple conditions: Use if/else when you have straightforward conditions to evaluate.

2. Evaluating multiple independent conditions: When each condition is independent of the others, if/else provides a flexible way to evaluate them separately.

3. Dealing with non-strict equality: if/else allows you to use non-strict equality operators (==, !=) to compare values.

Use **switch** statements when:

1. Handling multiple conditions with exact matching: switch is ideal when you need to compare a single value against multiple possible values.

2. Avoiding repetition: When multiple cases share the same block of code, switch provides a more concise alternative to repetitive if/else statements.

3. Comparing strict equality: switch statements use strict equality (===) by default, making them suitable for exact value comparisons.

### Functions in JavaScript:

A function in JavaScript is a block of reusable code that performs a specific task. It allows you to group a set of statements together and give it a name. Functions can take parameters (inputs) and return a value (output).

Example: Here's a simple function that adds two numbers together:

```
function addNumbers(num1, num2) {
let sum = num1 + num2;
return sum;
}
```

In this example:

- function is the keyword that declares a function.
- addNumbers is the name of the function.
- (num1, num2) are the parameters the function accepts. They act like variables within the function.
- let sum = num1 + num2; is the code that adds the two numbers together.
- return sum; specifies what the function should output.

How to Use:
You can call this function by providing two numbers as arguments:

```
let result = addNumbers(5, 3);
console.log(result); // Output: 8
```

Here, addNumbers(5, 3) calls the function with 5 as num1 and 3 as num2. The function computes the sum and returns 8, which is then stored in the result variable.

This is a basic example, but functions can range from simple tasks to complex operations. They are a fundamental building block in JavaScript programming and are used extensively in any substantial codebase.

### Different types of Functions

**Function declarations:**
Function declarations define a function with a specified name. They are hoisted to the top of their scope, which means you can call them before they are defined in the code.

Example:

```
function greet(name) {
  return `Hello, ${name}!`;
}

let message = greet("John"); // Output: "Hello, John!"
```

**Function Expression:**
Function expressions define a function as part of a larger expression or as an anonymous function. They are not hoisted, so you can only call them after they are defined.

Example:

```
let add = function(x, y) {
  return x + y;
}

let result = add(3, 4); // result will be 7
```

**Arrow Functions (ES6):**
Arrow functions provide a more concise syntax for defining functions. They automatically bind this to the surrounding context.

Example:

```
let multiply = (x, y) => x * y;

let product = multiply(2, 5); // product will be 10
```

**IIFE (Immediately Invoked Function Expression):**
These are self-invoking functions that run as soon as they are defined.

Example:

```
(function() {
  console.log("This function is immediately invoked.");
})();
```

**Higher-Order Functions(HOF):**
These are functions that can take other functions as arguments or return functions as values.

Example:

```
function applyOperation(x, y, operation) {
  return operation(x, y);
}

let result = applyOperation(3, 4, (a, b) => a + b); // result will be 7
```
