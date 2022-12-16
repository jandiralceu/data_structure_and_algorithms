import {
    ListNodeComparator,
    ListNodeToStringCallback,
  } from "@/00_helpers";

  import { Node } from './node';
  export interface ILinkedList<T> {
    isEmpty(): boolean;
    // append(value: T): void;
    prepend(value: T): void;
    // delete(value: T): T | null;
    // search(value: T, comparator?: ListNodeComparator<T>): DoublyNode<T> | null;
    // toString(callback?: ListNodeToStringCallback<T>): void;
    toPrint(value: LinkedListProps<T>, callback?: ListNodeToStringCallback<T>): void;
  }
  
  type LinkedListProps<T> = Node<T> | null;
  
  // Doubly [LinkedList]
  export class LinkedList<T> implements ILinkedList<T> {
    #head: LinkedListProps<T>;
  
    constructor(head: LinkedListProps<T> = null) {
      this.#head = head;
    }
    
    get values() {
      return this.#head;
    }
    
    isEmpty() {
      return !this.#head;
    }
    
    prepend(value: T): void {
      const newNode = new Node<T>(value);
      newNode.next = this.#head;
      
      if (this.#head) this.#head.prev = newNode;
      this.#head = newNode;
    }
    
    toPrint(value: LinkedListProps<T>, callback?: ListNodeToStringCallback<T>): void {
      if (!value) return;
      console.log(value.toString(callback));
      this.toPrint(value.next, callback);
    }
  }
  