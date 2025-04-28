const { isEqual } = require('../../../util');
/**
 * @링크
 * https://leetcode.com/problems/generate-parentheses/description/?envType=study-plan-v2&envId=top-100-liked

 * @풀이방식
 * (을 붙였을 때, )을 붙였을 때로 나누어 모든 경우 계산
 * 올바른 괄호형식일 때 answer로 추가
 * 하위 8% 풀이
 * @다른사람의_풀이
 * left, right 숫자를 카운팅하여 모든 경우의 수를 구하지 않고 올바른 괄호일때만 dfs 지속
*/
/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
  const answer = [];

  const varidate = (str) => {
      const queue = [];
      for(let x of str){
          queue.push(x);
          if(queue.at(-1) === ")" && queue.at(-2) === "("){
              queue.pop();
              queue.pop();
          }
      }
      return queue.length === 0
  }

  const dfs = (str, left, right) => {
      if(str.length >= n*2){
          if(varidate(str)) answer.push(str);
      } else {
          left < n && dfs(str+"(", left+1, right);
          right < n && dfs(str+")", left, right+1);
      }
  }
  dfs("", 0, 0);

  return answer;
};

// n이 주어졌을 때 구현 가능한 괄호 케이스를 구해라.
console.log(isEqual(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]));

// 수정 후 풀이
var generateParenthesis = function(n) {
  const answer = [];

  const dfs = (str, left, right) => {
      if(right > left) return
      if(str.length === n*2){
          answer.push(str);
      } else {
          left < n && dfs(str+"(", left+1, right);
          right < n && dfs(str+")", left, right+1);
      }
  }
  dfs("(", 1, 0);

  return answer;
};
