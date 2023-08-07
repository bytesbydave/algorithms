// Given an array of integars, return the indices of the two numbers that add up to a given target

// Step 1: Verify the constraints
// Q: Are all numbers positive, or can there be negatives?
// A: All numbers are positive

// Q: Are there duplicates in the array?
// A: No

// Q: Will there always be a solution available?
// A: No, there may not always be a solution. In those cases, return null\

// Q: Can there be multiple pairs that add up to the target?
// A: No

// Figure out a solution without code

const arr = [1, 3, 7, 9, 2];
const target = 11;

// // Two Pointer Technique: Move the p2 first and then move the p1 once completed
// function twoSum(arr, target) {
//   for (let p1 = 0; p1 < arr.length - 1; p1++) {
//     const numToFind = target - arr[p1];
//     for (let p2 = p1 + 1; p2 < arr.length; p2++) {
//       if (arr[p2] === numToFind) {
//         return [p1, p2];
//       }
//     }
//   }
//   return null;
// }

// // Time Complexity: O(N^2) due to nested for loops
//  // Space Complexity: O(1)

function twoSum(arr, target) {
  const numsMap = {};
  for (let i = 0; i < arr.length; i++) {
    const currentMapVal = arr[i];
    if (numsMap[currentMapVal] >= 0) {
      return [numsMap[currentMapVal], i];
    }
    const numToFind = target - arr[i];
    numsMap[numToFind] = i;
  }
  return null;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

module.exports = twoSum;
