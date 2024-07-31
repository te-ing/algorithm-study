/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/133502

 * @풀이방식
 * stack에 쌓으면서 pop()
 * @다른사람의_풀이
 * splice(-4), if (stack.length >= 4 && stack.slice(-4).join('') === '1231') 사용
*/
function solution(ingredient) {
  let answer = 0;
  const stack = [];

  for(const x of ingredient){
      stack.push(x);
      if(stack.slice(-4).toString() === "1,2,3,1"){
          stack.pop();
          stack.pop();
          stack.pop();
          stack.pop();
          answer++;
      }
  }

  return answer;
}	

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]) === 2);
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]) === 0);