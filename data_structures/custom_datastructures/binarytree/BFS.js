// Breadth First Search (BFS)

// explre all nodes at the present depth prior to moving on to the nodes at the next depth level 

// to achieve a breath first search traversal:
    // 1. create a queue
    // 2. enqueue the root node
    // 3. as long as a node exists in the queue
        // a. dequeue the node from the front
        // b. read the node's value
        // c. enqueue the node's left child if it exist
        // d. enqueue the node's right child if it exist 
    
// (see implementation in bst class) 