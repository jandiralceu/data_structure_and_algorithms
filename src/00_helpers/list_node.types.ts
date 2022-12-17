export type ListNodeToStringCallback<T> = (value: T) => string;
export type ListNodeComparator<T> = (current: T, toCompare: T) => boolean;

export interface IListNode<T> {
  toString(callback?: ListNodeToStringCallback<T>): void;
  isEqual(value: T, comparator?: ListNodeComparator<T>): boolean;
}

