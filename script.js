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
 
  console.dir(number);

  const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let guessTheNumber;

  function guessNumber(){
    guessTheNumber = +prompt('Введите число');

      if(guessTheNumber > number){
          alert('Загаданное число меньше');
          return guessNumber();
      } else if (guessTheNumber < number){
          alert('Загаданное число больше');
          return guessNumber();
      } else if (!isNumber(guessTheNumber)){
          alert('Введите число!');
          return guessNumber();
      } else if (typeof(guessTheNumber) === false){
          return console.log('Игра окончена');
      } else if (guessTheNumber === number){
          return console.log('Поздравляю) Вы отгадали число!');
      }
  }
  guessNumber();
  