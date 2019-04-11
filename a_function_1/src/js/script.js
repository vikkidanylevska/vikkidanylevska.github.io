;(function IIFE(){
	"use strict";

var start = +prompt("Enter the start number of interval", "1");
var end = +prompt("Enter the last number of interval", "20");
const primeNumbers = [];

function isPrimeNumber(start, end) {

nextPrime:
for (var i = start; i <= end; i++) {

   if (i == 2) {

   	primeNumbers.push(i);
   	continue;	

	}else if (i < 2 || i % 2 == 0) continue;

		for (var j = i-1 ; j > 2 ; j--) {

			if (i % j == 0) continue nextPrime;
		}
		primeNumbers.push(i);
	}
}

isPrimeNumber(start, end);

alert("Prime numbers in this interval: " + primeNumbers);

}) ();