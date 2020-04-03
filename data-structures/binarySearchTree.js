const Queue = require('./queue');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;

      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;

          return this;
        }
      } else if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;

          return this;
        }
      } else {
        return undefined;
      }
    }
  }

  find(value) {
    if (!this.root) {
      return undefined;
    }

    let currentNode = this.root;

    while (true) {
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      } else if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      } else {
        return currentNode;
      }
    }
  }

  BFS() {
    const queue = new Queue();
    const visited = [];

    queue.enqueue(this.root);

    while (queue.size) {
      const visitedNode = queue.dequeue();
      visited.push(visitedNode);

      if (visitedNode.left) {
        queue.enqueue(visitedNode.left);
      }

      if (visitedNode.right) {
        queue.enqueue(visitedNode.right);
      }
    }

    return visited;
  }

  DFSPreOrder() {
    const visited = [];

    function traverse(node) {
      visited.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return visited;
  }

  DFSPostOrder() {
    const visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      visited.push(node.value);
    }

    traverse(this.root);

    return visited;
  }

  DFSInOrder() {
    const visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      visited.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return visited;
  }
}

// const tree = new BinarySearchTree();
// tree.insert(150);
// tree.insert(56);
// tree.insert(49);
// tree.insert(160);
// tree.insert(346);
// tree.insert(1);
// tree.insert(57);
// console.log(tree.DFSPreOrder());
