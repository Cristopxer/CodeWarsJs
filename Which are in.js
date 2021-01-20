// Which are in
/*Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
#Example 1: a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]
#Example 2: a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns [] */

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["xyz", "live", "strong"]
// Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
// a1 = ["live", "strong", "arp"]
// Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
// a1 = ["tarp", "mice", "bull"]
// Test.assertSimilar(inArray(a1, a2), [])

function inArray(array1, array2) {
//   result = [];
//   a2.map((a) => {
//     a1.map((b) => {
//       if (a.includes(b)) {
//         if (result.indexOf(b) < 0) {
//           result.push(b);
//         }
//       }
//     });
//   });
//   return result.sort();
    return array1
      .filter(a1 => array2.find(a2 => a2.match(a1)))
      .sort()  
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

a1 = ["xyz", "live", "strong"];

console.log(inArray(a1,a2));
