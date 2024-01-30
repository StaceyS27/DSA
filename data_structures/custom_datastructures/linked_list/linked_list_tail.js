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

    prepend(value) {

    }

    append(value) {

    }

    removeFromFront() {

    }

    removeFromEnd() {

    }
}