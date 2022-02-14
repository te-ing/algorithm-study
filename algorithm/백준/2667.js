const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : 
`7
0110100
0110101
1110101
0000111
0100000
0111110
0111000
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = Number(input());
const map = [];
for (i = 1; i <= N; i++) {
  map.push(input().split('').map(v=>Number(v)));
} 
let num = 0;
const answer = [];

const DFS = ((house) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const [x, y] = house;
  if (map[x][y] === 0) {
    return
  } else {
    map[x][y] = 0;
    num++;
    for (let i = 0; i < 4; i++){
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < N && ny < N && map[nx][ny] === 1) {
        DFS([nx,ny])
      }
    }
  }
})

for (let i = 0; i < N; i++){
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      num = 0;
      DFS([i, j]);
      answer.push(num);
    }
  }
}
console.log(answer.length);
answer.sort((a,b)=>a-b).map(num => console.log(num));
