Advanced Javascript

Javascript Engine - understands the JS file and translates it for the computer to understand. Breaks the code into tokens -> ABS(abstract syntax tree) -> Interpreter/Profiler/Compiler -> Optimized Code

Interpreter: runs the code and spits out byte code - Quicker but can get slow
Compiler: spits out machine code - slower to startup but code is fast

Babel is a Javascript Compiler: takes modern JS and returns older (browser compatible) JS code
Typescript is a compiler: takes superset of JS and compiles it down to JS.

Try to assign properties of an object in its constructor or make sure we add things in the same order
we should try to write code that is predictable

Web Assembly - standard binary web excutable format. Can compile code all the way down -> browsers will be faster

Memory Heap: store and write information
Call Stack: keeps track of where we are in the code. 
Example: pushing functions onto the stack (inception). As functions get executed, they get popped off the stack. Frees memory as functions get called. FIFO. 
Inner function gets called first, then outter function, then global execution context

Garbage Collection: cleans up Memory Heap once functions are called in the Call Stack

Stack Overflow: nested functions where the stack keeps piling up

Memory Leak: when memory is assigned but never cleaned up
  Global Variables - memory is  taken by global variables
  Event Listeners - never removing event listeners when you don't ned them
  Set Interval function

JS is a single threaded language: only one set of instructions is executed at a time
  - only one call stack
  -synchronous - makes it difficult if we have long running code

Javascript Runtime: provides a Web API (asynchronous)

Web API comes with browser: call stack must be empty before running
  - listens to DOM events
  - database storage/caching
  - send HTTP requests
  - setTimeout etc

Node JS is a JS Runtime

Execution Context - anytime we run code it will be in an Execution Context

Global Execution Context gives you the Global Object and This

Creation Phase: When the code is run on the JS Engine, a Global Execution Context is created
Execution Phase: A new Execution Context is then created

Lexical Environment: Every time we have a function, it creates a new world for us. Inside that wold we have different information. Lexical Environment determines our available variables

Hoisting: moving var and function declarations to the top of their environments during the execution phase. The functions get moved to the top. The variable gets declared but not assigned -> variable is undefined
If the function is wrapped in a parenthesis, it is not hoisted. 

Function Expression (var x = function()) is treated same as variables
Function Declaration is hoisted (function())

Arguments: an object that gets created anytime a function gets called
  -avoid arguments. Want to use the spread operator instead
  function marry(...args) {
    console.log(args)
  }

Variable Environment: each Execution Context has its own Variable Environment

Dynamic Scope: where the function was called

Lexical Scope (Scope): available data and variables where the function was defined

Function Lexical Environment: nested functions have access to parent function variables

Global Lexical Environment: Chronological FUnctions. Does not have access to variables in other functions

Global Scope is the outter most scope

In JS our lexical scope (available data + variables where the function was defined) determines our available variables. Not where the function is called (dynamic scope) except for This

Leakage of Global Variables: undeclared variables created in the Global Scope Chain
  - using 'use_strict' prevents this assignment of undeclared variables

Function Scope: only create a new scope/environment when there is a function

Block Scope: create a new scope/environment when there are brackets
  - let and const allow JS to use block scoping

Problem with Global Variables: 
  - takes up memory
  - variable collisions -> rewrites existing variable if duplicates exist

Immediately Invoked Function Expressions (IFFE): function expression that is immediately invoked
  - variables can be defined, limiting the scope
  - can attach private dtaa that can be accessed by teh Global Execution Context
  - creates a fresh environment for us so we do not pollute the Global Environment

This keyword: this is the object that the function is a property of
  - gives methods access to their object
  - execute the same code for multiple objects

Arrow functions have a lexical this behavior. Arrow functions are lexically bound.

For lexical behavior, use arrow functions or bind(this) or set a self variable = this

call() is a method of an object substituting another object for the current object
  wizard.heal(call(archer, 10, 40))

apply() is similar to call but takes an array of parameters

bind() returns a function: can be used if we need 'this' keyword
  const healArcher = wizard.heal.bind(archer, 10, 40)

Primative Types: data that represents a single value
  - primative types are 'pass by value'

Non-primative types: does not contain the value directly- has a reference
  - Objects are 'pass by reference'

To clone arrays or objects to be able to change without changing others
  [].concat(firstArray)
  Object.assign({}, obj1) or {...obj1}

Shallow clone: clones only the first level: nested objects will still reference the original

Deep clone: clones all nested levels too
  JSON.parse(JSON.stringify(obj1))

