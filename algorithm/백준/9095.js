const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
: `3
4
7
10`
).split('\n');
// 7 44 274

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const n = Number(input());
const solution = (n) => {
  const d = Array(n + 1);
  d[1] = 1;
  d[2] = 2;
  d[3] = 4;
  for (let i = 4; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2] + d[i - 3];
  }
  return d[n]
}
for (let i = 0; i < n; i++){
  console.log(solution(input()));
}
