class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
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
      newNode.previous = this.tail;
    }

    this.tail = newNode;

    this.length++;

    return this;
  }

  pop() {
    if (!this.length) {
      return undefined;
    }

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;

      poppedNode.previous = null;
    }

    this.length--;

    return poppedNode;
  }

  shift() {
    if (!this.length) {
      return undefined;
    }

    const shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;

      shiftedNode.next = null;
    }

    this.length--;

    return shiftedNode;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
    }

    this.head = newNode;

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode;

    if (index <= Math.floor(this.length / 2)) {
      currentNode = this.head;

      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;

      for (let i = this.length - 1; i >= index; i--) {
        currentNode = currentNode.previous;
      }
    }

    return currentNode;
  }

  set(index, value) {
    const node = this.get(index);

    if (node) {
      node.value = value;

      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index === this.length) {
      return false;
    }

    if (index === 0) {
      return !!this.unshift(value);
    }

    if (index === this.length) {
      return !!this.push(value);
    }

    const newNode = new Node(value);

    const previousNode = this.get(index - 1);
    const nextNode = previousNode.next;

    previousNode.next = newNode;
    newNode.previous = previousNode;
    newNode.next = nextNode;
    nextNode.previous = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return !!this.shift();
    }

    if (index === this.length) {
      return !!this.pop();
    }

    const node = this.get(index);
    const previousNode = node.previous;
    const nextNode = node.next;

    previousNode.next = nextNode;
    nextNode.previous = previousNode;

    node.previous = null;
    node.next = null;

    this.length--;

    return node;
  }

  reverse() {
    if (this.length <= 1) {
      return undefined;
    }

    let currentNode = this.head;
    let previousNode;
    let nextNode;

    while (currentNode) {
      nextNode = currentNode.next;
      previousNode = currentNode.previous;

      currentNode.next = previousNode;
      currentNode.previous = nextNode;

      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = previousNode;

    return this;
  }
}
