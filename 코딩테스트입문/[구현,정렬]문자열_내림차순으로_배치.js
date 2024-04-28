/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/142086

 * @풀이방식
 * "a".charCodeAt() 사용가능
 * @다른사람의_풀이
 * s.split('').sort().reverse().join('')
 */
function solution(s) {
  return s.split('').sort((a,b)=>b.charCodeAt()-a.charCodeAt()).join("")
}

console.log(solution("Zbcdefg") === "gfedcbZ");