/** https://www.acmicpc.net/problem/1449
nodemon algorithm/백준/template.js
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 1
3 2 1
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(Number);
const arr = input().split(' ').map(Number);

arr.sort((a, b) => a - b);
let curr = arr[0] + M;
let cnt = 1;

for (let i = 1; i < N; i++) {
  if (curr - 0.5 < arr[i]) {
    cnt++;
    curr = arr[i] + M;
  }
}
console.log(cnt);
