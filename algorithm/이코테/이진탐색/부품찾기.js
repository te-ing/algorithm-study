const input = `5
8 3 7 9 2
3
5 7 9
`.split('\n'); // no yes yes
const N = Number(input[0]);
const M = Number(input[2]);
const sell = input[1].split(" ").map(a=>Number(a))
const buy = input[3].split(" ").map(a => Number(a))

function counting_sort(target, arr) { // 계수정렬
  arr.sort((a,b)=>a-b)
  const array = Array.from({ length: Math.max(...arr)+1 }, () => [])
  arr.map(v => array[v].push(1));
  return array[target].length ? "yes" : "no"
}
console.log(buy.map(item => counting_sort(item, sell)));


// function binary_search(target, arr) {
//   let answer = "no";
//   arr.sort((a, b) => a - b);
//   let lt = 0, rt = arr.length - 1;
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (arr[mid] === target) {
//       answer = "yes"
//       break;
//     } else if (arr[mid] > target) {
//       rt = mid - 1;
//     } else lt = mid + 1;
//   }
//   return answer;
// }
// console.log(buy.map(item => binary_search(item, sell)));



