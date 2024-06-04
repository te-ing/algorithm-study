/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/250137

 * @풀이방식
 * 회복량을 더한 뒤 데미지를 빼도록 구현. 중간에 0이 되었을 때의 예외처리 필요
 * @다른사람의_풀이
 * 
*/
function solution(bandage, health, attacks) {
  let answer = health;
  let timer = 0;
  
  const heal = (t) => t*bandage[1] + Math.floor(t/bandage[0]) * bandage[2];
  
  for(const [time, damage] of attacks) {
      answer = answer + heal(time-timer-1) > health ? health : answer + heal(time-timer-1);
      answer-=damage
      timer = time;
      if(answer <= 0) return -1
  }
  
  return answer
}

console.log(solution([5, 1, 5],	30,	[[2, 10], [9, 15], [10, 5], [11, 5]]) === 5);