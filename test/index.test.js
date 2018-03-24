import { fromNumber } from "../src";

describe('Index', () => {
  describe('fromNumber', () => {
    test('Debería convertir número a romano - Letra I', () => {
      expect(fromNumber(1)).toBe('I');
      expect(fromNumber(2)).toBe('II');
      expect(fromNumber(3)).toBe('III');
    });

    test('Debería convertir número a romano - Letra V', () => {
      expect(fromNumber(4)).toBe('IV');
      expect(fromNumber(5)).toBe('V');
    });

    test('Debería convertir número a romano - Letra X', () => {
      expect(fromNumber(9)).toBe('IX');
      expect(fromNumber(10)).toBe('X');
      expect(fromNumber(11)).toBe('XI');
    });

    test('Debería convertir número a romano - Letra Extra', () => {
      expect(fromNumber(2018)).toBe('MMXVIII');
      expect(fromNumber(2648)).toBe('MMDCXLVIII');
    });

    test('Caso especial de 0', () => {
      expect(fromNumber(0)).toBe('');
    });

    test('Caso especial de no number', () => {
      expect(() => fromNumber('No number')).toThrow();
    });
  });
});
