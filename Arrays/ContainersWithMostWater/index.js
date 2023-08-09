// An array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines with the x-axis that forms a container that would hold the greatest amount of water. Return the area of water

// Q: Does the thickenss of the line affect the area?
// A: No

// Q: Do the left and right sides count as walls?
// A: No

// Q: Does a higher line inside our container affect our area?
// A: No, lines inside the container don't affect the area

// function containerWithMostWater(heights) {
//   let maxArea = 0;
//   for (let p1 = 0; p1 < heights.length; p1++) {
//     for (let p2 = p1 + 1; p2 < heights.length; p2++) {
//       const height = Math.min(heights[p1], heights[p2]);
//       const width = p2 - p1;
//       const area = height * width;
//       if (area > maxArea) {
//         maxArea = area;
//       }
//     }
//   }
//   return maxArea;
// }

// // Time Complexity: O(N^2)
// // Space Complexity O(1)

// Shifting Pointers
function containerWithMostWater(heights) {
  let maxArea = 0;
  let p1 = 0;
  let p2 = heights.length - 1;
  while (p2 > p1) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(area, maxArea);
    if (heights[p1] > heights[p2]) {
      p2--;
    } else {
      p1++;
    }
  }
  return maxArea;
}

module.exports = containerWithMostWater;
