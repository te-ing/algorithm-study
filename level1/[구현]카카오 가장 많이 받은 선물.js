/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/258712

 * @풀이방식
 * 배열로 각각의 선물점수 및 본인의 선물점수 계산, 이후 계산된 점수를 순회하며 받을 선물 계산
 * @다른사람의_풀이
 * 최신 풀이이다 보니, 대체로 나와 비슷하게 풀이하는 것 같다.
 */
function solution(friends, gifts) {
  let answer = 0;
  const fl = friends.length;
  const map = Object.fromEntries(friends.map((v,i)=>[v,i]));
  const point = Array.from({length: fl}, ()=>Array(fl).fill(0))
  
  for(let friend of gifts) {
      const [x,y] = friend.split(" ");
      point[map[x]][map[y]]++;
      point[map[x]][map[x]]++;
      point[map[y]][map[y]]--;
      point[map[y]][map[x]]--;
  }
  
  for(let i=0; i<fl; i++){
      let cnt=0;
      for(let j=0; j<fl; j++){
          if(i === j) continue;
          if(point[i][j] > 0) {
              cnt++;
          } else if(point[i][j] === 0 && point[i][i] > point[j][j]) {
              cnt++;
          }
      }
      if(answer < cnt) answer = cnt
  }
  
  return answer;
}

console.log(solution(["muzi", "ryan", "frodo", "neo"], ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]) === 2);