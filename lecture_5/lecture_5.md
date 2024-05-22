# Introduction to DOM (Document Object Model)

![Alt Text](https://www.tutorialstonight.com/assets/js/dom-tutorial.webp "DOM Example")

## What is the DOM?

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects. These objects can be manipulated with a scripting language such as JavaScript.
The DOM tree is a hierarchical representation of the elements on a web page. Each element, attribute, and text in an HTML document is represented as an object in the tree.

For example, consider this simple HTML:

```
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Example</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>Paragraph Text</p>
  </body>
</html>

```

The corresponding DOM tree looks like:

- Document
  - html
    - head
      - title
        - "DOM Example"
    - body
      - h1
        - "Hello, World!"
      - p
        - "Paragraph Text"

## Accessing Elements in the DOM

JavaScript allows you to interact with the DOM to dynamically change the content, structure, and style of a webpage. Here are some common ways to access elements:

1. **Access by ID (getElementById):**
   This method allows you to select an element on the page by its unique ID attribute. It returns the first element with the specified ID.

Example:

`const elementById = document.getElementById('myElementId');`

2. **Access by Class Name (getElementsByClassName):**
   This method selects elements by their class name. It returns a collection of elements with the specified class.

Example:

`const elementsByClass = document.getElementsByClassName('myClassName');`

3. **Access by Tag Name (getElementsByTagName):**
   This method selects elements by their HTML tag name (e.g., 'p' for paragraphs). It returns a collection of elements with the specified tag.

Example:

`const elementsByTag = document.getElementsByTagName('p');`

4. **Query Selector (querySelector):**
   This method uses CSS-style selectors to select elements. It returns the first element that matches the provided CSS selector.

Example:

`const element = document.querySelector('#myElementId');`

5. **Query Selector All (querySelectorAll):**
   Similar to querySelector, this method uses CSS-style selectors. However, it returns a NodeList containing all matching elements, not just the first one.

Example:

`const elements = document.querySelectorAll('.myClassName');`

These selectors provide different ways to access and manipulate elements in the DOM based on their IDs, classes, and tags. Keep in mind that getElementById and getElementsByClassName return live HTMLCollections, while querySelectorAll returns a static NodeList. The latter can be more versatile as it allows for more complex CSS-style selectors.

Example:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Selectors Example</title>
    <style>
      .myClassName {
        background-color: lightblue;
        margin: 5px;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div id="myElementId">Element with ID</div>
    <div class="myClassName">Element with Class</div>
    <div class="myClassName">Element with Class</div>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <script>
      const elementById = document.getElementById("myElementId")
      const elementsByClass = document.getElementsByClassName("myClassName")
      const elementsByTag = document.getElementsByTagName("p")
      const element = document.querySelector("#myElementId")
      const elements = document.querySelectorAll(".myClassName")

      elementById.style.color = "red"
      elementsByClass[0].style.fontWeight = "bold"
      elementsByTag[1].style.backgroundColor = "yellow"
      element.textContent = "Changed by Query Selector"
      elements[1].textContent = "Changed by Query Selector All"
    </script>
  </body>
</html>
```

## HTMLCollection vs NodeList

HTMLCollection and NodeList are both collections of DOM nodes, but they have some differences in terms of how they are created, how they are updated, and the methods they support. Here are the key differences:

**HTMLCollection**

1. Live Collection: An HTMLCollection is a live collection, which means it is automatically updated when the document changes. For example, if you add or remove elements from the DOM, the HTMLCollection will reflect those changes.

2. Elements Only: HTMLCollection contains only Element nodes. It does not include text nodes, comments, or other types of nodes.

3. Accessing Items: You can access items in an HTMLCollection by their name, id, or index. For example, you can use collection[index], collection['id'], or collection.namedItem('name').

4. Methods: HTMLCollection has fewer methods compared to NodeList. It mainly supports accessing elements by index or name.

**NodeList**

1. Static vs. Live: A NodeList can be either live or static. For example, document.querySelectorAll() returns a static NodeList, while properties like childNodes return a live NodeList.

2. All Node Types: NodeList can contain any type of node, not just Element nodes. This includes text nodes, comments, etc.

3. Accessing Items: You can access items in a NodeList by index, similar to an array. However, unlike HTMLCollection, you cannot access items by name or id.

4. Methods: NodeList supports more methods than HTMLCollection. For instance, the forEach method is available on NodeList (but not on HTMLCollection), allowing you to iterate over the items using a callback function.

## DOM Manipulation

DOM manipulation refers to the process of programmatically interacting with the DOM (Document Object Model) using scripting languages like JavaScript. The DOM is a hierarchical representation of the structure of an HTML or XML document, and it defines the way in which documents are accessed, manipulated, and presented in web browsers.

1. **Creating DOM Nodes (createElement):**
   Creating new elements dynamically allows us to build and customize our web pages on the fly. The createElement method empowers developers to generate HTML elements in JavaScript.

Example:

Creating a new paragraph element

```
const paragraph = document.createElement('p');
```

Setting content and attributes

```
paragraph.textContent = 'This is a dynamically created paragraph.';
paragraph.setAttribute('class', 'dynamic-paragraph');
```

Appending to the body

```
document.body.appendChild(paragraph);
```

Here, we create a new paragraph element, set its content and attributes, and then append it to the body of the document. This technique is invaluable for generating content dynamically based on user interactions or other events.

2. **Adding Elements to the DOM (appendChild, insertBefore, innerHTML)**

Adding elements to the DOM is a fundamental part of web development. We'll explore methods like appendChild, insertBefore, and the use of innerHTML to manipulate the structure of our HTML document.

Example:

Adding elements to an existing container

```
const container = document.getElementById('container');
```

Using appendChild

```
const newDiv = document.createElement('div');
container.appendChild(newDiv);
```

Using insertBefore

```
const anotherDiv = document.createElement('div');
container.insertBefore(anotherDiv, newDiv);
```

Using innerHTML to add content

```
container.innerHTML += '<p>This is additional content using innerHTML.</p>';
```

These are the techniques to add elements to the DOM. appendChild adds an element to the end of the specified parent, insertBefore inserts an element before a specified reference element, and innerHTML allows us to add HTML content directly, simplifying the process.

It's important to note that using **innerHTML** to set content involves parsing and re-rendering the HTML, which can have implications for performance and security. If you're dealing with plain text, you might want to consider using innerText or textContent instead. Additionally, when setting HTML content, be cautious of potential security risks, such as cross-site scripting (XSS) vulnerabilities, especially when the content is derived from user input.

3. **Modifying the DOM Tree (removeChild, replaceChild)**

To keep our web pages dynamic, we must be able to modify the existing DOM structure.

Example

Modifying the DOM tree

```
const elementToRemove = document.getElementById('to-remove');
const parent = elementToRemove.parentNode;
```

Removing an element

```
parent.removeChild(elementToRemove);
```

Replacing an element

```
const newElement = document.createElement('div');
newElement.textContent = 'This replaces the removed element.';
parent.replaceChild(newElement, anotherDiv);
```

4. **Styling elements with JavaScript**

Adding styles dynamically to HTML elements using JavaScript involves manipulating the style property of an HTML element.

Select the Element:

`const myElement = document.getElementById("myElementId");`

Access the Style Property:

`const elementStyle = myElement.style;`

Set Style Properties:

```
elementStyle.backgroundColor = "blue";
elementStyle.fontSize = "16px";
```

Add Multiple Styles at Once:
You can set multiple styles at once using the cssText property. This property takes a string of CSS styles.

Example:

`myElement.style.cssText = "color: red; font-size: 18px; margin-top: 10px;";`

The **classList** property in JavaScript provides an interface to interact with the classes of an HTML element. It's particularly useful for adding, removing, or toggling CSS classes dynamically through JavaScript.

Here are some common methods associated with the classList property:

```
// Adds one or more classes to the element.
const element = document.getElementById("myElement")
element.classList.add("newClass", "anotherClass")
```

```
// Removes one or more classes from the element.
const element = document.getElementById("myElement")
element.classList.remove("oldClass", "unwantedClass")
```

```
// Toggles a class on/off. If the class exists, it removes it; otherwise, it adds it.
// The second parameter (force) is optional. If force is true, the
// class will be added; if false, iwill be removed.
const element = document.getElementById("myElement")
element.classList.toggle("active")
```

```
// Replaces one class with another.
const element = document.getElementById('myElement');
element.classList.replace('oldClass', 'newClass');
```
