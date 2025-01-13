class Point { 
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(2, 4);
const p2 = new Point(-8, -1);
console.log(Point.distance(p1, p2));