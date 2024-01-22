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
  