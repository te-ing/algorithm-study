function solution(numbers, target) {
  let answer = 0;
  const n = numbers.length;

  function DFS(x, L) {
    if (L === n) {
      if (x === target) {
        answer++;
      }
      return
    } else {
      DFS(x + numbers[L], L+1);
      DFS(x - numbers[L], L+1);
    }
  }
  DFS(0, 0);
  return answer;
}

/**
 * 더하거나 빼거나
 */

console.log(solution([1, 1, 1, 1, 1],	3)) // 5
console.log(solution([4, 1, 2, 1],	4)) // 2