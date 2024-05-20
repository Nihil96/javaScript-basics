# Synchronous and Asynchronous execution of code in JavaScript

<p align="center">
  <img src="https://cdn-images-1.medium.com/max/841/1*Y41dOkntUbR3I4UCJBx9Xg.png" alt="Synchronous and Asynchronous execution of code">
</p>

JavaScript is a single-threaded language, meaning it can only execute one task at a time. However, it employs asynchronous programming techniques to handle tasks that may take a significant amount of time to complete. This allows JavaScript to remain responsive while performing potentially time-consuming operations.

## Synchronous Code

In synchronous code execution, each task is completed one after the other, in the order they appear. JavaScript waits for one task to finish before moving on to the next. This can lead to potential delays if a task takes a long time to complete.

Example:

```
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

In this example, Task 2 will not start until Task 1 completes, and Task 3 will not start until Task 2 completes.

## Asynchronous Code

Asynchronous code allows JavaScript to perform tasks concurrently. This means that while one task is being executed, the program can start another task without waiting for the first one to finish. This is achieved through callbacks, promises, and async/await.

Example (with Callbacks):

```
console.log("Task 1");

setTimeout(() => {
console.log("Task 2");
}, 1000);

console.log("Task 3");
```

In this example, Task 1 and Task 3 will execute immediately. Task 2 will start after a delay of 1 second, but JavaScript won't wait for it to finish before moving on.

### Callbacks in JavaScript

Callbacks are a fundamental concept in JavaScript, allowing us to work with asynchronous operations and maintain control flow. A callback is a function that is passed as an argument to another function, and it's executed after the completion of that function.
Callbacks are particularly useful in asynchronous programming. In JavaScript, asynchronous operations (like fetching data from a server or reading a file) may take time to complete. Instead of waiting for the result, we can pass a callback function that will be executed once the operation is finished.

Example:

```
function greetUser(name, callback) {
setTimeout(() => {
callback(`Hello, ${name}!`);
}, 1000);
}

function displayGreeting(greeting) {
console.log(greeting);
}

greetUser('John', displayGreeting);
```

In this example, greetUser is an asynchronous function that simulates a delay using setTimeout. It takes a name and a callback function as arguments. After the timeout, it calls the callback with a greeting message. The displayGreeting is the callback function here.

## setTimeout and setInterval in JavaScript

setTimeout and setInterval are built-in JavaScript functions that allow you to schedule the execution of code after a specified period of time.

### setTimeout

`setTimeout` is used to delay the execution of a function or a block of code by a specified amount of time. It's commonly used for tasks that should occur after a certain interval. It is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use `setTimeout()` to create a "pause" before the next function in the function stack fires.

Example

```
function delayedGreeting() {
console.log('Hello after 2 seconds!');
}

setTimeout(delayedGreeting, 2000);
```

In this example, delayedGreeting will be executed after a 2-second delay.

### setInterval

`setInterval` is used to repeatedly execute a function or a block of code at specified intervals. It continues to execute until it's explicitly cleared.
The `setInterval()` function is commonly used to set a delay for functions that are executed again and again, such as animations. You can cancel the interval using `clearInterval()`.

If you wish to have your function called once after the specified delay, use `setTimeout()`.

Example

```
let counter = 0;

function incrementCounter() {
counter++;
console.log(`Counter: ${counter}`);
}

setInterval(incrementCounter, 1000);
```

In this example, incrementCounter will be executed every second, increasing the counter each time.

### Clearing Timers

Both setTimeout and setInterval return a unique identifier that can be used to clear the timer before it executes. This is done using clearTimeout and clearInterval respectively.

Example

```
const timerId = setTimeout(() => {
console.log('This will never be printed.');
}, 2000);

// Clear the timer before it executes
clearTimeout(timerId);
```

## Promises in JavaScript

Promises are feature in JavaScript that allow you to work with asynchronous code in a more structured and manageable way. They help to handle operations that may take some time to complete, such as fetching data from a server or reading a file.

**What is a Promise?**

A Promise is an object that represents a value that might not be available yet, but will be resolved at some point in the future. It can be in one of three states:

- Pending: Initial state, neither fulfilled nor rejected.
- Fulfilled: Meaning the operation completed successfully.
- Rejected: Meaning the operation failed.

**Creating a Promise**

```
const myPromise = new Promise((resolve, reject) => {
if (true) {
resolve("Success!")
} else {
reject("Error!")
}
})
```

**Using a Promise**

```
myPromise
.then((result) => {
console.log(result); // Output: 'Success!'
})
.catch((error) => {
console.error(error); // Output: 'Error!'
});
```

**Chaining Promises**

Promises can be chained to perform multiple asynchronous operations in a sequential manner.

Example

```
const promise1 = new Promise((resolve) => resolve(1));
const promise2 = new Promise((resolve) => resolve(2));

promise1
.then((result) => result + 1)
.then((result) => console.log(result)); // Output: 2

promise2
.then((result) => result + 1)
.then((result) => console.log(result)); // Output: 3
```

**Handling Errors**

```
const myPromise = new Promise((resolve, reject) => {
if (/_ operation successful _/) {
resolve('Success!');
} else {
reject(new Error('Error occurred!'));
}
});

myPromise
.then((result) => {
console.log(result);
})
.catch((error) => {
console.error(error.message); // Output: 'Error occurred!'
});
```

## Async/Await in JavaScript

Async/Await is a feature in JavaScript that allows you to write asynchronous code in a more synchronous and readable manner. It's built on top of Promises and provides a more intuitive way to work with asynchronous operations.

**Why Use Async/Await?**

Readability: Async/Await makes asynchronous code look and behave more like synchronous code, making it easier to understand and reason about.

Error Handling: It simplifies error handling by allowing you to use try-catch blocks around asynchronous code.

Sequential Logic: It enables you to write code that executes in a clear and sequential order, even though it involves asynchronous operations.

**How Async/Await Works**

Async/Await is syntactic sugar on top of Promises. It allows you to write asynchronous code in a more linear fashion.

Example of using async/await with Promises

```
function getUserData() {
return new Promise((resolve, reject) => {
setTimeout(() => {
const userData = { name: "John Doe", age: 30 };
resolve(userData);
}, 2000);
});
}

async function fetchUser() {
const user = await getUserData()
console.log(user)
}

fetchUser();
```

In the example above, getUserData returns a Promise that resolves with user data after a delay. The fetchUser function uses await to pause execution until the Promise is resolved or rejected.

**When to Use Async/Await**

Use Async/Await when working with functions that return Promises. It's especially useful when dealing with network requests, file operations, or any asynchronous tasks where you want to write code in a more synchronous style.

## Try/Catch and Finally in JavaScript

In JavaScript, error handling is crucial for writing robust and reliable code. The try, catch, and finally statements provide a way to handle exceptions and ensure your program continues running gracefully, even in the face of errors.

**Try Block**

The try block is used to enclose the code that may potentially throw an exception. When an exception occurs within the try block, it will be caught by the subsequent catch block.

In JavaScript, an exception is an unexpected event or error that occurs during the execution of a program. When a piece of code encounters an exceptional situation that it cannot handle, it throws an exception. This could be due to various reasons such as invalid input, network issues, or attempting to perform an operation on an undefined variable.

Exceptions disrupt the normal flow of a program. However, they can be caught and handled using try...catch statements. The try block contains the code that might throw an exception, and the catch block specifies what to do if an exception is thrown.

**Catch Block**

The catch block follows a try block and is used to handle any exceptions that may be thrown within it. The error parameter in the catch block contains the error object.

**Finally Block**

The finally block, if present, is executed regardless of whether an exception was thrown or not. It is often used to perform cleanup operations or ensure that certain tasks are always completed.

**Syntax**

```
try {
// Code that may throw an exception
} catch (error) {
// Code to handle the exception
} finally {
// Code to be executed regardless of exceptions
}
```

Example 1.

```
async function fetchUser() {
try {
const user = await getUserData();
console.log(user);
} catch (error) {
console.error(error);
}
}
```

Example 2:

```
let result

try {
result = 10 / 0 // Simulated division by zero error
if (!isFinite(result)) {
throw new Error("Result is not finite")
}
console.log("Result:", result) // This line won't execute due to the error
} catch (error) {
console.error("Error occurred:", error.message) // This line will execute
} finally {
console.log("Finally block always executes.") // This line always executes
}
```
