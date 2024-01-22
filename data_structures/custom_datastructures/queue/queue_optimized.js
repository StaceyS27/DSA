// can optimize previous queue implementation because when dequeue method is called, shift is called
// array shift method has a time complexity of O(n)

// will optimize by creating an object as the underlying data structure instead of an array
// objects have O(1) for removal of key-value pair

class Queue {
    constructor() {
        this.items = {}         // underlying data structure an object
        this.rear = 0           // pointers for back front of the queue object since there is no index
        this.front = 0          // will be used as keys for elements that are added to queue (enqueue) on to find first element to dequeue
    }                           // this.rear & this.front are instance variables vs local variables which allow them to be used for diff methods in the class 
                                // let makes only local variables that can be used only in that method. hard to keep state of the queue
    enqueue(element) {
        this.items[this.rear] = element         // key-value pair added to the queue (using bracket notation) with number which is converted into a string as a key
        this.rear++                             // the number designating rear is incremented for the next key-value pair to be added 
    }

    dequeue() {
        const item = this.items[this.front]         // the value corresponding to the front key is gotte to return when dequeue method is called
        delete this.items[this.front]
        this.front++                                // front key incremented to designate next pair as the front after original front is deleted
        return item
    }

    isEmpty() {
        return this.rear - this.front === 0         // will return true if both pointers are at the same number, meaning its empty
    }

    peek() {
        return this.items[this.front]
    }

    size() {
        return this.rear - this.front 
    }

    print() {
        console.log(this.items)
    }
}

// enqueue and dequeue have constant time complexity 

//_____________________________________________________________________________________________________________

// creating an instance of the Queue class

const queue = new Queue()       // new instance of class
console.log(queue.isEmpty())    // consoles 'true'. nothing added to it yet

queue.enqueue(10)               // adding the values of the key-value pairs for the object. key assigned by class
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.size())       // consoles '3'

queue.print()                   // {'0':10, '1':20, '2':30}

console.log(queue.dequeue())    // 10  | the first value removed
console.log(queue.peek())       // 20 | now the first value in the queue

