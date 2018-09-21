/*
Given an array of arrays, return all elements in a single array.
You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.

Examples
------------------------------------------------------------------
Input	                                             Output
arrays:
[ [ 10 ], [ 20, 30 ], [ 40 ] ]             	   [ 10, 20, 30, 40 ]

arrays:
[ 1, 2, [ 3 ], 4, [ 5, [ 6 ], 7 ] ]	        [ 1, 2, 3, 4, 5, 6, 7 ]

*/

function flatten (arrays) {

    var result = [];
    //iterate is a helper function that recursively calls itself if the current element is an array
    function iterate(arr) {
      arr.forEach((el) => {
        if (Array.isArray(el)) {
          iterate(el);
        } else {
          result.push(el);
        }
      })
    }

    iterate(arrays);
    return result;


}
