/**
 * @링크 https://school.programmers.co.kr/learn/courses/30/lessons/120956
 * @풀이방식
 * 글자를 하나씩 더하면서 words 내에 일치하는지 확인하고, 일치하는 경우 삭제
 * @다른사람의_풀이
 * 정규표현식 활용
*/
function solution(babbling) {
  let answer = 0;
  const words = ['aya', 'ye', 'woo', 'ma'];
  
  for(let bab of babbling) {
      let stack = "";
      for(let i=0; i<bab.length; i++) {
          stack += bab[i];
          if(words.includes(stack)) stack = "";
          if(stack.length > 3) break
      }
      if(stack.length === 0) answer++;
  }
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]) === 1);
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]) === 3);