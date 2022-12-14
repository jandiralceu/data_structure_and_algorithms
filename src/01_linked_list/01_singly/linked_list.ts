import {
  ListNodeComparator,
  ListNodeToStringCallback,
} from "@/00_helpers";
import { Node } from "./node";

interface ILinkedList<T> {
  isEmpty(): boolean;
  append(value: T): void;
  prepend(value: T): void;
  delete(value: T): T | null;
  clean(): void;
  search(value: T, comparator?: ListNodeComparator<T>): Node<T> | null;
  toString(callback?: ListNodeToStringCallback<T>): void;
  toPrint(value: LinkedListProps<T>, callback?: ListNodeToStringCallback<T>): void;
}

type LinkedListProps<T> = Node<T> | null;

// Linked List
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

  // delete methods finds an item in the [LinkedList] and removes it.
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

  // Print [LinkedList] values, but using recursion
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
