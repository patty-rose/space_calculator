import SpaceAges from '../src/js/SpaceAges.js'

describe('SpaceAges', () => {
  let testAge;

  beforeEach(() => {
    testAge = new SpaceAges(30);
  });

  test('should correctly create a spaceAges object with earth age', () => {
    expect(testAge.earthAge).toEqual(30);
  });
  
  test('should correctly calculate mercuryAge based on earthAge', () => {
    expect(testAge.calculateMercuryAge()).toEqual(7);
  });

  test('should correctly calculate venusAge based on earthAge', () => {
    expect(testAge.calculateVenusAge()).toEqual(19);
  });
})