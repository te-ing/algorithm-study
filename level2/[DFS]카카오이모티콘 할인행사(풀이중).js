/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/150368

 * @풀이방식
* 모든 할인 경우의 수에 따른 이모티콘 경우의 수: 최대 4**7 (16384)
* DFS([]);
* 
* 가장 많은 가입자와 판매액 경우의 수: 최대 2**7 (128)
* 4**7 * 2**7 = 약 200만

 * @다른사람의_풀이
 * 
*/

function solution(users, emoticons) {
  let userAnswer = 0;
  let moneyAnswer = 0;
  const cases = [];
  
  const percent = [10, 20, 30, 40];
  
  const DFS = (array) => {
      const level = array.length;
      if(level === emoticons.length) {
          cases.push([...array]);
          return;
      } else {
          for(let i=0; i<4; i++) {
              const emoticon = emoticons[level];
              const price = [percent[i], emoticon * ((100 - percent[i]) / 100)];
              array.push(price);
              DFS(array);
              array.pop();
          }
      }
  }
  DFS([]);
  
  
  console.log(cases)
  return [userAnswer, moneyAnswer];
}

console.log(solution([[40, 10000], [25, 10000]],	[7000, 9000]).toString() === [1, 5400].toString());
console.log(solution([[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200], [32, 6900]],	[1300, 1500, 1600, 4900]).toString() === [4, 13860].toString());
