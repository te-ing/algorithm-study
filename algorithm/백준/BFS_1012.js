const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
: `1
2 2 3
0 0
1 0
0 1`
).split('\n');


const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const T = Number(input());
for (let t = 0; t < T; t++){
  const [M, N, K] = input().split(' ').map(v => Number(v));
  const map = Array.from({ length: N }, () => Array(M).fill(0));
  const cabbages = [];
  let answer = 0;
  for (let i = 0; i < K; i++) {
    const [y, x] = input().split(' ').map(v=>Number(v));
    cabbages.push([x, y]);
    map[x][y] = 1;
  }
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  function BFS(x, y) {
    map[x][y] = 0;
    answer++;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[nx][ny] === 1) {
        answer-=2;
        BFS(nx, ny);
      }
    }
  }
  for (const [x, y] of cabbages) {
    BFS(x, y)
  }
  console.log(answer);
}
