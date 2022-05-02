function solution(expression) {
  answer = [];

  expression = expression.split('').map(v => v === "-" ? v = "@" : v).join('');
  
  function multiply(expression) {
    const operators = expression.match(/[@*+]/g)
    if(!operators) return expression
    const numbers = expression.split(/[@*+]/g)
    const exp = [Number(numbers[0])];
    const result = [];
    operators.map((v, idx) => exp.push(v, Number(numbers[idx+1])))
    for (let i = 0; i < exp.length; i++){
      if (exp[i] === "*") {
        const n = result.pop();
        result.push(n * exp[i + 1]);
        i++
      } else {
        result.push(exp[i])
      }
    }
    return result.join('')
  }

  function plus(expression) { 
    const operators = expression.match(/[@*+]/g)
    if(!operators) return expression
    const numbers = expression.split(/[@*+]/g)
    const exp = [Number(numbers[0])];
    const result = [];
    operators.map((v, idx) => exp.push(v, Number(numbers[idx+1])))
    for (let i = 0; i < exp.length; i++){
      if (exp[i] === "+") {
        const n = result.pop();
        result.push(n + exp[i + 1]);
        i++
      } else {
        result.push(exp[i])
      }
    }
    return result.join('')
  }

  function minus(expression) { 
    const operators = expression.match(/[@*+]/g)
    if(!operators) return expression
    const numbers = expression.split(/[@*+]/g)
    const exp = [Number(numbers[0])];
    const result = [];
    operators.map((v, idx) => exp.push(v, Number(numbers[idx + 1])))
    for (let i = 0; i < exp.length; i++){
      if (exp[i] === "@") {
        const n = result.pop();
        result.push(n - exp[i + 1]);
        i++
      } else {
        result.push(exp[i])
      }
    }
    return result.join('')
  }

  answer.push(Math.abs(minus(plus(multiply(expression)))))
  answer.push(Math.abs(minus(multiply(plus(expression)))))
  answer.push(Math.abs(plus(minus(multiply(expression)))))
  answer.push(Math.abs(plus(multiply(minus(expression)))))
  answer.push(Math.abs(multiply(plus(minus(expression)))))
  answer.push(Math.abs(multiply(minus(plus(expression)))))
  
  return Math.max(...answer)
}

console.log(solution("100-200*300-500+20")) // 60420
console.log(solution("50*6-3*2")) // 300
