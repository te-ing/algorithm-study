/**
 * @링크
 * https://leetcode.com/problems/is-subsequence/description/

 * @풀이방식
 * @다른사람의_풀이
*/
var isSubsequence = function(s, t) {
    let idx = 0;
    if(!s.length) return true;
    for(let x of t){
        if(x === s[idx]){
            idx++;
            if(idx === s.length) return true;
        }
    }
    return false;
};