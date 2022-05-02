function getNetworkNumber(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, isVisited => false);
  const first = [];
  const second = [];

  for (let [a, b] of wires) {
    graph[a].push(b)
    graph[b].push(a)
  }

  function DFS(graph, v, visited, arr) {
    visited[v] = true;
    arr.push(v);
    for (let i of graph[v]) {
      !visited[i] && DFS(graph, i, visited, arr)
    }
  }
  DFS(graph, 1, visited, first);
  
  visited.map(v => v = false);
  for (let i = 1; i <= n + 1; i++) {
    if (!first.includes(i)) {
      DFS(graph, i, visited, second);
      break
    }
  }
  
  return Math.abs(first.length - second.length);
}

function solution(n, wires) {
  answer = Infinity;
  if (wires.length < 2) return 0
  for (let i = 0; i < n - 1; i++) {
    if (answer > getNetworkNumber(n, [...wires.slice(0, i), ...wires.slice(i + 1)])) {
      answer = getNetworkNumber(n, [...wires.slice(0, i), ...wires.slice(i + 1)])
    }
  }
  return answer;
}


console.log(solution(9,	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])) // 3
console.log(solution(4,	[[1,2],[2,3],[3,4]])) // 0
console.log(solution(7,	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]])) // 1
