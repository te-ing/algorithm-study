function solution(n) {
  let dy = Array.from({ length: n }, () => 0);

  for (let i = 2; i < n+1; i++) {
    dy[i] = dy[i - 1] + 1;
    if (i % 2 === 0) {
      dy[i] = Math.min(dy[i], dy[Math.floor(i / 2)] + 1)
    } else if (i % 3 === 0) {
      dy[i] = Math.min(dy[i], dy[Math.floor(i / 3)] + 1)
    } else if (i % 5 === 0) {
      dy[i] = Math.min(dy[i], dy[Math.floor(i / 5)] + 1)
    }
  }
  return dy[n]

}

console.log(solution(26)); // 3