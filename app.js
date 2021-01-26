
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
  checkWinner(result);
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

//check if there is an X
var checkForX = () => {

}

//check if there is an O

//on a click, also call function f1 to check if there's a winner
var checkWinner = (board) => {
  //board is an array.
  var squaresWithX = {
                      rows: [],
                      columns: []
                    };
  var squaresWithO = {
                      rows: [],
                      columns: []
                    };

  //Loop through each row of the board
  for (var r = 0; r < board.length; r++) {
    var row = board[r];
    //For each row of board, loop through each column.
    for (var c = 0; c < row.length; c++) {
      var squareValue = row[c];
      var squarePosition = [];
      if (squareValue === 'X') {
        squaresWithX.rows.push(r);
        squaresWithX.columns.push(c);
        // squarePosition.push(r);
        // squarePosition.push(c);
        // squaresWithX.push(squarePosition);
      }

      if (squareValue === 'O') {
        squaresWithO.rows.push(r);
        squaresWithO.columns.push(c);
        // squarePosition.push(r);
        // squarePosition.push(c);
        // squaresWithO.push(squarePosition);
      }
    }
  }

  var countXRowWinner = {
    0: 0,
    1: 0,
    2: 0
  };

  var countXColumnWinner = {
    0: 0,
    1: 0,
    2: 0
  };

  var countORowWinner = {
    0: 0,
    1: 0,
    2: 0
  };

  var countOColumnWinner = {
    0: 0,
    1: 0,
    2: 0
  };

  /* X */
  if (squaresWithX.rows.length >= 3) {

    for (var xRow = 0; xRow < squaresWithX.rows.length; xRow++) {
      countXRowWinner[squaresWithX.rows[xRow]] = countXRowWinner[squaresWithX.rows[xRow]] + 1;
    }

    for (var xColumn = 0; xColumn < squaresWithX.columns.length; xColumn++) {
      countXColumnWinner[squaresWithX.columns[xColumn]] = countXColumnWinner[squaresWithX.columns[xColumn]] + 1;
    }

  }

  if (squaresWithO.rows.length >= 3) {

    for (var oRow = 0; oRow < squaresWithO.rows.length; oRow++) {
      countORowWinner[squaresWithO.rows[oRow]] = countORowWinner[squaresWithO.rows[oRow]] + 1;
    }

    for (var oColumn = 0; oColumn < squaresWithO.columns.length; oColumn++) {
      countOColumnWinner[squaresWithO.columns[oColumn]] = countOColumnWinner[squaresWithO.columns[oColumn]] + 1;
    }

  }

  // if (countXRowWinner[0] >= 1 && countXRowWinner[1] >= 1 && countXRowWinner[2] >= 1 && countXColumnWinner[0] >= 1 && countXColumnWinner[1] >= 1 && countXColumnWinner[2] >= 1) {
  //   alert('X won diagonally!');
  // } else if (countORowWinner[0] >= 1 && countORowWinner[1] >= 1 && countORowWinner[2] >= 1 && countOColumnWinner[0] >= 1 && countOColumnWinner[1] >= 1 && countOColumnWinner[2] >= 1) {
  //   alert('O won diagonally!');
  // }
  if (countXRowWinner[0] >= 1 && countXRowWinner[0] === countXRowWinner[1] && countXRowWinner[0] === countXRowWinner[2] && countXColumnWinner[0] >= 1 && countXColumnWinner[0] === countXColumnWinner[1] && countXColumnWinner[0] === countXColumnWinner[2]) {
    alert('X won diagonally!');
  }

  //Diagonal win

  console.log('countXColumnWinner: ', countXColumnWinner);
  console.log('countXRowWinner: ', countXRowWinner);
  console.log('countOColumnWinner: ', countOColumnWinner);
  console.log('countORowWinner: ', countORowWinner);
  console.log('squaresWithX: ', squaresWithX);
  console.log('squaresWithO: ', squaresWithO);
}

/*
Keep track of where all the X's are
Loop through the board.



Keep track of where all the Y's are
*/

/* winning board example:
  [
    ['X', '', 'O'],
    ['', 'X', 'O'],
    ['', '',  'X'],
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