// the stack data structure is a collection of elements that follows the Last In First Out (LIFO) principle
// the last element inserted into the stack is the first one removed
// analagy: a stack of plates: the last plate placed on top is the first one to be removed

// supports two main operations: 1. push 2. pop
    // 1. push: adds element to the collection
    // 2. pop: removes the most recently added element from the collection 

// stack usage:
    // 1. browswer history tracking | the back and forth button make use of the stack data structure
    // 2. undo operation when typing
    // 3. call stack in javascript run time 


// example of JS call stack 
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  function welcome() {
    console.log("Welcome!");
  }
  
  function main() {
    greet("John");
    welcome();
  }
  
  main();

  // main is last in but called first followed by greet and then welcome 

  //____________________________________________________________________________________

  // creating of a stack 
  
  class Stack {         // stack class declared and the contructor initializes empty array to store elemnts of the stack 
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);       // push method to add element to the top of the stack
  }

  pop() {
    if (this.isEmpty()) {           // pop method removes and returns element from the stop of the stack. checks if empty first
      return null;
    }
    return this.items.pop();
  }

  peek() {                          // peek method returns element on top of the stack w/o removing it. if stack is empty, returns null
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {                       // isEmpty method checks if stack is empty. return true if length is 0
    return this.items.length === 0;
  }
}

// a class is a blueprint or template for creating objects
// it defines the attributes/properties (how data will be stored) & the methods/functions that the objects created from the class will have 
// encapsulates data and behavior into a single unit 
// constructor: method in class that is called when the object is created 

//_______________________________________________________________________________________

// creating a stack and using its methods based on the Stack class created (an underlying array)

const myStack = new Stack();    // creates a new instance of 'Stack' class. 'constructor' method called during this process

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log("Stack after push operations:", myStack.items); // Output: [10, 20, 30]

console.log("Pop operation result:", myStack.pop()); // Output: 30
console.log("Peek operation result:", myStack.peek()); // Output: 20

console.log("Stack after pop operation:", myStack.items); // Output: [10, 20]


