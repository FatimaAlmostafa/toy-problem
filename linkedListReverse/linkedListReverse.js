/* Write a function that reverses a linked list.

Explanation:

Given the below linked list:

A -> B -> C -> D -> E -> null

Return:

E -> D -> C -> B -> A -> null

‘Constraint 1: Do this in linear time’

‘Constraint 2: Do this in constant space’

‘Constraint 3: Do not mutate the original nodes by adding any new properties */
var reverseLinkedList = function(node) {
	console.log(linkedList)
if(linkedList.next===null){
return linkedList
}
else{
var node = linkedList;
var next=null;
while(node){
  var temp = node.next
    node.next=next;
    next=node;
    node = temp;

  }
  return next

}

}
