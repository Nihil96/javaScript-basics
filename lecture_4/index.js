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

// Chaning Promises
const promise1 = new Promise((resolve) => resolve(1))

promise1
  .then((number) => number + 1)
  .then((prevNumber) => prevNumber + 1)
  .then((result) => console.log(result))

// Async/Await in JavaScript

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { name: "Mirko", surname: "Petkovski", age: 32 }
      const isUserAvailable = false
      if (isUserAvailable) {
        resolve(userData)
      } else {
        reject("ERROR: The user is not found")
      }
    }, 3000)
  })
}

// one way of resolving the Promise
// getUserData()
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error))

// using async/await
async function fetchUserData() {
  const user = await getUserData()
  console.log(user)
}

// fetchUserData()

// try/catch blocks - second way of handling Promises
async function fetchUser() {
  try {
    const user = await getUserData()
    console.log(user)
  } catch (error) {
    console.log("Something went wrong!", error)
  }
}

fetchUser()
