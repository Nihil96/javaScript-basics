# Browser APIs and Modules

<p align="center">
  <img src="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction/browser.png" alt="Browser APIs and Modules example">
</p>

## What Are Browser APIs?

Browser APIs (Application Programming Interfaces) are interfaces provided by web browsers that allow you to interact with the browser and the web page beyond what is possible with just HTML, CSS, and vanilla JavaScript. These APIs are built into the browser and enable developers to perform a wide range of operations, such as manipulating the Document Object Model (DOM), handling multimedia, and storing data locally.

## Why Are Browser APIs Useful?

**Enhanced Functionality:** Browser APIs extend the capabilities of JavaScript, allowing you to do more with your web applications. For example, you can capture and manipulate media streams with the MediaStream API, or interact with device sensors using the DeviceOrientation API.

**Efficiency and Productivity:** They provide pre-built, well-documented functions that save you from having to write complex code from scratch. This can speed up development time and reduce bugs.

**Interactivity and User Experience:** Browser APIs enable the creation of rich, interactive web applications. For example, using the Geolocation API, you can create location-based services, enhancing user engagement and experience.

**Access to Advanced Features:** Some Browser APIs provide access to advanced features of modern browsers, such as WebRTC for real-time communication, or the Service Worker API for offline capabilities and background sync.

## localStorage and sessionStorage in JavaScript:

localStorage and sessionStorage are web storage APIs in JavaScript that allow developers to store key-value pairs on the client side and they only store strings as values. However, you can store more complex data types (such as objects, arrays, numbers, etc.) by converting them to strings using JSON serialization. They provide a simple way to persistently store data (in the case of localStorage) or store data for the duration of a page session (in the case of sessionStorage). Both APIs are part of the Web Storage API and are accessible via the window object.

Example of localStorage:

```
// Storing data in localStorage
localStorage.setItem("username", "john_doe")
localStorage.setItem("theme", "dark")


// Retrieving data from localStorage
const username = localStorage.getItem("username")
const theme = localStorage.getItem("theme")


console.log(username) // Output: john_doe
console.log(theme) // Output: dark
```

Example of sessionStorage:

```
// Storing data in sessionStorage
sessionStorage.setItem("tempData", "some_value")
sessionStorage.setItem("language", "en")


// Retrieving data from sessionStorage
const tempData = sessionStorage.getItem("tempData")
const language = sessionStorage.getItem("language")


console.log(tempData) // Output: some_value
console.log(language) // Output: en
```

**When to Use:**

**localStorage:** Use when you want to store data persistently across multiple browser sessions. Data stored in localStorage remains even when the user closes and reopens the browser.

**sessionStorage:** Use when you want to store data for the duration of a single page session. Data stored in sessionStorage is cleared when the user closes the tab or browser window.

Some other web APIs worth taking a look at:

- IndexedDB
- Geolocation API
- WebSockets
- File API

## What Are Modules?

Modules in JavaScript are reusable pieces of code that can be exported from one file and imported into another. They help in organizing and structuring your code, making it more manageable, maintainable, and scalable. Each module encapsulates a specific functionality or a set of related functionalities, allowing you to divide your codebase into smaller, independent units.

## Why Use Modules?

**Separation of Concerns:** Modules enable you to break down complex applications into smaller, manageable parts. Each module handles a specific aspect of the application, promoting a clean and organized code structure.

**Reusability:** By encapsulating functionalities into modules, you can easily reuse code across different parts of your application or even in different projects. This reduces redundancy and helps maintain consistency.

**Maintainability:** Modules make it easier to maintain and update code. Changes in one module do not directly affect others, reducing the risk of introducing bugs. It also simplifies debugging and testing.

**Encapsulation:** Modules provide encapsulation, meaning that internal details of the module are hidden from the outside. Only the exposed (exported) parts can be accessed by other parts of the application, reducing the risk of unintended interactions and increasing security.

**Namespace Management:** Modules help in managing namespaces, preventing global scope pollution. Variables and functions defined in a module are not accessible outside unless explicitly exported, avoiding naming conflicts.

## Imports and Exports in JavaScript:

JavaScript's module system allows developers to organize their code into reusable and encapsulated units called modules. The import and export statements facilitate the use of modules in JavaScript, enabling the creation of modular, maintainable, and scalable code.

**Exporting from a Module:**

In a JavaScript file acting as a module, you can use the export keyword to expose variables, functions, or classes to other modules.

Example:

```
// math.js - Exporting variables and functions
export const PI = 3.14159;


// named export
export function add(a, b) {
return a + b;
}


export function multiply(a, b) {
return a * b;
}
```

**Importing in Another Module:**

In a different JavaScript file, you can use the import statement to bring in specific exports from a module.

```
// main.js - Importing from math.js
import { PI, add, multiply } from './math.js';


console.log(PI);          // Output: 3.14159
console.log(add(2, 3));    // Output: 5
console.log(multiply(2, 3)); // Output: 6
```

**Default Exports:**

A module can also have a default export, representing the main value or functionality of the module.

```
// calculator.js - Default export
const calculator = {
 add: (a, b) => a + b,
 subtract: (a, b) => a - b,
};


export default calculator;
```

You can import the default export without using curly braces:

```
// app.js - Importing the default export
import calculator from './calculator.js';


console.log(calculator.add(5, 3));    // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
```

**Important:**
Remember that while you can have multiple named exports, there can only be one default export per module. This design helps maintain simplicity and clarity in the import syntax, as the default export is often considered the primary or main export from a module.
