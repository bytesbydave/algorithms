const { throttle } = require('./index');

describe('throttle', () => {
  jest.useFakeTimers();
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 1000);
  });

  it('calls function immediately', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('throttles function calls', () => {
    throttledFunc();
    throttledFunc();
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('calls function with correct context and arguments', () => {
    const context = { a: 1 };
    const args = [2, 3];

    throttledFunc.apply(context, args);
    expect(func).toHaveBeenCalledWith(...args);
    expect(func).toHaveBeenLastCalledWith(...args);
  });

  it('calls function again after interval', () => {
    throttledFunc();
    jest.advanceTimersByTime(2000);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('does not call function if cleared before interval', () => {
    throttledFunc();
    jest.advanceTimersByTime(500);
    throttledFunc();
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllTimers();
  });
});
