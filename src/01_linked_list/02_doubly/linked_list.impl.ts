import { LinkedList } from "./linked_list";

const linkedList = new LinkedList<string>();

linkedList.prepend('Jandir');
linkedList.prepend('Alceu');
linkedList.prepend('Manuel');
linkedList.prepend('Cutabiala');

linkedList.toPrint(linkedList.values);