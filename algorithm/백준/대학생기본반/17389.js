// https://www.acmicpc.net/problem/17389
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : 
`8
XOOOXOOX
`
).split('\n'); 

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// N,M,V 인풋
// const [N, M, V] = input().split(' ').map(Number);
const N = input();
const score = input();
let answer = 0;
let bonus = 0;
for (let i = 1; i <= score.split("").length; i++) {
  if (score[i-1] === "O") {
    answer += i + bonus++;
  } else {
    bonus = 0
  }
}
console.log(answer);