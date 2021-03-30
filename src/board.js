import Piece from './piece.js';

let playerColor = '#ac0d0d';
let opponentColor = '#f0c929';
let currentTurn = true;

const ROWS = 6;
const COLUMNS = 7;

let board = [];

class Board {

  constructor(ctx) {
    this.selections = [];
    this.initializeBoard();
    this.renderBoard(ctx);
  }

  initializeBoard() {
    for (let i = 1; i <= COLUMNS; i++) {
      let obj = {x: i * 90 + 25, y: 30, radius: 15, color: null, filled: false, strokeWidth: 2};
      this.selections.push(obj);
    }

    for (let i = 1; i <= ROWS; i++) {
      let row = [];
      for (let j = 1; j <= COLUMNS; j++) {
        let obj = {x: j * 90 + 25, y: i * 90 + 10, radius: 30, color: null, filled: false, strokeWidth: 3};
        row.push(obj);
      }
      board.push(row);
    }
  }

  updateBoard(column) {
    let currentColor;
    if (currentTurn) {
      currentColor = playerColor;
    } else {
      currentColor = opponentColor;
    }
    for (let i = 5; i >= 0; i--) {
      if (!board[i][column].filled) {
        board[i][column].color = currentColor;
        board[i][column].filled = true;
        currentTurn = !currentTurn;
        return;
      }
    }
  }

  renderBoard(ctx) {
    for (let i = 0; i < this.selections.length; i++) {
      let s = this.selections[i];
      new Piece(s.x, s.y, s.radius, s.color, s.filled, s.strokeWidth, ctx);
    }

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let piece = board[i][j];
        new Piece(piece.x, piece.y, piece.radius, piece.color, piece.filled, piece.strokeWidth, ctx);
      }
    }
  }

  checkBoardCondition() {
    // TODO: CHECK WINNING CONDITIONS FOR PLAYER
    console.log('Who is winning...?')
  }

}

export default Board;
