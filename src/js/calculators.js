import Person from '../src/js/person'; 

export default class Calculators {
  constructor(person) {
    this.person = person;
  }

  calcPlanetProportion(planet) {
    let planetProportion;
    const planetYearsMap = {
      earth : 1,
      mercury : .24,
      venus : .62,
      mars : 1.88,
      jupiter : 11.86,
    };
    planetProportion = planetYearsMap[planet];
    return planetProportion
  }
}