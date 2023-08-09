const containerWithMostWater = require('./index');

describe('containerWithTheMostWater', () => {
  it('returns 28 when provided with an array of [7,1,2,3,9]', () => {
    const arr = [7, 1, 2, 3, 9];
    const resp = containerWithMostWater(arr);
    expect(resp).toEqual(28);
  });

  it('returns 0 when provided with an array of []', () => {
    const arr = [];
    const resp = containerWithMostWater(arr);
    expect(resp).toEqual(0);
  });

  it('returns 0 when provided with an array of [7]', () => {
    const arr = [7];
    const resp = containerWithMostWater(arr);
    expect(resp).toEqual(0);
  });

  it('returns 32 when provided with an array of [6,9,3,4,5,8]', () => {
    const arr = [6, 9, 3, 4, 5, 8];
    const resp = containerWithMostWater(arr);
    expect(resp).toEqual(32);
  });
});
