/**
 * @링크
 * https://leetcode.com/problems/two-sum/?envType=study-plan-v2&envId=top-100-liked

 * @풀이방식
 * 하나씩 더해보며 찾음
 * 하위 1% 풀이
 * @다른사람의_풀이
 * target에서 값을 뺀 Map을 만들고 조회
*/
var twoSum = function(nums, target) {
  for(let i=0; i<nums.length; i++){
      const idx = nums.findIndex((v) => target - v === nums[i]);
      if(idx !== -1 && i !== idx){
          return [i, idx]
      }
  }
};

// 개선 풀이
var twoSum = function(nums, target) {
  const dict = new Map();
  for(let i=0; i<nums.length; i++){
      const num = target - nums[i];
      if(dict.has(num)){
          return [i, dict.get(num)]
      }
      dict.set(nums[i], i);
  }

  return [dict.get(target-nums.at(-1)),nums.length-1]
};