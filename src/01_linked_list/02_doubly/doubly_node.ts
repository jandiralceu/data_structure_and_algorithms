import {
  IListNode,
  ListNodeComparator,
  ListNodeToStringCallback,
} from "../../00_helpers/list_node.types";

export class DoublyNode<T> implements IListNode<T> {
  #value: T | null;
  #prev: DoublyNode<T> | null;
  #next: DoublyNode<T> | null;

  // Creates a [ListNode]
  constructor(
    value: T | null = null,
    next: DoublyNode<T> | null = null,
    prev: DoublyNode<T> | null = null
  ) {
    this.#value = value;
    this.#next = next;
    this.#prev = prev;
  }

  get value() {
    return this.#value;
  }

  set value(value: T | null) {
    this.#value = value;
  }

  get next() {
    return this.#next;
  }

  set next(next: DoublyNode<T> | null) {
    this.#next = next;
  }

  get prev() {
    return this.#prev;
  }

  set prev(prev: DoublyNode<T> | null) {
    this.#prev = prev;
  }

  // Print [ListNode] value
  toString(callback?: ListNodeToStringCallback<T>) {
    if (!this.#value) return "";
    return callback ? callback(this.#value) : `${this.#value}`;
  }

  // Check ListNode value equality
  isEqual(value: T, comparator?: ListNodeComparator<T>) {
    if (!this.#value) return false;
    return comparator ? comparator(this.#value, value) : this.#value === value;
  }
}
