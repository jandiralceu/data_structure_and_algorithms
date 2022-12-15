import {
  ListNodeComparator,
  ListNodeToStringCallback,
} from "@/00_helpers";
import { Node } from "./node";

interface ILinkedList<T> {
  isEmpty(): boolean;
  append(value: T): void;
  prepend(value: T): void;
  insertPosition(position: number, value: T): void;
  delete(value: T): T | null;
  deleteHead(): T | null;
  deleteTail(): T | null;
  clean(): void;
  search(value: T, comparator?: ListNodeComparator<T>): Node<T> | null;
  toPrint(value: LinkedListProps<T>, callback?: ListNodeToStringCallback<T>): void;
}

type LinkedListProps<T> = Node<T> | null;

// Singly [LinkedList]
export class LinkedList<T> implements ILinkedList<T> {
  #head: LinkedListProps<T>;

  constructor(head: LinkedListProps<T> = null) {
    this.#head = head;
  }

  /// Get the [LinkedList]
  get list() {
    return this.#head;
  }

  /// Get [LinkedList] size
  get size() {
    let amount = 0;

    if (!this.isEmpty()) {
      let currentNode = this.#head;

      while (currentNode) {
        amount++;
        currentNode = currentNode.next;
      }
    }

    return amount;
  }

  /// Search for a [Node] inside the [LinkedList] 
  search(value: T, comparator?: ListNodeComparator<T>): Node<T> | null {
    if (this.isEmpty()) return null;

    let currentNode = this.#head;

    while (currentNode) {
      if (currentNode.isEqual(value, comparator)) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  // prepend methods adds a [Node] object to the beginning of [LinkedList].
  prepend(value: T) {
    let newNode = new Node<T>(value, this.#head);
    newNode.next = this.#head;

    this.#head = newNode;
  }

  // append methods adds a [Node] object to the end of [LinkedList].
  append(value: T) {
    const newNode = new Node<T>(value);

    if (this.isEmpty()) {
      this.#head = newNode;
      return;
    }

    let tail = this.#head!;
    while (tail.next) tail = tail.next;

    tail.next = newNode;
  }

  // Insert a [Node] into any position of [LinkedList]
  insertPosition(position: number, value: T): void {
    if (position > this.size) return;

    const newNode = new Node<T>(value);

    if (position == 1) {
      newNode.next = this.#head;
      this.#head = newNode;
      return;
    }

    let current = this.#head;

    for (let i = 1; i <= position - 2 && current; i++) current = current.next;

    newNode.next = current?.next!;
    current!.next = newNode;
  }

  // delete any value, in any position of out [LinkedList] based on params.
  delete(value: T, comparator?: ListNodeComparator<T>): T | null {
    if (this.isEmpty()) return null;

    let deletedNode: Node<T> | null = null;

    while (this.#head?.isEqual(value, comparator)) {
      deletedNode = this.#head;
      this.#head = this.#head.next;
    }

    let currentNode = this.#head!;

    while (currentNode.next) {
      if (currentNode.next.isEqual(value, comparator)) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }


    return deletedNode?.value ?? null;
  }

  // Delete the first element of a [LinkedList]
  deleteHead(): T | null {
    if (this.isEmpty()) return null;

    const deletedNode = this.#head!.value;
    this.#head = this.#head!.next;

    return deletedNode;
  }

  // Delete the last element of a [LinkedList]
  deleteTail(): T | null {
    if (!this.#head || !this.#head.next) return null;

    let current = this.#head!;

    while(current.next?.next) current = current.next;

    const deletedNode = current.next!;
    current.next = null;

    return deletedNode?.value;
  }

  // Print [LinkedList] values
  toPrint(value: LinkedListProps<T>, callback?: ListNodeToStringCallback<T>): void {
    if (!value) return;

    console.log(value.toString(callback));

    this.toPrint(value.next, callback);
  }
  
  // Check if [LinkedList] is empty
  isEmpty() {
    return !this.#head;
  }

  // Clean the [LinkedList]
  clean(): void {
    this.#head = null;
  }
}
