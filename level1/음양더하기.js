function solution(absolutes, signs) {
  return absolutes.reduce((a,b,i) => a+(signs[i] ? b : -b),0)
}

console.log(solution([4,7,12],[true,false,true])) // 9