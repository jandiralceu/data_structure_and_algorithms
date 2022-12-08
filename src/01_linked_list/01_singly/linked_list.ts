import { ListNode } from "@/00_helpers/list_node";

interface ILinkedList<T> {
  append(value: T): void;
  prepend(value: T): void;
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

  // [prepend] methods adds a [ListNode] object to the beginning of LinkedList.
  prepend(value: T) {
    const newNode = new ListNode<T>(value, this.head);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;
  }

  // [append] methods adds a [ListNode] object to the end of LinkedList.
  append(value: T) {
    const newNode = new ListNode<T>(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentTail = this.tail;
      currentTail.next = newNode;

      this.tail = newNode;
    }
  }
}
