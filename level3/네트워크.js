function solution(n, computers) {
  let answer = n;
  let network = Array.from({ length: n }, ()=>[]);

  function DFS(x) {
    if (x === n) {
      return
    } else {
      for (let i = 0; i < computers.length; i++) {
        if (x !== i && computers[x][i] === 1) {
          network[i].push(x)
          computers[i][x] = 0;
        }
      }
      DFS(x+1);
    }
  }
  DFS(0)

  for (let i = 0; i < computers.length - 1; i++) {
    for (let j = 0; j < network[i].length - 1; j++) {
      if (network[i].includes(network[i+1][j])) {
        network[i + 1] = [...network[i + 1], ...network[i]]
        network[i] = [];
        break
      }
    }
    
  }
  network.map((array) => array.length && answer--);
  return answer
}
console.log(solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]])); // 2
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])); // 1
console.log(solution(4, [
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [1, 0, 0, 1]])); // 2
console.log(solution(5, [
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1]
])) // 3