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
  toString(callback?: ListNodeToStringCallback<T>): void;
}

type LinkedListProps<T> = ListNode<T> | null;

// Linked List
export class LinkedList<T> implements ILinkedList<T> {
  head: LinkedListProps<T>;
  tail: LinkedListProps<T>;

  /// Creates a [LinkedList]
  constructor(head: LinkedListProps<T> = null) {
    this.head = head;
    this.tail = this.head;
  }

  // [prepend] methods adds a [ListNode] object to the beginning of [LinkedList].
  prepend(value: T) {
    const newNode = new ListNode<T>(value, this.head);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;
  }

  // [append] methods adds a [ListNode] object to the end of [LinkedList].
  append(value: T) {
    const newNode = new ListNode<T>(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;

      return;
    }

    // const currentTail = this.tail!;
    // currentTail.next = newNode;
    this.tail!.next = newNode;
    this.tail = this.tail!.next;
  }

  // [delete] methods finds an item in the [LinkedList] and removes it.
  delete(value: T, comparator?: ListNodeComparator<T>): ListNode<T> | null {
    // First we check if our [LinkedList] is empty.
    if (this.isEmpty()) return null;

    let deletedNode: ListNode<T> | null = null;

    while (this.head?.isEqual(value, comparator)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode?.next) {
      if (currentNode.next.isEqual(value, comparator)) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail?.isEqual(value, comparator)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  toString(callback?: ListNodeToStringCallback<T>) {
    if (this.isEmpty()) return;

    let currentNode = this.head;

    while (currentNode?.next) {
      console.log(currentNode.toString(callback));
      currentNode = currentNode.next;
    }

    if (this.tail) {
      console.log(this.tail.toString(callback));
    }
  }

  isEmpty() {
    return !this.head;
  }
}
