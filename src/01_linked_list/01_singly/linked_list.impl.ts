import { LinkedList } from "./linked_list";

const linkedList = new LinkedList<number>();

linkedList.append(1);
linkedList.append(2);
linkedList.append(9);
linkedList.prepend(7);
linkedList.append(5);
linkedList.append(30);
linkedList.prepend(40);
linkedList.append(23);

console.log(linkedList.list);
linkedList.toPrint(linkedList.list);

console.log("\nDelete item:");
console.log(linkedList.delete(23));

/// Print all values in the [LinkedList]
linkedList.toPrint(linkedList.list);

const [itemPosition, itemFound] = linkedList.search(linkedList.list, 1);
console.log(`\nSearch for an existing item:`);
console.log(`Position: `, itemPosition);
console.log(`Result: `, itemFound);

const notFoundItem = linkedList.search(linkedList.list, 100);
console.log(`\nSearch for an un-existing item: `, notFoundItem[0]);

console.log(`\nLinkedList has ${linkedList.size} nodes.`);

const deletedTail = linkedList.deleteTail();
console.log(`\nDelete the last node: `, deletedTail);

/// Print all values in the [LinkedList]
linkedList.toPrint(linkedList.list);

const deletedFirstNode = linkedList.deleteHead();
console.log(`\nDelete the first node: `, deletedFirstNode);

/// Print all values in the [LinkedList]
linkedList.toPrint(linkedList.list);

console.log("");

// Insert a node in position 2
linkedList.insertPosition(2, 200);

/// Print all values in the [LinkedList]
linkedList.toPrint(linkedList.list);

console.log("");

// Insert a node in position 2
linkedList.insertPosition(4, 900);

/// Print all values in the [LinkedList]
linkedList.toPrint(linkedList.list);
