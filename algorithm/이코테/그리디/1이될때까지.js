const solution = (N, K) => {
  let answer = N;
  let cnt = 0;
  while (answer !== 1) {
    if (answer % K) {
      answer - 1;
    } else answer /= K;
    cnt++;
  }
  return cnt;
}

console.log(solution(25,5));