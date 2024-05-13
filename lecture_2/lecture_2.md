# Complex Data Types and Loops JS:

![Alt Text](https://media.licdn.com/dms/image/D4D12AQHqiS-_Ypo95Q/article-cover_image-shrink_720_1280/0/1654366936661?e=2147483647&v=beta&t=dRSLoQx-V5brk-w5qFGttLz19phitMReJHhJwQyXxm0 "Complex Data Types and Loops JS")

## Arrays and Objects in JavaScript

### Arrays:

Arrays are ordered lists of values. Each value is called an element, and it can be of any data type, including other arrays or objects.

- Creating an Array:
  `let fruits = ['apple', 'banana', 'cherry'];`

- Accessing Elements:
  `console.log(fruits[0]); // Output: 'apple'`

- Modifying Elements:

```
  fruits[1] = 'grape';
  console.log(fruits); // Output: ['apple', 'grape', 'cherry']
```

- Adding Elements:

```
  fruits.push('orange');
  console.log(fruits); // Output: ['apple', 'grape', 'cherry', 'orange']
```

## Simple Operations with Arrays in JavaScript

### Basic Array Methods

**push()** - Adds one or more elements to the end of an array and returns the new length of the array.

Example:

```
let fruits = ['apple', 'banana'];
fruits.push('cherry');
// Result: fruits = ['apple', 'banana', 'cherry']
```

**pop()** - Removes the last element from an array and returns that element.

Example:

```
let fruits = ['apple', 'banana', 'cherry'];
let removedFruit = fruits.pop();
// Result: removedFruit = 'cherry', fruits = ['apple', 'banana']
```

**shift()** - Removes the first element from an array and returns that element.

Example:

```
let fruits = ['apple', 'banana', 'cherry'];
let removedFruit = fruits.shift();
// Result: removedFruit = 'apple', fruits = ['banana', 'cherry']
```

**unshift()** - Adds one or more elements to the beginning of an array and returns the new length of the array.

Example:

```
let fruits = ['banana', 'cherry'];
fruits.unshift('apple');
// Result: fruits = ['apple', 'banana', 'cherry']
```

**slice()** - Returns a shallow copy of a portion of an array into a new array object.

Example:

```
let fruits = ['apple', 'banana', 'cherry', 'date'];
let selectedFruits = fruits.slice(1, 3);
// Result: selectedFruits = ['banana', 'cherry']
```

**splice()** - Changes the contents of an array by removing, replacing, or adding elements.

Example:

```
let fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1, 2, 'orange', 'grape');
// Result: fruits = ['apple', 'orange', 'grape', 'date']
```

**concat()** - Combines two or more arrays and returns a new array.

Example:

```
let fruits1 = ['apple', 'banana'];
let fruits2 = ['cherry', 'date'];
let allFruits = fruits1.concat(fruits2);
// Result: allFruits = ['apple', 'banana', 'cherry', 'date']
```

**reverse()** - Reverses the order of the elements in an array.

Example:

```
let numbers = [1, 2, 3, 4];
let reversedNumbers = numbers.reverse();
// Result: reversedNumbers = [4, 3, 2, 1]
```

### Objects:

Objects are collections of key-value pairs, where each key is a string (or Symbol) and each value can be of any data type, including arrays or other objects.

- Creating an Object:

```
let person = {
name: 'John Doe',
age: 30,
isStudent: false,
};
```

- Accessing Properties:
  `console.log(person.name); // Output: 'John Doe'`

- Modifying Properties:

```
person.age = 31;
console.log(person); // Output: { name: 'John Doe', age: 31, isStudent: false }
```

- Adding Properties:

```
person.email = 'john@example.com';
console.log(person); // Output: { name: 'John Doe', age: 31, isStudent: false, email: 'john@example.com' }
```

- Nested Objects and Arrays:

```
let student = {
name: 'Jane Doe',
grades: [85, 90, 75],
address: {
city: 'New York',
zipCode: '10001',
},
};
```

- Accessing Nested Properties:

```
console.log(student.grades[0]); // Output: 85
console.log(student.address.city); // Output: 'New York'
```

### Accessing properties using both dot notation and bracket notation

- Using Dot Notation:

```

let person = {
name: 'John Doe',
age: 30,
isStudent: false,
};

console.log(person.name); // Output: 'John Doe'
console.log(person.age); // Output: 30
console.log(person.isStudent); // Output: false

```

- Using Bracket Notation:

```

let person = {
name: 'John Doe',
age: 30,
isStudent: false,
};

console.log(person['name']); // Output: 'John Doe'
console.log(person['age']); // Output: 30
console.log(person['isStudent']); // Output: false

```

Arrays and objects are both complex data types in JavaScript.
Arrays are ordered lists of values, and objects are collections of key-value pairs.
Arrays use numeric indices to access elements, while objects use keys to access properties.
Both arrays and objects can contain other arrays or objects, allowing for complex data structures.

## Different types of for loops in JavaScript

### Normal For Loop:

The normal for loop is used when you know the exact number of iterations you want to perform. It consists of three parts: initialization, condition, and iteration.
The normal for loop allows you to execute a block of code a specified number of times.

Example:

```

for (let i = 0; i < 5; i++) {
console.log(i);
}

```

### For-In Loop:

The for-in loop is used to iterate over the properties of an object. It works with enumerable properties and is suitable for objects and arrays. The for-in loop iterates over the enumerable properties of an object, providing access to each property's key.

Example:

```

let person = {
name: 'John Doe',
age: 30,
isStudent: false,
};

for (let key in person) {
console.log(key + ': ' + person[key]);
}

```

### For-Of Loop:

The for-of loop is used to iterate over iterable objects like arrays, strings, and other collection-like structures.
The for-of loop provides an easy way to iterate over elements in an iterable, giving direct access to their values.

Example:

```

let colors = ['red', 'green', 'blue'];

for (let color of colors) {
console.log(color);
}

```

## Working with while loops in JS

### While Loop:

The while loop executes a block of code while a specified condition is true. The while loop is used when you don't know in advance how many times you need to loop. It repeatedly executes a statement as long as the specified condition evaluates to true.

Example:

```
let count = 0;

while (count < 5) {
console.log(count);
count++;
}
```

### Do/While Loop:

The do/while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once. The do/while loop first executes the code inside the block, and then checks if the condition is true. If it is, the loop will continue.

Example:

```
let randomNum = 1
let sum = 0

do {
sum += randomNum
randomNum++
} while (randomNum < 5)

console.log("Total sum:", sum)
```

### Using Break Statement:

The break statement is used to exit a loop prematurely. It can be used in both while and do/while loops.

Example:

```
let i = 0;

while (i < 10) {
console.log(i);
if (i === 5) {
break; // Exit the loop when i reaches 5
}
i++;
}
```

### Using Continue Statement:

The continue statement is used within a loop to skip the rest of the code inside the loop for the current iteration and move on to the next iteration.

Example:

```
let i = 0;

while (i < 5) {
  i++;

  // Skip the rest of the loop for odd numbers
  if (i % 2 !== 0) {
    continue;
  }

  console.log("Even number:", i);
}
```
