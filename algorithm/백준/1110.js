// https://www.acmicpc.net/problem/1110
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `55
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();

const start = String(N).padStart(2, '0');
let curr = start[1] + (+start[0]+(+start[1]))%10
let count = 1;
while (start !== curr) {
  count++;
  const str = String(curr).padStart(2, '0');
  curr = str[1] + (+str[0] + (+str[1]))%10
}
console.log(count);