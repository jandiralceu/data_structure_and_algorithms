import { LinkedList } from "./linked_list";

// Create an [LinkedList]
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

/// Print all values in the linked list after deletion
linkedList.toString();

console.log(`\nSearch for an existing item: ${linkedList.search(7)}`);

console.log(`\nSearch for an un-existing item: ${linkedList.search(100)}`);

console.log(`\nLinkedList has ${linkedList.size} nodes.`)