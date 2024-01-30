// implementing different methods using a tail pointer in the linked list 

class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0                  // if this is true, return true, otherwise false 
    }

    getSize() {
        return this.size
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is Empty')
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues)
        }
    }

    prepend(value) {                        // method to add node to front of linked list
        const node = new Node(value)        // new instance of node class
        if(this.isEmpty()) {                // if linked list is empty, both head and tail pointers will point to new node - the only node
            this.head = node
            this.tail = node 
        } else {                            // if linked list is not empty (below)
            node.next = this.head           // make the next pointer on the new node point to list's current head 
            this.head = node                // then change the head to be the new node 
        }
        this.size++
    }

    append(value) {                         // method to add node to the end of the linked list
        const node = new Node(value)        // new instance of node class
        if(this.isEmpty()) {
            this.head = node
            this.tail = node 
        } else {                             // if linked list is not empty (below)
            this.tail.next = node            // the next pointer on current tail will point to new node instead of null
            this.tail = node                 // node to become new tail 
        }
        this.size++
    }

    removeFromFront() {

    }

    removeFromEnd() {

    }
}