13-
let son = +prompt('3 xonali son=');
let yuz = (son - son % 100) / 100;

let on = (son % 100 - son % 10) / 10;
let bir = son % 10;

if (son > 100 && son < 999) {
    alert(on + "" + yuz + "" + bir);
} else {
    alert("Iltimos, 3 xonali son kiriting!");
}



14
let son = +prompt('3 xonali son=');
let yuz = (son - son % 100) / 100;


let on = (son % 100 - son % 10) / 10;
let bir = son % 10;

if (son > 100 && son < 999) {
    alert(yuz + "" + bir + "" + on);
} else {
    alert("Iltimos, 3 xonali son kiriting!");
}



15
let son = +prompt('3 xonali son=');
let yuz = (son - son % 100) / 100;


let on = (son % 100 - son % 10) / 10;
let bir = son % 10;

if (son > 100 && son < 999) {
    alert(on + "" + yuz + "" + bir);
} else {
    alert("Iltimos, 3 xonali son kiriting!");
}



16 
let son = +prompt('3 xonali son=');
let yuz = (son - son % 100) / 100;


let on = (son % 100 - son % 10) / 10;
let bir = son % 10;

if (son > 100 && son < 999) {
    alert(yuz + "" + bir + "" + on);
} else {
    alert("Iltimos, 3 xonali son kiriting!");
}



17
let son=+prompt('4 xonali sonni kiriting:');
// let yuz=(son%1000-son%100)/100;

if (son > 999 && son < 10000) {


    alert(yuz);
} else {
    alert("Iltimos, 4 xonali son kiriting!");
}



18
let son=+prompt('4 xonali sonni kiriting:');
let ming=(son-son%1000)/1000;

if (son > 999 && son < 10000) {

    alert(ming);
} else {
    alert("Iltimos, 4 xonali son kiriting!");
}





19
let s=+prompt("Kun boshidan kecha sekund vaqt o'tti?");
let m=(s-s%60)/60;
alert("Kun boshidan " + m + " minut o'tti");




20
let s=+prompt("Kun boshidan kecha sekund vaqt o'tti?");
let m=(s-s%60)/60;
let h=(m-m%60)/60;

alert("Kun boshidan " + h + " soat o'tti");



21
let s=+prompt("Kun boshidan kecha sekund vaqt o'tti?");
// let sec=s%60; 
let m=(s-s%60)/60;
alert("Kun boshidan " + m + " minut " + sec + " sekund o'tti");



22
let s=+prompt("Kun boshidan kecha sekund vaqt o'tti?");
let sec=s%60; 
// let m=(s-s%60)/60;
let h=(m-m%60)/60;
alert("Kun boshidan " + h + " soat " + sec + " sekund o'tti");


23
let s=+prompt("Kun boshidan kecha sekund vaqt o'tti?");
let sec=s%60; 
let m=(s-s%60)/60;
let min=m%60;
let h=(m-m%60)/60;
alert("Kun boshidan " + h + " soat " + min + " minut " + sec + " sekund o'tti");
