"use strict";
// Imagina que node declara esta variable por tí.
// var exports = module.exports;

// Las variables locales del modulo serán de ambito privado
var BASE_10 = 10;
var BASE_36 = 36;
var FILLED_6 = "000000";
var FIELD_SIZE = 6;

exports.to36 = function(numero) {
  return (FILLED_6 + parseInt(numero, BASE_10).toString(BASE_36).toUpperCase()).slice(-FIELD_SIZE);
};

exports.to10 = function(texto) {
  return parseInt(texto, BASE_36);
};
