function solution(rows, columns, queries) {
  let answer = [];
  const map = Array.from(Array(rows), () => Array(columns).fill());

  for (let i = 0; i < rows; i++){
    for (let j = 1; j <= columns; j++){
      map[i][j-1] = j+(i*columns)
    }
  }

  function rotation(map, array) {
    const [x, y, nx, ny] = array.map(v => v - 1);
    const queue = [];
    for (let i = y; i < ny; i++){
      queue.push(map[x][i]);
    }
    for (let i = x; i < nx; i++){
      queue.push(map[i][ny]);
    }
    for (let i = ny; i > y; i--){
      queue.push(map[nx][i]);
    }
    for (let i = nx; i > x; i--){
      queue.push(map[i][y]);
    }
    queue.unshift(queue.pop());
    queue.reverse();
    answer.push(Math.min(...queue))
    
    for (let i = y; i < ny; i++){
      map[x][i] = queue.pop();
    }
    for (let i = x; i < nx; i++){
      map[i][ny] = queue.pop();
    }
    for (let i = ny; i > y; i--){
      map[nx][i] = queue.pop();
    }
    for (let i = nx; i > x; i--){
      map[i][y] = queue.pop();
    }
    return map;
  }
  for (const querie of queries) {
    rotation(map, querie)
  }
  return answer;
}

console.log(solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]])); // [8, 10, 25]
// console.log(solution(3,	3,	[[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]])); // [1, 1, 5, 3]
// console.log(solution(100,	97,	[[1,1,100,97]])); // [1]
	