const LinkedList = require('./index')       // require in linked list class created in another file 

// implementing a queue as a linked list

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList()            // new instance of the linked list class 
    }

    enqueue(value) {                            // queue operation that adds element to the end of queue 
        this.list.append(value)                 // implementing enqueue by adding element to the end of linked list (append)
    }                                           // calling linked list class methods previosly defined and imported bc queue is an instance of that class 

    dequeue() {                                 // queues remove from the front | dequeue 
        return this.list.removeFromFront()      // follow FIFO (first in first out)
    }
    
    peek() {
        return this.list.head.value             // head is ultimately a node that has a value and next pointer 
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
//__________________________________________________________________________________________________________

// testing methods

const queue = new LinkedListQueue()
console.log(queue.isEmpty())                        // true, queue just instatiated

queue.enqueue(10)                                   // implementing all the linked list queue class methods on new instance 'queue' 
queue.enqueue(20)                                   // adding elements to the queue
queue.enqueue(30)

console.log(queue.getSize())                        // 3
queue.print()                                       // 10 20 30 

console.log(queue.dequeue())                        // printing the element removed from the front | 10
queue.print()                                       // 20 30 

console.log(queue.peek())                           // 20 | returning first element in queue