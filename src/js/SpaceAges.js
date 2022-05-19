export default class SpaceAges {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge;
  }

  calculateMercuryAge() {
    this.mercuryAge = (Math.round(this.earthAge * .24));
    return this.mercuryAge;
  }
}