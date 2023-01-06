import { Node } from "./node";
import { Person } from "@/00_helpers";
import { SinglyLinkedList } from "./linked_list";

import { faker } from "@faker-js/faker";

describe("SinglyLinkedList", () => {
  it("should create an empty [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<number>();

    expect(linkedList.head).toBe(null);
    expect(linkedList.size).toBe(0);
  });

  it("should create a [SinglyLinkedList] with a [Node]", () => {
    const node = new Node<string>(faker.name.fullName());
    const linkedList = new SinglyLinkedList<string>(node);

    expect(linkedList.size).toBe(1);
    expect(linkedList.head?.value).toBe(node.value);
  });

  it("should return null for tail if [SinglyLinkedList] is empty", () => {
    const linkedList = new SinglyLinkedList<string>();

    expect(linkedList.tail).toBeNull();
  });

  it("should return the tail", () => {
    const nodeValue = faker.name.fullName();
    const linkedList = new SinglyLinkedList<string>();

    linkedList.append(nodeValue);

    expect(linkedList.tail?.value).toBe(nodeValue);
  });

  it("should prepend a [Node] in the [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<string>(new Node<string>(faker.name.fullName()));
    const nextNodeValue = faker.name.fullName();

    linkedList.prepend(nextNodeValue);

    expect(linkedList.head?.value).toBe(nextNodeValue);
    expect(linkedList.size).toBe(2);
  });

  it("should append a [Node] in the [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<string>(new Node<string>(faker.name.fullName()));
    const nextNodeValue = faker.name.fullName();

    linkedList.append(nextNodeValue);

    expect(linkedList.size).toBe(2);
    expect(linkedList.tail?.value).toBe(nextNodeValue);
  });

  it("should append a [Node] even if the [SinglyLinkedList] is empty", () => {
    const linkedList = new SinglyLinkedList<string>();
    const nextNodeValue = faker.name.fullName();

    linkedList.append(nextNodeValue);

    expect(linkedList.size).toBe(1);
    expect(linkedList.head?.value).toBe(nextNodeValue);
  });

  it("should print all nodes in the [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<string>();
    const spyToPrint = jest.spyOn(linkedList, "toPrint");

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.toPrint(linkedList.head);

    expect(spyToPrint).toBeCalledTimes(5);
  });

  it("should search a [Node] in the [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<string>();
    const name = faker.name.fullName();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(name);
    linkedList.append(faker.name.fullName());

    const found = linkedList.search(linkedList.head, name);

    expect(found).toHaveLength(2);
    expect(found[1]).toBe(name);
  });

  it("should search an invalid [Node] in the [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<string>();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());

    const found = linkedList.search(linkedList.head, faker.name.fullName());

    expect(found).toHaveLength(1);
    expect(found[0]).toBe(-1);
  });

  it("should return null if [delete] a [Node] in a empty [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<string>();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());

    const deleteResult = linkedList.delete("Jandir A. Cutabiala");

    expect(deleteResult).toBeNull();
  });

  it("should return the deleted value in a [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<string>();
    const nodeValue = "Jandir A. Cutabiala";

    linkedList.append(faker.name.fullName());
    linkedList.append(nodeValue);
    linkedList.append(faker.name.fullName());

    const deleteResult = linkedList.delete(nodeValue);

    expect(deleteResult).toBe(nodeValue);
  });

  it("should return null if [delete] an invalid [Node]", () => {
    const linkedList = new SinglyLinkedList<string>();
    const deleteResult = linkedList.delete(faker.name.fullName());

    expect(deleteResult).toBeNull();
  });

  it("should return null if [deleteHead] in a empty [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<string>();
    const deleteResult = linkedList.deleteHead();

    expect(deleteResult).toBeNull();
  });

  it("should deleted the head [Node] in the [SinglyLinkedList]", () => {
    const headValue = faker.name.fullName();
    const nextHeadValue = faker.name.fullName();
    const linkedList = new SinglyLinkedList<string>();

    linkedList.append(headValue);
    linkedList.append(nextHeadValue);
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());

    const deletedHead = linkedList.deleteHead();

    expect(deletedHead).toBe(headValue);
    expect(linkedList.head?.value).toBe(nextHeadValue);
  });

  it("should clean the [SinglyLinkedList] if delete the only [Node]", () => {
    const linkedList = new SinglyLinkedList<string>();
    const nodeValue = faker.name.fullName();

    linkedList.append(nodeValue);
    linkedList.delete(nodeValue);

    expect(linkedList.head).toBeNull();
  });

  it("should return null if [deleteTail] in a empty [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<string>();
    const deleteResult = linkedList.deleteTail();

    expect(deleteResult).toBeNull();
  });

  it("should [deleteTail] in the [SinglyLinkedList] with only one [Node]", () => {
    const name = new Node<string>(faker.name.fullName());
    const linkedList = new SinglyLinkedList<string>(name);
    const deleteResult = linkedList.deleteTail();

    expect(deleteResult).toBe(name.value);
    expect(linkedList.head).toBeNull();
  });

  it("should [deleteTail] in the [SinglyLinkedList] with many [Node]", () => {
    const tail = faker.name.fullName();
    const nextTail = faker.name.fullName();
    const linkedList = new SinglyLinkedList<string>();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(nextTail);
    linkedList.append(tail);

    const deleteResult = linkedList.deleteTail();

    expect(deleteResult).toBe(tail);
    expect(linkedList.tail?.value).toBe(nextTail);
  });

  it("should create a [SinglyLinkedList] with object [Node]", () => {
    const node = new Node<Person>(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    const linkedList = new SinglyLinkedList<Person>(node);

    expect(linkedList.size).toBe(1);
    expect(linkedList.head?.value).toBe(node.value);
  });

  it("should print all classes [Nodes] in the [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<Person>();
    const spyToPrint = jest.spyOn(linkedList, "toPrint");

    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.toPrint(linkedList.head);

    expect(spyToPrint).toBeCalledTimes(6);
  });

  it("should search a class [Node] in the [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<Person>();
    const person = new Person(faker.name.fullName(), +faker.random.numeric(2));

    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(person);

    const found = linkedList.search(linkedList.head, person, Person.isEqual);

    expect(found).toHaveLength(2);
    expect(found[1]).toBe(person);
  });

  it("should return the deleted value in a [SinglyLinkedList]", () => {
    const linkedList = new SinglyLinkedList<Person>();
    const person = new Person(faker.name.fullName(), +faker.random.numeric(2));

    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(person);
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));

    const deleteResult = linkedList.delete(person, Person.isEqual);

    expect(deleteResult).toEqual(person);
  });
});
