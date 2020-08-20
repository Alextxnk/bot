'use strict';

alert('Угадай число от 1 до 100');

function getRandomInt(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    return function(){
        console.log(Math.floor(Math.random() * (max - min)) + min); 
    };
  }

  const number = getRandomInt(1, 100);
  number();
  console.log(number);
  console.dir(number);

/*const start = function(){
    do{
    guessTheNumber = +prompt('Введите число');
    }
    while (!randomNumber)
}*/

let guessTheNumber;

  function guessNumber(){
    guessTheNumber = +prompt('Введите число');

      if(guessTheNumber > number){
          alert('Загаданное число меньше');
          return guessTheNumber = +prompt('Введите число поменьше');
      } else if (guessTheNumber < number){
          alert('Загаданное число больше');
          return guessTheNumber = +prompt('Введите число побольше');
      } else if (!isNumber(guessTheNumber)){
          alert('Введите число!');
          return guessTheNumber = +prompt('Введите число!');
      } else if (typeof(guessTheNumber) === false){
          return  console.log('Игра окончена');
          //break;
      }
  }
  guessNumber();