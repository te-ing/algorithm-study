function solution(number, k) {
  let answer = [];
  const check = Array.from({ length: number.length }, () => false);
  let numbers = ""

  function DFS(num, check) {
    console.log(num);
    if (num.length === number.length - k) {
      answer.push(num)
      return
    } else {
      for (let i = 0; i < number.length; i++) {
        if (!check[i]) {
          check[i] = true;
          DFS(num + number.substring(i, i + 1), check)
        }
      }
    }
  }
  DFS(numbers, check);

  return answer;
}

// console.log(solution("1924",	2)); // "94"
console.log(solution("1231234",	3)); // "3234"
// console.log(solution("4177252841",	4)); // "775841"