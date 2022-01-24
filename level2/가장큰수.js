function solution(numbers) {
  let answer = '';
  let temp = numbers.map((a) => String(a)).sort((a, b) => b + a - (a + b));
  
  answer = temp[0] === "0" ? "0" : temp.join("")
  
  
  return answer;
}

console.log(solution([0, 0 ,0])); //	"988351310"
console.log(solution([513,1000,0,10,9,83,8])); //	"988351310"
// console.log(solution([3, 30, 34, 5, 9])); //	"9534330"