# Working with APIs

APIs, or Application Programming Interfaces, serve as the conduit for communication between our applications and remote servers, offering a standardized way to access functionalities and exchange information often over the internet.

<p align="center">
  <img src="https://voyager.postman.com/illustration/diagram-what-is-an-api-postman-illustration.svg" alt="API Example">
</p>

## RESTful APIs and HTTP Methods:

RESTful APIs adhere to the principles of REST (Representational State Transfer) architecture, using standard HTTP methods for communication.

**Common HTTP methods:**

- **GET:** Retrieve data from a server.
- **POST:** Send data to a server to create a new resource.
- **PUT:** Update data on a server.
- **DELETE:** Remove data from a server.

**Status Codes**

Status codes are three-digit numbers returned by a server in response to a client's request made to the server. These codes provide information about the outcome of the request, indicating success, failure, or other specific conditions. The status codes are grouped into different classes, each representing a distinct category of response.

Here are the common classes of HTTP status codes:

1. **1xx (Informational):** Request received, continuing process.
   Example: 100 Continue.

2. **2xx (Success):** The action was successfully received, understood, and accepted.
   Example: 200 OK (Standard response for successful HTTP requests).

3. **3xx (Redirection):** Further action needs to be taken to complete the request.
   Example: 301 Moved Permanently (Requested resource has been permanently moved).

4. **4xx (Client Error):** The request contains bad syntax or cannot be fulfilled.
   Example: 404 Not Found (The requested resource could not be found).

5. **5xx (Server Error):** The server failed to fulfill a valid request.
   Example: 500 Internal Server Error (A generic error message returned when an unexpected condition was encountered).

## JSON (JavaScript Object Notation):

JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used to transmit data between a server and a web application, making it a popular choice in API responses.

- JSON data is represented as key-value pairs.
- Data is enclosed in curly braces {}, and key-value pairs are separated by commas.
- Strings are represented in double quotes, and numbers, booleans, arrays, and other objects can be part of JSON data.

Example:

```
{
  "name": "John Doe",
  "age": 25,
  "isStudent": false,
  "hobbies": ["reading", "coding", "traveling"],
  "address": {
    "city": "Exampleville",
    "country": "JSONland"
  }
}
```

When fetching data from a server using the fetch method, the typical response is in JSON format.

The .json() method is used to parse the JSON response and work with the data in JavaScript.

**JSON Methods**

- **JSON.stringify():**

The JSON.stringify() method converts a JavaScript object or value to a JSON string. It takes in two main parameters: the value to be converted and an optional replacer function or an array of properties to include in the string.

This method is often used when sending data to a server, as it serializes the JavaScript object into a string that can be easily transmitted.

Example:

```
const userData = {
  name: 'John Doe',
  age: 25,
  isAdmin: false
};

const jsonString = JSON.stringify(userData);
console.log(jsonString);
```

- **JSON.parse():**

The JSON.parse() method parses a JSON string and returns a JavaScript object. It takes the JSON string as its parameter and, optionally, a reviver function that can transform the parsed values before they are returned.

Example:

```
const jsonString = '{"name":"John Doe","age":25,"isAdmin":false}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData);
```

## Fetching Data:

**The fetch Method**

The fetch method is a modern JavaScript feature that allows asynchronous fetching of resources, typically data from a server.
It returns a Promise that resolves to the Response to that request, whether it is successful or not.

Example:

```
fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error fetching data:', error));
```

Explanation:

1. The fetch function is called with a URL as its argument.
2. The returned Promise resolves to a Response object.
3. The json method is called on the Response object to parse the response body as JSON.
4. Another Promise is returned, which resolves to the parsed JSON data.
5. The then method is used to handle the successful result, and catch is used for error handling.

**Sending Data:**

Sending Data with fetch:

The fetch method is not only used for fetching data but also for sending data to a server.

Example: Sending POST Request with JSON Data:

```
const postData = {
username: 'john_doe',
email: 'john@example.com'
};

fetch('https://api.example.com/users', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(postData)
})
.then(response => response.json())
.then(data => console.log('Data sent successfully:', data))
.catch(error => console.error('Error sending data:', error));
```

Explanation:

1. The fetch function is called with the URL and an options object.
2. The options object includes the method (in this case, 'POST'), headers specifying the content type, and the body containing the data to be sent, converted to JSON using JSON.stringify.
3. The server processes the data, and the response is handled in a similar manner as when fetching data.
