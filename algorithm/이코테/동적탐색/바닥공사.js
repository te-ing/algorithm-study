function solution(n) {
  const dy = Array.from({ length: n + 1 });
  dy[1] = 1;
  dy[2] = 3;
  for (let i = 3; i< n+ 1; i++) {
    dy[i]=dy[i-1]+(2*dy[i-2])
  }
  return dy[n]
}

console.log(solution(4));