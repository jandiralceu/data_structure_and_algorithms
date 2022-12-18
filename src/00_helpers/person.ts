export class Person {
  #name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.#name = name;
    this.#age = age;
  }

  get name(): string {
    return this.#name;
  }

  get age(): number {
    return this.#age;
  }

  toString(): string {
    return `Name: ${this.name}\tAge: ${this.age}`;
  }

  isEqual(person: Person): boolean {
    return person.name === this.name && person.age === this.age;
  }
}
