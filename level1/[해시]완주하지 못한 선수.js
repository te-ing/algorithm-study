/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576

 * @풀이방식
 * 정렬 후 비교
 * @다른사람의_풀이
 * 해시테이블을 만들고 비교
 * sort의 시간복잡도는 O(n \log n) ~ O(n^2) 이므로 O(n)인 해시테이블 방식이 빠르다.
*/
// function solution(participant, completion) {
//   const part = participant.sort();
//   const comp = completion.sort();
//   for(let i=0; i<part.length -1; i++){
//       if(part[i] !== comp[i]) return part[i]
//   }
  
//   return part[part.length-1];
// }

function solution(participant, completion) {
  const hash = {};
  for(const player of participant) {
      hash[player] = hash[player] ? hash[player]+1 : 1; 
  }
  for(const player of completion) {
      hash[player]--;
  }
  for(const key in hash) {
      if(hash[key] !== 0) return key
  }
  return -1
}

console.log(solution(["leo", "kiki", "eden"],	["eden", "kiki"]) === "leo");
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],	["josipa", "filipa", "marina", "nikola"]) === "vinko");
console.log(solution(["mislav", "stanko", "mislav", "ana"],	["stanko", "ana", "mislav"]) === "mislav");
