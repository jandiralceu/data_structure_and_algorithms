import * as recursion from "./printNToOne";
import { faker } from "@faker-js/faker";

describe("printNToOne", () => {
  it("should print all numbers from N to 1", () => {
    const spyPrintNToOne = jest.spyOn(recursion, "printNToOne");
    const value = +faker.random.numeric();
    recursion.printNToOne(value);

    expect(spyPrintNToOne).toHaveBeenCalledTimes(value + 1);
  });
});
