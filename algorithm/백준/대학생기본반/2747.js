// https://www.acmicpc.net/problem/2747
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : 
`10
`
).split('\n'); 

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// const [N, M, V] = input().split(' ').map(Number); // N,M,V 인풋
const N = +input();
const memo = [];

const fib = (n) => {
  if (n <= 1) return n;
  if (memo[n] === undefined) {
    memo[n] = fib(n - 1) + fib(n - 2);
  }
  return memo[n]
}
console.log(fib(N))