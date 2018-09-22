/*
Given a sorted stack of integers (smallest integer at the top) and an element to insert,
write a function – sortedInsert(stack, element) –
which inserts the element into the correct position of the stack.
sortedInsert should manipulate the original stack and return the original stack.
The stack will have the methods, isEmpty, peek, push, and pop.
You can also use count to view how many elements are in the stack.
*/

function sortedInsert(stack, element) {
  /if (stack.length > 0 || element > stack[stack.length - 1]) {
    stack.push(element);
  } else {
    temp = stack.pop();
    sortedInsert(element, stack);
    stack.push(temp);
  }


}
function sortStack() {
  if (stack.length > 0) {
    temp = stack.pop();
    sortStack();
    sortedInsert(temp, stack);
  }
}
