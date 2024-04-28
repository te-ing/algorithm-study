/**
 * @링크 
 * https://school.programmers.co.kr/learn/courses/30/lessons/12917
 * @풀이방식
 * object를 이용하여 풀이
 * @다른사람의_풀이
 * const solution = (s) =>
 *   [...s].map((char, i) => {
 *     const count = s.slice(0, i).lastIndexOf(char);
 *     return count < 0 ? count : i - count;
 * });
 * indexOf가 느릴 줄 알았지만 속도가 2배 빠름
 */
function solution(s) {
  const answer = [];
  const map = {};
  for(let i=0; i<s.length; i++) {
      if(map[s[i]]) {
          answer.push(i - map[s[i]]+1)
      } else answer.push(-1)
      map[s[i]] = i+1
  }
  return answer;
}

console.log(solution("banana")) //	[-1, -1, -1, 2, 2, 2]);
console.log(solution("foobar")) //	[-1, -1, 1, -1, -1, -1]);