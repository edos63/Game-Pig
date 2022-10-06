'use strict';

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let totalScore, currentScore, activePlayer, IsPlaying;

const inintGame = function () {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  IsPlaying = true;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  IsPlaying = true;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  activePlayer = 0;
  document.querySelector(`.player--1`).classList.remove('player--winner');
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  diceElement.classList.add('hidden');
};
const switchActivePlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (IsPlaying) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchActivePlayer();
    }
  }
});

inintGame();

btnHold.addEventListener('click', function () {
  if (IsPlaying) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    if (totalScore[activePlayer] >= 100) {
      IsPlaying = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchActivePlayer();
    }
  }
});

btnNew.addEventListener('click', inintGame);
