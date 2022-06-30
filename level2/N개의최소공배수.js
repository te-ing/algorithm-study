// 나의 풀이
function solution(arr) {
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b); // 최대공약수
  const lcm = (a, b) => a * b / gcd(a, b); // 최대공배수
  let lastLcm = 1;

  for(let x of arr){
      lastLcm = lcm(lastLcm, x);
  }

  return lastLcm
}

// 풀이 보완
function solution(arr) {
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b); // 최대공약수
  const nlcm = (arr) => arr.reduce((a,b) => a*b / gcd(a,b)); // 3개 이상의 최대공배수
  return nlcm(arr)
}
    