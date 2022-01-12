function solution(n, move) {
  const plans = move.split(' ');
  const move_types = ['L', 'R', 'U', 'D'];
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  let x = 1, y = 1;

  for (let plan of plans) {
    const idx = move_types.indexOf(plan)
    if (0 < x + dx[idx] && x + dx[idx] <= n) x += dx[idx];
    if (0 < y + dy[idx] && y + dy[idx] <= n) y += dy[idx];
  }

  return (`${x}, ${y}`)
}
console.log(solution(5, 'R R R U D D')) // 3
