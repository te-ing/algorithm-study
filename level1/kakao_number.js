function solution(s) {
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"];
  let answer = [];
  
  for (let i = 0; i < s.length; i++) {
    if (/[0-9]/.test(s[i])) {
      answer.push(s[i]);
      continue;
    }

    for (let j = i; j <= s.length; j++) {
      if (number.includes(s.slice(i, j))) {
        answer.push(number.indexOf(s.slice(i, j)));
        break;
      }
    }
  }
  return parseInt(answer.join(''));
}

console.log(solution("2three45sixseven")) // 234567
console.log(solution("one4seveneight")) // 1478

/**
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
 */