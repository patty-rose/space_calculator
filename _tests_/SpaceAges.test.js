import SpaceAges from '../src/js/SpaceAges.js'

describe('SpaceAges', () => {
  let testAge;

  beforeEach(() => {
    testAge = new SpaceAges(30, false, false, false, true, true, true);
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

  test('should correctly calculate marsAge based on earthAge', () => {
    expect(testAge.calculateMarsAge()).toEqual(56);
  });

  test('should correctly calculate jupiterAge based on earthAge', () => {
    expect(testAge.calculateJupiterAge()).toEqual(356);
  });

  test('should determine how many years a user has left to live on Eart', () => {
    expect(testAge.calculateEarthYearsLeft()).toEqual(43);
  })
})