// Given a string, find the length of the longest substring without repeating characters

// Verify the constraints
// Q: Is the substring contiguous()?
// A: Yes, look for a substring and not a subsequence

// substring vs subsequence
// "abcbbd" "abcbbd"
// "abc is a substring"
// "abcd is a subsequence"

// Q: Does case sensitivity matter?
// A: No

// Sliding Window

// function longestSubstring(str) {
//   let longestVal = 0;

//   for (let left = 0; left < str.length; left++) {
//     let seenChars = {};
//     let currentLength = 0;
//     for (let right = left; right < str.length; right++) {
//       const currentChar = str[right];
//       if (!seenChars[currentChar]) {
//         currentLength++;
//         seenChars[currentChar] = true;
//         longestVal = Math.max(currentLength, longestVal);
//       } else {
//         break;
//       }
//     }
//   }

//   return longestVal;
// }

// Time Complexity: O(N^2)
// Space Complexity: O(N)

// Sliding Window
// Form a window over some portion of sequential data, then move that window throughout the data to capture different parts of it

// 1. Use a sliding window to represent the current substring
// 2. The size of the window will change based on new characters, and characters we've already seen before
// 3. Our seen characters hashmap keeps track of what characters we've seen, and the index we saw them at

function longestSubstring(str) {
  const seenChars = {};
  let longest = 0;
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];
    if (seenChars[currentChar] >= left) {
      left = seenChars[currentChar] + 1;
    }
    seenChars[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

// Space: O(N)
// Time: O(N)

module.exports = longestSubstring;
