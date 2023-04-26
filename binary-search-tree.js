// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here

// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    if (this.root === null) {
      this.root = new TreeNode(val);
      return;
    }
    let parentNode = null;
    while (currentNode !== null) {
      parentNode = currentNode;
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    if (val < parentNode.val) {
      parentNode.left = new TreeNode(val);
    } else {
      parentNode.right = new TreeNode(val);
    }
  }

  search(val) {
    // Your code here
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) {
        return true;
      }
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode) {
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode) {
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode) {
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    let queue = [];
    queue.push(this.root);
    while (queue.length !== 0) {
      let currNode = queue.shift();
      if (currNode) {
        console.log(currNode.val);
        queue.push(currNode.left);
        queue.push(currNode.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    let stack = [];
    stack.push(this.root);
    while (stack.length !== 0) {
      let currNode = stack.pop();
      if (currNode) {
        console.log(currNode.val);
        stack.push(currNode.left);
        stack.push(currNode.right);
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };