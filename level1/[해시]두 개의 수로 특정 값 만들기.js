/**
 * @문제
 * n개의 양의 정수로 이루어진 리스트 arr와 정수 target이 주어졌을 때 이 중에서 합이 target인 
 * 두 수가 arr에 있는지 찾고, 있으면 true, 없으면 false를 반환하는 solution( ) 함수를 작성하세요.
 * @제약조건
 * n은 2 이상 10,000 이하의 자연수입니다.
 * arr의 각 원소는 1 이상 10,000 이하의 자연수입니다.
 * arr의 원소 중 중복되는 원소는 없습니다.
 * target은 1 이상 20,000 이하의 자연수입니다.
 * @풀이방식
 * 이중 for 문을 사용하여 계산 O^2 
 * @다른사람의_풀이
 * 해시를 활용하여 계산
 * 
*/주
// function solution(arr, k) {
//   const n = arr.length;
//   for (let i = 0; i < n-1; i++) {
//     for (let j = i+1; j < n; j++) {
//       if(arr[i]+arr[j] === k) return 'true'
//     }
//   }
//   return 'false'
// }

function solution(arr, k) { 
  const hash = Array(k + 1).fill(0);
  for (const num of arr) {
    if (num >= k) break;
    hash[num] = 1;
  }

  for (const num of arr) {
    if (hash[num - k] === 1) return 'true';
  }
  
  return 'false'
}

console.log(solution([1, 2, 3, 4, 8], 6) === "true"); // true
console.log(solution([2, 3, 5, 9], 10) === "false"); // false
