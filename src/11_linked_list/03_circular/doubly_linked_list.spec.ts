import { CircularDoublyLinkedList } from "./doubly_linked_list";
import { Node } from "../02_doubly";

import { faker } from "@faker-js/faker";

describe("CircularDoublyLinkedList", () => {
  it("should create an empty [CircularDoublyLinkedList]", () => {
    const linkedList = new CircularDoublyLinkedList<number>();

    expect(linkedList).toBeInstanceOf(CircularDoublyLinkedList);
  });

  it("should create a [CircularDoublyLinkedList] with value", () => {
    const node = new Node<number>(+faker.random.numeric());
    const linkedList = new CircularDoublyLinkedList<number>(node);

    expect(linkedList.head?.next?.isEqual(linkedList.head.prev!.value)).toBeTruthy();
  });

  it("should [prepend] a [node] in the [CircularDoublyLinkedList]", () => {
    const linkedList = new CircularDoublyLinkedList<number>();
    const first = +faker.random.numeric(5);
    const middle = +faker.random.numeric(5);
    const last = +faker.random.numeric(5);

    linkedList.prepend(last);
    linkedList.prepend(middle);
    linkedList.prepend(first);

    expect(linkedList.head?.isEqual(first)).toBe(true);
    expect(linkedList.head?.prev?.isEqual(last)).toBe(true);
  });
});
