// https://www.acmicpc.net/problem/10026
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const grid = Array.from({ length: N }, () => input().split(''));
const check = Array.from({ length: N }, () => Array(N).fill(false));
const checkRB = Array.from({ length: N }, () => Array(N).fill(false));
const answer = [0, 0];

const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1]
];

const bfs = (node, isRB) => {
  const queue = [node];
  while (queue.length) {
    const [x, y] = queue.pop();
    for (let [dx, dy] of dir) {
      const [nx, ny] = [x + dx, y + dy];
      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if (
          isRB &&
          !checkRB[nx][ny] &&
          (grid[x][y] === grid[nx][ny] || (grid[x][y] !== 'B' && grid[nx][ny] !== 'B'))
        ) {
          checkRB[nx][ny] = true;
          queue.push([nx, ny]);
        }
        if (!isRB && !check[nx][ny] && grid[x][y] === grid[nx][ny]) {
          check[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }
  if (isRB) {
    answer[1]++;
  } else answer[0]++;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!checkRB[i][j]) {
      bfs([i, j], true);
    }
    if (!check[i][j]) {
      bfs([i, j], false);
    }
  }
}
console.log(answer.join(' '));
