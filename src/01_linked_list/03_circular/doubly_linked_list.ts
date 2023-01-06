import { Node, Pointer } from "../02_doubly";
import { ListNodeComparator } from "@/00_helpers";

interface ICircularDoublyLinkedList<T> {
  prepend: (value: T) => void;
}

export class CircularDoublyLinkedList<T> implements ICircularDoublyLinkedList<T> {
  #head: Pointer<T>;
  #comparator?: ListNodeComparator<T>;

  constructor(head: Pointer<T> = null, comparator?: ListNodeComparator<T>) {
    if (head !== null) {
      head.next = head;
      head.prev = head;
    }

    this.#head = head;
    this.#comparator = comparator;
  }

  get head(): Pointer<T> {
    return this.#head;
  }

  prepend(value: T): void {
    const newNode = new Node<T>(value);

    if (this.#head == null) {
      newNode.next = newNode;
      newNode.prev = newNode;

      this.#head = newNode;
      return;
    }

    newNode.prev = this.#head.prev;
    newNode.next = this.#head;

    this.#head = newNode;
  }
}
