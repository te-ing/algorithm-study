/**
 * 최단 거리 미로 탈출 (BFS)
 * 난이도: Lv.2
 *
 * N x M 미로에서 (0,0) → (N-1, M-1) 최단 경로 구하기
 * 0: 벽, 1: 이동 가능 / 상하좌우 이동
 * 시작·도착 칸 포함 최소 칸 수 반환, 도달 불가 시 -1
 *
 * 실행: node algorithm/Claude/BFS/미로탈출_Lv2.js
 */

function solution(N, M, grid) {
  const d = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  const queue = [[0, 0]];
  const visit = Array.from({ length: N }, () => Array(M).fill(0));
  visit[0][0] = 1;
  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + d[i][0];
      const ny = y + d[i][1];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visit[nx][ny] && grid[nx][ny]) {
        visit[nx][ny] = visit[x][y] + 1;
        queue.push([nx, ny]);
      }
      if (nx === N - 1 && ny === M - 1 && grid[N - 1][M - 1]) return ++visit[x][y];
    }
  }
  return -1;
}
function solution2(N, M, grid) {
  const d = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  const visit = Array.from({ length: N }, () => Array(M).fill(0));
  const queue = [[0, 0]];
  let head = 0; // shift() 대신 인덱스로 앞에서 꺼냄

  visit[0][0] = 1;

  while (head < queue.length) {
    const [x, y] = queue[head++]; // O(1) dequeue

    for (let i = 0; i < 4; i++) {
      const nx = x + d[i][0];
      const ny = y + d[i][1];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (!grid[nx][ny] || visit[nx][ny]) continue;

      visit[nx][ny] = visit[x][y] + 1;
      if (nx === N - 1 && ny === M - 1) return visit[nx][ny];
      queue.push([nx, ny]); // O(1) enqueue
    }
  }
  return -1;
}
// 테스트
const grid1 = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1]
];
console.log(solution(5, 6, grid1)); // 정답: 10

const grid2 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];
console.log(solution(3, 3, grid2)); // 정답: 5

const grid3 = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 1]
];
console.log(solution(3, 3, grid3)); // 정답: -1
const grid4 = [
  [1, 1, 0],
  [1, 0, 0],
  [0, 0, 1]
];
console.log(solution(3, 3, grid4)); // 정답: -1
