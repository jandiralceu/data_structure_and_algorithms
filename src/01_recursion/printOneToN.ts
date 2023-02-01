export const printOneToN = (value: number): void => {
  if (value <= 0) return;

  printOneToN(value - 1);
  console.log(value);
};
