const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
: `4 6
101111
101010
101011
111011`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(a=>Number(a));
const map = stdin.slice(1).map(a => a.split('').map(a=>Number(a)));
const checkMap = Array.from({ length: N }, () => Array(M).fill(0));
checkMap[0][0] = 1;
const findRoad = () => {
  const queue = [[0, 0]];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === N - 1 && y === M - 1) return checkMap[x][y];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    for (let i = 0; i < 4; i++){
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < N && ny < M && map[nx][ny] === 1) {
        queue.push([nx, ny]);
        map[nx][ny] = 0;
        checkMap[nx][ny] = checkMap[x][y] + 1;
      }
    }
  }
}
console.log(findRoad());
