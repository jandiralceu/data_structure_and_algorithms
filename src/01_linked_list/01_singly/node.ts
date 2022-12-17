import {
  IListNode,
  ListNodeComparator,
  ListNodeToStringCallback,
} from "@/00_helpers/list_node.types";

export class Node<T> implements IListNode<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback?: ListNodeToStringCallback<T>): void {
    typeof callback !== "undefined"
      ? callback(this.value)
      : console.log(this.value);
  }

  isEqual(value: T, comparator?: ListNodeComparator<T>): boolean {
    return typeof comparator !== "undefined"
      ? comparator(this.value, value)
      : this.value === value;
  }
}
