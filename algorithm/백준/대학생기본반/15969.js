// https://www.acmicpc.net/problem/15969
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync(0).toString()
  : 
`8
85 42 79 95 37 11 72 32
`
).split('\n'); 

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// const [N, M, V] = input().split(' ').map(Number); // N,M,V 인풋
input();
const score = input().split(' ').map(Number)
const answer = Math.max(...score) - Math.min(...score);
console.log(answer);