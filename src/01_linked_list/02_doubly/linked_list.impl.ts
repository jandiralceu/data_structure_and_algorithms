import { LinkedList } from "./linked_list";
import { Node } from "./node";

const linkedList = new LinkedList<string>();

linkedList.append("Jandir");
linkedList.append("Alceu");
linkedList.append("Manuel");
linkedList.append("Cutabiala");
linkedList.append("Last Name");

linkedList.toPrint(linkedList.values);

let reverse = linkedList.reverse();

if (reverse) {
  let current: Node<string> | null = reverse;

  console.log(`\nThe reverse Linked List: `);
  while (current) {
    current.toString();
    current = current.next;
  }
}
