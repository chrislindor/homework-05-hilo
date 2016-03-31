var generatedNumber,
    playerChoice,
    choicesLeft = 5,
    gameOver = false,
    $guess = $('#guessButton'),
    $guessLeft = $('#numberOfGuessesRemaining'),
    $guessInput = $('#guess'),
    $message = $('.message'),
    $reset = $('#reset');
    gameOverMessage = 'Game over press reset to play again',
    guessToHi = 'Your guess was to high',
    guessToLow = 'Your guess was to low',
    correctGuessMessage = 'You win the number was ';
var palyerNumb;

function randomNumber() {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

generatedNumber = randomNumber();
console.log('Computer number: ' + generatedNumber);

// function to generate and validate player number
// function decrease choicesLeft if number is valid so player wont lost turn on miss typed entry
function playerGuess() {
  playerChoice = parseInt($guessInput.val());
  $guessInput.val('');
  if (isNaN(playerChoice) || playerChoice < 1 || playerChoice > 100) {
    $message.attr('class', 'error');
    $message.text('Please enter a number between 1 and 100');
  } else {
    $message.attr('class', 'message');
    $message.text('');
    choicesLeft--;
    return playerChoice;
  }
}

// function to validate game choice and print correct number
function gameValidation() {
  if (playerNumb > generatedNumber) {
    $message.text(guessToHi);
  } else if (playerNumb < generatedNumber) {
    $message.text(guessToLow);
  } else {
    $message.attr('class', 'success');
    $message.text(correctGuessMessage + generatedNumber);
  }
}

// start game functions on click event
$guess.click(function(event) {
  event.preventDefault();
  playerNumb = playerGuess();
  $guessLeft.text(choicesLeft);
  console.log('Player choice: ' + playerNumb);
  gameValidation();
});

// $guess.click(function(event) {
//   event.preventDefault();
//   if (gameOver) {
//     $message.text('You won already please reset game');
//     $guessInput.val('');
//   } else if (choicesLeft > 0) {
//     playerChoice = parseInt($guessInput.val());
//     console.log('Player guess: ' + playerChoice);
//     choicesLeft--;
//     $guessLeft.text(choicesLeft);
//     $guessInput.val('');
//     if (isNaN(playerChoice) || playerChoice > 100) {
//       $message.text("Please enter a number between 1 and 100");
//     } else if (playerChoice === generatedNumber) {
//       $message.attr('class', 'success');
//       $message.text(correctGuessMessage + generatedNumber);
//       gameOver = true;
//     } else if (playerChoice > generatedNumber) {
//       if (choicesLeft === 0) {
//         $message.attr('class', 'error');
//         $message.text(gameOverMessage);
//       } else {
//         $message.text(guessToHi);
//       }
//     } else if (playerChoice < generatedNumber) {
//       if (choicesLeft === 0) {
//         $message.attr('class', 'error');
//         $message.text(gameOverMessage);
//       } else {
//         $message.text(guessToLow);
//       }
//
//     }
//   }
// });

$reset.click(function(event) {
  event.preventDefault();
  generatedNumber = randomNumber();
  console.log('Computer number: ' + generatedNumber);
  choicesLeft = 5;
  $guessLeft.text(choicesLeft);
  $guessInput.val('');
  $message.text('');
  $message.attr('class', 'message');
  gameOver = false;
});
