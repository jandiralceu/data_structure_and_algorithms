export const printNToOne = (value: number): void => {
  if (value <= 0) return;

  console.log(value);
  printNToOne(value - 1);
};
