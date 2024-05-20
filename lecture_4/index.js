// Synchronous and Ansynchronous execution of code in JavaScript

// Synchronous code in JS
// console.log("Task 1")

// for (let i = 0; i < 1000; i++) {
//   console.log("Some other tasks", i)
// }

// console.log("Task 3")

// ======= Asynchronous code in JS =========

// setTimeout and setInterval

// Example with setTimeout

const printTask = () => console.log("Executing Task 4")

// setTimeout(printTask, 0)
// console.log("Executing Task 1")

// setTimeout(() => console.log("Executing Task 2"), 2000)

// console.log("Executing Task 3")

// setInterval
let counter = 0

function incrementCounter() {
  counter++
  console.log(`Counter is: ${counter}`)
}

// setInterval(incrementCounter, 1000)

const timerId = setTimeout(
  () => console.log("This will never be printed"),
  3000
)

clearTimeout(timerId)

// Promises

// pending - initial state, neither fulfield nor rejected
// fulfield - meaning the operation is successfuly
// rejected - meaning the operation failed

const myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Success!")
  } else {
    reject("Error!")
  }
})

myPromise
  .then((result) => console.log(result)) // Output: Success!
  .catch((error) => console.log(error))
