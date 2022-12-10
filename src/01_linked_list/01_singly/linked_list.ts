import {
  ListNode,
  ListNodeComparator,
  ListNodeToStringCallback,
} from "@/00_helpers/list_node";

export interface ILinkedList<T> {
  isEmpty(): boolean;
  append(value: T): void;
  prepend(value: T): void;
  delete(value: T): ListNode<T> | null;
  search(value: T, comparator?: ListNodeComparator<T>): ListNode<T> | null;
  toString(callback?: ListNodeToStringCallback<T>): void;
}

type LinkedListProps<T> = ListNode<T> | null;

// Linked List
export class LinkedList<T> implements ILinkedList<T> {
  head: LinkedListProps<T>;

  /// Creates a [LinkedList]
  constructor(head: LinkedListProps<T> = null) {
    this.head = head;
  }

  /// Get [LinkedList] size
  get size() {
    let amount = 0;

    if (!this.isEmpty()) {
      let currentNode: ListNode<T> | null = this.head;

      while (currentNode) {
        amount++;
        currentNode = currentNode.next;
      }
    }

    return amount;
  }

  /// Search for a Node inside the [LinkedList]
  search(value: T, comparator?: ListNodeComparator<T>): ListNode<T> | null {
    if (this.isEmpty()) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.isEqual(value, comparator)) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  // [prepend] methods adds a [ListNode] object to the beginning of [LinkedList].
  prepend(value: T) {
    let newNode = new ListNode<T>(value, this.head);
    newNode.next = this.head;

    this.head = newNode;
  }

  // [append] methods adds a [ListNode] object to the end of [LinkedList].
  append(value: T) {
    const newNode = new ListNode<T>(value);

    if (this.isEmpty()) {
      this.head = newNode;
      return;
    }

    let tail = this.head!;
    while (tail.next !== null) tail = tail.next;

    tail.next = newNode;
  }

  // [delete] methods finds an item in the [LinkedList] and removes it.
  delete(value: T, comparator?: ListNodeComparator<T>): ListNode<T> | null {
    if (this.isEmpty()) return null;

    let deletedNode: ListNode<T> | null = null;

    while (this.head?.isEqual(value, comparator)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head!;

    while (currentNode.next !== null) {
      if (currentNode.next.isEqual(value, comparator)) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }


    return deletedNode;
  }

  toString(callback?: ListNodeToStringCallback<T>) {
    if (this.isEmpty()) return;

    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.toString(callback));
      currentNode = currentNode.next;
    }
  }

  isEmpty() {
    return !this.head;
  }
}
