'use strict';

/*console.log(document.querySelector('.message')); //This will select an element   (We are using console.log for illustrartion only , it will also work without it)

console.log(document.querySelector('.message').textContent); //This wll select content from an element (We are using console.log for illustrartion only , it will also work without it)

document.querySelector('.number').textContent = 12; //To manipulate the value of an element

console.log(document.querySelector('.guess').value); // To read the value  */

let score = 20;
let highScore = 0;
console.log(score);
let number = Math.trunc(Math.random() * 20 + 1);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!'); // Replaced repeated code with help of a function
    // document.querySelector('.score').textContent = score;
    displayScore(score);
    score--;
  } else if (guess === number) {
    // document.querySelector('.message').textContent = '🥳 Congratulations ';
    displayMessage('🎉 You Won The Game ... ');
    document.querySelector('body').style.backgroundColor = '#42E80D';
    document.querySelector('.number').style.width = `30rem`;
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '📈 Too High' : '📉 Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game');
      displayScore('0');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
