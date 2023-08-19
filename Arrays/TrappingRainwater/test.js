const trappingRainwater = require('./index');

describe('trappingRainwater', () => {
  it('returns 8 when provided with an array of [0,1,0,2,1,0,3,1,0,1,2]', () => {
    const arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
    const result = trappingRainwater(arr);
    expect(result).toEqual(8);
  });

  it('returns 10 when provided with an array of [2,1,0,2,1,0,3,1,0,1,2]', () => {
    const arr = [2, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
    const result = trappingRainwater(arr);
    expect(result).toEqual(10);
  });

  it('returns 0 when provided with an array of []', () => {
    const arr = [];
    const result = trappingRainwater(arr);
    expect(result).toEqual(0);
  });

  it('returns 0 when provided with an array of [3]', () => {
    const arr = [3];
    const result = trappingRainwater(arr);
    expect(result).toEqual(0);
  });

  it('returns 0 when provided with an array of [3,4,3]', () => {
    const arr = [3, 4, 3];
    const result = trappingRainwater(arr);
    expect(result).toEqual(0);
  });
});
