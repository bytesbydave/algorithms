const longestSubstring = require('./index');

describe('longestSubstring', () => {
  it('returns 3 when provided a string of "abccabb"', () => {
    const str = 'abccabb';
    const response = longestSubstring(str);
    expect(response).toEqual(3);
  });

  it('returns 1 when provided a string of "cccccc"', () => {
    const str = 'cccccc';
    const response = longestSubstring(str);
    expect(response).toEqual(1);
  });

  it('returns 0 when provided a string of ""', () => {
    const str = '';
    const response = longestSubstring(str);
    expect(response).toEqual(0);
  });

  it('returns 4 when provided a string of "abcbda"', () => {
    const str = 'abcbda';
    const response = longestSubstring(str);
    expect(response).toEqual(4);
  });
});
