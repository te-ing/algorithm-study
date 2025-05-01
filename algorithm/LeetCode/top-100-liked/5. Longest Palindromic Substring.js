/**
 * @링크
 * https://leetcode.com/problems/longest-palindromic-substring/?envType=study-plan-v2&envId=top-100-liked

 * @풀이방식
 * O(N^3)으로 테스트 케이스를 보면서 억지로 풀어냄
 * 처음엔 가운데부터 풀이를 시작했지만(O(N^2)) 엣지케이스를 극복하기 위해 모든 케이스를 검사하도록 진행(O(N^3))
 * 하위 1% 풀이
 * @다른사람의_풀이
 * 홀수와 짝수일 때의 펠린드롬 검사법(O(1))을 나눈 뒤 
 * 긴 방향으로 포인터를 옮기며 가장 긴 펠린드롬을 찾는다.
*/
var longestPalindrome = function(s) {
  let answer = "";

  const validate = (str) => {
      let left = 0;
      let right = str.length-1
      while(left<right){
          if(str.at(left) !== str.at(right)) return false;
          left++;
          right--;
      }
      return true;
  }

  for(let i=0; i<s.length; i++){
      let target = s[i];
      let left = i;
      let right = i;
      while(target.length <= s.length){
          if(s[left-1] && s[right+1] && validate(s[left-1]+target+s[right+1])){
              target = s[--left]+target+s[++right];
          } else if (s[left-1] && validate(s[left-1]+target)){
              target = s[--left]+target;
          } else if(s[right+1] && validate(target+s[right+1])){
              target = target+s[++right];
          } else {
              answer = answer.length < target.length ? target : answer;
              if(answer.length === s.length) return answer
              break;
          }
      }
  }
  return answer;
};

// 다른 사람의 풀이

var longestPalindrome = function(s) {
  let resIdx = 0;
  let resLen = 0;

  for(let i=0; i<s.length; i++){
      let target = s[i];
      let left = i;
      let right = i;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          if (right - left + 1 > resLen) {
              resIdx = left, resLen = right - left + 1;
          }
          left--, right++;
      }

      left = i;
      right = i+1;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          if (right - left + 1 > resLen) {
              resIdx = left, resLen = right - left + 1;
          }
          left--, right++;
      }
  }
  return s.substring(resIdx, resIdx + resLen);
};
