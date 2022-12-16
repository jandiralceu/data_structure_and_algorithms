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
linkedList.toString();

console.log('\nDelete item:');
console.log(linkedList.delete(23))

/// Print all values in the [LinkedList]
linkedList.toPrint(linkedList.list);

console.log(`\nSearch for an existing item: ${linkedList.search(linkedList.list, 1)}`);

console.log(`\nSearch for an un-existing item: ${linkedList.search(linkedList.list, 100)}`);

console.log(`\nLinkedList has ${linkedList.size} nodes.`);

console.log(`\nDelete the last node: ${linkedList.deleteTail()}.`);

/// Print all values in the [LinkedList]
linkedList.toPrint(linkedList.list);

console.log(`\nDelete the first node: ${linkedList.deleteHead()}.`);

/// Print all values in the [LinkedList]
linkedList.toPrint(linkedList.list);

console.log('');

// Insert a node in position 2
linkedList.insertPosition(2, 200);

/// Print all values in the [LinkedList]
linkedList.toPrint(linkedList.list);

console.log('');

// Insert a node in position 2
linkedList.insertPosition(4, 900);

/// Print all values in the [LinkedList]
linkedList.toPrint(linkedList.list);