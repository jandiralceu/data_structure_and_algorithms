export type ListNodeComparator<T> = (current: T, toCompare: T) => boolean;

export interface IListNode<T> {
  toString: () => string;
  isEqual: (value: T, comparator?: ListNodeComparator<T>) => boolean;
}
