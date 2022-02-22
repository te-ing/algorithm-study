// 탑다운 방식
function topDown(x) {
  const d = Array.from({ length: x + 1 }, () => 0); 
  
  function fibo(x) {
    if (x === 1 || x === 2) return 1; // 종료시점
    if (d[x] !== 0) return d[x]; // 계산했던 문제는 반환
    d[x] = fibo(x - 1) + fibo(x - 2);
    return d[x];
  }
  return fibo(x);
}
console.log(topDown(10));

// 바텀업 방식
function bottomUp(n) {
  const d = Array.from({ length: n + 1 }, () => 0); 
  d[1] = 1;
  d[2] = 2;
  for (let i = 2; i <= n; i++){
    d[i] = d[i - 1] + d[i - 2];
  }
  return d[n];
}
console.log(bottomUp(10));

// 자바스크립트 피보나치 풀이
function fibonacci(n) {
  let newArr = [0, 1];
  let fib = (n) => { 
    if (newArr[n] !== undefined){ 
      return newArr[n];
    }
    newArr[n] = fib(n - 1) + fib(n - 2);
    return newArr[n];
  };
   
  return fib(n); 
}
console.log(fibonacci(10))
 
// 프로그래머스 피보나치 풀이
function solution(num) {
  if(num < 2) return num;
  
  return solution(num-1) + solution(num-2);
}

console.log(solution(10))
 