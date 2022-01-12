function solution(location) {
  const row = location.charCodeAt() - 96;
  const column = Number(location[1]);
  const steps = [
    [2, -1], [1, 2], [-1, 2], [1, 2],
    [-2, -1], [-1, -2], [1, -2], [-1, -2],
  ];
  let count = 0;
  for (let step of steps) {
    if (0 < row + step[0] && row + step[0] < 9 && 
      0 < column + step[1] && column + step[1] < 9)
      count++;
  }
  return count
}

console.log(solution('a1')) // 2
