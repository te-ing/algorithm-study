function solution(numbers) {
  let answer = '';
  let temp;
  const _numbers = [...numbers]

  for (let i = 0; i < numbers.length - 1; i++) {
    temp = numbers[i]
    for (let j = 1; j < numbers.length; j++) {
      if (Number(String(numbers[i])[0]) === Number(String(numbers[j])[0])) {
        temp = Number(String(numbers[i])[0]) === Number(String(numbers[j])[0])
      }
    }
    answer += numbers[i];
  }
  
  numbers.map(v => answer += v);
  
  return answer;
}




// console.log(solution([6, 10, 2]));//	"6210"
console.log(solution([3, 30, 34, 5, 9]));//	"9534330"