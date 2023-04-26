const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  if (!rootNode) {
    return null;
  }
  while (rootNode.left) {
    rootNode = rootNode.left;
  }
  return rootNode.val
}

function findMaxBST (rootNode) {
  // Your code here
  if (!rootNode){
    return null
  }
  while (rootNode.right) {
    rootNode = rootNode.right
  }
  return rootNode.val
}

function findMinBT (rootNode) {
  // Your code here
  if (!rootNode) {
    return null;
  }
  let min = rootNode.val;
  let arr = [];
  function traversal(rootNode) {
    if (!rootNode) {
      return
    }
    // if (rootNode.val < min) {
    //   min = rootNode.val;
    // }
    arr.push(rootNode.val);
    traversal(rootNode.left);
    traversal(rootNode.right);
  }

  traversal(rootNode);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;







  // const queue = [];
  // //console.log(rootNode);
  // while (rootNode) {
  //   queue.push(rootNode.val);
  //   rootNode = rootNode.left;
  // }
  // let min = null;
  // let ans;
  // for (let i = 0; i < queue.length; i++) {
  //   if (min === null || queue[i] < min) {
  //     ans = queue[i];
  //   }
  // }
  // console.log(ans);
}

function findMaxBT (rootNode) {
  // Your code here
  if (!rootNode) {
    return null
  }

  let stack = []
  let nums = []
  stack.push(rootNode)

  while (stack.length > 0) {
    let node = stack.pop()
    if (node) {
      nums.push(node.val)
      stack.push(node.left)
      stack.push(node.right)
    }
  }
  let max = nums[0]

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
    }
  }

  return max
}

function getHeight (rootNode) {
  // Your code here
  if (!rootNode) {
    return -1;
  }
  let queue = [];
  let height = -1;
  queue.push(rootNode);
  while (queue.length > 0) {
    height++;
    let nextQueue = [];
    for (let node of queue) {
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }
    queue = nextQueue;
  }
  return height;
}

function balancedTree (rootNode) {
  // Your code here
  let balance = true
  function height(node) {
    if (node === null) {
      return 0
    }
    let leftHeight = height(node.left)
    let rightHeight = height(node.right)
    if (Math.abs(leftHeight - rightHeight) > 1) {
      balance = false
    }
    let currentHeight = (leftHeight > rightHeight) ? leftHeight + 1 : rightHeight + 1
    return currentHeight
  }
  height(rootNode)
  return balance

}

function countNodes (rootNode) {
  // Your code here
  let count = 0;
  if (!rootNode) {
    return count;
  }
  let queue = [];
  queue.push(rootNode);
  while (queue.length > 0) {
    let node = queue.shift();
    if (node) {
      count++;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  //console.log(queue);
  return count;
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
