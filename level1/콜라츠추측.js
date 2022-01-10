function solution(num) {
  let answer = 0;
  if (num === 1) return 0
  
  while (answer <= 500) {
    if (num % 2) {
      num = num * 3 + 1
    } else {
      num = num / 2
    }
    answer++;

    if (num === 1) {
      return answer;
    }
  }
  answer = -1;

  return answer;
}

console.log(solution(11351)) // -1
// 소요시간 23:51 입력값 1일 때 3이 리턴되도록 생각하고 있었음...