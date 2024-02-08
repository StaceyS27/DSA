// delete a node from the binary search tree given its value 
// deletion of a node can happen in 3 different scnerios:

// 1. deletion of a leaf node
    // meaning it has no children (at the bottom of the bst)
    // remove node from the tree

// 2. node to be deleted has one child node 
    // remove the node and replace it with its child  
        // detach child node and change value of node to be removed to that of the child node

// 3. node to be deleted has two child nodes 
    // copy the value of the inorder succesor 
        // inorder succesor of a node is the next node in the in order traversal sequence (DFS)
        // and node with the least value in its right subtree (?) 
    // and delete the inorder successor 








// **** TODO: Understand method/rewatch video ****

// Delete method to remove a node with a specific value from the BST
// delete(value) {
//     this.root = this.deleteNode(this.root, value);
// }

// // Recursive helper function to delete a node with a specific value from the subtree rooted at 'root'
// deleteNode(root, value) {
//     // Base case: If the current node is null, return null (no change needed)
//     if (root === null) {
//         return root;
//     }

//     // If the value to be deleted is less than the current node's value,
//     // recursively delete the value from the left subtree
//     if (value < root.value) {
//         root.left = this.deleteNode(root.left, value);
//     }
//     // If the value to be deleted is greater than the current node's value,
//     // recursively delete the value from the right subtree
//     else if (value > root.value) {
//         root.right = this.deleteNode(root.right, value);
//     }
//     // If the value to be deleted is equal to the current node's value,
//     // handle three cases:
//     else {
//         // Case 1: Node with only one child or no child
//         if (!root.left) {
//             return root.right; // Return the non-null child (or null if no child)
//         } else if (!root.right) {
//             return root.left; // Return the non-null child
//         }

//         // Case 2: Node with two children
//         // Find the in-order successor (minimum value in the right subtree)
//         root.value = this.min(root.right);
//         // Recursively delete the in-order successor from the right subtree
//         root.right = this.deleteNode(root.right, root.value);
//     }

//     // Return the modified root of the subtree
//     return root;
// }
