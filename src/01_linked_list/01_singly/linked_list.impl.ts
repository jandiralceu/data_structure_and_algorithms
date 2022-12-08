import { LinkedList } from "./linked_list";

// Create an empty linked list
const list = new LinkedList<number>();

// Print head and tail
console.log(`head: ${list.head}, tail: ${list.tail}`);

list.append(1);
// Print head and tail
console.log(`head: ${list.head}, tail: ${list.tail}`);


list.append(2);
// Print head and tail
console.log(`head: ${list.head}, tail: ${list.tail}`);

list.append(9);
// Print head and tail
console.log(`head: ${list.head}, tail: ${list.tail}`);