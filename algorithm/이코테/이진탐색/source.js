const binary_search = (array, target, lt, rt) => {
  if (lt > rt) return null
  const mid = parseInt((lt + rt) / 2);
  if (array[mid] === target) {
    return mid
  } else if (array[mid] > target) {
    return binary_search(array, target, lt, mid - 1);
  } else {
    return binary_search(array, target, mid+1, rt)
  }
}

const n = 10
const target = 7
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

binary_search(array, target, 0, n - 1)
  ? console.log(binary_search(array, target, 0, n - 1) + 1)
  : console.log("원소가 존재하지 않습니다.");

 
function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0, rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else lt = mid + 1;
  }
  return answer;
}
  
console.log(solution(target, array) || "원소가 존재하지 않습니다");
