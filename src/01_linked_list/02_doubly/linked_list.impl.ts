import { LinkedList } from "./linked_list";
import { Node } from "./node";

const linkedList = new LinkedList<string>();

linkedList.append("Jandir");
linkedList.append("Alceu");
linkedList.append("Manuel");
linkedList.append("Cutabiala");
linkedList.append("Last Name");

linkedList.toPrint(linkedList.values);

console.log("\nDelete the first node");
linkedList.deleteHead();
linkedList.toPrint(linkedList.values);

console.log("\nDelete the last node");
linkedList.deleteTail();
linkedList.toPrint(linkedList.values);

const reverse = linkedList.reverse();

if (reverse != null) {
  let current: Node<string> | null = reverse;

  console.log(`\nThe reverse Linked List: `);
  while (current != null) {
    current.toString();
    current = current.next;
  }
}
