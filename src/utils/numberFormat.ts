export const compact = (value: number) => {
  return new Intl.NumberFormat("en-GB", { notation: "compact" }).format(value);
};
