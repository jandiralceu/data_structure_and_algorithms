import { CircularLinkedList } from "./linked_list";

describe("CircularLinkedList", () => {
  it("should create a [CircularLinkedList]", () => {
    const linkedList = new CircularLinkedList<number>();

    expect(linkedList).toBeInstanceOf(CircularLinkedList);
  });
});
