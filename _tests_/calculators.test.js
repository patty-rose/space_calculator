import {Person, Calculators} from '../src/js/calculators.js';

describe('Person', () => {
  let testPerson;
  
  beforeEach(() => {
    testPerson = new Person(30, false, false, false, true, true, true);
  });

  test('should correctly create a Person object with Earth age', () => {
    expect(testPerson.earthAge).toEqual(30);
  });

  test('should determine how many years a user has left to live on Earth', () => {
    expect(testPerson.calculateEarthYearsLeft()).toEqual(43);
  });
});

describe('Calculators', () => {
  let calculator;
  let testPerson;

  beforeEach(() => {
    testPerson = new Person(30, false, false, false, true, true, true);
    calculator = new Calculators(testPerson);
  })

  test('should create calculator object', () => {
    expect(calculator.person).toEqual(testPerson)
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

  test('should determine how many years Person should expect to live on each planet', () => {
    expect(calculator.calcLifeExpectancy("earth")).toEqual(73);
    expect(calculator.calcLifeExpectancy("mercury")).toEqual(18);
    expect(calculator.calcLifeExpectancy("venus")).toEqual(45);
    expect(calculator.calcLifeExpectancy("mars")).toEqual(137);
    expect(calculator.calcLifeExpectancy("jupiter")).toEqual(866);
  });

  test('should determine how many years Person has left to live on each planet', () => {
    expect(calculator.calcYearsLeft("earth")).toEqual(43 + " years left!");
    expect(calculator.calcYearsLeft("mercury")).toEqual(11 + " years left!");
    expect(calculator.calcYearsLeft("venus")).toEqual(26 + " years left!");
    expect(calculator.calcYearsLeft("mars")).toEqual(81 + " years left!");
    expect(calculator.calcYearsLeft("jupiter")).toEqual(510 + " years left!");
  })
})
