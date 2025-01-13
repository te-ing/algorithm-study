/**
 * 두 개의 배열이 주어질 때, 
 * 첫번째 배열의 값이 제곱한 것이 두번째 배열의 값과 순서와 상관없이 일치하는지 여부 리턴
*/

// O(n^2)의 풀이
function same(arr1, arr2) {
  let cnt = arr1.length;
  for (let x of arr1) {
    if (arr2.includes(x * x)) {
      arr2.splice(arr2.indexOf(x * x), 1);
      cnt--;
    }
  }
  return !arr2.length && !cnt
}
// O(n)의 풀이
/**
 * 제곱 유무를 비교해서 판단하는 것이 아니라, index를 만들어서 횟수를 비교한다.
 */
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) return false

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let x of arr1) {
    frequencyCounter1[x] = (frequencyCounter1[x] || 0) + 1;
  }
  for (let x of arr2) {
    frequencyCounter2[x] = (frequencyCounter2[x] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(same([1, 2, 3], [4, 1, 9]) === true); 
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]) === true); 
console.log(same([1, 2, 3], [1, 9]) === false); 
console.log(same([1, 2, 1], [4, 4, 1]) === false); 