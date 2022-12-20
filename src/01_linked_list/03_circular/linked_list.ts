import { DoublyLinkedList, Pointer } from "../02_doubly";

export class CircularLinkedList<T> extends DoublyLinkedList<T> {
  constructor(head: Pointer<T> = null) {
    super(head);
  }
}
