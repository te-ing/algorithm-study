function solution(input) {
  input = input.split(`\n`).map(s => s.split(" ").map(Number));
  const [N, M, K, X] = input[0]
  const array = input.slice(1);

  const distance = Array.from({ length: N + 1 }, () => -1);
  const graph = Array.from({ length: N + 1 }, () => []);

  distance[X] = 0;
  array.forEach(([from, to]) => graph[from].push(to));

  const queue = [X];
  while (queue.length) {
    const now = queue.shift();
    graph[now].forEach((next) => {
      queue.push(next);
      if (distance[next] === -1) {
        distance[next] = distance[now] + 1;
      }
    })
  }
  
  if (distance.includes(K)) {
    distance.forEach((n, index)=> n===K && console.log(index))
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