const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];
const visited = Array.from({ length: 9 }, isVisited => false);

function DFS(graph, v, visited) {
  visited[v] = true;
  console.log(v);
  for (let i of graph[v]) {
    !visited[i] && DFS(graph, i, visited)
  }
}
DFS(graph, 1, visited);