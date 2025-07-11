// https://www.acmicpc.net/problem/17269
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : 
`3 2
BOJ IN
`
).split('\n'); 

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// N,M,V 인풋
// const [N, M, V] = input().split(' ').map(Number);
const [N,M] = input().split(' ').map(Number);
const [A, B] = input().split(' ');
const dict = { 'A': 3, 'B': 2, 'C': 1, 'D': 2, 'E': 4, 'F': 3, 'G': 1, 'H': 3, 'I': 1, 'J': 1, 'K': 3, 'L': 1, 'M': 3, 'N': 2, 'O': 1, 'P': 2, 'Q': 2, 'R': 2, 'S': 1, 'T': 2, 'U': 1, 'V': 1, 'W': 1, 'X': 2, 'Y': 2, 'Z': 1 }

let str = [];
for (let i = 0; i < Math.max(N, M); i++){
  if(A[i]) str.push(A[i]);
  if(B[i]) str.push(B[i]);
}
let score = [];
for (let x of str) {
  score.push(dict[x]);
}
while (score.length > 2) {
  score = score.map((v, i, arr) => (v + arr[i + 1]) % 10);
  score.pop();
}
console.log(+score.join("")+"%");
