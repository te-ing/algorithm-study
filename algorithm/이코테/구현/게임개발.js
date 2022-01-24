function solution(l, m) {
  const height = m.length;
  const width = m[0].length;
  const visited = Array.from({ length: height }, () => Array(width).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let d = l[2]; // 방향
  let x = l[0]; // x 좌표
  let y = l[1]; // y 좌표
  let nx; // 이동좌표
  let ny;

  visited[x][y] = 1;
  let count = 1;
  let turn_time = 0;
  
  while (true) {
    d === 0 ? d = 3 : d -= 1;
    nx = x + dx[d];
    ny = y + dy[d]
    if (visited[nx][ny] === 0 && m[nx][ny] === 0) {
      visited[nx][ny] = 1;
      x = nx;
      y = ny;
      count++;
      turn_time = 0;
      continue
    } else {
      turn_time++;
    }
    
    if (turn_time === 4) {
      nx = x - dx[d];
      ny = y - dy[d];
      turn_time = 0;
      if (m[nx][ny] === 0) {
        x = nx;
        y = ny;
      } else {
        return count
      }
    }
  }
}

console.log(solution([1, 1, 0], [ // 북 0 동 1 남 2 서 3
  [1, 1, 1, 1], // 0 육지 1 바다
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1]
])) // 3
