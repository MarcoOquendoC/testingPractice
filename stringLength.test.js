import stringLength from './stringLength.js';

describe('test the string length', () => {
  test('"to do li" input should return 6', () => {
    expect(stringLength('to do li')).toBe(6);
  });
  test('it should not accept zero characters', () => {
    expect(stringLength('    ')).toBe('input has no characters')
  });
  test('it should not accept zero characters', () => {
    expect(stringLength('too long to be tested')).toBe('input too long to be tested')
  });
});