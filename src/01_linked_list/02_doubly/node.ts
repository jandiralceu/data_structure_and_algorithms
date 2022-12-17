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

  constructor(value: T, prev: Pointer<T> = null, next: Pointer<T> = null) {
    this.value = value;
    this.prev = prev;
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
