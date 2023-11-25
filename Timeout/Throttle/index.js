// A throttle function is used to ensure that a given function is called at most once in a specified period. This is particularly useful for rate-limiting execution of functions that are triggered by events that can fire very frequently, like window resizing or scrolling.

// Describe how you would implement a throttle function that limits the frequency at which a function can be executed. Additionally, explain how you would integrate this throttle function into the event listener for the scroll event of the list. Your explanation should include:

function throttle(func, limit) {
  let isExecutable = true;
  return (...args) => {
    if (isExecutable) {
      func.apply(this, args);
      isExecutable = false;
      setTimeout(() => {
        isExecutable = true;
      }, limit);
    }
  };
}

// Explanation:

// throttle function takes two parameters: func (the function to throttle) and limit (the minimum time interval between successive calls in milliseconds).
// It initializes two variables, lastFunc and lastRan. lastRan stores the timestamp when func was last called, and lastFunc stores the identifier of the setTimeout.
// The returned function will execute func immediately if it hasn't been run before, or if the limit time has elapsed since the last execution.
// If the limit has not yet passed, the function execution is delayed for the remaining time until the limit is reached.

module.exports = {
  throttle,
};
