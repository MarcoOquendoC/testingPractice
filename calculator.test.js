import {operations} from './calculator.js';

describe('Test calculator add feature', () => {
  test('4+2 should return 6', () => {
    expect(operations.add(4, 2)).toBe(6);
  });
  test('4+(-2) should return 2', () => {
    expect(operations.add(4, -2)).toBe(2);
  });
  test('(-4)+2 should return -2', () => {
    expect(operations.add(-4, 2)).toBe(-2);
  });
  test('(-4)+(-2) should return -6', () => {
    expect(operations.add(-4, -2)).toBe(-6);
  });
});

describe('Test calculator substract feature', () => {
  test('4-2 should return 2', () => {
    expect(operations.substract(4, 2)).toBe(2);
  });
  test('4-(-2) should return 6', () => {
    expect(operations.substract(4, -2)).toBe(6);
  });
  test('(-4)-2 should return -6', () => {
    expect(operations.substract(-4, 2)).toBe(-6);
  });
  test('(-4)-(-2) should return -2', () => {
    expect(operations.substract(-4, -2)).toBe(-2);
  });
});

describe('Test calculator divide feature', () => {
  test('4/2 should return 2', () => {
    expect(operations.divide(4, 2)).toBe(2);
  });
  test('4/(-2) should return -2', () => {
    expect(operations.divide(4, -2)).toBe(-2);
  });
  test('(-4)/2 should return -2', () => {
    expect(operations.divide(-4, 2)).toBe(-2);
  });
  test('4/0 should throw an error', () => {
    expect(operations.divide(-4, 0)).toBe('Error: Second Argument could not be zero');
  });
});

describe('Test calculator multiply feature', () => {
  test('4*2 should return 8', () => {
    expect(operations.multiply(4, 2)).toBe(8);
  });
  test('4*(-2) should return -8', () => {
    expect(operations.multiply(4, -2)).toBe(-8);
  });
  test('(-4)*2 should return -8', () => {
    expect(operations.multiply(-4, 2)).toBe(-8);
  });
  test('4*0 should return 0', () => {
    expect(operations.multiply(4, 0)).toBe(0);
  });
});