function solution(x) {
  const d = Array.from({ length: x + 1 }, () => 0); 
  
  function fibo(x) {
    if (x === 1 || x === 2) return 1 // 종료시점
    if (d[x] !== 0) return d[x] // 계산했던 문제는 반환
    d[x] = fibo(x - 1) + fibo(x - 2)
    return d[x]
  }
  return fibo(x)
}
console.log(solution(5))