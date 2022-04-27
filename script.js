var a = '123'; // строковая переменная
var b = 123; // числовой
var c = [4, 5, 6]; // массив
c[2]; // =6
var d = {
    number: 3,
    number2: 4,
    login_key: 33
};
d.number2; // =4
d.login_key; // =33

var e = a+b;
a = a+b;
b = a+b;

// console.log(d); // выводит на экран
// alert('ALERT');

//==============

/*

Длинный 
комментарий

*/

var number1 = 100;
var number2 = 200;
var number3 = 300;

// && = и
// || = или
if(number1 > number2 && number1 > number3) {

} else if (number2 > number1 && number2 > number3) {
    
} else if (number3 > number1 && number3 > number2) {
    
}


var number4 = 5;
var number5 = 66;
var number6 = 7;
var check = (number5 > 5 || number5 < 7); //true
if(number5 > 5 || number5 < 7) {
    console.log('yappi');
}

var bool1 = true; // булевы переменные
var bool2 = false;

if(!(2 > 1)) {
    console.log('123');
}
