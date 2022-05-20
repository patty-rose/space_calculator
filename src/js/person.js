import Calculators from '../src/js/calculators.js'

export default class Person {
  constructor(earthAge, isSmoker, sleepsWell, isRich, eatsFish, hasInboxZero, wearsTallSocks) {
    this.earthAge = earthAge;
    this.isSmoker = isSmoker;
    this.sleepsWell = sleepsWell;
    this.isRich = isRich;
    this.eatsFish = eatsFish;
    this.hasInboxZero = hasInboxZero;
    this.wearsTallSocks = wearsTallSocks;
  }

  calculateMercuryAge() {
    this.mercuryAge = (Math.round(this.earthAge * .24));
    return this.mercuryAge
  }

  calculateVenusAge() {
    this.venusAge = (Math.round(this.earthAge * .62));
    return this.venusAge
  }

  calculateMarsAge() {
    this.marsAge = (Math.round(this.earthAge * 1.88));
    return this.marsAge
  }

  calculateJupiterAge() {
    this.jupiterAge = (Math.round(this.earthAge * 11.86));
    return this.jupiterAge
  }

  calculateEarthYearsLeft() {
    let earthYearsLeft;
    let yearsToLive = 72;
    (this.isSmoker === true) ? yearsToLive -= 1 : yearsToLive += 1;
    (this.sleepsWell === true) ? yearsToLive += 3 : yearsToLive -= 3;
    (this.isRich === true) ? yearsToLive += 6 : yearsToLive -= 6;
    (this.eatsFish === true) ? yearsToLive += 2 : yearsToLive -= 2;
    (this.hasInboxZero === true) ? yearsToLive += 4 : yearsToLive -= 4;
    (this.wearsTallSocks === true) ? yearsToLive += 3 : yearsToLive -= 3;
    this.earthYearsExpected = yearsToLive;
    if (yearsToLive > this.earthAge) {
      earthYearsLeft = (yearsToLive - this.earthAge);
    } else {
      earthYearsLeft = (this.earthAge - yearsToLive);
    } return earthYearsLeft
  }
}