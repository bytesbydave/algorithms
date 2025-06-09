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

- map object is iterable array of arrays where the individual array(array[0], array[1]) are key-value pairs

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

- Determining whether a browsesr supports a certain block of code and running a diffent code depending on whether it does or doesn't
- The differences are the functgion it uses to determine

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

- `function Person(){}` is a function declaration. It can b e used as a regular function or as a constrctor
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

- Synchronous functions are blocking while Asynchrnous functions are not

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

