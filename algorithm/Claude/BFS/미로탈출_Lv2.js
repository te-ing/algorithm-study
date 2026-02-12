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
  // 여기서부터 풀이를 작성하세요

}

// 테스트
const grid1 = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];
console.log(solution(5, 6, grid1)); // 정답: 12

const grid2 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
console.log(solution(3, 3, grid2)); // 정답: 5

const grid3 = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];
console.log(solution(3, 3, grid3)); // 정답: -1
