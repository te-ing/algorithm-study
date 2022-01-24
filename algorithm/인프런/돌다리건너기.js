function solution(n) {
  const dy = Array.from({ length: n + 2 });
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i < n + 2; i++) {
    dy[i] = dy[i-1]+dy[i-2];
  }
  return dy[n+1]
}

console.log(solution(7)); // 34