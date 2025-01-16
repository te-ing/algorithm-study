class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
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
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return;
    const poppedNode = this.tail;
    const prevNode = this.tail.prev;
    if (this.length ===1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = prevNode;
      prevNode.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.length) return;
    const oldHead = this.head;
    const nextNode = this.head.next;
    if (this.length === 1) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    this.head = nextNode;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    if (index <= this.length / 2) {
      let count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (!foundNode) {
      return false;
    }
    foundNode.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    newNode.next = nextNode, newNode.prev = prevNode;
    prevNode.next = newNode, nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    const removedNode = this.get(index);
    const nextNode = removedNode.next;
    const prevNode = removedNode.prev;
    nextNode.prev = prevNode;
    prevNode.next = nextNode;
    removedNode.next = null, removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();