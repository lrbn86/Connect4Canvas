import Board from './board.js';

const BG_COLOR = '#343f56';

var canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');

var board;

function render() {
  clearCanvas();
  board = new Board(ctx);
}

function update() {
  render();
}

function startGame() {
  handleEventListeners();
  update();
}

function stopGame() {}

// Handle user's interactions with the canvas here.
function handleEventListeners() {
  canvas.addEventListener('click', handleMouseDown);
}

function handleMouseDown(event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  for (let column = 0; column < board.selections.length; column++) {
    let s = board.selections[column];
    let centerX = s.x;
    let centerY = s.y;
    let radius = s.radius;
    if ((((mouseX - centerX)**2) + ((mouseY - centerY)**2)) < radius ** 2) {
      board.updateBoard(column);
    }
  }
  // TODO: 
  // We need to start thinking about 'columns', not 'circles'.
  // I.e the user will select a column instead of the empty circles directly.
  clearCanvas();
  board.renderBoard(ctx);
  board.checkBoardCondition();
}

function clearCanvas() {
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height); 
}

startGame();
