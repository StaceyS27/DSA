// Binary Search Tree Class 

// an isolated node
    // contains value 
    // and left and right pointers (optionally for children) pointing currently to null 

class Node {                        // node class will be instatiated when new node needs to added to tree                         
    constructor(value) {
        this.value = value          // store value passed in when creating a new instance of node class in the property/'global variable'
        this.left = null            // left and right pointers initially pointing to null when node is first created 
        this.right = null 
    }
}

class BinarySearchTree {            // when a new instance of the BST class is created, root pointer initially pointing at null
    constructor() {
        this.root = null            //  root pointer usually points at top most node, but pointing to null initially bc no nodes added to BST 
    }

    isEmpty() {                         // method to check if binary search tree is empty 
        return this.root === null       // returns true if root node points to null, indicating there are no nodes in BST = empty 
    }
}

//__________________________________________________________________________________________________

// testing methods and ability to properly create a new instance of the class

const bst = new BinarySearchTree()
console.log("Tree is empty?", bst.isEmpty())            // consoles: Tree is empty ? true