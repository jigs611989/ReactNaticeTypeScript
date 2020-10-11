import { isValidName } from '../src/util/util';

describe('Name Valiadtion', () => {
  it('should be true for valid name', () => {
    const isValid = isValidName('FirstName');
    expect(isValid).toBe(true);
  });

  it('should be false for valid name', () => {
    const isValid = isValidName('FirstName432D');
    expect(isValid).toBe(false);
  });

  it('should be true for valid name including white space', () => {
    const isValid = isValidName('FirstName LastName');
    expect(isValid).toBe(true);
  });
});
