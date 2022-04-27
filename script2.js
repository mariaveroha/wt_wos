
// задачи
var a = 11;
var b = 24;

if (a%2 == 0) {console.log ('четное')}
else if (!(a%2 == 0)) {console.log ('нечетное')};

if (b%2 == 0) {console.log ('четное')}
else if (!(b%2 == 0)) {console.log ('нечетное')};





var m = 54;
if ( m>50) {console.log ('большое')}
else if (m < 50) {console.log ('маленькое')};




if (a > 10 | b < 20);
// задачи









// глава 2


 /*
 var txt, nam;
txt = 'введите ваше имя'
nam = prompt (txt);
if ( nam == "") {
    document.write ('жаль, но вы не представились')
}
else {
    document.write ('приятно познакомиться, '+nam+'')
};
*/




function f (x) {
   if (x<0) {return 0 
} 
else {
    if ( x<2 ) {
        return x*x
    }


else {
    if (x<5)
    { return 6-x
    }
    else {
        return 1
     }
    }
  }
};
document.write ( '<h4> функция </h4>');
document.write ('<img src="function.png" width = "500" height="300 "<br> <br>');
var z = 9*Math.random()-2;
document.write ("случайный аргумент= <b> "+z+" </b> <br> ");
document.write ("значение функции = <b> "+f (z)+" </b> <br>");


var n = 100;
var k = 1;
var s= 0;
var txt = '1 <sup>2</sup> + 2 <sup>2</sup> + ...+'
txt = txt + n + '<sup>2</sup>='
while (k<=100) {
k++
s= s+k*k
}
document.write (txt+s);

/*
var b = 3+4;
switch (b) {
    case 5 :
        alert ( 'маловато');
        break
    case 7 :
        alert ( 'в точку');
        break
    case  10:
        alert ( 'многовато');  


} 
*/



function check (c) {
    if (c%2 == 0) {
       return ('чётное')
    }
    else {
        return ('нечетное')
    }
}
alert (check (f))