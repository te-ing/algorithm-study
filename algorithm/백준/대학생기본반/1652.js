// https://www.acmicpc.net/problem/1652
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `5
....X
..XX.
.....
.XX..
X....
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = Array.from({ length: N }, () => input().split(""));

const answer = [0, 0];

for (let x = 0; x < N; x++){
  let xCnt = 0;
  let yCnt = 0;
  for (let y = 0; y < N; y++){
    xCnt = arr[x][y] === "." ? xCnt + 1 : 0;
    yCnt = arr[y][x] === "." ? yCnt + 1 : 0;
    xCnt === 2 && answer[0]++
    yCnt === 2 && answer[1]++
  }
}
console.log(answer.join(" "));
