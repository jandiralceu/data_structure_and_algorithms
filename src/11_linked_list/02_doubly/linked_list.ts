import { ListNodeComparator } from "00_helpers";
import { Node } from "./node";

type Key = number;
export type Pointer<T> = Node<T> | null;
type SearchResult<T> = [Key, T?];

export interface ILinkedList<T> {
  append: (value: T) => void;
  prepend: (value: T) => void;
  reverse: (head: Pointer<T>) => Pointer<T>;
  deleteHead: () => T | null;
  deleteTail: () => T | null;
  toPrint: (value: Pointer<T>) => void;
  search: (list: Pointer<T>, value: T, comparator?: ListNodeComparator<T>) => SearchResult<T>;
}

export class DoublyLinkedList<T> implements ILinkedList<T> {
  #head: Pointer<T>;

  constructor(head: Pointer<T> = null) {
    this.#head = head;
  }

  // Search for a value inside the [DoublyLinkedList]
  search(list: Pointer<T>, value: T, comparator?: ListNodeComparator<T>): SearchResult<T> {
    if (list == null) return [-1];

    if (list.isEqual(value, comparator)) {
      return [1, list.value];
    } else {
      const [index, result] = this.search(list.next, value, comparator);

      if (index === -1) return [-1];
      else return [index + 1, result];
    }
  }

  get head(): Pointer<T> {
    return this.#head;
  }

  get tail(): Pointer<T> {
    if (this.#head == null) return null;

    let current = this.#head;

    while (current.next != null) current = current.next;

    return current;
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

  reverse(): Pointer<T> {
    if (this.#head == null || this.#head.next == null) return this.#head;

    let temp: Pointer<T> = null;
    let current: Pointer<T> = this.#head;

    while (current != null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    return temp!.prev;
  }

  deleteHead(): T | null {
    if (this.#head == null) return null;

    const deletedNode = this.#head.value;

    if (this.#head.next == null) {
      this.#head = null;
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
      this.#head = null;

      return deletedNode;
    }

    let current: Node<T> = this.#head;
    while (current.next != null) current = current.next;

    const deletedNode = current.value;
    current.prev!.next = null;

    return deletedNode;
  }

  toPrint(value: Pointer<T>): void {
    if (value == null) return;
    console.log(value.toString());

    this.toPrint(value.next);
  }
}
