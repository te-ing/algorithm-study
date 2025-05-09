/**
 * @링크
 * https://leetcode.com/problems/search-insert-position/?envType=study-plan-v2&envId=top-100-liked

 * @풀이방식
  * target 보다 클 때 반환
*/
var searchInsert = function(nums, target) {
  for(let i=0; i<nums.length; i++){
      if(nums[i] >= target){
          return i;
      }
  }
  return nums.length;
};