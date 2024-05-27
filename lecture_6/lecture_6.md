# Event Listeners

![Alt Text](https://coderpad.io/wp-content/uploads/2022/09/coderpad-blogspot-addeventlistener-adjustment-1024x683-1.png "Event Listeners in JS Example")

## Adding interaction with JS

In JavaScript, event listeners allow you to respond to user interactions like clicks, keystrokes, and more. They are crucial for creating interactive and dynamic web pages.

**How to work with them?**

First, select the HTML element you want to attach an event listener to. You can do this using various DOM methods like: `getElementById`, `getElementsByClassName`, `querySelector`, etc.

Next, use the `addEventListener` method on the selected element. This method takes two arguments: the event type and a function (the event handler) to be executed when the event occurs.

The function provided(the event handler) as the second argument will be executed when the specified event occurs. This is where you write the code that responds to the event.

If needed, you can remove an event listener using the removeEventListener method. This is useful when you want to stop listening for events.

There are various event types like `click`, `mouseover`, `keydown`, `submit`, etc. Choose the appropriate event type for the interaction you want to respond to.

Example 1:

`<button id="myButton">Click Me</button>`

```
function clickHandler() {
  alert("Button clicked!")
  myButton.removeEventListener("click", clickHandler) // removes the event listener
}

myButton.addEventListener("click", clickHandler)
```

Example 2:

`<h1>Funny Title</h1>`

```
const title = document.getElementsByTagName("h1")[0]

title.addEventListener("mouseenter", () => {
  title.style.fontSize = "45px"
  title.style.transition = "font-size 0.3s ease-in-out"
})

title.addEventListener("mouseleave", () => {
  title.style.fontSize = "25px"
  title.style.transition = "font-size 0.3s ease-in-out"
})
```

**Commonly used event types in JavaScript:**

- `Click Event`:
  Triggered when the user clicks an element.

- `Mouseover` and `Mouseout` Events:
  Fired when the mouse pointer enters or exits an element.

- `Keydown`, `Keyup`, and `Keypress` Events:
  Capturing keyboard interactions such as key presses, releases, and continuous key holding.

- `Submit` Event:
  Occurs when a form is submitted.

- `Change` Event:
  Fired when the value of an input element changes (e.g., in form fields, checkboxes, and select boxes).

- `Focus` and `Blur` Events:
  Triggered when an element gains or loses focus.

## Event propagation model in JavaScript

There are 3 propagation phases in JavaScript:

1. **Capturing Phase:** The event starts from the root of the DOM hierarchy and travels down to the target element.

2. **Target Phase:** The event reaches the target element.

3. **Bubbling Phase:** The event then bubbles up from the target element to the root of the DOM hierarchy.

### Capturing Phase

In the capturing phase, the event passes through each ancestor of the target element, starting from the root and moving towards the target. Event listeners attached with the capturing phase will be triggered during this descent.

Example

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Capturing Example</title>
</head>
<body>

  <div id="outer">
    <div id="middle">
      <button id="inner">Click me</button>
    </div>
  </div>

  <script>
    document.getElementById('outer').addEventListener('click', function () {
      console.log('Outer div capturing');
    }, true);

    document.getElementById('middle').addEventListener('click', function () {
      console.log('Middle div capturing');
    }, true);

    document.getElementById('inner').addEventListener('click', function () {
      console.log('Button capturing');
    }, true);
  </script>

</body>
</html>
```

In this example, if you click the button, you'll see in the console that the events are triggered in the capturing phase, from the root to the target element. The third argument (true) in the addEventListener methods indicates that the event should be handled during the capturing phase. If it were false or omitted (as it is by default), it would be during the bubbling phase.

### Target Phase

The target phase is the second phase in the event propagation model in JavaScript. It occurs when the event reaches the target element for which the event was originally triggered. During this phase, the event reaches and interacts with the specific target element.

Example

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Target Phase Example</title>
</head>
<body>

  <button id="myButton">Click me</button>

  <script>
    document.getElementById('myButton').addEventListener('click', function () {
      console.log('Button clicked at the target phase');
    });
  </script>

</body>
</html>
```

In this example, when you click the button, the event listener attached to the button responds during the target phase. The message "Button clicked at the target phase" will be logged to the console. This is the expected behavior for most interactive elements in the DOM when handling events.

### Bubbling Phase

Event bubbling is a phase in the event propagation model in JavaScript. When an event occurs, such as a click on an HTML element, the event doesn't immediately target that element; it goes through a series of phases. Event bubbling is the phase where the event starts from the target element and travels up the DOM hierarchy through its ancestors. Event bubbling is the opposite of the capturing phase. In most cases, when an event occurs on a deeply nested element, it first goes down to the target in the capturing phase, reaches the target in the target phase, and then bubbles up in the bubbling phase.

Example

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Bubbling Example</title>
</head>
<body>

  <div id="outer">
    <div id="middle">
      <button id="inner">Click me</button>
    </div>
  </div>

  <script>
    document.getElementById('outer').addEventListener('click', function () {
      console.log('Outer div clicked');
    }, false);

    document.getElementById('middle').addEventListener('click', function () {
      console.log('Middle div clicked');
    }, false);

    document.getElementById('inner').addEventListener('click', function () {
      console.log('Button clicked');
    }, false);
  </script>

</body>
</html>
```

If you click the button, you'll see in the console that the events are triggered in the bubbling phase, from the innermost element to the outermost. The third argument (false) in the addEventListener methods indicates that the event should be handled during the bubbling phase. If it were true, it would be during the capturing phase. By default, it is set to false.

## preventDefault() and stopPropagation()

### preventDefault()

The preventDefault method is used to prevent the default behavior of an event from occurring. This is often used in conjunction with event handlers to control how events behave.

**How it works:**

- Default Behaviors:

Many HTML elements have default behaviors associated with certain events. For example, clicking on a link (<a>) navigates to a new page, submitting a form sends the data to the server, and pressing Enter in a form input submits the form.

- Event Handling:

When an event occurs, you can use preventDefault to stop the default behavior.

Example:

`<a href="https://google.com" id=”myLink”>Google</a>`

```
const linkElement = document.getElementById('myLink');

linkElement.addEventListener("click", (e) => {
e.preventDefault() // prevents the navigation to the google page
console.log("you clicked the link")
})
```

### stopPropagation()

The stopPropagation method is used to stop the propagation of an event through the DOM tree. This means that the event will not bubble up to parent elements or trigger event listeners on ancestors.

**How it works:**

When an event occurs on an element, it "bubbles up" through its ancestor elements, triggering event listeners on each one.

- Event Handling

If you want to prevent an event from reaching parent elements, you can use stopPropagation.

Example

```
<div class="parent">
    Parent
    <div class="child">Child</div>
</div>
```

```
const parentElement = document.querySelector(".parent")
const childElement = document.querySelector(".child")

parentElement.addEventListener("click", (e) => {
  console.log("you clicked the parent element")
})

childElement.addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("you clicked the child element")
})
```

## Retrieving Data from Input Fields

Input fields in HTML allow users to enter various types of data, such as text, numbers, and more. To access and retrieve the data entered by a user, you can use JavaScript.

**How it works:**

Accessing Input Elements: Use the getElementById or querySelector methods to get a reference to the input element.

**Retrieving Value:**

To retrieve the value entered by the user, you can use the value property of the input element.

Example:

```
<input type="text" id="myInput" placeholder="Enter your name"/>
<button id="submitButton">Submit</button>
```

```
const submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", function () {
  const inputElement = document.getElementById("myInput")
  const inputValue = inputElement.value
  alert(`Hello, ${inputValue}!`)
})
```
