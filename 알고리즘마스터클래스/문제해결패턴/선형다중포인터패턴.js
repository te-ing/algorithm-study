/**
 * 정렬된 배열을 받아들이고 배열의 고유 값을 세는 countUniqueValues라는 함수를 구현합니다. 배열에 음수가 있을 수 있지만 항상 정렬됩니다.
*/

function countUniqueValues(arr){
  let answer = 1;
  let save = null;
  if (!arr.length) return 0;
  for (let i = 1; i < arr.length; i++){
    if (arr[i] !== arr[i - 1] && save !== arr[i]) {
      answer++;
      save = arr[i];
    }
  }
  return answer;
}

console.log(countUniqueValues([1,1,1,1,1,2]) === 2)
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) === 7)
console.log(countUniqueValues([]) === 0)
console.log(countUniqueValues([-2,-1,-1,0,1]) === 4)