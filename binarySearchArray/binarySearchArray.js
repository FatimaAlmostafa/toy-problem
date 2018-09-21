/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */

 var binarySearch = function(array, target) {
     var low = 0,
         high = array.length - 1,
         mid;
         current; 
     while (low <= high) {
         mid = Math.floor((low + high) / 2);
         current = array[mid];
         if (current < target) {
             low = mid + 1;
         } else if (current > target) {
             high = mid - 1;
         } else {
             return mid;
         }
     }
     return -1;
 }
