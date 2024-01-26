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

    append(value) {                         // method to add a node at the end of the linked list
        const node = new Node(value)        // first create the new node by creating a new instance of the Node class    
        if(this.isEmpty()) {                // when linked list is empty, make head the new node 
            this.head = node
        } else {                            // if the linked list is not empty, designate the head node as the prev
            let prev = this.head
            while(prev.next) {              // as long as the next pointer on the current prev node isnt on null (is truthy) ...
                prev = prev.next            // change prev to be the node thats designated as next to the current prev
            }                               // because the last prev's (node's) next property will be null, will not enter while loop and prev will be the last node in the list
            prev.next = node                // to append the newly instatiated node to the list, make it the next of prev (the previous last node)
        }
        this.size++
    }

    insert(value, index) {                          // method to insert a node at any index given a value and index
        if (index < 0 || index > this.size) {       // don't do anything if the index provided is negative or larger than size of linked list
            return
        }
        if(index === 0) {                       // if want to insert at index 0, use prepend method 
            this.prepend(value)
        } else {
            const node = new Node(value)        // create a new node using value passed in insertion method
            let prev = this.head                // assign prev pointer to only other "pointer" present: this.head
            for(let i=0; i < index-1; i++) {    // the loop will finish when prev is pointing to index before desired index
                prev = prev.next
            }
            node.next = prev.next               // the new nodes next will be pointing to the previous nodes nodes next (the one the new node will follow and got in b/w of)
            prev.next = node                    // the previous nodes next will now be the new node
            this.size++
        }
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

list.append(0)                                      // add to the end of the linked list
list.append(-10)
list.print()                                        // 30 20 10 0 -10

list.insert(10,0)                                   // 10 30 20 10 0 -10
list.print()

list.insert(50, 2)                                  // 10 30 50 20 10 0 -10
list.print()
console.log(list.getSize())                         // 7 

//__________________________________________________________________________________________________

// Time Complexity 

// prepend: O(1) | does not depend on number of nodes present

// append: O(n) | while loop is present and have to traverse the list to find the last node then append the newly created node
    // there is a way to have O(1) time complexity with the use of a tail pointer 