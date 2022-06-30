function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n+1 }, () => 0);
  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }
  visited[1] = 1;
  const queue = [1];
  while (queue.length) {
    const v = queue.shift();
    for (let x of graph[v]) {
      if (visited[x] === 0) {
        queue.push(x);
        visited[x] = visited[v] + 1; // x 노드 까지의 길이는 v 노드까지의 길이의 +1
      }
    }
  }
  return visited.filter(v=>v === Math.max(...visited)).length;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])); //	3
