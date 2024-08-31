/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586

 * @풀이방식
 * shift를 통해 해결가능한 taskSpeed를 구하고, time 더해가면서 answer의 최근값을 더한다.
 * @다른사람의_풀이
 * map을 통해 미리 수행가능한 시간을 구하고 해당 날짜를 비교하면서 계산한다.
*/
function solution(progresses, speeds) {
  const answer = [];
  const taskList = progresses.slice();
  let time = 0;
  
  while(taskList.length) {
      const task = taskList.shift();
      const speed = speeds.shift();
      const taskSpeed = task + (speed * time);
      if(taskSpeed < 100) {
          time += Math.ceil((100 - taskSpeed)/speed);
          answer.push(1);
      } else {
          answer[answer.length-1]++;
      }
  }
  
  return answer;
}	

console.log(solution([93, 30, 55],	[1, 30, 5]).toString() === [2, 1].toString());
console.log(solution([95, 90, 99, 99, 80, 99],	[1, 1, 1, 1, 1, 1]).toString() === [1, 3, 2].toString());