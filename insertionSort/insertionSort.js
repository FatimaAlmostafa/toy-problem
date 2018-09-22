/* Insertion sort is a basic sorting algorithm.
Insertion sort iterates over an array, growing a sorted array behind the current location.
It takes each element from the input and finds the spot, up to the current point,
where that element belongs (in constant space).
It does this until it gets to the end of the array.
Insertion sort should be implemented as a stable sort. This means that equal elements
should retain their relative order. Numbers, as primitives, give us no way to check this,
so we’ll be sorting objects with a value field, on which they will be sorted, like so:
[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]
A stable sort must return {value: 5, order: 1}, {value:5, order: 2} in that order. */
//Examples:
//input:
//[ { "value": 3 }, { "value": 1 }, { "value": 2 } ]
//output:[ { "value": 1 }, { "value": 2 }, { "value": 3 } ]
//input:[ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 } ]
//output:[ { "value": 5, "order": 1 }, { "value": 5, "order": 2 }, { "value": 10 } ]

function insertionSort (array) {
//   // define result array equal to copy of given arr
//   // define var temp
//   // iterate through given arr
//     // iterate through the given arr
//       // if the item's value is greater than the next item
//         // set temp equal item
//         // set item to next item
//         // set next item to temp
//   // return the resultarr

  var resultArr = array.slice();
  var temp;
  for (var i = 0; i < resultArr.length; i++) {
    for (var j = 0; j < resultArr.length - 1; j++ ) {
      if (resultArr[j].value > resultArr[j + 1].value) {
        temp = resultArr[j];
        resultArr[j] = resultArr[j + 1];
        resultArr[j + 1] = temp;
      }
    }
  }
  return resultArr;
}
