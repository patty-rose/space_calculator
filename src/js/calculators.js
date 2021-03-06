export class Person {
  constructor(earthAge, isSmoker, sleepsWell, isRich, eatsFish, hasInboxZero, wearsTallSocks) {
    this.earthAge = earthAge;
    this.isSmoker = isSmoker;
    this.sleepsWell = sleepsWell;
    this.isRich = isRich;
    this.eatsFish = eatsFish;
    this.hasInboxZero = hasInboxZero;
    this.wearsTallSocks = wearsTallSocks;
  }
}

export class Calculators {
  constructor(person) {
    this.person = person;
  }

  calcPlanetProportion(planet) {
    let planetProportion;
    const planetYearsMap = {
      earth : 100,
      mercury : 24,
      venus : 62,
      mars : 188,
      jupiter : 1186,
    };
    planetProportion = planetYearsMap[planet];
    return planetProportion;
  }

  calcPlanetaryAge(planet) {
    const planetProportion = this.calcPlanetProportion(planet);
    const planetaryAge = (Math.round(this.person.earthAge * (100 / planetProportion)));
    return planetaryAge;
  }

  calcLifeExpectancy(planet) {
    const planetProportion = this.calcPlanetProportion(planet);
    let yearsToLive = 72;
    (this.person.isSmoker === true) ? yearsToLive -= 1 : yearsToLive += 1;
    (this.person.sleepsWell === true) ? yearsToLive += 3 : yearsToLive -= 3;
    (this.person.isRich === true) ? yearsToLive += 6 : yearsToLive -= 6;
    (this.person.eatsFish === true) ? yearsToLive += 2 : yearsToLive -= 2;
    (this.person.hasInboxZero === true) ? yearsToLive += 4 : yearsToLive -= 4;
    (this.person.wearsTallSocks === true) ? yearsToLive += 3 : yearsToLive -= 3;
    let planetaryLifeExpectancy = (Math.round(yearsToLive * (100 / planetProportion)));
    return planetaryLifeExpectancy;
  }

  calcYearsLeft(planet) {
    const planetaryAge = this.calcPlanetaryAge(planet);
    const planetaryLifeExpectancy = this.calcLifeExpectancy(planet);
    let yearsLeft;
    if (planetaryLifeExpectancy > planetaryAge) {
      yearsLeft = (planetaryLifeExpectancy - planetaryAge);
      return yearsLeft + " more years!";
    } else {
      yearsLeft = (planetaryAge - planetaryLifeExpectancy);
      return "You have already lived " + yearsLeft + " years beyond expectancy!";
    } 
  }
}