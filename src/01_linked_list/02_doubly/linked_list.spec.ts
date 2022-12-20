import { DoublyLinkedList } from "./linked_list";
import { Node } from "./node";

import { Person } from "@/00_helpers";
import { faker } from "@faker-js/faker";

describe("DoublyLinkedList", () => {
  it("should create an empty [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<number>();

    expect(linkedList.head).toBe(null);
    expect(linkedList.size).toBe(0);
  });

  it("should create a [DoublyLinkedList] with a [Node]", () => {
    const node = new Node<string>(faker.random.words(6));
    const linkedList = new DoublyLinkedList<string>(node);

    expect(linkedList.size).toBe(1);
    expect(linkedList.head?.value).toBe(node.value);
  });

  it("should return null for tail if [DoublyLinkedList] is empty", () => {
    const linkedList = new DoublyLinkedList<string>();

    expect(linkedList.tail).toBeNull();
  });

  it("should prepend a [Node] in a [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<string>(new Node<string>(faker.name.fullName()));
    const nextNodeValue = faker.name.fullName();

    linkedList.prepend(nextNodeValue);

    expect(linkedList.head?.value).toBe(nextNodeValue);
    expect(linkedList.size).toBe(2);
  });

  it("should prepend a [Node] in a [DoublyLinkedList] empty", () => {
    const linkedList = new DoublyLinkedList<string>();
    const nextNodeValue = faker.name.fullName();

    expect(linkedList.size).toBe(0);

    linkedList.append(nextNodeValue);

    expect(linkedList.size).toBe(1);
    expect(linkedList.head?.value).toBe(nextNodeValue);
  });

  it("should append a [Node] in a [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<string>(new Node<string>(faker.name.fullName()));
    const nextNodeValue = faker.name.fullName();

    linkedList.append(nextNodeValue);

    expect(linkedList.size).toBe(2);
    expect(linkedList.tail?.value).toBe(nextNodeValue);
  });

  it("should reverse a  [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<string>();

    const lastNodeValue = faker.random.words(5);

    linkedList.append(faker.random.words(5));
    linkedList.append(faker.random.words(5));
    linkedList.append(faker.random.words(5));
    linkedList.append(lastNodeValue);

    const reverse = linkedList.reverse();

    expect(reverse?.value).toBe(lastNodeValue);
  });

  it("should return the current head if reverse an empty [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<string>();

    const reverse = linkedList.reverse();

    expect(reverse).toBeNull();
  });

  it("should [deletedHead] in the [DoublyLinkedList]", () => {
    const headValue = faker.name.fullName();
    const nextHeadValue = faker.name.fullName();
    const linkedList = new DoublyLinkedList<string>();

    linkedList.append(headValue);
    linkedList.append(nextHeadValue);
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());

    const deletedHead = linkedList.deleteHead();

    expect(deletedHead).toBe(headValue);
    expect(linkedList.head?.value).toBe(nextHeadValue);
  });

  it("should return [null] if [deletedHead] in an empty [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<string>();

    expect(linkedList.deleteHead()).toBeNull();
  });

  it("should clean the [DoublyLinkedList] if [deleteHead] and there isn't a next value", () => {
    const headValue = faker.name.fullName();
    const linkedList = new DoublyLinkedList<string>();

    linkedList.append(headValue);

    const deletedHead = linkedList.deleteHead();

    expect(deletedHead).toBe(headValue);
    expect(linkedList.head).toBeNull();
  });

  it("should [deleteTail] in the [DoublyLinkedList]", () => {
    const tailValue = faker.name.fullName();
    const nextTailValue = faker.name.fullName();
    const linkedList = new DoublyLinkedList<string>();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(nextTailValue);
    linkedList.append(tailValue);

    const deletedHead = linkedList.deleteTail();

    expect(deletedHead).toBe(tailValue);
    expect(linkedList.tail?.value).toBe(nextTailValue);
  });

  it("should return [null] if [deletedTail] in an empty [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<string>();

    expect(linkedList.deleteTail()).toBeNull();
  });

  it("should clean the [DoublyLinkedList] if [deleteTail] and there isn't a previous value", () => {
    const tailValue = faker.name.fullName();
    const linkedList = new DoublyLinkedList<string>();

    linkedList.append(tailValue);

    const deletedHead = linkedList.deleteTail();

    expect(deletedHead).toBe(tailValue);
    expect(linkedList.head).toBeNull();
  });

  it("should print all [Nodes] in the [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<Person>();
    const spyToPrint = jest.spyOn(linkedList, "toPrint");

    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
    linkedList.toPrint(linkedList.head);

    expect(spyToPrint).toBeCalledTimes(6);
  });

  it("should search a [Node] in the [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<string>();
    const name = faker.name.fullName();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(name);
    linkedList.append(faker.name.fullName());

    const found = linkedList.search(linkedList.head, name);

    expect(found).toHaveLength(2);
    expect(found[1]).toBe(name);
  });

  it("should search an invalid [Node] in the [DoublyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<string>();

    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());
    linkedList.append(faker.name.fullName());

    const found = linkedList.search(linkedList.head, faker.name.fullName());

    expect(found).toHaveLength(1);
    expect(found[0]).toBe(-1);
  });

  it("should search a class [Node] in the [SinglyLinkedList]", () => {
    const linkedList = new DoublyLinkedList<Person>();
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
});
