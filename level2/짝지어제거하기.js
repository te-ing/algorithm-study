function solution(s) {
  const stack = [];
  for (let x of s) {
    if (x == stack[stack.length - 1]) {
      stack.pop();
      continue
    }
    stack.push(x)
  }
  if (stack.length) return 0
  return 1;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0