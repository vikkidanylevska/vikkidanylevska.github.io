;(function IIFE(){
	"use strict";

var number = prompt("Введите числа через запятую", '1,2,3');
var numbers = number.split(",");
var n = +prompt("Введите множитель для этих чисел: " + numbers, '2');

function multiply(num){
	return num * n;
};

function map(multiply, numbers){
	var newNumbers = [];
 	for (var i = 0; i < numbers.length; ++i) {
 		newNumbers.push(multiply(numbers[i]));
 	} return newNumbers;
}
alert ("Числа " + numbers + " умноженные на " + n + " . Результат: " + map(multiply,numbers));

}) ();