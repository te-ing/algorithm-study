/**
 * @링크
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/?envType=study-plan-v2&envId=top-100-liked

 * @풀이방식
  * findIndex 이용 O(logN)
*/
var search = function(nums, target) {
  return nums.findIndex((v)=> v === target);
};
