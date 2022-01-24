const solution = (n, m, arr) => {
  const minNumbers = [];
  for (let numbers of arr) {
    minNumbers.push(Math.min(...numbers));
  }
  return minNumbers.indexOf(Math.max(...minNumbers));
}

console.log(solution(3, 3, [
  [3, 1, 2,],
  [4, 1, 4],
  [2, 2, 2]
]));