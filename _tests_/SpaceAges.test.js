import SpaceAges from '../src/js/SpaceAges.js'

describe('SpaceAges', () => {

  test('should correctly create a spaceAges object with earth age', () => {
    const testAge = new SpaceAges(30);
    expect(testAge.earthAge).toEqual(30);
  });
})