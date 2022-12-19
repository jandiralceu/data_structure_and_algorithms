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

  static isEqual(person: Person, compare: Person): boolean {
    return person.name === compare.name && person.age === compare.age;
  }
}
