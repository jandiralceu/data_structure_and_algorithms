import { Node, Pointer } from "../01_singly";
import { ListNodeComparator } from "@/00_helpers";

interface ICircularLinkedList<T> {
  append: (value: T) => void;
  prepend: (value: T) => void;
  // insertPosition: (position: number, value: T) => void;
  // delete: (value: T) => T | null;
  // deleteHead: () => T | null;
  // deleteTail: () => T | null;
  // clean: () => void;
  // search: (list: Pointer<T>, value: T, comparator?: ListNodeComparator<T>) => SearchResult<T>;
  getSize: () => number;
  toPrint: (comparator?: ListNodeComparator<T>) => void;
}

export class CircularLinkedList<T> implements ICircularLinkedList<T> {
  #head: Pointer<T>;

  constructor(head: Pointer<T> = null) {
    if (head !== null) head.next = head;

    this.#head = head;
  }

  get head(): Pointer<T> {
    return this.#head;
  }

  get tail(): Pointer<T> {
    if (this.#head == null) return null;

    let current = this.#head;

    do {
      current = current.next!;
    } while (!current.next!.isEqual(this.#head.value));

    return current;
  }

  prepend(value: T): void {
    const newNode = new Node<T>(value);

    if (this.#head == null) {
      newNode.next = newNode;
      this.#head = newNode;
      return;
    }

    let current = this.#head;

    do {
      current = current.next!;
    } while (!current.next!.isEqual(this.#head.value));

    current.next = newNode;
    newNode.next = this.#head;
    this.#head = newNode;
  }

  append(value: T): void {
    const newNode = new Node<T>(value);

    if (this.#head == null) {
      newNode.next = newNode;
      this.#head = newNode;
      return;
    }

    let current = this.#head;

    do {
      current = current.next!;
    } while (!current.next!.isEqual(this.#head.value));

    current.next = newNode;
    newNode.next = this.#head;
  }

  getSize(comparator?: ListNodeComparator<T>): number {
    if (this.#head == null) return 0;

    let amount = 0;
    let currentNode = this.#head;

    do {
      amount++;
      currentNode = currentNode.next!;
    } while (!currentNode.isEqual(this.#head.value, comparator));

    return amount;
  }

  toPrint(comparator?: ListNodeComparator<T>): void {
    if (this.#head == null) return;

    let currentNode = this.#head;

    do {
      console.log(currentNode.toString());
      currentNode = currentNode.next!;
    } while (!currentNode.isEqual(this.#head.value, comparator));
  }
}
