
// a linked list is a linear data structure that includes a series of connected nodes

// each node consists of a data value and a pointer that points to the next node
    // bc of this, dont need to be contiguous (next to each other) in actual memory 
    // advantage over array is that elements can be easily inserted or removed without reorganization of entire structure
        // just need to change the pointer, unlike array which need move elements and change their indices ?

// drawback: accessing an element has a linear time complexity O(n)
    // arrays have O(1) | linear bc have to pass every node to know where the next is (not contiguous) ?



// supports 3 main operations: 1. insertion, 2. deletion, & 3. search
    // 1. insertion: add element at the beginning, end, or at a given index in the list
    // 2. deletion: remove an item given its index or value 
    // 3. search: find an element given its value 

// end of linked list points to null

// all applications of both stacks and queues are applications of linkedlists 