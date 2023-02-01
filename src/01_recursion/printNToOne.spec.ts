import * as recursion from "./printNToOne";
import { faker } from "@faker-js/faker";

describe("printNToOne", () => {
  it("should print all numbers from N to 1", () => {
    const spyPrintNToOne = jest.spyOn(recursion, "printNToOne");
    const value = +faker.random.numeric();
    recursion.printNToOne(value);

    expect(spyPrintNToOne).toHaveBeenCalledTimes(value + 1);
  });

  it("should call once if value is equals to 0", () => {
    const spyPrintNToOne = jest.spyOn(recursion, "printNToOne");
    recursion.printNToOne(0);

    expect(spyPrintNToOne).toHaveBeenCalledTimes(1);
  });
});
