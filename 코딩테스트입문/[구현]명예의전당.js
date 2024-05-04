/**
 * @링크 https://school.programmers.co.kr/learn/courses/30/lessons/138477
 * @풀이방식
 * list의 제일 작은 수 삭제 및 push
 * @다른사람의_풀이
 * sort() 활용, 하지만 시간복잡도가 높음
*/
function solution(k, score) {
  const answer = [];
  const list = [];
  
  for(let x of score) {
      list.push(x);
      const min = Math.min(...list);
      
      if(list.length === k+1){
          list.splice(list.indexOf(min), 1)
          answer.push(Math.min(...list))
      } else answer.push(min)
  }
  
  return answer;
}
