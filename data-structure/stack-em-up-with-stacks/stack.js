/* 
--- Direction
// The stack should be a class with methods 'push', 'remove', and 'peek'

Example:

const s = new Stack()
s.push(1)
s.push(2)
s.peek() // returns 2 "returns the element present at the top of the Stack"
s.remove() // returns 2
s.remove() // returns 1


*/

class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(19);

console.log(stack);

stack.pop();
console.log(stack);

console.log(stack.peek());
