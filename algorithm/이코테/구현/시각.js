function solution(h) {
  let start = new Date();
  count = 0;
  for (let i = 0; i <= h; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        `${i}${j}${k}`.includes('3') && count++
      }
    }
  }
  let end = new Date();
  return `소요시간: ${end-start}ms count: ${count}`
}
console.log(solution(5)) // 11475