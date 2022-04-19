function checkBalance(s) {
  if (!s) return;
  let left = 0;
  let right = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? left++ : right++;
    if (left !== 0 && left === right) {
      return ++i
    }
  }
}

function checkCorrect(s) {
  let correct = true;
  if(!s) return correct
  const stack = [s[0]];
  
  for (let i = 1; i < s.length; i++){
    if(stack[stack.length-1] === "(" && s[i] === ")") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
    if(stack.length) correct = false;
    return correct
  }

function solution(p) {
  let answer = '';
  // console.log(checkBalance(p))
  let balanceIndex = checkBalance(p);
  // if(checkCorrect(p.slice(0,balanceIndex))){
  //   answer += p.slice(0,balanceIndex);
  // } else{
  //   재귀함수
  // }
  if(p.slice(checkBalance(p)))

  function changeP(u, v) {
    let result = "(";
    result += v;
    result += ")";
  }
  console.log("p", p.slice(1,-1).split('').reverse().join('')) 
  console.log("p", p)

  console.log(p.slice(0,balanceIndex));
  console.log(p.slice(balanceIndex));


  return answer;
}



// console.log(solution("(()())()")) //   "(()())()"
// console.log(solution(")(")) // "()"
console.log(solution("()))((()")) //   "()(())()"