import { LinkedList } from "./linked_list";
import { Node } from "./node";
import { Person } from "../../00_helpers";

import { faker } from "@faker-js/faker";

describe("Singly [LinkedList] - Primitive values", () => {
  it("should create an empty [LinkedList]", () => {
    const linkedList = new LinkedList<number>();

    expect(linkedList.list).toBe(null);
    expect(linkedList.size).toBe(0);
  });

  it("should create a [LinkedList] with a [Node]", () => {
    const node = new Node<string>(faker.name.fullName());
    const linkedList = new LinkedList<string>(node);

    expect(linkedList.size).toBe(1);
    expect(linkedList.list?.value).toBe(node.value);
  });

  it("should clean a [LinkedList]", () => {
    const linkedList = new LinkedList<string>(new Node<string>(faker.name.fullName()));

    expect(linkedList.size).toBe(1);

    linkedList.clean();

    expect(linkedList.list).toBeNull();
    expect(linkedList.size).toBe(0);
  });

  it("should return null for tail if [LinkedList] is empty", () => {
    const linkedList = new LinkedList<string>();

    expect(linkedList.tail).toBeNull();
  });

  it("should return the tail", () => {
    const nodeValue = faker.name.fullName();
    const linkedList = new LinkedList<string>();

    linkedList.append(nodeValue);

    expect(linkedList.tail?.value).toBe(nodeValue);
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

  it("should search a [Node] in the [LinkedList]", () => {
    const linkedList = new LinkedList<string>();
    const name = faker.name.fullName();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(name);
    linkedList.append(faker.name.fullName());

    const found = linkedList.search(linkedList.list, name);

    expect(found).toHaveLength(2);
    expect(found[1]).toBe(name);
  });

  it("should search an invalid [Node] in the [LinkedList]", () => {
    const linkedList = new LinkedList<string>();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());

    const found = linkedList.search(linkedList.list, faker.name.fullName());

    expect(found).toHaveLength(1);
    expect(found[0]).toBe(-1);
  });

  it("should to try insertion in a invalid position", () => {
    const linkedList = new LinkedList<string>();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.insertPosition(6, faker.name.fullName());

    expect(linkedList.size).toBe(3);
  });

  it("should insert a [Node] in the first position of the [LinkedList]", () => {
    const linkedList = new LinkedList<string>();

    linkedList.append(faker.name.fullName());
    linkedList.insertPosition(1, faker.name.fullName());

    expect(linkedList.size).toBe(2);
  });

  it("should insert a [Node] in any valid position of the [LinkedList]", () => {
    const linkedList = new LinkedList<string>();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.insertPosition(3, faker.name.fullName());

    expect(linkedList.size).toBe(5);
  });

  it("should return null if [delete] a [Node] in a empty [LinkedList]", () => {
    const linkedList = new LinkedList<string>();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());

    const deleteResult = linkedList.delete("Jandir A. Cutabiala");

    expect(deleteResult).toBeNull();
  });

  it("should return the deleted value in a [LinkedList]", () => {
    const linkedList = new LinkedList<string>();
    const nodeValue = "Jandir A. Cutabiala";

    linkedList.append(faker.name.fullName());
    linkedList.append(nodeValue);
    linkedList.append(faker.name.fullName());

    const deleteResult = linkedList.delete(nodeValue);

    expect(deleteResult).toBe(nodeValue);
  });

  it("should return null if [delete] an invalid [Node]", () => {
    const linkedList = new LinkedList<string>();

    const deleteResult = linkedList.delete(faker.name.fullName());

    expect(deleteResult).toBeNull();
  });

  it("should return null if [deleteHead] in a empty [LinkedList]", () => {
    const linkedList = new LinkedList<string>();
    const deleteResult = linkedList.deleteHead();

    expect(deleteResult).toBeNull();
  });

  it("should return the deleted [Node] value when [deleteHead]", () => {
    const headValue = faker.name.fullName();
    const nextHeadValue = faker.name.fullName();
    const linkedList = new LinkedList<string>();

    linkedList.append(headValue);
    linkedList.append(nextHeadValue);
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());

    const deletedHead = linkedList.deleteHead();

    expect(deletedHead).toBe(headValue);
    expect(linkedList.list?.value).toBe(nextHeadValue);
  });

  it("should clean the [LinkedList] if delete the only [Node]", () => {
    const linkedList = new LinkedList<string>();
    const nodeValue = faker.name.fullName();

    linkedList.append(nodeValue);
    linkedList.delete(nodeValue);

    expect(linkedList.list).toBeNull();
  });

  it("should return null if [deleteTail] in a empty [LinkedList]", () => {
    const linkedList = new LinkedList<string>();
    const deleteResult = linkedList.deleteTail();

    expect(deleteResult).toBeNull();
  });

  it("should [deleteTail] in the [LinkedList] with only one [Node]", () => {
    const name = new Node<string>(faker.name.fullName());
    const linkedList = new LinkedList<string>(name);

    const deleteResult = linkedList.deleteTail();

    expect(deleteResult).toBe(name.value);
    expect(linkedList.list).toBeNull();
  });

  it("should [deleteTail] in the [LinkedList] with many [Node]", () => {
    const tail = faker.name.fullName();
    const nextTail = faker.name.fullName();
    const linkedList = new LinkedList<string>();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(nextTail);
    linkedList.append(tail);

    const deleteResult = linkedList.deleteTail();

    expect(deleteResult).toBe(tail);
    expect(linkedList.tail?.value).toBe(nextTail);
  });
});

describe("Singly [LinkedList] - Non-Primitive value", () => {
  it("should create a [LinkedList] with object [Node]", () => {
    const node = new Node<Person>(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    const linkedList = new LinkedList<Person>(node);

    expect(linkedList.size).toBe(1);
    expect(linkedList.list?.value).toBe(node.value);
  });

  it("should print all classes [Nodes] in the [LinkedList]", () => {
    const linkedList = new LinkedList<Person>();
    const spyToPrint = jest.spyOn(linkedList, "toPrint");

    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));

    linkedList.toPrint(linkedList.list);

    expect(spyToPrint).toBeCalledTimes(6);
  });

  it("should search a class [Node] in the [LinkedList]", () => {
    const linkedList = new LinkedList<Person>();
    const person = new Person(faker.name.fullName(), +faker.random.numeric(2));

    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(person);

    const found = linkedList.search(linkedList.list, person, Person.isEqual);

    expect(found).toHaveLength(2);
    expect(found[1]).toBe(person);
  });

  it("should return the deleted value in a [LinkedList]", () => {
    const linkedList = new LinkedList<Person>();
    const person = new Person(faker.name.fullName(), +faker.random.numeric(2));

    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(person);
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));

    const deleteResult = linkedList.delete(person, Person.isEqual);

    expect(deleteResult).toEqual(person);
  });
});
