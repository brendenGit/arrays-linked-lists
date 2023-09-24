/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length += 1;
    } else {
      const newTail = new Node(val);
      this.tail.next = newTail;
      this.tail = newTail;
      this.length += 1;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    while (current.next !== null) {
      if (current.next.next === null) {
        const pop = current.next;
        current.next = null;
        this.tail = current;
        this.length -= 1;
        return pop;
      }
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    const shift = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return shift;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx + 1 > this.length) {
      return undefined;
    }
    let current = this.head;
    let counter = 0;
    while (idx !== counter) {
      current = current.next;
      counter += 1;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx + 1 > this.length) {
      return undefined;
    }
    let current = this.head;
    let counter = 0;
    while (idx !== counter) {
      current = current.next;
      counter += 1;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx + 1 > this.length) {
      return undefined;
    }
    let current = this.head;
    let counter = 0;
    while (idx - 1 !== counter) {
      current = current.next;
      counter += 1;
    }
    const currentNext = current.next;
    current.next = new Node(val);
    current.next.next = currentNext;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx + 1 > this.length) {
      return undefined;
    }
    let current = this.head;
    let counter = 0;
    while (idx - 1 !== counter) {
      current = current.next;
      counter += 1;
    }
    const removedNode = current.next;
    current.next = current.next.next;
    this.lenght -= 1;
    return removedNode;
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let num = 0;
    while (current.next !== null) {
      num += current.val;
      current = current.next;
    }
    num += current.val;
    const average = num/this.length;
    return average;
  }
}


module.exports = LinkedList;
