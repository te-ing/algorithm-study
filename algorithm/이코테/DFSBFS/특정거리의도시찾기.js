function solution(input) {
  input = input.split(`\n`).map(s => s.split(" ").map(Number));
  const [N, M, K, X] = input[0]
  const road = input.slice(1);
  
  const graph = Array.from({ length: N + 1 }, () => []);
  const distance = Array.from({ length: N + 1 }, () => -1);
  
  road.forEach(([A, B]) => {
    graph[A].push(B); // 노드 별 갈 수 있는 지점 
  });

  function BFS(graph, start, distance) {
    const queue = [start];
    distance[start] = 0;
    while (queue.length) {
      const now = queue.shift(); // 현재 노드(시작점)
      graph[now].forEach((nextNode) => { 
        if (distance[nextNode] === -1) { // 만약 다음 지점의 최단거리가 정해지지 않았다면
          distance[nextNode] = distance[now] + 1; // 다음 갈 곳의 최단거리는 지금 거리보다 + 1
          queue.push(nextNode); //  큐에 다음 이동지점을 넣는다.
        }
      });
    }
  }
  BFS(graph, X, distance);

  if (distance.includes(K)) {
    for (let i = 0; i <= N; i++) {
      if (distance[i] === K) {
        console.log(i)
      }
    }
  } else console.log(-1)
}

solution(`4 4 2 1
1 2
1 3
2 3
2 4`) // 4

// solution(`4 3 2 1
// 1 2
// 1 3
// 1 4`) // -1

// solution(`4 4 1 1
// 1 2
// 1 3
// 2 3
// 2 4`) // 2 3