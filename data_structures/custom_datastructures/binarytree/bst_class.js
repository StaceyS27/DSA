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
        if(root){                               // traversal will print all the node values following a certain pattern (with the console.log)
            console.log(root.value)
            this.preOrder(root.left)            // then method will be called again with the L or R child as the new root 
            this.preOrder(root.right)
        }
    }

    inOrder(root){                              // method to print out/traverse BST using 'inorder pattern': visit left subtree, read node data, visit right subtree 
        if(root){                               // if there is root, meaning BST is not empty,
            this.inOrder(root.left)             // keep calling method recursively to change what is considered root node by traversing down the left side of the tree
            console.log(root.value)             // once there are no L child nodes, print value at that point
            this.inOrder(root.right)            // then look for R child of the new root node for the subtree, if there isn't any, go back up to parent node and start process again  
        }
    }

    postOrder(root){                            // method traverse tree by: 
        if(root){                               // if BST not empty,
            this.postOrder(root.left)           // recursively visit all the L child nodes until there are none left 
            this.postOrder(root.right)          // visit the right of the leaf node 
            console.log(root.value)             // record the value, then repeat for parent nodes (go back up) and visit R since L already visited and continue the algorithm
        }
    }

    levelOrder(){                               // method to perform BFS on a binary search tree. (each level checked before going to next)
        const queue = []                        // queue implemented as an array, but can be optimized using obj see queue_optimized.js. array increases time complexity with method like shift O(n)
        queue.push(this.root)                   // push root of the bst into the queue array
        while(queue.length){                    // while queue (the arr created) has a length of creater than 0. 0 is a falsey value 
            let curr = queue.shift()            // removed root node from the front of the queue/arr and stored the removed node into a variable. shift returns removed element 
            console.log(curr.value)             // node has value, left, and right properties 
            if(curr.left){                      // in subsequent loops, the node in the front will not be the root and it will be removed and steps below will be repeated until queue is empty
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
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
bst.inOrder(bst.root)                               // 3 5 7 10 15 
bst.postOrder(bst.root)                             // 3 7 5 15 10 

bst.levelOrder()                                    // 10, 5, 15, 3, 7 