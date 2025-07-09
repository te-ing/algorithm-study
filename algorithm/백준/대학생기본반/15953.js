// https://www.acmicpc.net/problem/15953
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : 
`6
8 4
13 19
8 10
18 18
8 25
13 16
`
).split('\n'); 

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// N,M,V 인풋
// const [N, M, V] = input().split(' ').map(Number);
const N = input()
const rank = [];
for (let i = 0; i < N; i++){
  rank.push(input().split(' ').map(Number))
}
const first = [0, 500, 300, 300, 200, 200, 200, 50, 50, 50, 50, 30, 30, 30, 30, 30, 10, 10, 10, 10, 10, 10,];
const second = [0, 512, 256, 256, 128, 128, 128, 128, 64, 64, 64, 64, 64, 64, 64, 64];
second.push(...new Array(16).fill(32));
first.push(...new Array(100).fill(0));
second.push(...new Array(100).fill(0));
for(let [a, b] of rank) {
  console.log((first[a]+second[b])* 10000);
}
