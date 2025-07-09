// https://www.acmicpc.net/problem/2480
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : 
`3 3 6
`
).split('\n'); 

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// N,M,V 인풋
const [N, M, V] = input().split(' ').map(Number);
const dict = new Map();
let answer = 0;
dict.set(N, (dict.get(N) || 0) + 1);
dict.set(M, (dict.get(N) || 0) + 1);
dict.set(V, (dict.get(N) || 0) + 1);
if (dict.size === 3) {
  answer = Math.max(N, M, V) * 100;
} else if (dict.size === 2) {
  answer = (dict.get(N) >= dict.get(M) ? N : M) * 100 + 1000;
} else answer = M * 1000 + 10000;
console.log(answer);