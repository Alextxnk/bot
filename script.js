'use strict';

let guessTheNumber = prompt('Угадай число от 1 до 100');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
    };
  
  const number = getRandomInt(1, 100);
  console.log(number);

  function guessNumber(){

      if(guessTheNumber > number){
          guessTheNumber = prompt('Загаданное число меньше');
          return guessNumber();
      } else if (guessTheNumber < number){
        guessTheNumber = prompt('Загаданное число больше');
          return guessNumber();
      } else if (!Number(guessTheNumber)){
        guessTheNumber = prompt('Введите число!');
          return guessNumber();
      } else if (number == null){
          return alert('Игра окончена');
      } else if (guessTheNumber == number){
          return alert('Поздравляю) Вы отгадали число!');
      }
  }
  guessNumber();