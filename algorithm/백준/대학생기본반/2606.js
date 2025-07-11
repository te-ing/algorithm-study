// https://www.acmicpc.net/problem/2606
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `7
6
1 2
2 3
1 5
5 2
5 6
4 7
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const M = +input();
const arr = Array.from({ length: M }, () => input().split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => [])
for (let [x, y] of arr) {
  graph[x].push(y);
  graph[y].push(x);
}

const visited = Array.from({ length: N + 1 }, () => false);
const dfs = (node) => {
  for (let x of graph[node]) {
    if (!visited[x]) {
      visited[x] = true;
      dfs(x)
    }
  }
}
visited[1] = true;
dfs(1)
console.log(visited.filter(v => v).length -1);