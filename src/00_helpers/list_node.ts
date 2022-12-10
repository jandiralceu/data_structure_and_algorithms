export type ListNodeToStringCallback<T> = (value: T) => string;
export type ListNodeComparator<T> = (current: T, toCompare: T) => boolean;

interface IListNode<T> {
  toString(callback?: ListNodeToStringCallback<T>): string;
  isEqual(value: T, comparator?: ListNodeComparator<T>): boolean;
}

// List Node to be used in others data structure
export class ListNode<T> implements IListNode<T> {
  value: T | null;
  next: ListNode<T> | null;

  // Creates a [ListNode]
  constructor(value: T | null = null, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  // Print [ListNode] value
  toString(callback?: ListNodeToStringCallback<T>) {
    if (!this.value) return "";
    return callback ? callback(this.value) : `${this.value}`;
  }

  // Check ListNode value equality
  isEqual(value: T, comparator?: ListNodeComparator<T>) {
    return comparator ? comparator(this.value!, value) : this.value! === value;
  }
}
