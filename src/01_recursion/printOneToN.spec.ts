import * as recursion from "./printOneToN";
import { faker } from "@faker-js/faker";

describe("printOneToN", () => {
  it("should print all numbers from 1 to N", () => {
    const spyPrintNToOne = jest.spyOn(recursion, "printOneToN");
    const value = +faker.random.numeric();
    recursion.printOneToN(value);

    expect(spyPrintNToOne).toHaveBeenCalledTimes(value + 1);
  });

  it("should call once if value is equals to 0", () => {
    const spyPrintNToOne = jest.spyOn(recursion, "printOneToN");
    recursion.printOneToN(0);

    expect(spyPrintNToOne).toHaveBeenCalledTimes(1);
  });
});
