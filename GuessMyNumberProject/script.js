'use strict';

//console.log(document.querySelector('.message'));
//document.querySelector('.message').textContent = 'successful ! Correct answer';
// console.log(document.querySelector('.number'));
//document.querySelector('.guess').value = 23;

// document.querySelector('.s...') => select html elements
let score = 20;
let highestScore = 0;
let number = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('No Number !');
  } else if (guess === number) {
    displayMessage('🌼Correct Number !');
    document.querySelector('.number').textContent = number;

    highestScore = Math.max(highestScore, score);
    document.querySelector('.highscore').textContent = highestScore;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '🔥too High !' : '❄️too low !');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      // displayMessage('💥You lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = '20';
  displayMessage('start guessing');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
