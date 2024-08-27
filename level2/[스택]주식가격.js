/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/42584

 * @풀이방식
 * 스택에 index를 넣고 진행기간에 따라 증가하는 i에 index를 빼서 기간을 구한다.
 * @다른사람의_풀이
 * 스택에 index를 넣고 진행기간에 따라 증가하는 i에 index를 빼서 기간을 구한다.
*/
function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0)
  const stack = [0];
  
  for(let i=1; i<n; i++) {
      while(stack.length && prices[stack[stack.length-1]] > prices[i]) {
          const target = stack.pop();
          answer[target] = i-target;
      }
      stack.push(i);
  }
  
  while (stack.length > 0) {
      const j = stack.pop();
      answer[j] = n - j - 1;
  }
  
  return answer;
}

console.log(solution([1, 2, 3, 2, 3]).toString() === [4, 3, 1, 1, 0].toString());
