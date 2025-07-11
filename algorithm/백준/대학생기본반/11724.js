// https://www.acmicpc.net/problem/11724
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `6 5
1 2
2 5
5 1
3 4
4 6
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(Number);
const arr = Array.from({ length: M }, () => input().split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
let answer = 0;
for (let [x,y] of arr) {
  graph[x].push(y);
  graph[y].push(x);
}
const check = Array.from({ length: N+1 }, () => false);

const DFS = (node) => {
  check[node] = true;
  for (let next of graph[node]) {
    if (!check[next]) {
      DFS(next);
    }
  }
}

for (let i = 1; i < N + 1; i++){
  if(check[i] === false){
    answer++;
    DFS(i);
  }
}

console.log(answer);