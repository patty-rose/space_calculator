import SpaceAges from '../src/js/SpaceAges.js'
describe('Calculators', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculators();
  })

  test('should create calculator object', () => {
    expect(calculator).toEqual(calculator)
  });

  test('should calculate planet solar years proportion to Earth', () => {
    expect(calculator.calcPlanetProportion("earth")).toEqual(1);
    expect(calculator.calcPlanetProportion("mercury")).toEqual(.24);
    expect(calculator.calcPlanetProportion("venus")).toEqual(.62);
    expect(calculator.calcPlanetProportion("mars")).toEqual(1.88);
    expect(calculator.calcPlanetProportion("jupiter")).toEqual(11.86);
  });
})

describe('SpaceAges', () => {
  let testAge;

  beforeEach(() => {
    testAge = new SpaceAges(30, false, false, false, true, true, true);
  });

  test('should correctly create a SpaceAges object with Earth age', () => {
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