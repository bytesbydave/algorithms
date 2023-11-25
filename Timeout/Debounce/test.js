const { debounce } = require('./index');

describe('debounce', () => {
  it('should execute the callback function after the specified wait time', (done) => {
    let called = false;
    const callback = () => {
      called = true;
    };
    const debounced = debounce(callback, 100);

    debounced();
    setTimeout(() => {
      expect(called).toBe(false); // callback should not have been called yet
    }, 50);

    setTimeout(() => {
      expect(called).toBe(true); // callback should have been called after 100ms
      done();
    }, 150);
  });

  it('should only execute the callback once when called multiple times in quick succession', (done) => {
    let callCount = 0;
    const callback = () => {
      callCount++;
    };
    const debounced = debounce(callback, 100);

    debounced();
    debounced();
    debounced();

    setTimeout(() => {
      expect(callCount).toBe(0); // callback should not have been called yet
    }, 90);

    setTimeout(() => {
      expect(callCount).toBe(1); // callback should have been called once after 100ms
      done();
    }, 200);
  });

  it('should work with different wait times', (done) => {
    let called = false;
    const callback = () => {
      called = true;
    };
    const shortWait = debounce(callback, 50);
    const longWait = debounce(callback, 200);

    shortWait();
    setTimeout(() => {
      expect(called).toBe(true); // callback for shortWait should have been called
      called = false;
      longWait();
    }, 100);

    setTimeout(() => {
      expect(called).toBe(false); // callback for longWait should not have been called yet
    }, 250); // Adjusted time

    setTimeout(() => {
      expect(called).toBe(true); // callback for longWait should have been called
      done();
    }, 350); // Adjusted time to ensure longWait's callback is invoked
  });

  it('should pass the correct arguments to the callback', (done) => {
    const args = [];
    const callback = (...params) => {
      args.push(...params);
    };
    const debounced = debounce(callback, 100);

    debounced('a', 'b');
    debounced('c', 'd');

    setTimeout(() => {
      expect(args).toEqual(['c', 'd']); // should receive the latest arguments
      done();
    }, 150);
  });

  it('should preserve the context when the debounced function is called', (done) => {
    const context = { value: 42 };
    function callback() {
      expect(this).toBe(context); // 'this' should refer to the context object
      done();
    }
    const debounced = debounce(callback, 100).bind(context);

    debounced();
  });

  it('should handle edge cases like no wait time', (done) => {
    let called = false;
    const callback = () => {
      called = true;
    };
    const debounced = debounce(callback, 0);

    debounced();

    // Use setTimeout to delay the expectation until the next event loop cycle
    setTimeout(() => {
      expect(called).toBe(true); // should be called by now
      done();
    }, 1); // a minimal delay to allow the debounced function to execute
  });
});
