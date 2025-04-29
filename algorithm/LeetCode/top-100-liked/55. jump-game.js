const { isEqual } = require('../../../util');
/**
 * @링크
 * https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-100-liked

 * @풀이방식
 * DFS로 모든 경우의 수를 진행하되, visit를 통해 진행했던 경로는 가지 않는다.
 * 하위 1% 풀이
 * @다른사람의_풀이
 * 뒤에서부터 진행하며, 앞선 수가 goal을 만들 수 있는지 확인하면서 진행
*/
var canJump = function(nums) {
    const L = nums.length;
    const visit = Array.from({length: L}, ()=>false);
    let answer = false;
    const dfs = (curr, max) => {
        if(curr === L-1){
            answer = true;
            return
        }
        for(let i=1; i<=max; i++){
            if(curr+i <= L-1 && !visit[curr+i]){
                visit[curr+i] = true;
                dfs(curr+i, nums[curr+i]);
            }
        }
    }
    visit[0] = true;
    dfs(0, nums[0])
    return answer;
};
console.log(canJump([2,3,1,1,4]) === true);
console.log(canJump([3, 2, 1, 0, 4]) === false);


// 다른사람의 풀이
var canJump = function(nums) {
    let goal = nums.length - 1

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) goal = i
    }

    return goal <= 0
};