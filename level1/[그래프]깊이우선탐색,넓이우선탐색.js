/** 깊이 우선탐색 */
function solution(graph, start) {
  const result = []
  const list = {};
  const visited = new Set();
  for (const [a, b] of graph) {
    list[a] = list[a] ? list[a].concat(b) : [b];
  }
  function dfs(node, visited, result) {
    visited.add(node); // ❸ 현재 노드를 방문한 노드들의 집합에 추가
    result.push(node); // ❹ 현재 노드를 결과 배열에 추가
    (list[node] || []).forEach((neighbor) => { // ❺ 현재 노드와 인접한 노드 순회
    if (!visited.has(neighbor)) { // ❻ 아직 방문하지 않은 노드라면
      dfs(neighbor, visited, result);
    }
    });
  }
  dfs(start, visited, result);
  return result; // DFS 탐색 결과 반환
}

// console.log(solution([['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']], 'A').toString() === ['A', 'B', 'C', 'D', 'E'].toString()) // 반환값 : ['A', 'B', 'C', 'D', 'E']
// console.log(solution([['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']], 'A').toString() === ['A', 'B', 'D', 'E', 'F', 'C'].toString()) // 반환값 : ['A', 'B', 'D', 'E', 'F', 'C']

/** 넓이 우선탐색 */
function solution(graph, start) {
  const result = [start]
  const list = {};
  const visited = new Set();
  for (const [a, b] of graph) {
    list[a] = list[a] ? list[a].concat(b) : [b];
  }

  const queue = [];
  queue.push(start);
  visited.add(start);
  while (queue.length) {
    const node = queue.shift();
    for (const target of list[node] || []) {
      if (!visited.has(target)) { 
        queue.push(target);
        visited.add(target);
        result.push(target);
        }
    }
  }

  console.log(result)
  return result;
}

console.log(solution([[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7], [4, 8], [5, 8], [6, 9], [7, 9]], 1).toString() === [1, 2, 3, 4, 5, 6, 7, 8, 9].toString()) // 반환값 : [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(solution([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]], 1).toString() === [1, 2, 3, 4, 5, 0].toString()) // 반환값 : [1, 2, 3, 4, 5, 0]
 