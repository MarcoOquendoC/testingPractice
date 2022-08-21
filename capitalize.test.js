import { capitalizeFirst } from './capitalize.js';

describe('Test capitalize first letter feature', () => {
  test('input "marco" should return "Marco"', () => {
    expect(capitalizeFirst('marco')).toBe("Marco");
  });
});