function solution(n)
{
  let answer = 0;

  for (let x of n.toString()) {
    answer += parseInt(x);
  }

    return answer;
}

console.log(solution(123)) // 6