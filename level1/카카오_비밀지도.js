// https://programmers.co.kr/learn/courses/30/lessons/17681
// 소요시간 44분
function solution(n, arr1, arr2) {
  let answer = [];
  // 2진수 변환  // let bin = 125;   console.log(bin.toString(2))
  function binaryConversion(num) {
    let binaryNumber = Array.from({ length:n }, a=>0);
    let count = n-1;
    while (num > 1) {
      binaryNumber[count] = num % 2;
      num = Math.floor(num / 2);
      count--;
    }
    binaryNumber[count] = num % 2;
    return binaryNumber.join('')
  }

  arr1 = arr1.map(num => binaryConversion(num));
  arr2 = arr2.map(num => binaryConversion(num));
  for (let i = 0; i < n; i++) {
    let map = ""
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === '1' || arr2[i][j] === '1') {
        map += '#'
      } else map += ' '
    }
    answer.push(map)
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]))
//	["######", "###  #", "##  ##", " #### ", " #####", "### # "]

/**
 * ["#####", 
 *  "# # #", 
 *  "### #", 
 *  "# ## ", 
 *  "#####"]
 */