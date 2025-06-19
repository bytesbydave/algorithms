# JavaScript

### What is the difference between a variable that is `null`, `undefined`, or undeclared

- null is explicitly set by the developer, the variable has no value
- undefined, a variable has been declared, but no value is assigned
- undeclared, a variable has not been declared. throws a `ReferenceError`

### What is the difference between `.call` and `.apply`?

- both are used to invoke functions with a specific `this` context and arguemnts.
- `.call` takes arguments individually
- `.apply` takes arguments as an array

### What is the difference between a `Map` object and a plain object?

- Map has built in `size`, `get`, `set`, `delete` methods
- Map is directly iterable with for...of
- keys can be any types
- map object is iterable array of arrays where the individual array(array[0], array[1]) are key-value pairs
- Map is used for more complex or dynamic scenarios

```
Plain object
const person = { name: 'John', age: 30, occupation: 'Developer' };
console.log(person);

Map object
const person = new Map([
  ['name', 'John'],
  ['age', 30],
  ['occupation', 'Developer'],
]);
console.log(person);
```

### What is the difference between attribute and a property in a DOM?

- attributes are defined in the HTML markup and provide initial values for elements

```
<input type='text' value='initial value' />

value='initial value' is an attribute
```

- properties are part of the DOM and represent the current state of an element. They are dynamic and can change as the user interacts with the page or through JS

### Differences between `var`, `let`, `const`

| Feature                      | var                | let            | const          |
| ---------------------------- | ------------------ | -------------- | -------------- |
| Scope                        | Function or Global | Block          | Block          |
| Initialization               | Optional           | Optional       | Required       |
| Redeclaration                | Yes                | No             | No             |
| Reassignment                 | Yes                | Yes            | No             |
| Accessing before declaration | undefined          | ReferenceError | ReferenceError |

### Explain event delegation

- a technique where a single event listener (like onClick) is attached to a parent element instead of attaching event listeners to multiple child elements. When an event occurs on a child element, the event bubbles up a DOM tree
- improved performance, simplified,

### Difference between cookie, sessionStorage, localStorage in browsers

**Cookies** - suitable for server-client communication, small storage capacity, can be persisted or session based, sent to server on every request (used for authentication or analytics)

**localStorage** - suitable for long-term storage, data persists even after the browser is closed, accessible across all tabs and windows, highest storage capacity among the three (used for user preferences, like language)

**sessionStorage** - suitable for temporary data within a single page session, data is cleared when the tab or window is closed, higher storage capacity than cookies (used for shopping cart or multistep form)

### Differences betweeen `<stript>`, `<script async>`, and `<script defer>`

**`<script>`** - default way to include JS. the browser blocks HTML parsing while the script is being downloaded and executed. The browser will not continue rendering until the script has finished executing

**`<script async>`** - downloads script asynchronously, in parallel with parsing the HTML. executes in no particular order

**`<script defer>`** - downloads script asynchronously, in parallel with parsing the HTML, but the execution of the script is deferred until
HTML parsing is complete

## Script Tag Loading Behavior Comparison

| Feature                | `<script>`                                                                                                                                                     | `<script async>`                                                                                       | `<script defer>`                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Parsing behavior       | Blocks HTML parsing                                                                                                                                            | Runs parallel to parsing                                                                               | Runs parallel to parsing                                                                                                |
| Execution order        | In order of appearance                                                                                                                                         | Not guaranteed                                                                                         | In order of appearance                                                                                                  |
| DOM dependency         | No                                                                                                                                                             | No                                                                                                     | Yes (waits for DOM)                                                                                                     |
| Most commonly used for | Inline scripts or critical scripts that must run before the page renders, such as polyfills, essential libraries, or scripts manipulating content immediately. | Loading independent external scripts like analytics or ads that do not depend on DOM or other scripts. | Scripts that rely on the DOM being fully parsed, such as those manipulating page content or initializing UI after load. |

### What is Feature Detection and Feature Inference?

- Determining whether a browser supports a certain block of code and running a diffent code depending on whether it does or doesn't
- The differences are the function it uses to determine

### What is `Function.prototype.bind`?

- allows dev to create a new function with a specific `this` value and optional initial arguments
- `bind` was frequently used on legacy React class component methods

```
const john = {
  age: 42,
  getAge: function() {
    return this.age
  }
}

const mary = {
  age: 22
}
const boundGetgAgeMary = john.getAte.bind(mary)
console.log(boundGetAgeMary()); //22
```

### Explain Arrow functions

- lexically bind the `this` value
- value of `this` is predictable

```
const obj = {
  value: 42,
  getValue: () => this.value, // `this` does not refer to `obj`
};

console.log(obj.getValue()); // undefined
```

### Arrow syntax for a method in a constructor

- the value of `this` gets set at the time of the function creation and cannot change after that

### What is prototypical Inheritance?

- a way for objects to inherit properties and methods from other objects

### What is the difference between `function Person(){}`, `const person = Person()`, and `const person = new Person()`

- `function Person(){}` is a function declaration. It can be used as a regular function or as a constrctor
- `const person = Person()` calls Person as a regular function
- `const person = new Person()` creates a new instance of Person

### Difference between `function foo(){}` and `var foo = function(){}`?

- `function foo(){}` is a function declaration while `var foo = function(){}` is a function expression

```
foo() // 'FOOO'
function foo() {
  console.log('FOOO')
}

foo() // uncaught TypeError: foo is not a function
var foo = function() {
  console.log('FOOO')
}

```

### What is an Anonymous Function?

- used as arguments to other functions or assigned to variables
- used as arguments to higher-order functions
- used as callbacks, once used they don't need to be used anywhere else

### What are various ways to create objects?

- `{}` object literals
- `new Object()`
- `Object.create()`

### What is a Closure in Javascript?

- when a function is able to remember and access it's lexical scope even when the function is executing outside its lexical scope

### What is a higher-order function?

- takes in one or more functions as arguments and/or returns a function as a result
- like `.map()`, `.filter()` etc

### Differences between synchronous and asynchronous functions in Javascript?

- Synchronous functions are blocking while Asynchronous functions are not

```
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data); // Calling the callback function with data
  }, 2000); // Simulating a 2-second delay
}

console.log('Fetching data...');

fetchData((data) => {
  console.log(data); // Output: { name: 'John', age: 30 } (after 2 seconds)
});

console.log('Call made to fetch data'); // This will print before the data is fetched

```

### What is a promise?

- a Promise is an object representing the eventual result of an asynchronous operation
- three states: Pending, fulfilled, rejected

### Pros and cons of using Promises instead of callbacks in Javascript?

- Promises offer cleaner alternative to callback, avoiding callback hell
- more readable copde, facilitate writing sequential and parallel async operations
- may introduce slightly more complex code

```
function getFirstData(callback) {
  setTimeout(() => {
    callback({ id: 1, title: 'First Data' });
  }, 1000);
}

function getSecondData(data, callback) {
  setTimeout(() => {
    callback({ id: data.id, title: data.title + ' Second Data' });
  }, 1000);
}

function getThirdData(data, callback) {
  setTimeout(() => {
    callback({ id: data.id, title: data.title + ' Third Data' });
  }, 1000);
}

// Callback hell
getFirstData((data) => {
  getSecondData(data, (data) => {
    getThirdData(data, (result) => {
      console.log(result); // Output: {id: 1, title: "First Data Second Data Third Data"}
    });
  });
});

function getFirstData(callback) {
  fetch('/api/first-data')
    .then(response => response.json())
    .then(data => callback(data));
}

function getSecondData(data, callback) {
  fetch('/api/second-data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => callback(data));
}

function getThirdData(data, callback) {
  fetch('/api/third-data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => callback(data));
}

// Callback hell with API requests
getFirstData((data) => {
  getSecondData(data, (data) => {
    getThirdData(data, (result) => {
      console.log(result);
    });
  });
});
```

```
// Example of sequential asynchronous code using setTimeout and Promises
function getFirstData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: 'First Data' });
    }, 1000);
  });
}

function getSecondData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: data.id, title: data.title + ' Second Data' });
    }, 1000);
  });
}

function getThirdData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: data.id, title: data.title + ' Third Data' });
    }, 1000);
  });
}

getFirstData()
  .then(getSecondData)
  .then(getThirdData)
  .then((data) => {
    console.log(data); // Output: {id: 1, title: "First Data Second Data Third Data"}
  })
  .catch((error) => console.error('Error:', error));

  function getFirstData() {
  return new Promise((resolve, reject) => {
    fetch('/api/first-data')
      .then(response => {
        return response.json();
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

function getSecondData(data) {
  return new Promise((resolve, reject) => {
    fetch('/api/second-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) reject(new Error('Failed to fetch second data'));
        else return response.json();
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

function getThirdData(data) {
  return new Promise((resolve, reject) => {
    fetch('/api/third-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

// Using promise chaining
getFirstData()
  .then(data => getSecondData(data))
  .then(data => getThirdData(data))
  .then(result => {
    console.log(result); // {id: 1, title: "First Data Second Data Third Data"}
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### What are Ployfills used for?

- provide modern functionality to older browsers that lack native support for those features
- new JS methods like `.includes`, `Object.assign()`
- new APIs like `fetch()`, `Promise`

### Why should you leave the global Javascript scope of a website as-is?

- naming conflicts
- scope leak
- security concerns
- prefer to promote modularity and encapsulation

### Mutable vs Immutable objects

- mutable objects allow for modification of properties and values after creation

```
Immutable Object created using .freeze

const immutableObject = Object.freeze({
  name: 'John',
  age: 30,
});
```

### What is a Map, Set, WeakMap, WeakSet?

**Map** - you need to associate values with keys (key-value pairs) and keys can be any type(not just strings or symbols)

- you want to efficiently look up, add, or remove values based on a key
- Map allows any data type as keys
- WeakMap only allows objects as keys

**Set** - you need to store a collection of unique values and you don't care about the order or associating values with keys

- You want to quickly check if a value exists in the collection or to remove duplicates from an array
- Set is a collection of unique values 
- no indexing
- WeakSet is a collection of unique objects

### What are `Symbol`s used for?

- new primitive data type - unique and immutable indentifiers that are primarily for object property keys to avoid name collisions

### What are JS object property flags and descriptors?

- Property flags are used to specify the behavior of a property on an object: `writable`, `enumerable`, `configurable`

```
Object.defineProperty(obj, 'name', {
  writable: false,
  value: 'John Doe',
});
```

- Property decriptors provide information about an object's property, including its value and flags

```
let user = { name: 'John Doe' };
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(descriptor); // {value: "John Doe", writable: true, enumerable: true, configurable: true}
```

### Hoisting in JS

- variables and function declarations are moved to the top of their containing scope during compile phase

`var` are hoisted but not initialized. Value is undefined if accessed before initialization

`let and const` are hoisted but not initialized. Value results in a `ReferenceError` until actual declaration is encountered

`var` function expressions are hoisted, but not initialized. Value of the variable is `undefined` if accessed before initialization

`function` are both declared fully hoisted

### What is the event loop in Javascript runtimes?

### Explain `this`

- refers to the current execution context of a function or script.

### What is `use strict` used for?

- statement to enable strict mode for entire scripts or individual functions
- makes it impossible to create global variables
- imposes stricter parsing and error handling rules
- prevents you from using undeclared variables
- disallows potentially insecure actions

### Explain AJAX

- technique in JS that allows web pages to send and retrieve data asynchronously from servers without refreshing or reloading the entire page
- fetch API is a more popular method to implement AJAX

### What are the difference betweeen `XMLHttpRequest` and `fetch`?

- both are asynchronous HTTP requests
- XMLHttpRequest uses event callbacks while fetch uses promise chaining
- fetch is cleaner and has more modern features

### What is `AbortController`?

- used to cancel ongoing asynchronous operations like fetch requests
- useful for cancelling requests based on user actions, prioritizing the latest requests in scenarios with multiple simultaneous requests, cancelling requsts that are no longer needed, like when a user has navigated away from the page

### Difference between CommonJS modules and ES modules

- JS modules are reusable pieces of code that encapsulate functionality. Allows you to break down your code into smaller, manageable parts, each with its own scope
- CommonJS - older module system, using `require()` function to load modules and `module.exports` object to define the exports of a module
- ES Module - `import` and `export` statements to handle module dependencies

### What are server-sent events?

- allows a webpage to receive automatic upates from a server via HTTP connection.
- used with `EventSource` that opens a connection with the server and allows client to receive events from the server. Connnections are persistant. Similar to `WebSocket`s but are only unidirectional

### How does garbage collection work?

- automatic memory management mechanism that reclaims memory occupied by objects and variables that are no longer in use by the program

### How to make a single page app SEO friendly

- can use server side rendering to ensure search engines can index your website
- SSR involves renderiung the initial HTML of the page on the server before sending it to the client
