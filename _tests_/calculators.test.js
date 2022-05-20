import Calculators from '../src/js/calculators.js'
import Person from '../src/js/person';

describe('Calculators', () => {
  let calculator;
  let testPerson;

  beforeEach(() => {
    testPerson = new Person(30, false, false, false, true, true, true);
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

  test('should calculate persons age on the different planets', () => {
    expect(calculator.calcPlanetaryAge("earth")).toEqual(30);
    expect(calculator.calcPlanetaryAge("mercury")).toEqual(7);
    expect(calculator.calcPlanetaryAge("venus")).toEqual(19);
    expect(calculator.calcPlanetaryAge("mars")).toEqual(56);
    expect(calculator.calcPlanetaryAge("jupiter")).toEqual(356);
  })
})
