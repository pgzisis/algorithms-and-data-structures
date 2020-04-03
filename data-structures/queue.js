const Node = require('./singlyLinkedList');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.size) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }

    this.last = newNode;

    return ++this.size;
  }

  dequeue() {
    if (!this.size) {
      return null;
    }

    const dequeuedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;

    return dequeuedNode.value;
  }
}

module.exports = Queue;
