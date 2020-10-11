import { saveName } from '../../src/redux/action/name';

describe('Save Name Action Valiadtion', () => {
  it('should be return valid object with type & name', () => {
    const expectedResult = {
      type: 'SAVE_NAME',
      name: 'FirstName',
    };
    const saveAction = saveName('FirstName');
    expect(saveAction).toEqual(expectedResult);
  });
});
