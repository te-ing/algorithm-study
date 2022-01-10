// 소요시간 3:17
function solution(x) {
  let sum = 0;

  for (let num of x.toString()) {
    sum += parseInt(num)
  }
  return x%sum ? false : true
}

console.log(solution(11)) // false