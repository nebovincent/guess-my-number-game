'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

let guess = Number(document.querySelector('.guess').value);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.again').addEventListener('click', function () {
  if (guess === secretNumber || score <= 0) {
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    score = 20;

    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';

    // document.querySelector('.message').textContent = 'Start guessing...';

    displayMessage('Start Guessing...');

    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';
    document.querySelector('.prizeSection').style.display = 'none';

    document.querySelector('.check').disabled = false;
  }
});

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value); // ...check

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';

    displayMessage('No number!');

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    // document.querySelector('.message').textContent = 'Correct Number!';

    displayMessage('Correct Number!');

    document.querySelector('.check').disabled = true;

    document.querySelector('.prizeSection').style.display = 'block';

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector(
      '.prizeAmount'
    ).textContent = `Your prize is ${score} BTC`;

    // if (score > highScore) {
    //   score = highScore;
    //   document.querySelector('.highscore').textContent = highScore;
    // } ....check this

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Number too High!' : 'Number is too Low';

      displayMessage(
        guess > secretNumber ? 'Number too High!' : 'Number too Low!'
      );

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'YOU LOST';

      displayMessage('You Lost');

      //   score--;

      document.querySelector('.score').textContent = score;

      document.querySelector('body').style.backgroundColor = 'red';

      document.querySelector('.check').disabled = true;
    }
  }
});

// document.querySelector('.again').addEventListener('click', function () {
//   if (guess === secretNumber || score <= 0) {
//     secretNumber = Math.trunc(Math.random() * 20) + 1;

//     score = 20;

//     document.querySelector('.number').textContent = '?';

//     document.querySelector('body').style.backgroundColor = '#222';

//     // document.querySelector('.message').textContent = 'Start guessing...';

//     displayMessage('Start Guessing...');

//     document.querySelector('.score').textContent = score;

//     document.querySelector('.guess').value = ' ';
//     document.querySelector('.prizeSection').style.display = 'none';
//   }
// });
