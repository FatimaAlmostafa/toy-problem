/*Implement a function that finds the longest palindrome in a given string.
For example, in the string “My dad is a racecar athlete”,
the longest palindrome is “a racecar a”.
Count whitespaces as valid characters.
Other palindromes in the above string
include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).
Examples
Input	                            Output
string:
"aibohphobia"	                  "aibohphobia"
string:
"My dad is a racecar athlete"	  "a racecar a" */

function longestPalindrome (string) {
  // Write your code here, and
  // return your final answer.
  var longest ="";
  var current = "";
  var head =0;
  var tail=1;
  var checkpalindrome = function(h,t){
    while(string[h]===string[t]&& h > -1 && t <string.length){
      current= string.slice(h,t+1);
      h--;
      t++
    }
    if (current.lengtg > longest.length){
      longest= current
    }
   return
  }
  while (tail< string.length){
    if (string[head]===string[tail+1]){
      checkpalindrome(head,tail+1);
    }
    else if (string[head]=== string[tail]){
      checkpalindrome(head,tail);
    }
    head++
    tail++
  }
  return longest
  };
