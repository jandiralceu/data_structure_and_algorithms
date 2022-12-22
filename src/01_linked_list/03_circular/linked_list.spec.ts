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

    expect(linkedList.size).toBe(0);
  });

  it("should return [null] if trying to get [tail] in a [CircularLinkedList]", () => {
    const linkedList = new CircularLinkedList<number>();
    const tail = linkedList.tail;

    expect(tail).toBeNull();
  });

  it("should [prepend] a [node] in the [CircularLinkedList]", () => {
    const linkedList = new CircularLinkedList<number>();
    const first = +faker.random.numeric(5);
    const second = +faker.random.numeric(5);

    linkedList.prepend(first);
    linkedList.prepend(second);

    expect(linkedList.size).toBe(2);
    expect(linkedList.head?.value).toBe(second);
  });

  it("should [append] a [node] in the [CircularLinkedList]", () => {
    const firstNode = new Node<string>(faker.random.words(5));
    const linkedList = new CircularLinkedList<string>(firstNode);

    const lastNode = faker.random.words(5);
    linkedList.append(lastNode);
    const tail = linkedList.tail;

    expect(linkedList.size).toBe(2);
    expect(tail?.value).toBe(lastNode);
  });

  it("should [append] a [node] in the [CircularLinkedList] even if it's empty", () => {
    const linkedList = new CircularLinkedList<string>();

    const lastNode = faker.random.words(5);
    linkedList.append(lastNode);
    const tail = linkedList.tail;

    expect(linkedList.size).toBe(1);
    expect(tail?.value).toBe(lastNode);
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

  it("should [deleteHead] in the [CircularLinkedList] with size 1", () => {
    const linkedList = new CircularLinkedList<string>();
    const headValue = faker.random.words(5);
    linkedList.append(headValue);

    expect(linkedList.size).toBe(1);

    const deletedNodeValue = linkedList.deleteHead();

    expect(linkedList.size).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(deletedNodeValue).toBe(headValue);
  });

  it("should return [null] if try to [deleteHead] in the empty [CircularLinkedList]", () => {
    const linkedList = new CircularLinkedList<string>();
    const deletedNodeValue = linkedList.deleteHead();

    expect(deletedNodeValue).toBeNull();
  });

  it("should [deleteHead] in the [CircularLinkedList]", () => {
    const linkedList = new CircularLinkedList<string>();
    const headValue = faker.random.words(5);
    const nextHeadValue = faker.random.words(5);

    linkedList.append(headValue);
    linkedList.append(nextHeadValue);
    linkedList.append(faker.random.words(5));
    linkedList.append(faker.random.words(5));
    linkedList.append(faker.random.words(5));

    expect(linkedList.size).toBe(5);

    const deletedNodeValue = linkedList.deleteHead();

    expect(linkedList.size).toBe(4);
    expect(linkedList.head?.value).toBe(nextHeadValue);
    expect(deletedNodeValue).toBe(headValue);
  });
});
