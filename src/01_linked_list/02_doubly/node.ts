import { IListNode, ListNodeComparator, ListNodeToStringCallback } from "@/00_helpers/list_node.types";

export class Node<T> implements IListNode<T> {
  value: T;
  prev: Node<T> | null;
  next: Node<T> | null;

  // Creates a [Node]
  constructor(value: T, next: Node<T> | null = null, prev: Node<T> | null = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  // Print [Node] value
  toString(callback?: ListNodeToStringCallback<T>) {
    if (!this.value) return "";
    return callback ? callback(this.value) : `${this.value}`;
  }

  // Check [Node] value equality
  isEqual(value: T, comparator?: ListNodeComparator<T>) {
    return comparator ? comparator(this.value!, value) : this.value! === value;
  }
}
