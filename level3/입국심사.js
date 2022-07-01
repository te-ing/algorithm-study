function solution(n, times) {
  const origin = times.slice();
  let count = 0;
  let answer = 0;
  while (count < n) {
    answer++;
    if (times.includes(answer)) {
      times[times.indexOf(answer)] += origin[[times.indexOf(answer)]];
      count++;
    }
  }

  return answer;
}

console.log(solution(6, [7, 10])); // 28
