import { ListNodeToStringCallback } from "@/00_helpers";

import { Node } from "./node";
interface ILinkedList<T> {
  clean: () => void;
  append: (value: T) => void;
  prepend: (value: T) => void;
  reverse: () => LinkedListProps<T>;
  deleteHead: () => T | null;
  deleteTail: () => T | null;
  toPrint: (
    value: LinkedListProps<T>,
    callback?: ListNodeToStringCallback<T>
  ) => void;
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

  reverse(): LinkedListProps<T> {
    if (this.#head == null || this.#head.next == null) return this.#head;

    let prev: LinkedListProps<T> = null;
    let current: LinkedListProps<T> = this.#head;

    while (current != null) {
      prev = current.prev;
      current.prev = current.next;
      current.next = prev;
      current = current.prev;
    }

    return prev!.prev;
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

  toPrint(
    value: LinkedListProps<T>,
    callback?: ListNodeToStringCallback<T>
  ): void {
    if (value == null) return;
    value.toString(callback);

    this.toPrint(value.next, callback);
  }

  clean(): void {
    this.#head = null;
  }
}
