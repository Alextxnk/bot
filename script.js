'use strict';

let A = new Set();
let item;
const arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//for (let value of set) alert(value);

let lang = new Set(arrEn);

/*
langEn = prompt('Введите элементы множества');


console.log();
*/
item = prompt("Введите элементы множества");    
    
if (item === lang) {
    A.add(item);
}
console.log('Число элементов во множестве: ',item.length);

/*
const printset = function (){
    return('');
};
console.log(printset);
*/