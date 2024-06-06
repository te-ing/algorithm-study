/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/118666

 * @풀이방식
 * Object를 사용한 맵핑을 통해 RCJA의 반대의 성격은 RCJA의 점수를 빼는 방식으로 풀이
 * @다른사람의_풀이
 * Object를 사용한 맵핑 후 성격 각각의 비교를 통해 계산
*/
function solution(survey, choices) {
  let answer = '';
  const character = { R: 0, C: 0, J: 0, A: 0 };
  const map = { R: "T", C: "F", J: "M", A: "N" };
  "AN"
  const board = [0,3,2,1,0,1,2,3];
  const calc = (target, point) => {
      if(target === "R") character["R"]+=board[point];
      if(target === "T") character["R"]-=board[point];
      if(target === "C") character["C"]+=board[point];
      if(target === "F") character["C"]-=board[point];
      if(target === "J") character["J"]+=board[point];
      if(target === "M") character["J"]-=board[point];
      if(target === "A") character["A"]+=board[point];
      if(target === "N") character["A"]-=board[point];
  }

  for(let i=0; i<survey.length; i++) {
      if(choices[i] < 4){
      calc(survey[i][0], choices[i]);    
      } else if(choices[i] > 4){
      calc(survey[i][1], choices[i]);
      }
  }

  for(let x in character) {
      answer += character[x] >= 0 ? x : map[x];
  }

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"],	[5, 3, 2, 7, 5]) === "TCMA");
