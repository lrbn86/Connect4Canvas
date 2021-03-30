class Piece {
  constructor(x, y, radius, color, filled, strokeWidth, ctx) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.filled = filled;

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    if (filled) {
      ctx.fill();
    }
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
    ctx.closePath();
  }
}

export default Piece;
