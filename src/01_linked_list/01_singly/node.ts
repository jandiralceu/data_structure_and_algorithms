import { IListNode, ListNodeComparator } from "@/00_helpers/list_node.types";

export class Node<T> implements IListNode<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  toString(): string {
    return `${this.value as string}`;
  }

  isEqual(value: T, comparator?: ListNodeComparator<T>): boolean {
    return typeof comparator !== "undefined" ? comparator(this.value, value) : this.value === value;
  }
}
