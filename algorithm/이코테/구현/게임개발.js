function solution(l, m) {
  let x = l[0];
  let y = l[1];
  let d = l[2];
  let nx;
  let ny;
  const width = m[0].length;
  const height = m.length;
  
  const dx = [-1, 0, 1, 0]; 
  const dy = [0, 1, 0, -1]; 
  
  function turnLeft(direction) {
    direction === 0 ? direction = 3 : direction--;
    return direction
  }
  
  let count = 1;
  turnTime = 0;
  while (true) {
    turnLeft(d);
    nx = x + dx[d];
    ny = y + dy[d];
  }
}

console.log(solution([1, 1, 0], [ // 북 0 동 1 남 2 서 3
  [1, 1, 0, 1], // 0 육지 1 바다
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1]
])) // 3

// 왼쪽방향부터 차례대로 갈곳 정하고 이동
// 모든 방향이 이미 가본 칸이거나 바다라면 방향만 유지한 채 한칸 뒤로 이동 
// 이때 뒤쪽 방향이 바다면 종료

