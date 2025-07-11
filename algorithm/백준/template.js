// https://www.acmicpc.net/problem/1652
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `5
....X
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// const [N, M, V] = input().split(' ').map(Number);
// const N = +input();
// const grid = Array.from({ length: N }, () => input().split(""));
