function solution(n, target, arr) {
  function findMaxNumber(target, arr) {
    let lt = 0, rt = arr.length - 1;
    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2);
      if (mid === 0 || arr[mid - 1] < target && arr[mid] === target) {
        return mid
      } else if (arr[mid] > target) {
        rt = mid - 1;
      } else lt = mid + 1;
    }
    return arr.length - 1
  }
  function findMinNumber(target, arr) {
    let lt = 0, rt = arr.length - 1;
    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2);
      if (mid === arr.length - 1 || arr[mid - 1] < target && arr[mid] === target) {
        return mid
      } else if (arr[mid] > target) {
        rt = mid - 1; // 2 3 3 4
      } else lt = mid + 1;
    }
    return 0
  }
  console.log("max:", findMaxNumber(target,arr));
  console.log("min:", findMinNumber(target,arr));
  // let answer = (findMaxNumber(target,arr) - findMinNumber(target, arr) + 1);
  // return answer;
}
  
console.log(solution(7,2,[1,1,2,2,2,2,3])) // 4
console.log(solution(7,2,[1,1,2,2,2,2,2,2,2,2,2,2,3])) // 10
// console.log(solution(7,2,[1,1,2,2,2,2,2,2,2,2,3])) // 8
// console.log(solution(7,2,[1,1,2,2,2,2,3,3,3,3,3,3,3,3])) // 4
// console.log(solution(7, 2, [1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 5, 7, 8])) // 4

// console.log(solution(7,3,[1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,5,7,8])) // 4
// console.log(solution(7,5,[1,1,2,2,2,2,3,3,3,3,5,7,8,9,10,11,111,123])) // 1
// console.log(solution(7,2,[1,1,2,2,2,2,3,3,3,3,5,7,8])) // 4
// console.log(solution(7,4,[1,1,2,2,2,2,3])) // -1