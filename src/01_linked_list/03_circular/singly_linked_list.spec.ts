import { CircularSinglyLinkedList } from "./singly_linked_list";
import { Node } from "../01_singly";

import { faker } from "@faker-js/faker";

describe("CircularSinglyLinkedList", () => {
  it("should create a [CircularSinglyLinkedList]", () => {
    const linkedList = new CircularSinglyLinkedList<number>();

    expect(linkedList).toBeInstanceOf(CircularSinglyLinkedList);
  });

  it("should return 0 if trying to [getSize] in the empty [CircularSinglyLinkedList]", () => {
    const linkedList = new CircularSinglyLinkedList<number>();

    expect(linkedList.size).toBe(0);
  });

  it("should return [null] if trying to get [tail] in a [CircularSinglyLinkedList]", () => {
    const linkedList = new CircularSinglyLinkedList<number>();
    const tail = linkedList.tail;

    expect(tail).toBeNull();
  });

  it("should [prepend] a [node] in the [CircularSinglyLinkedList]", () => {
    const linkedList = new CircularSinglyLinkedList<number>();
    const first = +faker.random.numeric(5);
    const second = +faker.random.numeric(5);

    linkedList.prepend(second);
    linkedList.prepend(first);

    expect(linkedList.size).toBe(2);
    expect(linkedList.head?.isEqual(first)).toBe(true);
  });

  it("should [append] a [node] in the [CircularSinglyLinkedList]", () => {
    const firstNode = new Node<string>(faker.random.words(5));
    const linkedList = new CircularSinglyLinkedList<string>(firstNode);

    const lastNode = faker.random.words(5);
    linkedList.append(lastNode);
    const tail = linkedList.tail!;

    expect(linkedList.size).toBe(2);
    expect(tail.value).toBe(lastNode);
  });

  it("should [append] a [node] in the [CircularSinglyLinkedList] even if it's empty", () => {
    const linkedList = new CircularSinglyLinkedList<string>();

    const lastNode = faker.random.words(5);
    linkedList.append(lastNode);
    const tail = linkedList.tail;

    expect(linkedList.size).toBe(1);
    expect(tail!.value).toBe(lastNode);
  });

  it("should print all nodes in the [CircularSinglyLinkedList]", () => {
    const node = new Node<number>(2);
    const linkedList = new CircularSinglyLinkedList<number>(node);
    const spyToPrint = jest.spyOn(linkedList, "toPrint");

    linkedList.toPrint();

    expect(spyToPrint).toBeCalled();
  });

  it("should return if [CircularSinglyLinkedList] is empty", () => {
    const linkedList = new CircularSinglyLinkedList<number>();
    const spyToPrint = jest.spyOn(linkedList, "toPrint");

    linkedList.toPrint();

    expect(spyToPrint).toHaveReturned();
  });

  it("should [deleteHead] in the [CircularSinglyLinkedList] with size 1", () => {
    const linkedList = new CircularSinglyLinkedList<string>();
    const headValue = faker.random.words(5);
    linkedList.append(headValue);

    expect(linkedList.size).toBe(1);

    const deletedNodeValue = linkedList.deleteHead();

    expect(linkedList.size).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(deletedNodeValue).toBe(headValue);
  });

  it("should return [null] if try to [deleteHead] in the empty [CircularSinglyLinkedList]", () => {
    const linkedList = new CircularSinglyLinkedList<string>();
    const deletedNodeValue = linkedList.deleteHead();

    expect(deletedNodeValue).toBeNull();
  });

  it("should [deleteHead] in the [CircularSinglyLinkedList]", () => {
    const linkedList = new CircularSinglyLinkedList<string>();
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
    expect(linkedList.head!.value).toBe(nextHeadValue);
    expect(deletedNodeValue).toBe(headValue);
  });

  it("should return null if [deleteTail] in a empty [CircularSinglyLinkedList]", () => {
    const linkedList = new CircularSinglyLinkedList<string>();
    const deleteResult = linkedList.deleteTail();

    expect(deleteResult).toBeNull();
  });

  it("should [deleteTail] in the [CircularSinglyLinkedList] with only one [Node]", () => {
    const name = new Node<string>(faker.name.fullName());
    const linkedList = new CircularSinglyLinkedList<string>(name);
    const deleteResult = linkedList.deleteTail();

    expect(deleteResult).toBe(name.value);
    expect(linkedList.head).toBeNull();
  });

  it("should [deleteTail] in the [CircularSinglyLinkedList]", () => {
    const linkedList = new CircularSinglyLinkedList<string>();
    const headValue = faker.name.fullName();
    const newTailValue = faker.name.fullName();
    const tailValue = faker.name.fullName();

    linkedList.append(headValue);
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(newTailValue);
    linkedList.append(tailValue);

    const deleteResult = linkedList.deleteTail();

    expect(deleteResult).toBe(tailValue);
    expect(linkedList.tail?.value).toBe(newTailValue);
    expect(linkedList.tail?.next?.value).toBe(headValue);
  });
});
