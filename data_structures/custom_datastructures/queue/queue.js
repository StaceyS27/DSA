// the queue data structure is a sequential collection of elements

// follows principle First in First out (FIFO)
    // the first element inserted into the queue is the first element to be removed
    // ex: a queue of people | the first one off the line will be first one that came 

// a queue is a list of items, but what makes it a queue is how it behaves

// supports two main operations: 1. Enqueue 2. Dequeue
    // 1. Enqueue | adds an element to the rear/tail of the collection
    // 2. Dequeue | removes an element from the font/head of the collection 

// queue usage:
    // 1. printers | jobs that get printed first are the ones that got in the 'queue' first 
    // 2. callback queue in js runtime | when the functions are executed in call stack, then goes to the callback queue where asynchronous operations are 'held'
        // asynchronous functions completed after call stack is empty and in a queue fashion 

//________________________________________________________________________________________________

// QUEUE OPERATIONS

// enqueue(elment)
// dequeue()
// peek() | get the value of the element in the front of the queue without removing it
// isEmpty() | check is the queue is empty
// size() | get the number of elements on the queue
// print() | visualize the elements in the queue 

//_________________________________________________________________________________________________

// creating queue class 

class Queue {                       // creating a queue class (a new type of object with its own way of storing data, underlying array, and own methods )
    constructor() {
        this.items = []             // when an instance of the queue class is created, will be able to use these methods on it 
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

//__________________________________________________________________________________________________

// creating instance of queue

const queue = new Queue()           // creating new instance of queue class
console.log(queue.isEmpty())        // checking is queue is empty which consoles 'true'

queue.enqueue(10)                   // adding elements to the queue using 'enqueue' method (via the rear)
queue.enqueue(20)
queue.enqueue(10)

console.log(queue.size())           // consoles '3'

queue.print()                       // consoles 10, 20, 10 

console.log(queue.dequeue())        // 10 is consoled. it is removed from the front of the queue 

console.log(queue.peek())           // get the first element in the queue w/o removing it. expect 20 now that 10 is removed