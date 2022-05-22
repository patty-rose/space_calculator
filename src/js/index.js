import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import { Calculators, Person } from './calculators';

// UI Logic

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

    $("#mercuryAge").text(calculator.calcPlanetaryAge("mercury"));
    $("#mercuryYearsLeft").text(calculator.calcYearsLeft("mercury"));
    $("#venusAge").text(calculator.calcPlanetaryAge("venus"));
    $("#venusYearsLeft").text(calculator.calcYearsLeft("venus"));
    $("#earthAge").text(earthAge);
    $("#earthYearsLeft").text(calculator.calcYearsLeft("earth"));
    $("#marsAge").text(calculator.calcPlanetaryAge("mars"));
    $("#marsYearsLeft").text(calculator.calcYearsLeft("mars"));
    $("jupiterAge").text(calculator.calcPlanetaryAge("jupiter"));
    $("jupiterYearsLeft").text(calculator.calcYearsLeft("jupiter"));
  });
});