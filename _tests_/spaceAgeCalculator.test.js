import spaceAgeCalculator from '../src/js/spaceAgeCalculator.js'

describe('spaceAgeCalculator', () => {

  test('should correctly create an object with earth age', () => {
    const testAge(30) = new spaceAgeCalculator;
    expect(testAge.earthAge).toEqual(30);
  });
})