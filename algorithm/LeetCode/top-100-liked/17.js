/**
 * @param {string} digits
 * @return {string[]}
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&id=top-100-liked
 * 
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */

var letterCombinations = function(digits) {
  if(!digits) return []
  const keypads = ['0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
  const keys = [];
  let answer = [];
  for (const n of digits) {
    keys.push(keypads[n]);
  };

  const dfs = (str, L) => {
    if(str.length === keys.length) {
      answer.push(str);
      return;
    } else {
      for(let j=0; j<keys[L].length; j++) {
        dfs(str+keys[L][j], L+1)
      }
    }
  }
  dfs("", 0);

  return answer
};


letterCombinations("23");
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
letterCombinations("");
// Output: []
letterCombinations("2");
// Output: ["a","b","c"]