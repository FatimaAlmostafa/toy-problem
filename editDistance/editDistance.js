/*Given two strings, find the minimum number of edits
operations required to convert the first string into the second string,
given that the only operations can be insertion, removal, or replacement.
Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

Examples:
Input	         Output
str1:
"cat"
str2:           	1
"cut"

str1:
"wednesday"
str2:
"sunday"	        5

str1:
"hackerrank"
str2:
"hackreactor"	    6 */

function levenshteinDistance2(string1, string2) {
  if (string1 === string2) {
    return 0;
  }

  if (string1.length === 0) {
    return string2.length;
  }

  if (string2.length === 0) {
    return string1.length;
  }

  var row1 = [];
  var row2 = [];
  for (var i = 0; i <= string2.length; i++) {
    row1.push(i);
    row2.push(0);
  }

  var cost;
  for (var k = 0; k < string1.length; k++) {
    row2[0] = k + 1;
    for (var n = 0; n < string2.length; n++) {
      if (string1[k] === string2[n]) {
        cost = 0;
      } else {
        cost = 1;
      }
      row2[n + 1] = Math.min(row2[n] + 1, row1[n + 1] + 1, row1[n] + cost);
    }
    for (var j = 0; j < string2.length; j++) {
      row1[j] = row2[j];
    }
  }
  return row2[string2.length];
}
