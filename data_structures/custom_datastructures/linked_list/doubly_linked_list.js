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

