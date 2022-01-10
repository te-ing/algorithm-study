function solution(a, b) {
  return a.reduce((acc,cur,index) => acc+(cur*b[index]), 0)
}

console.log(solution([1,2,3,4],[-3,-1,0,2])) //	3