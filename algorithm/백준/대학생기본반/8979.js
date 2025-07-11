// https://www.acmicpc.net/problem/8979
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `4 2
1 3 0 0
3 0 0 0
4 0 0 0
2 0 0 0
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, K] = input().split(' ').map(Number);
const score = Array.from({ length: N }, () => input().split(" ").map(Number));
score.sort((a, b) => {
  if (b[1] === a[1] && b[2] === a[2]) {
    return b[3] > a[3] ? 1 : -1
  } else if (b[1] === a[1]) {
    return b[2] > a[2] ? 1 : -1
  } else return b[1] > a[1] ? 1 : -1
})
let answer = score.findIndex((v) => v[0] === K) + 1;
let target = score.findIndex((v) => v[0] === K);
let same = target - 1;
while (score[same] && score[target][1] === score[same][1] && score[target][2] === score[same][2] && score[target][3] === score[same][3]) {
  same--;
  answer--;
}
same = target + 1;
console.log(answer);
