function iterativeFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i
  return result
}

function recursiveFactorial(n) {
  if (n <= 1) return 1
  else return n * recursiveFactorial(n - 1);
}
console.log(iterativeFactorial(4))
console.log(recursiveFactorial(4))
