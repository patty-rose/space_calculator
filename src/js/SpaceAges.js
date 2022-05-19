export default class SpaceAges {
  constructor(earthAge, isSmoker, sleepsWell, isRich, eatsFish, hasInboxZero, wearsTallSocks) {
    this.earthAge = earthAge;
    this.isSmoker = isSmoker;
    this.sleepsWell = sleepsWell;
    this.isRich = isRich;
    this.eatsFish = eatsFish;
    this.hasInboxZero = hasInboxZero;
    this.wearsTallSocks = wearsTallSocks;
    this.mercuryAge;
    this.venusAge;
  };

  calculateMercuryAge() {
    this.mercuryAge = (Math.round(this.earthAge * .24));
    return this.mercuryAge
  };

  calculateVenusAge() {
    this.venusAge = (Math.round(this.earthAge * .62));
    return this.venusAge
  };

  calculateMarsAge() {
    this.marsAge = (Math.round(this.earthAge * 1.88));
    return this.marsAge
  };

  calculateJupiterAge() {
    this.jupiterAge = (Math.round(this.earthAge * 11.86));
    return this.jupiterAge
  };

  calculateEarthYearsLeft() {
    let earthYearsLeft;//set earthYearsLeft variable
    let earthYearsExpected = 72;//set earthYearsExpected variable
    if (this.isSmoker === true) {
      earthYearsExpected -= 1;
    } else if (this.isSmoker === false) {
      earthYearsExpected += 1//run through demographic booleans adding and subtracting on earthYearsExpected
    //this.earthYearsExpected = earthYearsExpected;
    // earthYearsLeft = earthYearsExpected - earthAge;
    //return earthYearsLeft;
  }
}