
//(f1) function to check if the board has a row of all X's or O's

/* Keep track of every div square on the board */
var topLeft = document.querySelector('.top-left-square');
var topMiddle = document.querySelector('.top-middle-square');
var topRight = document.querySelector('.top-right-square');
var middleLeft = document.querySelector('.middle-left-square');
var middleMiddle = document.querySelector('.middle-middle-square');
var middleRight = document.querySelector('.middle-right-square');
var bottomLeft = document.querySelector('.bottom-left-square');
var bottomMiddle = document.querySelector('.bottom-middle-square');
var bottomRight = document.querySelector('.bottom-right-square');
var latestSquareValue = '';

/* Places an X or O on square when clicked */
var onSquareClick = (event) => {

  if (latestSquareValue === '' || latestSquareValue === '&nbsp;') {
    event.target.innerHTML = 'X';
  } else if (event.target.innerHTML !== '&nbsp;') {
    event.target.innerHTML = '&nbsp;'
  } else if (latestSquareValue === 'X') {
    event.target.innerHTML = 'O';
  } else if (latestSquareValue === 'O') {
    event.target.innerHTML = 'X';
  }

  latestSquareValue = event.target.innerHTML;

  var result = getCurrentBoard();
  console.log('getCurrentBoard(): ', result);
}

/* Event listener on each square */
topLeft.addEventListener('click', onSquareClick);
topMiddle.addEventListener('click', onSquareClick);
topRight.addEventListener('click', onSquareClick);
middleLeft.addEventListener('click', onSquareClick);
middleMiddle.addEventListener('click', onSquareClick);
middleRight.addEventListener('click', onSquareClick);
bottomLeft.addEventListener('click', onSquareClick);
bottomMiddle.addEventListener('click', onSquareClick);
bottomRight.addEventListener('click', onSquareClick);

/* Return the current tic tac toe board with X's and O's */
var getCurrentBoard = () => {
  var board = [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
              ];

  //populate the board
  //top row
  board[0][0] = topLeft.innerHTML === '&nbsp;' ? '' : topLeft.innerHTML;
  board[0][1] = topMiddle.innerHTML === '&nbsp;' ? '' : topMiddle.innerHTML;
  board[0][2] = topRight.innerHTML === '&nbsp;' ? '' : topRight.innerHTML;

  //middle row
  board[1][0] = middleLeft.innerHTML === '&nbsp;' ? '' : middleLeft.innerHTML;
  board[1][1] = middleMiddle.innerHTML === '&nbsp;' ? '' : middleMiddle.innerHTML;
  board[1][2] = middleRight.innerHTML === '&nbsp;' ? '' : middleRight.innerHTML;

  //bottom row
  board[2][0] = bottomLeft.innerHTML === '&nbsp;' ? '' : bottomLeft.innerHTML;
  board[2][1] = bottomMiddle.innerHTML === '&nbsp;' ? '' : bottomMiddle.innerHTML;
  board[2][2] = bottomRight.innerHTML === '&nbsp;' ? '' : bottomRight.innerHTML;

  return board;
}


//on a click, also call function f1 to check if there's a winner
var checkWinner = (board) => {
  //board is an array.
}

/* winning board example:
  [
    ['X', '', 'O'],
    ['', 'X', 'O'],
    ['', '', 'X'],
  ];

  -- winner in a diagonal
  board[0][0]
  board[1][1]
  board[2][2]

  board[0][2]
  board[1][1]
  board[2][0]

  -- winner in a row
  board[0][0]
  board[0][1]
  board[0][2]

  board[1][0]
  board[1][1]
  board[1][2]

  board[2][0]
  board[2][1]
  board[2][2]

  -- winner in a column
  board[0][0]
  board[1][0]
  board[2][0]

  board[0][1]
  board[1][1]
  board[2][1]

  board[0][2]
  board[1][2]
  board[2][2]
*/

//button to clear the board