function solution(n) {
  let answer = '';
  while (n) {
    if (n%3) {
      answer = n % 3+answer;
      n = (n-n%3)/3;
    } else {
      answer = "4"+answer;
      n = n/3-1;
    }
  }
  return answer
}

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 4
console.log(solution(4)); // 11