// Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called. You almost certainly have encountered debouncing in your daily lives before — when entering an elevator. Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

// Implement a debounce function which accepts a callback function and a wait duration. Calling debounce() returns a function which has debounced invocations of the callback function following the behavior described above.

// 1) Debounce invocation
// It invokes the callback function only after a delay of wait. This is performed using setTimeout. Since we might need to clear the timer if the debounced function is called again while there's a pending invocation, we need to retain a reference to a timeoutID, which is the returned value of setTimeout.
// If the function is called again while there's a pending invocation, we should cancel existing timers and schedule a new timer for the delayed invocation with the full wait duration. We can cancel the timer via clearTimeout(timeoutID).

// 2) Calls the callback function with the right parameters
// Debounced functions are used like the original functions, so we should forward the value of this and function arguments when invoking the original callback functions.

// You may be tempted to use func(...args) but this will be lost if callback functions are invoked that way. Hence we have use Function.prototype.apply()/Function.prototype.call() which allows us to specify this as the first argument.

// func.apply(thisArg, args)
// func.call(thisArg, ...args)

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
};

module.exports = {
  debounce,
};
