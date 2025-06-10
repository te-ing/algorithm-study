/**
 * @링크
 * https://leetcode.com/problems/combination-sum-iii/description/?envType=study-plan-v2&envId=leetcode-75

 * @풀이방식
 * DFS를 이용한 모든 경우 탐색
 * 상위 30% 풀이
 * @다른사람의_풀이
 * 동일
*/
var combinationSum3 = function(k, n) {
    const answer = [];
    const dfs = (arr, sum, curr) => {
        if(sum > n || arr.length > k) return
        if(arr.length === k && sum === n){
            answer.push(arr.slice())
        } else {
            for (let i = curr+1; i <= 9; i++) {
                arr.push(i);
                dfs(arr, sum + i, i);
                arr.pop();
            }
        }
    }

    dfs([], 0, 0);
    
    return answer;
};
