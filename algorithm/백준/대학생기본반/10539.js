// https://www.acmicpc.net/problem/10539
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : 
`1
3 2 3 5
`
).split('\n'); 

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// N,M,V 인풋
// const [N, M, V] = input().split(' ').map(Number);
input()
const N = input().split(' ').map(Number);
const answer = [N[0]];
for (let i = 1; i < N.length; i++){
  let sum = answer.reduce((a, b) => a + b, 0);
  answer.push((N[i] * (i + 1)) - sum);
}
console.log(...answer);