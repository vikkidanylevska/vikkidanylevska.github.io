;(function IIFE(){
	"use strict";


var playList = [
 {
  author: "LED ZEPPELIN",
  song:"STAIRWAY TO HEAVEN"
 },
 {
  author: "QUEEN",
  song:"BOHEMIAN RHAPSODY"
 },
 {
  author: "LYNYRD SKYNYRD",
  song:"FREE BIRD"
 },
 {
  author: "DEEP PURPLE",
  song:"SMOKE ON THE WATER"
 },
 {
  author: "JIMI HENDRIX",
  song:"ALL ALONG THE WATCHTOWER"
 },
 {
  author: "AC/DC",
  song:"BACK IN BLACK"
 },
 {
  author: "QUEEN",
  song:"WE WILL ROCK YOU"
 },
 {
  author: "METALLICA",
  song:"ENTER SANDMAN"
 }
];

// const list = document.createElement('ol');
// document.body.appendChild(list);

// function add (item) {
// 	const itemList = document.createElement('li');
// 	document.ol.appendChild(itemList);



// function map(itemLst){

	for (i = 0; i < playList.length; ++i) {
		alert(playList[i]);
 	}
}

// map(playList);

var uls = document.getElementById('wrap').querySelectorAll('ul');
       var li;
       for (var i = 0; i < uls.length; i++) {
           li = document.createElement("li");
           li.innerText = "NewLi";
           uls[i].appendChild(li);
       }




}) ();