import Person from '../src/js/person';

describe('Person', () => {
  let testPerson;
  
  beforeEach(() => {
    testPerson = new Person(30, false, false, false, true, true, true);
  });

  test('should correctly create a Person object with Earth age', () => {
    expect(testPerson.earthAge).toEqual(30);
  });

  test('should correctly calculate mercuryAge based on earthAge', () => {
    expect(testPerson.calculateMercuryAge()).toEqual(7);
  });
  test('should correctly calculate venusAge based on earthAge', () => {
    expect(testPerson.calculateVenusAge()).toEqual(19);
  });
  test('should correctly calculate marsAge based on earthAge', () => {
    expect(testPerson.calculateMarsAge()).toEqual(56);
  });
  test('should correctly calculate jupiterAge based on earthAge', () => {
    expect(testPerson.calculateJupiterAge()).toEqual(356);
  });
  test('should determine how many years a user has left to live on Earth', () => {
    expect(testPerson.calculateEarthYearsLeft()).toEqual(43);
  });
});