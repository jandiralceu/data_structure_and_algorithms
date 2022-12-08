type ListNodeValue<T> = T | null;
type ListNodeNext<T> = ListNode<T> | null;

// List Node to be used in others data structure
export class ListNode<T> {
  value: T | null;
  next: ListNode<T> | null;

  // Creates a [ListNode]
  constructor(value: ListNodeValue<T> = null, next: ListNodeNext<T> = null) {
    this.value = value;
    this.next = next;
  }

  // Print [ListNode] values
  toString(callback?: Function): string {
    return callback?.(this.value) ?? `${this.value}`;
  }
}
