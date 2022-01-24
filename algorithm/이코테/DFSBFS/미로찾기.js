function solution(graph) {
  const n = graph.length;
  const m = graph[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function BFS(x, y) {
    const queue = [[x, y]];
    while (queue.length) {
      let [x, y] = queue.shift()
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx < 0 || ny < 0 || nx >= n || ny >= m || graph[nx][ny] === 0) continue
        if (graph[nx][ny] === 1) {
          graph[nx][ny] = graph[x][y] + 1
          queue.push([nx, ny])
          if (nx === n-1 && ny === m-1) return graph[n-1][m-1]
        }
      }
    }
    return graph[n-1][m-1]
  }
  return BFS(0, 0)
}

console.log(solution([
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1]
])); // 10
