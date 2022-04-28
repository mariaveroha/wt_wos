
let name = 'Vlad';

let func = function(name) {
    //console.log(name);
}

// console.log(name);
func('Masha');

let json = {
    name: 'Vlad',
    last_name: 'Verokha',
    city: 'Tver',
    array: [123],
    json: {
        name: 'Vlad'
    },
    func: function (name) {
        console.log(name);
    },
    'long name': 123
};

json.func('Masha');

// console.log(json['last_name']);
// console.log(json.last_name);

//-------------


let letVariable = 'this is let';
if (2 > 1) {
    var varVariable = 'this is var';

}

console.log(varVariable);
console.log(letVariable);

//----------------------

// function check (c) {
//     if (c%2 == 0) {
//         return ('чётное')
//     }
//     else {
//         return ('нечетное')
//     }
// }

let check = (c) => {
    if (c%2 == 0) {
        return ('чётное')
    }
    else {
        return ('нечетное')
    }
}

let hello = (c) => console.log('hello');

hello();
console.log(check(20));

/////--------------
function clicked()
{
    alert('you click me');
}

let button2 = document.getElementById('button2'); // получение элемента по id

button2.addEventListener('click', function () {
    alert('you click me 2');
});

let button3 = document.querySelector('.button3'); // один элемент из всей выборки
button3.addEventListener('click', function () {
    alert('you click me 3');
});

let button3_4 = document.querySelectorAll('.button3'); // вся выборка
