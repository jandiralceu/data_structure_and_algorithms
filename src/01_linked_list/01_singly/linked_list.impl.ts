import { LinkedList } from "./linked_list";

// Create an empty linked list
const list = new LinkedList<number>();

console.log(`Initial LinkedList Values:\nHead: ${list.head}, Tail: ${list.tail}`);

list.append(1);
list.append(2);
list.append(9);
list.prepend(7);
list.append(5);
list.append(30);
list.prepend(40);
list.append(23);

console.log(`Head: ${list.head}`);
console.log(`Tail: ${list.tail}`);

// Print all values in the linked list
console.log('\n');
list.toString();

console.log('Delete item:');
console.log(list.delete(9))

console.log('\n');
list.toString();