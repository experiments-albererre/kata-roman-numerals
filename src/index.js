const ROMAN_TABLE = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I"
};
const ROMAN_TABLE_KEYS = Object.keys(ROMAN_TABLE).reverse();

export const fromNumber = (value) => {
  if (typeof value !== 'number' || value < 0 || !Number.isInteger(value)) {
    throw new Error('No number');
  }

  let result = '';
  ROMAN_TABLE_KEYS.forEach(key => {
    while (value >= key) {
      value -= key;
      result += ROMAN_TABLE[key];
    }
  });
  return result;
};
