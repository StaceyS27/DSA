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

    insert(value) {                                 // method to insert new node to bst. when calling the method, need to pass in value for new node to be created 
        const newNode = new Node(value)             // start by creating a new instance of the node class, w/  L & R pointers pointing to null
        if(this.isEmpty()) {
            this.root = newNode                     // if the bst is empty, the new node becomes the root of the bst 
        } else {
            this.insertNode(this.root, newNode)     // else, if not empty, will can on the method insertNode defined below (which accepts the root and new node as arguments )
        }
    }

    insertNode(root, newNode) {                         // method to insert a new node is bst is not empty. initially the new node is compared to the root node of the bst,
        if(newNode.value < root.value) {                // but as the function is called recursively and 'comes back to the top', the new root used to compared is the 'root' of the subtree in the bst 
            if(root.left === null) {                    // if the new node's value is less than the root, and there is not left child, new node placed as the new left child 
                root.left = newNode
            } else {                                    // if there is a left child, the method is called again with the left child being called again as the new root (back to the top)
                this.insertNode(root.left, newNode)
            }
        } else {                                            // if the value of the new node is greater then that of the root ...
            if(root.right === null) {                       // if the root doesnt have a right child, place new node as R child 
                root.right = newNode
            } else {                                        // if the root does have a R child, recursively call method again with R child as the new root and comparing the new node to it (back to the top)
                this.insertNode(root.right, newNode)
            }
        }
    }
                                                                // root not defined in the method initially (?) - maybe established when passed in when method is called like below. in recursion, child nodes become root 
    search(root, value) {                                       // method to check if a node exist given its value 
        if(!root) {                                             // if there is no root, no nodes present so node passed in cannot be found                         
            return false
        } else {                                                // if there is a root ... 
            if(root.value === value) {                          // if the node value passed in equals the node value, node found so return true 
                return true
            } else if(value < root.value) {                     // else if value is less than root value,
                return this.search(root.left, value)            // call method again using the child L node as the new root to compare the value passed in to 
            } else {                                            // if the value passed in is greater than the root value,
                return this.search(root.right, value)           // call search method again (recursion) using the R node as the new root
            }
        }
    }

    preOrder(root) {                            // type of DFS traversal where node is visited, followed by the left side of the tree completely, then the right 
        if(root){                               // traversal will print all the node values following a certain pattern 
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }


}

//__________________________________________________________________________________________________

// testing methods and ability to properly create a new instance of the class

const bst = new BinarySearchTree()
console.log("Tree is empty?", bst.isEmpty())            // consoles: Tree is empty ? true

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root, 10))               // true
console.log(bst.search(bst.root, 5))                // true
console.log(bst.search(bst.root, 15))               // true
console.log(bst.search(bst.root, 20))               // false 

bst.preOrder(bst.root)                              // 10 5 3 7 15 