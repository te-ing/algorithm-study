/** https://www.acmicpc.net/problem/1931
nodemon algorithm/백준/template.js
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const timeTable = Array.from({ length: N }, () => input().split(' ').map(Number));
timeTable.sort((a, b) => {
  if (a[0] === b[0]) {
    if (a[1] < b[1]) {
      return -1;
    }
  } else if (a[0] < b[0]) {
    return -1;
  }
  return 1;
});
let curr = 0;
let cnt = 0;

for (let [a, b] of timeTable) {
  if (b < curr) {
    curr = b;
  } else if (a >= curr) {
    cnt++;
    curr = b;
  }
}

console.log(cnt);
