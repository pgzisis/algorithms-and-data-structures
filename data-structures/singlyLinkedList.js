class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    this.length++;

    return this;
  }

  pop() {
    if (!this.length) {
      return undefined;
    }

    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  shift() {
    if (!this.length) {
      return undefined;
    }

    const currentHead = this.head;
    this.head = this.head.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  set(value, index) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = value;

      return true;
    }

    return false;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) {
      return false;
    }

    const newNode = new Node(value);

    if (index === this.length) {
      return !!this.push(newNode);
    }

    if (index === 0) {
      return !!this.unshift(value);
    }

    const previousNode = this.get(index - 1);

    newNode.next = previousNode.next;
    previousNode.next = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    const previousNode = this.get(index - 1);
    const removedNode = previousNode.next;

    previousNode.next = previousNode.next.next;

    this.length--;

    return removedNode;
  }

  reverse() {
    let node = this.head;

    this.head = this.tail;
    this.tail = node;

    let nextNode;
    let previousNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = previousNode;
      previousNode = node;
      node = nextNode;
    }

    return this;
  }
}

module.exports = Node;
