function solution(p) {
  if (!p) return

  function balance(s) {
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length-1; i++){
      if (s[i] === "(") left++;
      else right++;
      if (left === right) return [s.slice(0, i + 1), s.slice(i+1)];
    }
    return [s]
  }

  function correct(s) {
    const queue = [s[0]];
    for (let i = 1; i < s.length; i++){
      if (queue[queue.length - 1] === "(" && s[i] === ")") {
        queue.pop();
      } else {
        queue.push(s[i])  
      }
    }
    if (queue.length) return false
    else return true
  }

  function formatReverse(s) {
    let result = "";
    for (let x of s.slice(1, -1)) {
      if (x === "(") result += ")"
      else result += "("
    }
    return result
  }

  function formatting(p) {
    if(!p) return ""
    let result = ""
    const arr = balance(p);
      if (correct(arr[0])) {
        result += arr[0] + formatting(arr[1]);
      } else {
        result += "(";
        result += formatting(arr[1]);
        result += ")";
        result += formatReverse(arr[0]);
    }
    return result
  }
    
  return formatting(p);
}

console.log(solution("(()())()")) //   "(()())()"
console.log(solution(")(")) // "()"
console.log(solution("()))((()")) //   "()(())()" 