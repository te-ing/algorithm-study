/**
 * @링크
 * https://leetcode.com/problems/next-permutation/?envType=study-plan-v2&envId=top-100-liked

 * @풀이방식
 * 풀이 실패로 다른사람의 해답을 보고 풀이함
 * 역사전순 정렬이 되는 시점의 i를 찾고 i보다 큰 j를 찾아 교환한다.
 * 이후 i부터의 배열을 사전순으로 만들기 위해 정렬을 뒤집는다.
*/
var nextPermutation = function(nums) {
  let i = nums.length - 2;

  // 역사전순 정렬이 되는 시점의 i
  while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
  }

  // i가 존재하면 가장 큰 값의 j를 찾는다.
  if (i >= 0) {
      let j = nums.length - 1;
      while (nums[j] <= nums[i]) {
          j--;
      }
      [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // 역사전순 정렬을 사전순 정렬로 바꾼다.
  let left = i + 1, right = nums.length - 1;
  while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
  }
};