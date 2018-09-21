/* Write a function that reverses a linked list.

Explanation:

Given the below linked list:

A -> B -> C -> D -> E -> null

Return:

E -> D -> C -> B -> A -> null

‘Constraint 1: Do this in linear time’

‘Constraint 2: Do this in constant space’

‘Constraint 3: Do not mutate the original nodes by adding any new properties */
var Node = function(value){
   return { value: value, next: null };
 }

var reverseLinkedList = function(node) {
  var slow = node;
  var fast = node;
  var pause = true;
  while (fast = fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = pause ? slow : slow.next;
    pause = !pause;
  }
  return false;
}
