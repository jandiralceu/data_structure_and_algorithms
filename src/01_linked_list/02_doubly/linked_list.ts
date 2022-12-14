import {
    ListNodeComparator,
    ListNodeToStringCallback,
  } from "@/00_helpers";
import { DoublyNode } from "./doubly_node";
  
  export interface ILinkedList<T> {
    isEmpty(): boolean;
    // append(value: T): void;
    // prepend(value: T): void;
    // delete(value: T): T | null;
    // search(value: T, comparator?: ListNodeComparator<T>): DoublyNode<T> | null;
    // toString(callback?: ListNodeToStringCallback<T>): void;
  }
  
  type LinkedListProps<T> = DoublyNode<T> | null;
  
  // Linked List
  export class LinkedList<T> implements ILinkedList<T> {
    #head: LinkedListProps<T>;
  
    constructor(head: LinkedListProps<T> = null) {
      this.#head = head;
    }
  
    /// Get the [LinkedList]
    get list() {
      return this.#head;
    }
  
    /// Get [LinkedList] size
    get size() {
      let amount = 0;
  
      if (!this.isEmpty()) {
        let currentNode = this.#head;
  
        while (currentNode) {
          amount++;
          currentNode = currentNode.next;
        }
      }
  
      return amount;
    }
  
    isEmpty() {
      return !this.#head;
    }
  }
  