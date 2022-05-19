export default class SpaceAges {
  constructor(earthAge) {
    this.earthAge = earthAge;
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
}