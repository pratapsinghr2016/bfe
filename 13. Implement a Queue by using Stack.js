/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
  constructor() {
    this.stack = new Stack();
  }
  enqueue(element) {
    return this.stack.push(element);
  }
  peek() {
    // reverse the stack and peek on the reversed stack
    return this.reverseStack(this.stack).peek();
  }
  size() {
    // return count of element
    return this.stack.size();
  }
  dequeue() {
    // overwrite the original stack with the reversed stack
    this.stack = this.reverseStack(this.stack);

    // remove the head element (tail since we reversed it)
    return this.stack.pop();
  }
  // Private function to hide the internal details of queue
  reverseStack(stack) {
    // the idea is to use another stack temporarily to tranfer items in reverse order
    const tempStack = new Stack();

    // remove all items from the stack and store it in tempStack
    while (stack.size() > 0) {
      tempStack.push(stack.pop());
    }

    // return the tempStack
    return tempStack;
  }
}
