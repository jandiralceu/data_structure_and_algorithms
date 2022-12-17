import {
    ListNodeComparator,
    ListNodeToStringCallback,
  } from "@/00_helpers";

  import { Node } from './node';
  export interface ILinkedList<T> {
    append(value: T): void;
    prepend(value: T): void;
    reverse(): LinkedListProps<T>;
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

    append(value: T): void {
      const newNode = new Node<T>(value);

      if (!this.#head) {
        this.#head = newNode;
        return;
      }

      let tail = this.#head;

      while(tail.next) tail = tail.next;

      newNode.prev = tail;
      tail.next = newNode;
    }
    
    prepend(value: T): void {
      const newNode = new Node<T>(value);
      newNode.next = this.#head;
      
      if (this.#head) this.#head.prev = newNode;
      this.#head = newNode;
    }

    reverse(): LinkedListProps<T> {
      if (!this.#head || !this.#head.next) return this.#head;

      let prev: LinkedListProps<T> = null;
      let current: LinkedListProps<T> =  this.#head;

      while (current) {
        prev = current.prev;
        current.prev = current.next;
        current.next = prev;
        current = current.prev;
      }

      return prev?.prev ?? null;
    }
    
    toPrint(value: LinkedListProps<T>, callback?: ListNodeToStringCallback<T>): void {
      if (!value) return;
      value.toString(callback);
      this.toPrint(value.next, callback);
    }
  }
  