import { IListNode, ListNodeComparator, ListNodeToStringCallback } from "@/00_helpers/list_node.types";

export class Node<T> implements IListNode<T> {
  value: T | null;
  next: Node<T> | null;

  // Creates a [ListNode]
  constructor(value: T | null = null, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  // Print [ListNode] value
  toString(callback?: ListNodeToStringCallback<T>) {
    if (!this.value) return "";
    return callback ? callback(this.value) : `${this.value}`;
  }

  // Check ListNode value equality
  isEqual(value: T, comparator?: ListNodeComparator<T>) {
    return comparator ? comparator(this.value!, value) : this.value! === value;
  }
}
