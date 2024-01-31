// in a doubly linked list, the nodes contain 3 field:
    // 1. value
    // 2. next pointer
    // 3. previous pointer 

// doubly linked list allow for removal from the end and the front at constant time complexity
    // already able to remove from the front with O(1) using singly linked list 
    // but not the end
    // does make it a constant time operation, but takes up more space (increased space complexity)
    // since it can now go the other direction, tail.previous will equal new tail
    // and the new tail.next will be pointed to null , disconnecting the old tail from the linked list 

    class Node {
        constructor(value) {                    // node class in a doubly linked list with prev and next pointers 
          this.value = value;
          this.prev = null;
          this.next = null;
        }
      }
      
      class DoublyLinkedList {
        constructor() {
          this.head = null;
          this.tail = null;
          this.size = 0;
        }
      
        isEmpty() {
          return this.size === 0;
        }
      
        getSize() {
          return this.size;
        }
      
        prepend(value) {                        // add value to the front of the linked list 
          const node = new Node(value);
          if (this.isEmpty()) {                 // if empty, new node added will be head and tail
            this.head = node;
            this.tail = node;
          } else {                              // if not, connect the new node to the head 
            node.next = this.head;
            this.head.prev = node;              // also connect the head to node in the other direction (right to left )
            this.head = node;                   // new node becomes new hea 
          }
          this.size++;
        }
      
        append(value) {
          const node = new Node(value);
          if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
          } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
          }
          this.size++;
        }
      
        removeFromFront() {
          if (this.isEmpty()) {
            return null;
          }
          const value = this.head.value;
          this.head = this.head.next;               // the node dollowing the head becomes the new head 
          this.size--;
          return value;
        }
      
        removeFromEnd() {
          if (this.isEmpty()) {
            return null;
          }
          const value = this.tail.value;             // stored in a variable so that it can be returned when disconnected from list. will be "garbage collected"
          if (this.size === 1) {                     // if linked list is only 1 node long, point head and tail to null so that node can be disconnected 
            this.head = null;
            this.tail = null;
          } else {                                  
            this.tail = this.tail.prev;         // in doubly linked list, can use prev pointer to find node before tail and reassign it as the tail
            this.tail.next = null;              // next pointer of new tail pointing to null, disconnecting previous tail 
          }
          this.size--;
          return value;                         // returning value of previous tail stored in variable 
        }
      
        print() {
          if (this.isEmpty()) {
            console.log("List is empty");
          } else {
            let curr = this.head;
            let list = "";
            while (curr) {
              list += `${curr.value}<->`;
              curr = curr.next;
            }
            console.log(list);
          }
        }
      
        printReverse() {                            // going backwards compared to print method above
          if (this.isEmpty()) {
            console.log("List is empty");
          } else {
            let curr = this.tail;                   // starting at the tail and printing every value of each node fro right to left 
            let list = "";
            while (curr) {
              list += `${curr.value}<->`;
              curr = curr.prev;
            }
            console.log(list);
          }
        }
      }

      //_______________________________________________________________________________________________
      
      const list = new DoublyLinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.prepend(0);
      list.print();                             // 0<->1<->2<->3
      list.printReverse();                      // 3<->2<->1<->0
      console.log(list.removeFromEnd());        // 3           
      list.print();                             // 0<->1<->2
      console.log(list.removeFromFront())       // 0
      list.print();                             // 1<->2<->
      