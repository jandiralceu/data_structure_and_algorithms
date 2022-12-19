import { DoublyLinkedList } from "./linked_list";
import { Node } from "./node";

import { faker } from "@faker-js/faker";

describe("DoublyLinkedList", () => {
  it("should create an empty [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<number>();

    expect(linkedList.values).toBe(null);
    expect(linkedList.size).toBe(0);
  });

  it("should create a [DoublyLinkedList] with a [Node]", () => {
    const node = new Node<string>(faker.random.words(6));
    const linkedList = new DoublyLinkedList<string>(node);

    expect(linkedList.size).toBe(1);
    expect(linkedList.values?.value).toBe(node.value);
  });

  it("should prepend a [Node] in a [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<string>(new Node<string>(faker.name.fullName()));
    const nextNodeValue = faker.name.fullName();

    linkedList.prepend(nextNodeValue);

    expect(linkedList.values?.value).toBe(nextNodeValue);
    expect(linkedList.size).toBe(2);
  });

  it("should prepend a [Node] in a [DoublyLinkedList] empty", () => {
    const linkedList = new DoublyLinkedList<string>();
    const nextNodeValue = faker.name.fullName();

    expect(linkedList.size).toBe(0);

    linkedList.append(nextNodeValue);

    expect(linkedList.size).toBe(1);
    expect(linkedList.values?.value).toBe(nextNodeValue);
  });

  it("should append a [Node] in a [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<string>(new Node<string>(faker.name.fullName()));
    const nextNodeValue = faker.name.fullName();

    linkedList.append(nextNodeValue);

    expect(linkedList.size).toBe(2);
    expect(linkedList.tail?.value).toBe(nextNodeValue);
  });

  it("should append a [Node] in a [DoublyLinkedList] empty", () => {
    const linkedList = new DoublyLinkedList<string>();

    expect(linkedList.size).toBe(0);

    const nextNodeValue = faker.name.fullName();
    linkedList.append(nextNodeValue);

    expect(linkedList.size).toBe(1);
    expect(linkedList.values?.value).toBe(nextNodeValue);
  });
});
