import { ListNodeComparator } from "@/00_helpers";
import { Node } from "./node";

type Key = number;
type Pointer<T> = Node<T> | null;
type SearchResult<T> = [Key, T?];

interface ISinglyLinkedList<T> {
  append: (value: T) => void;
  prepend: (value: T) => void;
  insertPosition: (position: number, value: T) => void;
  delete: (value: T) => T | null;
  deleteHead: () => T | null;
  deleteTail: () => T | null;
  clean: () => void;
  search: (list: Pointer<T>, value: T, comparator?: ListNodeComparator<T>) => SearchResult<T>;
  toPrint: (value: Pointer<T>) => void;
}

export class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
  #head: Pointer<T>;

  constructor(head: Pointer<T> = null) {
    this.#head = head;
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

  /// Search for a value inside the [SinglyLinkedList]
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

  // Add a [Node] in the beginning of [SinglyLinkedList].
  prepend(value: T): void {
    const newNode = new Node<T>(value, this.#head);
    newNode.next = this.#head;

    this.#head = newNode;
  }

  // Add a [Node] to the end of [SinglyLinkedList].
  append(value: T): void {
    const newNode = new Node<T>(value);

    if (this.#head == null) {
      this.#head = newNode;
      return;
    }

    let tail = this.#head;
    while (tail.next != null) tail = tail.next;

    tail.next = newNode;
  }

  // Insert a [Node] into any position of [SinglyLinkedList]
  insertPosition(position: number, value: T): void {
    const newNode = new Node<T>(value);

    if (position === 1) {
      newNode.next = this.#head;
      this.#head = newNode;
      return;
    }

    let current: Pointer<T> = this.#head;

    for (let i = 1; i <= position - 2 && current != null; i++) {
      current = current.next;
    }

    if (current == null) return;

    newNode.next = current.next;
    current.next = newNode;
  }

  // delete any value in the [SinglyLinkedList].
  delete(value: T, comparator?: ListNodeComparator<T>): T | null {
    if (this.#head == null) return null;

    let deletedNode: Node<T> | null = null;

    while (this.#head !== null && this.#head.isEqual(value, comparator)) {
      deletedNode = this.#head;
      this.#head = this.#head.next;
    }

    let currentNode = this.#head;

    while (currentNode?.next != null) {
      if (currentNode.next.isEqual(value, comparator)) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    return deletedNode != null ? deletedNode.value : null;
  }

  // Delete the first element of a [SinglyLinkedList]
  deleteHead(): T | null {
    if (this.#head == null) return null;

    const deletedNode = this.#head.value;
    this.#head = this.#head.next;

    return deletedNode;
  }

  // Delete the last element of a [SinglyLinkedList]
  deleteTail(): T | null {
    if (this.#head == null) return null;

    if (this.#head.next == null) {
      const deletedNode = this.#head.value;
      this.clean();

      return deletedNode;
    }

    let current = this.#head;

    while (current.next!.next != null) current = current.next!;

    const deletedNode = current.next as Node<T>;
    current.next = null;

    return deletedNode.value;
  }

  // Print [SinglyLinkedList] values
  toPrint(value: Pointer<T>): void {
    if (value == null) return;
    console.log(value.toString());

    this.toPrint(value.next);
  }

  // Clean the [SinglyLinkedList]
  clean(): void {
    this.#head = null;
  }
}
