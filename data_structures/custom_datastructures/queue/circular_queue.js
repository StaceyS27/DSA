// the size of the circular queue is fixed and single block of memory is used
// follows FIFO principle
// circular queue will reuse the empty block created during dequeue operation
// used when need a queue of a fixed size

// supports two main operations: 1. enqueue and 2. dequeue
    // 1. enqueue: adds element to the rear/tail of the collection
    // 2. dequeue: removes element from the head/front of the collection

//______________________________________________________________________________

// circular queue implementation 

class CircularQueue {
    constructor(capacity) {                 // parameter capacity represents max size of the queue
        this.items = new Array(capacity);   // create an array of fixed size 
        this.capacity = capacity;           // store capacity in a property (variable associated with the class) so that it can be used in functions, not just locally
        this.currentLength = 0;             
        this.rear = -1;                     // current front and rear pointers are not pointing to any of the positions on the circular queue (array) at the moment bc its empty 
        this.front = -1; 
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0
    }

    enqueue(element) {
        if (!this.isFull()) {                                   // if circular queue implemented as an array isnt full, enqueue
            this.rear = (this.rear + 1) % this.capacity           // change position of this.rear by 1
            this.items[this.rear] = element                     // add new element at the next position
            this.currentLength += 1
            if (this.front === -1) {                            // change the pointer from pointing to nothing to poiting to the start of the circular queue/array     
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null                                  // if empty, unable to dequeue
        }
        const item = this.items[this.front]                // store value at this.front before removed so that it can be returned 
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity       // needed to add the modulo to both enqueue and dequeue bc when it gets to the final index/capacity, cannot increase anymore (more below)
        this.currentLength -= 1
        if(this.isEmpty()) {                                // once dequeued, if empty, point pointers away from the array/circular queue once more
            this.front = -1
            this.rear = -1
        }
        return item 
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null                         // if circular queue is empty, return null bc theres no front element to return 
    }

    print() {
        if(this.isEmpty()) {
            console.log('Queue is empty')
        } else {
            let i
            let str = ''

            for(i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {       // start for loop from this.front and continue as long as i is not qual this.rear. increase by 1 until the modulo equal zero returning the index to 0 of the circular queue (more below)
                str += this.items[i] + " "                                            // even if the underlying array has numbers, because it is being concatenated  with strings, js will turn it to strings ?
            }
            str += this.items[i]                                                        // add last item added once i is at this.rear but no longer meets condition to go through loop
            console.log(str)
        }
    }
}

// modulo | ex: if capacity is 5 and youre at index 4 (0, 1, 2, 3, 4), cannot go to 5
// to prevent (4+1) % 5 (capacity) = 0 returning what is added to 0th position 
// for the rest of the positions, the i will not change the way it increments bc ex: (1+1) % 5  | 0 remainder 2

// for loop mudulo | instead of changing the value of i by incrementing, it is setting the i and then etering the loop again
// checks against middle statement 

//_________________________________________________________________________________________________________

// creating new circular queue instance 

const queue = new CircularQueue(5)
console.log(queue.isEmpty())        // true, nothing added yet 

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull())         // true 5 items added, reaching capacity
queue.print()                       // 10 20 30 40 50

console.log(queue.dequeue())        // dequeues first element (10) and returns it 
console.log(queue.peek())           // new front element (20)

queue.print()                       // 20 30 40 50 

queue.enqueue(60)                   // 20 30 40 50 60 | 60 is at index zero bc of modulo expression, but still at the end of the queue 
                                    // prints position zero last bc thats the rear 