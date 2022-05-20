import Calculators from '../src/js/calculators.js'

describe('Calculators', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculators("testPerson");
  })

  test('should create calculator object', () => {
    expect(calculator.person).toEqual("testPerson")
  });

  test('should calculate planet solar years proportion to Earth', () => {
    expect(calculator.calcPlanetProportion("earth")).toEqual(1);
    expect(calculator.calcPlanetProportion("mercury")).toEqual(.24);
    expect(calculator.calcPlanetProportion("venus")).toEqual(.62);
    expect(calculator.calcPlanetProportion("mars")).toEqual(1.88);
    expect(calculator.calcPlanetProportion("jupiter")).toEqual(11.86);
  });
})
