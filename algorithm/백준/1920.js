const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
: `5
4 1 5 2 3
5
1 3 7 9 5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = Number(input())
const arr = input().split(" ").map(a=>Number(a)).sort((a,b)=>a-b)
const M = Number(input())
const targets = input().split(" ").map(a => Number(a))

const binary_search = (array, target, lt, rt) => {
  if (lt > rt) return null
  const mid = parseInt((lt + rt) / 2);
  if (array[mid] === target) {
    return array[mid]
  } else if (array[mid] > target) {
    return binary_search(array, target, lt, mid - 1);
  } else {
    return binary_search(array, target, mid+1, rt)
  }
}
for (let target of targets) {
  binary_search(arr, target, 0, N - 1)
    ? console.log(1) : console.log(0)
}
  