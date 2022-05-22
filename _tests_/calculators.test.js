import {Person, Calculators} from '../src/js/calculators.js';

describe('Person', () => {
  let testPerson;
  
  beforeEach(() => {
    testPerson = new Person(30, false, false, false, true, true, true);
  });

  test('should correctly create a Person object with Earth age', () => {
    expect(testPerson.earthAge).toEqual(30);
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
    expect(calculator.calcPlanetProportion("earth")).toEqual(100);
    expect(calculator.calcPlanetProportion("mercury")).toEqual(24);
    expect(calculator.calcPlanetProportion("venus")).toEqual(62);
    expect(calculator.calcPlanetProportion("mars")).toEqual(188);
    expect(calculator.calcPlanetProportion("jupiter")).toEqual(1186);
  });

  test('should calculate persons age on the different planets', () => {
    expect(calculator.calcPlanetaryAge("earth")).toEqual(30);
    expect(calculator.calcPlanetaryAge("mercury")).toEqual(125);
    expect(calculator.calcPlanetaryAge("venus")).toEqual(48);
    expect(calculator.calcPlanetaryAge("mars")).toEqual(16);
    expect(calculator.calcPlanetaryAge("jupiter")).toEqual(3);
  })

  test('should determine how many years Person should expect to live on each planet', () => {
    expect(calculator.calcLifeExpectancy("earth")).toEqual(73);
    expect(calculator.calcLifeExpectancy("mercury")).toEqual(304);
    expect(calculator.calcLifeExpectancy("venus")).toEqual(118);
    expect(calculator.calcLifeExpectancy("mars")).toEqual(39);
    expect(calculator.calcLifeExpectancy("jupiter")).toEqual(6);
  });

  test('should determine how many years Person has left to live on each planet', () => {
    expect(calculator.calcYearsLeft("earth")).toEqual(43 + " more years!");
    expect(calculator.calcYearsLeft("mercury")).toEqual(179 + " more years!");
    expect(calculator.calcYearsLeft("venus")).toEqual(70 + " more years!");
    expect(calculator.calcYearsLeft("mars")).toEqual(23 + " more years!");
    expect(calculator.calcYearsLeft("jupiter")).toEqual(3 + " more years!");
  });

  test('should determine how many years Person has lived beyond their life expectancy on each planet', () => {
    const tooOldPerson = new Person(100, true, true, true, false, false, false);
    const calc = new Calculators(tooOldPerson);
    expect(calc.calcYearsLeft("earth")).toEqual("You have already lived " + 29 + " years beyond expectancy!");
    expect(calc.calcYearsLeft("mercury")).toEqual("You have already lived " + 121 + " years beyond expectancy!");
    expect(calc.calcYearsLeft("venus")).toEqual("You have already lived " + 46 + " years beyond expectancy!");
    expect(calc.calcYearsLeft("mars")).toEqual("You have already lived " + 15 + " years beyond expectancy!");
    expect(calc.calcYearsLeft("jupiter")).toEqual("You have already lived " + 2 + " years beyond expectancy!");
  });
})
