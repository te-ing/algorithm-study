/**
 * @링크
 * https://leetcode.com/problems/combination-sum/?envType=study-plan-v2&envId=top-100-liked

 * @풀이방식
 * 모든 경우의 수를 계산하고 JSON.stringify와 정렬로 중복값을 제거
 * 하위 1% 풀이
 * @다른사람의_풀이
 * index를 dfs에 전달하여 중복값 제거
*/

var combinationSum = function(candidates, target) {
  const answer = [];
  const check = {}
  const lth = candidates.length;
  const dfs = (arr, sum) => {
      if(sum > target) return
      if(sum === target){
          const sorted = arr.toSorted((a,b)=>a-b);
          if(check[JSON.stringify(sorted)]) return
          check[JSON.stringify(sorted)] = true;
          answer.push(arr.toSorted((a,b)=>a-b));
      } else {
          for(let i=0; i<lth; i++){
              dfs(arr.concat(candidates[i]), sum+candidates[i]);
          }
      }
  }
  dfs([], 0)
  return answer
};

// 개선 풀이
var combinationSum = function(candidates, target) {
  const answer = [];
  const n = candidates.length;
  const dfs = (index, arr, sum) => {
    if(sum === 0){
        answer.push([...arr]);
    } else {
        for(let i=index; i<n; i++){
            if(candidates[i] <= sum) {
                arr.push(candidates[i]);
                dfs(i, arr, sum-candidates[i]);
                arr.pop()
            }
        }
    }
  }
  dfs(0, [], target)
  return answer
};