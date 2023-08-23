const { isPalindrome, almostPalindrome } = require('./index');

describe('Palindrome', () => {
  it('returns true if provided "aabaa"', () => {
    const str = 'aabaa';
    const result = isPalindrome(str);
    expect(result).toEqual(true);
  });

  it('returns true if provided "aabbaa"', () => {
    const str = 'aabbaa';
    const result = isPalindrome(str);
    expect(result).toEqual(true);
  });

  it('returns false if provided "abc"', () => {
    const str = 'abc';
    const result = isPalindrome(str);
    expect(result).toEqual(false);
  });

  it('returns true if provided "a"', () => {
    const str = 'a';
    const result = isPalindrome(str);
    expect(result).toEqual(true);
  });

  it('returns true if provided "A man, a plan, a canal: Panama"', () => {
    const str = 'A man, a plan, a canal: Panama';
    const result = isPalindrome(str);
    expect(result).toEqual(true);
  });
});

describe('almostPalindrome', () => {
  it('returns true if provided "race a car"', () => {
    const str = 'race a car';
    const result = almostPalindrome(str);
    expect(result).toEqual(true);
  });

  it('returns true if provided "abccdba"', () => {
    const str = 'abccdba';
    const result = almostPalindrome(str);
    expect(result).toEqual(true);
  });

  it('returns false if provided "abcdefdba"', () => {
    const str = 'abcdefdba';
    const result = almostPalindrome(str);
    expect(result).toEqual(false);
  });

  it('returns true if provided "aabaa"', () => {
    const str = 'aabaa';
    const result = almostPalindrome(str);
    expect(result).toEqual(true);
  });

  it('returns true if provided "aabbaa"', () => {
    const str = 'aabbaa';
    const result = almostPalindrome(str);
    expect(result).toEqual(true);
  });

  it('returns false if provided "abc"', () => {
    const str = 'abc';
    const result = almostPalindrome(str);
    expect(result).toEqual(false);
  });

  it('returns true if provided "a"', () => {
    const str = 'a';
    const result = almostPalindrome(str);
    expect(result).toEqual(true);
  });

  it('returns true if provided "A man, a plan, a canal: Panama"', () => {
    const str = 'A man, a plan, a canal: Panama';
    const result = almostPalindrome(str);
    expect(result).toEqual(true);
  });

  it('returns false if provided "A man, a plan, a canal: Panamafff"', () => {
    const str = 'A man, a plan, a canal: Panamafff';
    const result = almostPalindrome(str);
    expect(result).toEqual(false);
  });
});
