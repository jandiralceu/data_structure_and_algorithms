import { LinkedList } from "./linked_list";

// Create an empty linked list
const list = new LinkedList<number>();

list.append(1);
list.append(2);
list.append(9);
list.prepend(7);
list.append(5);
list.append(30);
list.prepend(40);
list.append(23);

// Print all values in the linked list
// list.toString();

console.log(list.head);
list.toString();

console.log('\nDelete item:');
console.log(list.delete(23))

/// Print all values in the linked list after deletion
list.toString();

console.log(`\nSearch for an existing item: ${list.search(7)}`);

console.log(`\nSearch for an un-existing item: ${list.search(100)}`);

console.log(`\nLinkedList has ${list.size} nodes.`)