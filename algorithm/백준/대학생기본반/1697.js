// https://www.acmicpc.net/problem/1697
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 17 
`
) // 4
  .split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
const [N, K] = input().split(' ').map(Number);
const check = Array.from({ length: 100_000 }, () => false);
const queue = [[N, 0]];
let head = 0;
check[N] = true;
while (queue.length) {
  const [curr, cnt] = queue[head++];
  if (curr === K) {
    console.log(cnt);
    return;
  }
  for (let i = -1; i < 2; i++) {
    let next = i === 0 ? curr * 2 : curr + i;
    if (next >= 0 && next <= 100_000 && !check[next]) {
      check[curr] = true;
      queue.push([next, cnt + 1]);
    }
  }
}
