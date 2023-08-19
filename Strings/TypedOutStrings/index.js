// Given two strings S and T, return if they equal when both are typed out. Any '#' that appears in the string counts as a backspace

// S: "ab#c" => "ac"
// T: "az#c" => "ac"

// Verify the contraints:
// Q: What happens when two #'s appear beside each other?
// A: Delete two values before the first #
// "ab##" => ""

// Q: What happens to # when there are no characters to remove?
// A: It deletes nothing then, just like a backspace would

// Q: Are two empty strings equal?
// A: Yes

// Q: Does case sensitivity matter?
// A: Yes

// function typedOutStrings(string1, string2) {
//   return buildString(string1) === buildString(string2);
// }

// function buildString(str) {
//   const arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '#') {
//       arr.pop();
//     } else {
//       arr.push(str[i]);
//     }
//   }
//   return arr.join('');
// }

// Time Complexity: O(a+b)
// Space Complexity: O(a+b)

function typedOutStrings(string1, string2) {
  let p1 = string1.length - 1;
  let p2 = string2.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (string1[p1] === '#' || string2[p2] === '#') {
      if (string1[p1] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (string1[p1] === '#') {
            backCount += 2;
          }
        }
      }
      if (string2[p2] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (string2[p2] === '#') {
            backCount += 2;
          }
        }
      }
    } else {
      if (string1[p1] !== string2[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
}

// Time Complexity: O(a+b)
// Space Complexity: O(1)

module.exports = typedOutStrings;
