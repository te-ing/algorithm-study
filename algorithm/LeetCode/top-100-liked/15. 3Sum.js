/**
 * @링크
 * https://leetcode.com/problems/3sum/?envType=study-plan-v2&envId=top-100-liked

 * @풀이방식
 * 정렬 후 left, right를 비교하며 투포인터를 사용한다.
 * 이때 Set을 사용하여 중복된 값을 없앤다.
 * 하위 1% 풀이
 * @다른사람의_풀이
 * Set을 사용하여 중복값을 체크하지 않고 
 * 중복값이 생기지 않도록 left와 right의 값을 조정한다.
*/
var threeSum = function(nums) {
    const answer = [];
    const check = new Set();
    nums.sort((a,b)=>a-b);
    
    for(let i=0; i<nums.length-2; i++){
        left = i+1;
        right = nums.length-1;
        while(left<right){
            const sum = nums[right]+nums[left]+nums[i];
            const checkStr = `${nums[i]},${nums[left]},${nums[right]}`;
            if(sum === 0 && !check.has(checkStr)){
                check.add(checkStr);
                answer.push([nums[i],nums[left],nums[right]]);
            }
            sum < 0 ? left++ : right--;
        }
    }
    
    return answer;
};

// 개선 풀이
var threeSum = function(nums) {
    const answer = [];
    nums.sort((a, b) => a - b); // 정렬

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // i 중복 제거
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                answer.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else sum < 0 ?  left++ : right--;
        }
    }

    return answer;
};