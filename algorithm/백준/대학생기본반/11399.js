/** https://www.acmicpc.net/problem/11399
nodemon algorithm/백준/template.js
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
3 1 4 3 2
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = input().split(' ').map(Number);
const answer = [];
let sum = 0;
arr.sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
  sum += arr[i];
  answer.push(sum);
}
console.log(answer.reduce((a, b) => a + b, 0));
