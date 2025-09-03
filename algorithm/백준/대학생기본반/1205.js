/** https://www.acmicpc.net/problem/1205
nodemon algorithm/백준/template.js
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `0 0 50
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, newScore, P] = input().split(' ').map(Number);
const ranking = input().split(' ').map(Number);

ranking.push(newScore);
ranking.sort((a, b) => b - a);
let answer = -1;
let rank = 1;
for (let i = 0; i < ranking.length; i++) {
  if (i === P) break;
  if (newScore === ranking[i]) {
    answer = rank;
    break;
  }
  rank++;
}

console.log(ranking[answer - 1] === ranking[P] ? -1 : answer);
