/**
 * 배열 값을 더했을 때 0이 되는 가장 큰 수 반환
*/

// O(n^2)의 풀이
function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
          if(arr[i] + arr[j] === 0){
              return [arr[i], arr[j]];
          }
      }
  }
}

// O(n)의 풀이
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
  return undefined;
}

console.log(JSON.stringify(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])) === JSON.stringify([-2, 2]));
console.log(JSON.stringify(sumZero([-4, -1, 0, 5])) === JSON.stringify(undefined));