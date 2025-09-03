/** https://www.acmicpc.net/problem/10819
nodemon algorithm/백준/template.js
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6
20 1 15 8 4 10
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = input().split(' ').map(Number);
let answer = 0;
const list = [];
const visited = Array.from({ length: N }, () => false);
const dfs = (target, visit) => {
  if (target.length === N) {
    list.push(target.slice());
  } else {
    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(target.concat(arr[i]), visit);
        visited[i] = false;
      }
    }
  }
};
dfs([], visited);

for (let target of list) {
  let sum = 0;
  for (let i = 2; i < N + 1; i++) {
    sum += Math.abs(target[i - 2] - target[i - 1]);
  }
  answer = Math.max(sum, answer);
}
console.log(answer);
