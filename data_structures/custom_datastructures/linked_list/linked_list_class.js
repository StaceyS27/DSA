// linked lists contain nodes

// an isolated node contains 
    // 1. value
    // 2. next pointer pointing to null 

class Node {                        // every time a node is added to a linked list, this Node class will be instantiated (create an instance of the class)
    constructor (value) {
        this.value = value          // storing value in a property (variable)
        this.next = null            // next poiting to null 
    }
}

class Linkedlist {                  // when a linked list is instatiated, it will be empty and its head, which usually points to the first node, will point to null 
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

    prepend(value) {                       // method to add a node to a linked list at the beginning with a value passed in as an argument 
        const node = new Node(value)        // instance of Node class instatiated
        if (this.isEmpty()) {               // adds node to list at the beginning and assigns it as the head if the linked list is empty and next pointer is still default to null
            this.head = node
        } else {
            node.next = this.head        // if the list is not empty, the next pointer for the newly instatiated node will point to the list's current head 
            this.head = node            // change the head from the current head of the non-empty linked list to the node added to the start of the list 
        }
        this.size++                     // size of linked list to increase whether the list was empty or not 
    }

    print() {                               // method to print linked list values 
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head                // current/this.head is a node so has the same properties curr.value and curr.next (pointing to either another node or null)
            let listValues = ''

            while(curr) {                       // while current value isn't at null (is truthy), add value to string and ... (below)
                listValues += `${curr.value} `
                curr = curr.next                 // and change current node to next one. if the next node reenters and its null, while loop stops 
            }
            console.log(listValues)
        }
    }

}

//_________________________________________________________________________________________________

const list = new Linkedlist()                       // new instance of LinkedList class 
console.log("list is empty? ", list.isEmpty())      // true 
console.log("list size: ", list.getSize())          // 0
list.print()                                        // List is empty 

list.prepend(10)
list.print()                                        // 10

list.prepend(20)
list.prepend(30)
list.print()                                        // 30 20 10 