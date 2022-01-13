function solution(frame) {
  const n = frame.length;
  const m = frame[0].length;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (frame[i][j] === 0) {
        DFS(i, j, frame);
        frame[i][j] = 1;
        answer++;
      }
    }
  }
  function DFS(x, y, frame) {
    if (x === -1 || x >= n || y === -1 || y >= m ) return
    if (frame[x][y] === 0) {
      frame[x][y] = 1;
      DFS(x-1, y, frame);
      DFS(x, y-1, frame);
      DFS(x+1, y, frame);
      DFS(x, y+1, frame);
    }
  }
  
  return answer
};

const iceFrame = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
];
console.log(solution(iceFrame)) // 3
