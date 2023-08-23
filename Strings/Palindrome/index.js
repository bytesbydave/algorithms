//  A palindrome ois a string that reads the same forwards and backwards

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring case sensitivity

// 1st strategy:
// Left pointer on the left, right pointer on the right
// As we move pointers in, we find that they are equal

// function isPalindrome(str) {
//   const strFormatted = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   let left = 0;
//   let right = strFormatted.length - 1;
//   while (left <= right) {
//     if (strFormatted[left] !== strFormatted[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// 2nd strategy:
// Initialize left and right pointers from the center and expand outwards and compare

// function isPalindrome(str) {
//   const strFormatted = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   let left = Math.floor(strFormatted.length / 2) - 1;
//   let right = Math.ceil(strFormatted.length / 2);
//   while (left >= 0 && right < strFormatted.length) {
//     if (strFormatted[left] !== strFormatted[right]) {
//       return false;
//     }
//     left--;
//     right++;
//   }
//   return true;
// }

// 3rd strategy:
// Create a duplicate of the string, but in reverse and compare the characters

function isPalindrome(str) {
  const strFormatted = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let backwardsStr = '';
  for (let i = 0; i < strFormatted.length; i++) {
    backwardsStr = strFormatted[i] + backwardsStr;
  }
  for (let i = 0; i < strFormatted.length; i++) {
    if (backwardsStr[i] !== strFormatted[i]) {
      return false;
    }
  }
  return true;
}

// Given a string, determine if it is almost a palindrome. A string is almost a palindrome if it becomes a palindrome by removing 1 letter.

// Verify constraint:
// Q: Is a palindrome considered almost a palindrome?
// A: Yes

function almostPalindrome(str) {
  const strFormatted = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = strFormatted.length - 1;
  while (left <= right) {
    if (strFormatted[left] !== strFormatted[right]) {
      if (
        checkPalindrome(str, left, right - 1) ||
        checkPalindrome(str, left - 1, right)
      ) {
        return true;
      } else {
        return false;
      }
    }
    left++;
    right--;
  }
  return true;
}

function checkPalindrome(str, left = 0, right = str.length - 1) {
  const strFormatted = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  while (left <= right) {
    if (strFormatted[left] !== strFormatted[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = { isPalindrome, almostPalindrome };
