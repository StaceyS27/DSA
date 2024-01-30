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
                listValues += `${curr.value} `
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

    removeFromFront() {                      // method to remove node from front 
        if(this.isEmpty()) {                 // if list is empty, return null as unable to remove any node from the front
            return null
        }
        const value = this.head.value        // storing head in variable 
        this.head = this.head.next           // making the node the head is pointing to the new head, detaching previous head from list?
        this.size--                          // decrement size of linked list by 1
        return value                         // return the value of the previous head node removed 
    }

    removeFromEnd() {                        // method to remove node from the end
        if(this.isEmpty()) {                 // if the linked list is empty, unable to remove so return null
            return null
        }
        const value = this.tail.value       // store tail's node value in 'value' variable
        if(this.size === 1) {               // if the size of the linked list is only 1 point head and tail to null, disconnecting the node from the linked list
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while(prev.next !== this.tail) {        // will exit while loop when prev pointer is on the node prior to the tail
                prev = prev.next
            }
            prev.next = null                    // instead of having node that prev pointer is on point to the tail, have it point to null, disconnecting the previous tail from the list
            this.tail = prev                    // make the node where the prev pointer is on the new tail 
        }
    }
}

//__________________________________________________________________________________________________

const list = new LinkedList()
console.log('List is Empty?', list.isEmpty())        // List is Empty? true
console.log('List Size ', list.getSize())            // List Size 0
list.print()                                        // List is empty 

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)

list.print()                                        // 0 1 2 3
console.log('List size ', list.getSize())           // List size 4 

list.removeFromFront()                              
list.print()                                        // 1 2 3
list.removeFromEnd()
list.print()                                        // 2 3 

//______________________________________________________________________________________________________

// constant time complexity | O(1)
    // insertion from front - prepend
    // insertion from end - append
    // removal from front 

// linear time complexity | O(n)
    // removal from end 
        // requires use prev pointer to traverse linked list to find node prior to tail node using while loop

// can implement stack and queues using linked lists 