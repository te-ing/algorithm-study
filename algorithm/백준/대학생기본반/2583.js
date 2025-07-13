// https://www.acmicpc.net/problem/2583
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M, K] = input().split(' ').map(Number);
const arr = Array.from({ length: K }, () => input().split(' ').map(Number));
const grid = Array.from({ length: N }, () => Array(M).fill(false));
for (let [x, y, w, z] of arr) {
  for (let i = x; i < w; i++) {
    for (let j = y; j < z; j++) {
      grid[j][i] = true;
    }
  }
}
let count = 0;
let answer = [];

const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1]
];

const bfs = (target, cnt) => {
  const queue = [target];
  while (queue.length) {
    const [x, y] = queue.shift();
    cnt++;
    for (let [dx, dy] of dir) {
      const [nx, ny] = [x + dx, y + dy];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (!grid[nx][ny]) {
          grid[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }
  return cnt;
};
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!grid[i][j]) {
      grid[i][j] = true;
      const cnt = bfs([i, j], 0);
      answer.push(cnt);
      count++;
    }
  }
}
console.log(count);
console.log(answer.sort((a, b) => a - b).join(' '));
