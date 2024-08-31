/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/131127#

 * @풀이방식
 * 객체 비교 함수를 만들고 매일 객체를 비교
 * @다른사람의_풀이
 * 객체 비교 함수를 만들고 10일부터 매일 객체를 비교
*/

function compareHash(a,b) {
  for(const key in a) {
      if(a[key] !== b[key]) return false
  }
  return true
}

function solution(want, number, discount) {
  let answer = 0;
  const n = want.length;
  const wantHash = {};
  const discountHash = {};
  
  for(let i=0; i<n; i++) {
      wantHash[want[i]] = number[i];
  }

  for(let i=0; i<discount.length; i++) {
      discountHash[discount[i]] = discountHash[discount[i]] ? discountHash[discount[i]] + 1 : 1;
      if(i>= 10) {
          discountHash[discount[i - 10]] -= 1;
      }
      if(compareHash(wantHash, discountHash)) {
          answer++;
      }
  }
  
  return answer;
}


console.log(solution(["banana", "apple", "rice", "pork", "pot"],	[3, 2, 2, 2, 1],	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]) === 3);
console.log(solution(["apple"],	[10],	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]) === 0);