const typedOutStrings = require('./index');

describe('typedOutStrings', () => {
  it('should return true when provided with the strings "ab#x" and "ac#x"', () => {
    const str1 = 'ab#x';
    const str2 = 'ac#x';
    const response = typedOutStrings(str1, str2);
    expect(response).toBe(true);
  });

  it('should return false when provided with the strings "abc#d" and "acc#c"', () => {
    const str1 = 'abc#d';
    const str2 = 'acc#c';
    const response = typedOutStrings(str1, str2);
    expect(response).toBe(false);
  });

  it('should return true when provided with the strings "x#y#z#" and "a#"', () => {
    const str1 = 'x#y#z#';
    const str2 = 'a#';
    const response = typedOutStrings(str1, str2);
    expect(response).toBe(true);
  });

  it('should return true when provided with the strings "a###b" and "b"', () => {
    const str1 = 'a###b';
    const str2 = 'b';
    const response = typedOutStrings(str1, str2);
    expect(response).toBe(true);
  });

  it('should return false when provided with the strings "Ab#z" and "ab#z"', () => {
    const str1 = 'Ab#z';
    const str2 = 'ab#z';
    const response = typedOutStrings(str1, str2);
    expect(response).toBe(false);
  });

  it('should return true when provided with the strings "" and "c#"', () => {
    const str1 = '';
    const str2 = 'c#';
    const response = typedOutStrings(str1, str2);
    expect(response).toBe(true);
  });

  it('should return true when provided with the strings "#c" and "c#c"', () => {
    const str1 = '#c';
    const str2 = 'c#c';
    const response = typedOutStrings(str1, str2);
    expect(response).toBe(true);
  });
});
