/**
 * @링크
 * https://leetcode.com/problems/product-of-array-except-self/

 * @풀이방식
 * 배열 중 0의 카운트를 체크하여 엣지케이스를 처리한다.
 * 상위 50% 풀이
 * @다른사람의_풀이
*/
var productExceptSelf = function(nums) {
    let cnt = 0;
    for(let x of nums){
        if(x === 0) cnt++;
        if(cnt >= 2) break;
    }
    if(cnt === 2) return Array(nums.length).fill(0);

    const sum = nums.reduce((a,b)=>a* (b || 1),1);
    const answer = [];

    if(cnt === 1) return nums.map((v) => v ? 0 : sum);
    
    for(let x of nums){
        answer.push(x ? sum / x : 0);
    }
    return answer;
};