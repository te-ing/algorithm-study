function solution(n) {
  let answer = 0;
  let number = "";
  while (n) {
    if (n % 3) {
      number += n % 3;
      n = (n - (n % 3)) / 3;
    } else {
      number += "0";
      n /= 3;
    }
  }

  let cnt = 1;
  for (let i = number.length; i > 0; i--) {
    answer += number[i - 1] * cnt;
    cnt *= 3;
  }

  return answer;
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
