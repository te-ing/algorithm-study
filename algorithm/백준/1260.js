const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `4 5 1
1 2
1 3
1 4
2 4
3 4
`
//  :`5 5 3
//  5 4
//  5 2
//  1 2
//  3 4
//  3 1
//  :`1000 1 1000
// 999 1000
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// N,M,V 인풋
const [N, M, V] = input().split(' ').map(Number);

const map = Array.from(({ length: M }) => new Array());
for (i = 0; i < M; i++) {
  const [start, end] = input().split(' ').map(Number);
  map[i] = [start, end]
} 
map.sort();



const visited = Array.from({ length: N+1 }, () => 0);
const graph = Array.from({ length: N+1 }, () => []);
let answer = "";
map.map(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a)
});

function DFS(v) {
  if (!visited[v]) {
    answer += v;
    visited[v] = 1;
    for (let i = 0; i < graph[v].length; i++) {
      DFS(graph[v][i])
    }
  } 
}
DFS(V);
console.log(visited);
function BFS(v) {

}


