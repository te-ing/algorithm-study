function solution(n) {
  let answer = [];
  const map = Array.from({ length: n }, (v, i) =>
    Array.from({ length: i + 1 }, () => 0)
  );
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  let x = 0;
  let y = 0;
  let d = 0;
  let count = 0;
  const dx = [1, 0, -1];
  const dy = [0, 1, -1];

  for (let i = 1; i <= sum; i++) {
    map[x][y] = i;
    count++;
    if (count === n - d) {
      d++;
      count = 0;
    }
    x += dx[d % 3];
    y += dy[d % 3];
  }
  map.forEach((v) => answer.push(...v));
  return answer;
}

console.log(solution(4)); // [1,2,9,3,10,8,4,5,6,7]
// console.log(solution(5)); // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
// console.log(solution(6)); // [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
