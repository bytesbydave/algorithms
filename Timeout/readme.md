### setTimeout

- setTimeout is used to schedule a function to be executed after a specific amount of time. Used for delaying tasks, timing operations, or scheduling a function to run after a given interval
- using setTimeout with a delay of 0 `setTimeout(func, 0)` is a common technique to defer the execution of a function until the call stack is clear

```
let timerId = setTimeout(function, delay, [arg1, arg2, ...argN]);
```

- **function**: the function to be executed after the delay
- **delay**: time in miliseconds to wait
- **arg1, arg2...argN** (optional): additional arguments which are passed through the function

#### Example

```
const fn = (x) => console.log(x)

setTimeout(fn, 3000, 'hello')
```

### clearTimeout

- clearTimeout is used to cancel a timeout previously established by calling setTimeout

```
let timerId = setTimeout(() => {
  console.log("This won't be logged if clearTimeout is called in time");
}, 3000);

clearTimeout(timerId);
```

- the timeout is set to log a message after 3 seconds, but is immediately cleared. The message will never be logged

### setInterval

- setInterval is used to repeatedly run a function at every given time interval. Used for tasks that need to be executed repeatedly, like UI, animations, polling a server

```
let intervalId = setInterval(function, delay, [arg1, arg2, ...])
```

### clearInterval

- clearInterval will stop the interval with the intervalId

```
clearInterval(intervalId)
```

```
let sampleFunction = () => console.log('hello)

let intervalId = setInterval(sampleFunction, 2000)

setTimeout(sampleFunction, 10000)
```
