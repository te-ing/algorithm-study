/** https://www.acmicpc.net/problem/1764
nodemon algorithm/백준/template.js
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 3
a
b
c
a
b
constructor
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(Number);
const A = Array.from({ length: N }, () => input());
const B = Array.from({ length: M }, () => input());

const answer = [];
const obj = {};

for (let x of A) {
  obj[x] = true;
}
for (let x of B) {
  if (obj[x] === true) answer.push(x);
}

console.log(answer.length);
answer.sort();
answer.forEach((v) => console.log(v));
