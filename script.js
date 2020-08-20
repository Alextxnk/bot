'use strict';

let guessTheNumber = prompt('Угадай число от 1 до 100');

function getRandomInt(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    return function(){
        console.log(Math.floor(Math.random() * (max - min)) + min); 
    };
  }

  const number = getRandomInt(1, 100);
 
  console.dir(number);

  function guessNumber(){
    
      if(guessTheNumber > number){
          alert('Загаданное число меньше');
          return guessNumber();
      } else if (guessTheNumber < number){
          alert('Загаданное число больше');
          return guessNumber();
      } else if (!guessTheNumber(num)){
          alert('Введите число!');
          return guessNumber();
      } else if (typeof(guessTheNumber) === false){
          return console.log('Игра окончена');
      } else if (guessTheNumber === number){
          return console.log('Поздравляю) Вы отгадали число!');
      }
  }
  guessNumber();