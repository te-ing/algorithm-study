/** @link https://leetcode.com/problems/single-number/description/ */
var singleNumber = function(nums) {
  nums.sort((a,b) => a-b);
  for(let i=1; i<=nums.length; i+=2) {
      console.log(i)
      if(nums[i-1] !== nums[i]) {
          return nums[i-1]
      }
  }
};
/**
 * 맵을 사용한 풀이
var singleNumber = function (nums) {
    const map = new Map()
    for (let i of nums) {
        if (map.has(i)) map.delete(i)
        else map.set(i, 1)
    }
  return Number(...map.keys())
};

* 비트연산자 XOR 연산을 이용한 풀이

	1.	같은 값끼리 XOR 연산하면 0이 된다:
	•	예를 들어 x ^ x = 0입니다. 따라서 배열에서 중복된 숫자들은 모두 XOR 연산을 통해 0이 됩니다.
	2.	0과 어떤 수를 XOR 연산하면 그 수가 된다:
	•	예를 들어 0 ^ x = x입니다. 이 성질을 활용해 중복되지 않는 숫자 하나만 남기게 됩니다.
	3.	순서와 무관한 교환 및 결합 법칙:
	•	XOR 연산은 교환 법칙과 결합 법칙을 따르기 때문에, 배열의 순서가 다르더라도 결과는 항상 동일합니다.

	•	0 ^ 4 = 4
	•	4 ^ 1 = 5
	•	5 ^ 2 = 7
	•	7 ^ 1 = 6 (중복된 1이 0으로 상쇄됨)
	•	6 ^ 2 = 4 (중복된 2가 0으로 상쇄됨)

var singleNumber = function (nums) {
  let number

  for (let value of nums) {
      number ^= value
  }

  return number
}
 */