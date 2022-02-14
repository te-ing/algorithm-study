const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
: `
`
).split('\n');


const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const solution = () => {};

console.log(solution());

/*
let t = input();
while (t--) {
  const [a, b] = input().split(' ').map(Number);
  console.log(a + b);
}
*/

/* 
let [n, m, v] = input().split(' ').map(Number);
const cycle = [], non = [];
v--;
input()
  .split(' ')
  .forEach((x, i) => {
    x = +x;
    if (i < v) non.push(x);
    else cycle.push(x);
  });

let ans = [];
for (let i = 0; i < m; i++) {
  const k = +input();
  if (k < v) ans.push(non[k]);
  else ans.push(cycle[(k - v) % (n - v)]);
}
console.log(ans.join('\n')); 
*/
