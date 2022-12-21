import { CircularLinkedList } from "./linked_list";
import { Node } from "../01_singly";

import { faker } from "@faker-js/faker";

describe("CircularLinkedList", () => {
  it("should create a [CircularLinkedList]", () => {
    const linkedList = new CircularLinkedList<number>();

    expect(linkedList).toBeInstanceOf(CircularLinkedList);
  });

  it("should return 0 if trying to [getSize] in the empty [CircularLinkedList]", () => {
    const linkedList = new CircularLinkedList<number>();

    expect(linkedList.getSize()).toBe(0);
  });

  it("should [append] a [node] in the [CircularLinkedList]", () => {
    const linkedList = new CircularLinkedList<number>();
    const first = +faker.random.numeric(5);
    const second = +faker.random.numeric(5);

    linkedList.prepend(first);
    linkedList.prepend(second);

    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.head?.value).toBe(second);
  });

  it("should print all nodes in the [CircularLinkedList]", () => {
    const node = new Node<number>(2);
    const linkedList = new CircularLinkedList<number>(node);
    const spyToPrint = jest.spyOn(linkedList, "toPrint");

    linkedList.toPrint();

    expect(spyToPrint).toBeCalled();
  });

  it("should return if [CircularLinkedList] is empty", () => {
    const linkedList = new CircularLinkedList<number>();
    const spyToPrint = jest.spyOn(linkedList, "toPrint");

    linkedList.toPrint();

    expect(spyToPrint).toHaveReturned();
  });
});
