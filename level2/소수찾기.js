function solution(numbers) {
  var answer = 0;
  const primes = [];

  function isPrime(n) {
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (!n % i) {
        return false
      }
    }
    answer++;
    return true;
  }


  return answer;
}

console.log(solution("17")); // 3
// console.log(solution("011")); // 2
