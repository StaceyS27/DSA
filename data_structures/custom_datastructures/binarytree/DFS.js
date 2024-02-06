
// Depth First Search and Breath first search are ways to traverse the tree structure
    // other data structures like arrays only have one way to traverse it 

// DFS

//  DFS algorithm starts at the root node and explores as far as possible along each brach before backtracking
    // visit root node
    // vist nodes on left subtree
    // then visit nodes on the right subtree 

// there can be 3 types of DFS traversal
    // 1. preorder
    // 2. inorder
    // 3. postorder 

// Preorder Traversal                               * see bst class to see how it is implemented 
    // 1. read the data of the node
    // 2. visit the left subtree (completely) then, 
    // 3. visit the right subtree (from bottom up) 

// Inorder Traversal
    // 1. visit the left subtree            (completely down until no more L children are available?)
    // 2. read the data of the node         (then record the node value)
    // 3. visit the right subtree           (if none, go back to parent node and repeat steps )

// Postorder Traversal 
    // 1. visit the left subtree
    // 2. visit the right subtree
    // 3. read the data of the node 