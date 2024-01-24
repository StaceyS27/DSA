// linked lists container nodes

// an isolated node contains 
    // 1. value
    // 2. next pointer pointing to null 

class Node {                        // every time a node is added to a linked list, this Node class will be instantiated (create an instance of the class)
    constructor (value) {
        this.value = value          // storing value in a property (variable)
        this.next = null            // next poiting to null 
    }
}

class Linkedlist {                  // when a linked list is instatiated, it will be empty and its head, which usually points to the first node, will point to node 
    constructor() {
        this.head = null
        this.size = 0               // tracks # of nodes in linked list | when a node is added, increment by 1, when removed decrement by 1 
    }

    isEmpty() {                     // linked list methods here and below
        return this.size === 0      // returns true if linked list has no nodes
    }

    getSize() {
        return this.size            // return size of linked list (# of nodes)
    }
}

//_________________________________________________________________________________________________

const list = new Linkedlist()                       // new instance of LinkedList class 
console.log("list is empty? ", list.isEmpty())
console.log("list size: ", list.getSize())
