const twoSum = require('./index');

describe('twoSum', () => {
  it('returns null if provided with an empty array', () => {
    const arr = [];
    const target = 11;
    const answer = twoSum(arr, target);
    expect(answer).toEqual(null);
  });

  it('returns null if provided with an array of [5]', () => {
    const arr = [5];
    const target = 11;
    const answer = twoSum(arr, target);
    expect(answer).toEqual(null);
  });

  it('returns [3,4] when arr is [1,3,7,9,2] and target is 11', () => {
    const arr = [1, 3, 7, 9, 2];
    const target = 11;
    const answer = twoSum(arr, target);
    expect(answer).toEqual([3, 4]);
  });

  it('returns null when arr is [1,3,7,9,2] and target is 25', () => {
    const arr = [1, 3, 7, 9, 2];
    const target = 25;
    const answer = twoSum(arr, target);
    expect(answer).toEqual(null);
  });

  it('returns [0,1] when arr is [1,6] and target is 7', () => {
    const arr = [1, 6];
    const target = 7;
    const answer = twoSum(arr, target);
    expect(answer).toEqual([0, 1]);
  });
});
