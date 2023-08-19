// Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped

// Q: Do the left and right sides of the graph count as walls?
// A: No

// Q: Will there be negative integers?
// A: No

// currentWater = min(maxL, maxR) - currentHeight
// Loop through the array, set pointer left and pointer right at i, calculate max value going left and max value going right. Get current water at i using minimum of maxL, maxR, minus value at i

// function trappingRainwater(arr) {
//   let totalRainWater = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let maxL = 0;
//     let maxR = 0;
//     let left = i;
//     let right = i;
//     while (left >= 0) {
//       maxL = Math.max(arr[left], maxL);
//       left--;
//     }
//     while (right < arr.length) {
//       maxR = Math.max(arr[right], maxR);
//       right++;
//     }
//     const currentWater = Math.min(maxL, maxR) - arr[i];
//     if (currentWater > 0) {
//       totalRainWater += currentWater;
//     }
//   }

//   return totalRainWater;
// }

// Time Complexity: O(N^2)
// Space Complexity: O(1)

// Two pointer to go inwards instead of outwards

// Identify the pointer with lesser value
// Is this pointer value greater than/equal to max on that side?
// If yes, update max on that side
// If no, get water for pointer value and add to total

function trappingRainwater(arr) {
  let totalRainWater = 0;
  let maxL = 0;
  let maxR = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] <= arr[right]) {
      if (arr[left] >= maxL) {
        maxL = arr[left];
      } else {
        totalRainWater += maxL - arr[left];
      }
      left++;
    } else {
      if (arr[right] >= maxR) {
        maxR = arr[right];
      } else {
        totalRainWater += maxR - arr[right];
      }
      right--;
    }
    // maxL = Math.max(maxL, arr[left]);
    // maxR = Math.max(maxR, arr[right]);
    // if (maxL < maxR) {
    //   const currentWater = maxL - arr[left];
    //   totalRainWater += currentWater;
    //   left++;
    // } else {
    //   const currentWater = maxR - arr[right];
    //   totalRainWater += currentWater;
    //   right--;
    // }
  }

  return totalRainWater;
}

// Time Complexity: O(N)
// Space Complexity: O(1)

module.exports = trappingRainwater;
