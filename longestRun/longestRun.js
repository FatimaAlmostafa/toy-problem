/* Write a function that, given a string,
finds the longest run of identical characters and
returns an array containing the start and end indices of that run.
If there are two runs of equal length, return the first one. Return [0,0] for no runs. */
//Examples:ar longestRun = function (string) {
function longestRun (string) {
  let result = [0,0];
  let longest = 1;
  let start = 0;
  let streak = 1;
  let current;
  for (let i=0; i<string.length; i++) {
    if (string[i] !== current) {
      if (streak > longest) {
        longest = streak;
        result = [start,i-1];
      }
      current = string[i]
      start = i;
      streak = 1;
    } else {
      streak++
      if (i === string.length-1) {
        if (streak>longest) {
          result = [start,i];
        }
      }
    }
  }
  return result;
}

  return text;
};

/* Input	     Output

  "abbbcc"	     [ 1, 3 ]

  "aabbc"	    [ 0, 1 ]

    ""	        [ 0, 0 ]

"mississippi"   [ 2, 3 ]

"abcdefgh"	    [ 0, 0 ]

"abccccccc"	    [ 2, 8 ]  */


function longestRun (string) {





}
