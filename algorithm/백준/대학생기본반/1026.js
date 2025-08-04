/** https://www.acmicpc.net/problem/1026
nodemon algorithm/백준/template.js
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `9
5 15 100 31 39 0 0 3 26
11 12 13 2 3 4 5 9 1
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const A = input().split(' ').map(Number);
const B = input().split(' ').map(Number);

let answer = 0;
A.sort((a, b) => a - b);
B.sort((a, b) => b - a);
for (let i = 0; i < N; i++) {
  answer += A[i] * B[i];
}
console.log(answer);
