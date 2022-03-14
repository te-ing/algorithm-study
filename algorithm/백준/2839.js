const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
: `18`
).split('\n');
// 4

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
let n = Number(input());

const solution = (n) => {
  let cnt = 0;
  while (n>=0) {
    if (n % 5 === 0 && n % 3 === 0) {
      return Math.min(cnt + n / 5, cnt + n / 3);
    }
    if (n % 5 === 0) {
      return cnt+n/5
    }
    n -= 3;
    cnt++;
  }
  return -1
}
console.log(solution(n))