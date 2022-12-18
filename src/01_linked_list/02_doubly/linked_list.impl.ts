import { LinkedList } from "./linked_list";
import { Person } from "@/00_helpers";
import { faker } from "@faker-js/faker";

/// Working with primitive type <string>
console.log("\n***************************** Using primitive *****************************");

const linkedListPrimitive = new LinkedList<string>();
linkedListPrimitive.append(faker.name.fullName());
linkedListPrimitive.append(faker.name.fullName());
linkedListPrimitive.append(faker.name.fullName());
linkedListPrimitive.append(faker.name.fullName());
linkedListPrimitive.append(faker.name.fullName());

console.log("\n[LinkedList] values");
linkedListPrimitive.toPrint(linkedListPrimitive.values);
console.log(`\n[LinkedList] Size: ${linkedListPrimitive.size}`);

console.log("\n[LinkedList] prepending");
linkedListPrimitive.prepend("Jandir Alceu");
linkedListPrimitive.toPrint(linkedListPrimitive.values);

console.log("\n[LinkedList] appending");
linkedListPrimitive.append("Daiane de Castro");
linkedListPrimitive.toPrint(linkedListPrimitive.values);

console.log(`\n[LinkedList] Size: ${linkedListPrimitive.size}`);

console.log("\nDelete the first [Node] in the [LinkedList]");
linkedListPrimitive.deleteHead();
linkedListPrimitive.toPrint(linkedListPrimitive.values);

console.log("\nDelete the last [Node] in the [LinkedList]");
linkedListPrimitive.deleteTail();
linkedListPrimitive.toPrint(linkedListPrimitive.values);

console.log(`\n[LinkedList] Size: ${linkedListPrimitive.size}`);

const reversePrimitiveList = linkedListPrimitive.reverse();
console.log(`\nReverse the [LinkedList]`);
reversePrimitiveList.toPrint(reversePrimitiveList.values);

console.log("");

/// Working with primitive type <string>
console.log("\n***************************** Using non-primitive *****************************");
const linkedListClass = new LinkedList<Person>();

linkedListClass.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
linkedListClass.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));
linkedListClass.append(new Person(faker.name.fullName(), +faker.random.numeric(2)));

console.log("\n[LinkedList] values");
linkedListClass.toPrint(linkedListClass.values);
console.log(`[LinkedList] Size: ${linkedListClass.size}`);

console.log("\n[LinkedList] prepending");
linkedListClass.prepend(new Person("Michael Jordan", 60));
linkedListClass.toPrint(linkedListClass.values);

console.log("\n[LinkedList] appending");
linkedListClass.append(new Person("Allen Iverson", 50));
linkedListClass.toPrint(linkedListClass.values);

console.log(`\n[LinkedList] Size: ${linkedListClass.size}`);

console.log("\nDelete the first [Node] in the [LinkedList]");
linkedListClass.deleteHead();
linkedListClass.toPrint(linkedListClass.values);

console.log("\nDelete the last [Node] in the [LinkedList]");
linkedListClass.deleteTail();
linkedListClass.toPrint(linkedListClass.values);

console.log(`\n[LinkedList] Size: ${linkedListClass.size}`);

const reverseNonPrimitive = linkedListClass.reverse();
console.log(`\nReverse the [LinkedList]`);
reverseNonPrimitive.toPrint(reverseNonPrimitive.values);

console.log("");
