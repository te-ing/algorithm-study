const solution = (n, m, k, arr) => { // m번 k연속으로 가능
  let answer = arr.splice(arr.indexOf(Math.max(...arr)), 1) * (m - Math.floor(m / k));
  answer += Math.max(...arr) * Math.floor(m / k);
  
  return answer;
}

console.log(solution(5,8,3,[2,4,5,4,6])); // 46