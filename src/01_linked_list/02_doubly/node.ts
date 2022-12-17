import {
  IListNode,
  ListNodeComparator,
  ListNodeToStringCallback,
} from "@/00_helpers/list_node.types";

type Pointer<T> = Node<T> | null;

export class Node<T> implements IListNode<T> {
  value: T;
  prev: Pointer<T>;
  next: Pointer<T>;

  // Creates a [Node]
  constructor(value: T, prev: Pointer<T> = null, next: Pointer<T> = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  // Print [Node] value
  toString(callback?: ListNodeToStringCallback<T>) {
    if (!this.value) return;

    callback ? callback(this.value) : console.log(`Value: ${this.value}`);  
  }

  // Check [Node] value equality
  isEqual(value: T, comparator?: ListNodeComparator<T>) {
    return comparator ? comparator(this.value!, value) : this.value! === value;
  }
}
