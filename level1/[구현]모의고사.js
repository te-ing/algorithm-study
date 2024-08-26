/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840

 * @풀이방식
 * %를 이용한 index 사용, forEach를 사용하여 같은 index 추가
 * @다른사람의_풀이
 * 가장 큰 수를 따로 정하고 같은 값을 push
 * for (const [i, answer] of answers.entries()) 와 같은 방식으로 for문의 index 사용
*/

const formatDay = (date) => {
  const [year, month, day] = date.split('.').map((v)=> Number(v));
  return year * 12 * 28 + month * 28 + day;
}
  
function solution(answers) {
  const answer = [];
  const point = [0,0,0]
  
  const first = [1,2,3,4,5];
  const second = [2,1,2,3,2,4,2,5];
  const third = [3,3,1,1,2,2,4,4,5,5];
  
  for(let i=0; i<answers.length; i++) {
      if(answers[i] === first[i%5]) point[0] += 1;
      if(answers[i] === second[i%8]) point[1] += 1;
      if(answers[i] === third[i%10]) point[2] += 1;
  }
  
  const maxIndex = point.indexOf(Math.max(...point));
  answer.push(maxIndex+1);
  if(maxIndex < 2) {
      point.slice(maxIndex+1).forEach((v,i) => {
          if(v === point[maxIndex]) {
              answer.push(maxIndex+i+2);
          }
      })    
  }
  
  return answer;
}

console.log(solution([1,2,3,4,5]).toString() === [1].toString());
console.log(solution([1,3,2,4,2]).toString() === [1,2,3].toString());
