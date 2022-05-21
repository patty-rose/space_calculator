import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import { Calculators, Person } from './calculators';

// UI Logic
function calculateAge(calculator, planet) {
  const planetaryAge = calculator.calcPlanetaryAge(planet);
  return planetaryAge;
}

function calculateYearsLeft(calculator, planet) {
  const yearsLeft = calculator.calcYearsLeft(planet);
  return yearsLeft;
}

// JQUERY UI Logic
$(document).ready(function() {
  $('form#spaceAge').submit(function(event) {
    event.preventDefault();
    const earthAge = $('#age').val();
    const isSmoker = $('#isSmoker').val();
    const sleepsWell = $('#sleepsWell').val();
    const isRich = $('#isRich').val();
    const eatsFish = $('#eatsFish').val();
    const hasInboxZero = $('#hasInboxZero').val();
    const wearsTallSocks = $('#wearsTallSocks').val();
    const person = new Person(earthAge, isSmoker, sleepsWell, isRich, eatsFish, hasInboxZero, wearsTallSocks);
    const calculator = new Calculators(person);

    const mercuryAge = calculateAge(calculator, "mercury");
    const mercuryYearsLeft = calculateYearsLeft(calculator, "mercury");
    const venusAge = calculateAge(calculator, "venus");
    const venusYearsLeft = calculateYearsLeft(calculator, "venus");
    const earthAgeDisplay = earthAge;
    const earthYearsLeft = calculateYearsLeft(calculator, "earth");
    const marsAge = calculateAge(calculator, "mars");
    const marsYearsLeft = calculateYearsLeft(calculator, "mars");
    const jupiterAge = calculateAge(calculator, "jupiter");
    const jupiterYearsLeft = calculateYearsLeft(calculator, "jupiter");
    console.log(venusAge, venusYearsLeft, mercuryAge, mercuryYearsLeft, earthAge, earthAgeDisplay, earthYearsLeft, marsAge, marsYearsLeft, jupiterAge, jupiterYearsLeft);
  });
});