/**
 * @링크
 * https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=top-100-liked

 * @풀이방식
 * 왼쪽부터 모든 경우의 수를 계산하는 O(n^2) 풀이가 시간초과가 발생하여 
 * 양 끝의 left, right를 정하고 작은 hiehgt를 기준으로 가장 넓은 값을 찾도록 two-point를 사용하였다.
 * @다른사람의_풀이
 * 동일한 풀이
*/
var maxArea = function(height) {
  const calc = (a,b) => (b-a) * Math.min(height[a],height[b]);
  let answer = 0;
  let left = 0;
  let right = height.length-1;
  
  while(left<right){
      if(calc(left,right) > answer){
          answer = calc(left,right);
      }
      height[left] > height[right] ? right-- : left++;
  }
  return answer
};

// 시간 초과
var maxArea = function(height) {
  const calc = (a,b) => (b-a) * Math.min(height[a],height[b]);
  let answer = 0;
  
  for(let i=0; i<height.length-1; i++){
      const area = height.slice(i+1).map((v,j) => calc(i,j+i+1));
      answer = Math.max(Math.max(...area), answer);
  }

  return answer
};
