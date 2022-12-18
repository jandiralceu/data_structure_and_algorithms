import { LinkedList } from "./linked_list";
import { Node } from "./node";

import { faker } from "@faker-js/faker";

describe("Singly [LinkedList]", () => {
  it("should create an empty [LinkedList]", () => {
    const linkedList = new LinkedList<number>();

    expect(linkedList.list).toBe(null);
    expect(linkedList.size).toBe(0);
  });

  it("should create a [LinkedList] with a Node", () => {
    const node = new Node<string>(faker.name.fullName());
    const linkedList = new LinkedList<string>(node);

    expect(linkedList.size).toBe(1);
    expect(linkedList.list?.value).toBe(node.value);
  });

  it("should clean a [LinkedList]", () => {
    const linkedList = new LinkedList<string>(new Node<string>(faker.name.fullName()));

    expect(linkedList.size).toBe(1);

    linkedList.clean();

    expect(linkedList.list).toBe(null);
    expect(linkedList.size).toBe(0);
  });

  it("should prepend a [Node] in the [LinkedList]", () => {
    const node = new Node<string>(faker.name.fullName());
    const linkedList = new LinkedList<string>(node);

    const nextNodeValue = faker.name.fullName();

    linkedList.prepend(nextNodeValue);

    expect(linkedList.list?.value).toBe(nextNodeValue);
    expect(linkedList.size).toBe(2);
  });

  it("should append a [Node] in the [LinkedList]", () => {
    const node = new Node<string>(faker.name.fullName());
    const linkedList = new LinkedList<string>(node);

    const nextNodeValue = faker.name.fullName();

    linkedList.append(nextNodeValue);

    expect(linkedList.size).toBe(2);
    expect(linkedList.tail?.value).toBe(nextNodeValue);
  });

  it("should append a [Node] even if the [LinkedList] is empty", () => {
    const linkedList = new LinkedList<string>();

    const nextNodeValue = faker.name.fullName();

    linkedList.append(nextNodeValue);

    expect(linkedList.size).toBe(1);
    expect(linkedList.list?.value).toBe(nextNodeValue);
  });

  it("should print all nodes in the [LinkedList]", () => {
    const linkedList = new LinkedList<string>();
    const spyToPrint = jest.spyOn(linkedList, "toPrint");

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());

    linkedList.toPrint(linkedList.list);

    expect(spyToPrint).toBeCalledTimes(5);
  });
});
