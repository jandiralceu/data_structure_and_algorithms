import { Node } from "./node";

interface ILinkedList<T> {
  clean: () => void;
  append: (value: T) => void;
  prepend: (value: T) => void;
  reverse: () => LinkedList<T>;
  deleteHead: () => T | null;
  deleteTail: () => T | null;
  toPrint: (value: LinkedListProps<T>) => void;
}

type LinkedListProps<T> = Node<T> | null;

// Doubly [LinkedList]
export class LinkedList<T> implements ILinkedList<T> {
  #head: LinkedListProps<T>;

  constructor(head: LinkedListProps<T> = null) {
    this.#head = head;
  }

  get values(): LinkedListProps<T> {
    return this.#head;
  }

  get size(): number {
    let amount = 0;

    if (this.#head != null) {
      let currentNode: Node<T> | null = this.#head;

      while (currentNode != null) {
        amount++;
        currentNode = currentNode.next;
      }
    }

    return amount;
  }

  append(value: T): void {
    const newNode = new Node<T>(value);

    if (this.#head == null) {
      this.#head = newNode;
      return;
    }

    let tail = this.#head;

    while (tail.next != null) tail = tail.next;

    newNode.prev = tail;
    tail.next = newNode;
  }

  prepend(value: T): void {
    const newNode = new Node<T>(value);
    newNode.next = this.#head;

    if (this.#head != null) this.#head.prev = newNode;
    this.#head = newNode;
  }

  reverse(): LinkedList<T> {
    if (this.#head == null || this.#head.next == null) return new LinkedList<T>(this.#head);

    let prev: LinkedListProps<T> = null;
    let current: LinkedListProps<T> = this.#head;

    while (current != null) {
      prev = current.prev;
      current.prev = current.next;
      current.next = prev;
      current = current.prev;
    }

    return new LinkedList<T>(prev!.prev);
  }

  deleteHead(): T | null {
    if (this.#head == null) return null;

    const deletedNode = this.#head.value;

    if (this.#head.next == null) {
      this.clean();
      return deletedNode;
    }

    this.#head = this.#head.next;
    this.#head.prev = null;

    return deletedNode;
  }

  deleteTail(): T | null {
    if (this.#head == null) return null;

    if (this.#head.next == null) {
      const deletedNode = this.#head.value;
      this.clean();

      return deletedNode;
    }

    let current: Node<T> = this.#head;
    while (current.next != null) current = current.next;

    const deletedNode = current.value;
    current.prev!.next = null;

    return deletedNode;
  }

  toPrint(value: LinkedListProps<T>): void {
    if (value == null) return;
    console.log(value.toString());

    this.toPrint(value.next);
  }

  clean(): void {
    this.#head = null;
  }
}
