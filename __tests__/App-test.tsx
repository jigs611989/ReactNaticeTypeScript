/**
 * @format
 */

import 'react-native';

export const add = (a: number, b: number) => a + b;

describe('Verify Jest Config', () => {
  it('should add two numbers', () => {
    expect(add(1, 1)).toEqual(2);
  });
});
