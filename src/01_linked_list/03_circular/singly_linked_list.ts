import { Node, Pointer } from "../01_singly";
import { ListNodeComparator } from "@/00_helpers";

interface ICircularSinglyLinkedList<T> {
  append: (value: T) => void;
  prepend: (value: T) => void;
  // insertPosition: (position: number, value: T) => void;
  // delete: (value: T) => T | null;
  deleteHead: () => T | null;
  // deleteTail: () => T | null;
  // clean: () => void;
  // search: (list: Pointer<T>, value: T, comparator?: ListNodeComparator<T>) => SearchResult<T>;
  toPrint: () => void;
}

export class CircularSinglyLinkedList<T> implements ICircularSinglyLinkedList<T> {
  #head: Pointer<T>;
  #comparator?: ListNodeComparator<T>;

  constructor(head: Pointer<T> = null, comparator?: ListNodeComparator<T>) {
    if (head !== null) head.next = head;

    this.#head = head;
    this.#comparator = comparator;
  }

  get head(): Pointer<T> {
    return this.#head;
  }

  get tail(): Pointer<T> {
    if (this.#head == null) return null;

    let current = this.#head;

    do {
      current = current.next!;
    } while (!current.next!.isEqual(this.#head.value, this.#comparator));

    return current;
  }

  get size(): number {
    if (this.#head == null) return 0;

    let amount = 0;
    let currentNode = this.#head;

    do {
      amount++;
      currentNode = currentNode.next!;
    } while (!currentNode.isEqual(this.#head.value, this.#comparator));

    return amount;
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
    } while (!current.next!.isEqual(this.#head.value, this.#comparator));

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
    } while (!current.next!.isEqual(this.#head.value, this.#comparator));

    current.next = newNode;
    newNode.next = this.#head;
  }

  deleteHead(): T | null {
    if (this.#head == null) return null;

    const deletedNode = this.#head.value;

    if (this.#head.next!.isEqual(this.#head.value, this.#comparator)) {
      this.#head = null;
      return deletedNode;
    }

    this.#head.value = this.#head.next!.value;
    this.#head.next = this.#head.next!.next;

    return deletedNode;
  }

  toPrint(): void {
    if (this.#head == null) return;

    let currentNode = this.#head;

    do {
      console.log(currentNode.toString());
      currentNode = currentNode.next!;
    } while (!currentNode.isEqual(this.#head.value, this.#comparator));
  }
}
