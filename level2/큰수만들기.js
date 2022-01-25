function solution(number, k) {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    const now = number[i]
    while (k > 0 && stack[stack.length - 1] < now) {
      stack.pop()
      k--;
    }
    stack.push(now)
  }
  if(k) stack.splice(stack.length-k, k)
  return stack.join('')
}

console.log(solution("11111",	2)); //	"111"
console.log(solution("1924",	2)); //	"94"
// console.log(solution("1231234",	3)); //	"3234"
// console.log(solution("4177252841",	4)); //	"775841"