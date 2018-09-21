/*
Given a single input string, write a function that produces all possible
anagrams of a string and outputs them as an array.
At first, don’t worry about repeated strings.
What time complexity is your solution?

Parameters:

string (required) - a string of characters.

Examples

Input				Output
string:
"abc"				[ "abc", "acb", "bac", "bca", "cab", "cba" ]

*/

function allAnagrams (string) {
  // Write your code here, and
  // return your final answer.
  var anagrams = [];

  var traverse = function(prevString, choices) {

    if (prevString.length == string.length) {
      anagrams.push(prevString);
      console.log(anagrams);
    }
    for (var i = 0; i < choices.length; i++) { //3
      prevString = prevString + choices[i];  //a -> ab -> ab

      console.log('prevS', prevString);
      console.log('i', i);

      traverse(prevString, i); // traverse(a, 0) // traverse(ab,1) // traverse(abc,2)
      // prevString = prevString.slice(i);
      // console.log(prevString);
    }
  }
  traverse('', string);
  return anagrams;
}
