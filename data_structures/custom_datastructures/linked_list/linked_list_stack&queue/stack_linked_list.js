const LinkedList = require('./index')           // require in linkedlist class 

// implementing a stack as a linked list 
// the front of the linked list is acting as the top of the stack 

class LinkedListStack {                         // create a new class 
    constructor() {
        this.list = new LinkedList()            // where the underlying data structure is a linked list 
    }                                           // with all the methods from the linked list class 

    push(value) {                               // in a stack, items are added to the top and removed from the top first
        this.list.prepend(value)                // FIFO
    }                                           // can use prepend method because this.list is an instance of the Linked List class 

    pop() {                                     // (See above)
        return this.list.removeFromFront()      // this.list can use all Linkedlist methofd
    }

    peek() {
        return this.list.head.value             // use this.list bc thats how the instance was named 
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
       return this.list.getSize()
    }

    print() {
       return this.list.print()
    }
}

//___________________________________________________________________

const stack = new LinkedListStack()
console.log(stack.isEmpty())                // true

stack.push(20)
stack.push(10)
stack.push(30)

console.log(stack.getSize())                // 3 
stack.print()                               // 30 10 20 

console.log(stack.pop())                    // remove from the top of stack aka the front of linked list
console.log(stack.peek())                   // 10 | peek method returns the node in the front
                                            // in the case of the stack, the element on top 