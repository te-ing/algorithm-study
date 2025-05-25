/**
 * @링크
 * https://leetcode.com/problems/maximum-average-subarray-i/

 * @풀이방식
 * k번째부터 평균을 구하며 진행
 * 상위 1% 풀이
 * @다른사람의_풀이
 * 동일
*/
var findMaxAverage = function(nums, k) {
    let sum = nums.slice(0,k).reduce((a,b)=>a+b,0);
    let max = sum/k;
    for(let i=k; i<nums.length; i++){
        sum += nums[i] - nums[i-k];
        const avg = sum/k
        if(avg > max) max = avg;
    }

    return max;
};