/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/12949

 * @풀이방식
 * 행렬의 곱셈 결과값을 push. 행렬의 곱셈을 이해하는 것이 어려웠음
 * @다른사람의_풀이
 * 미리 2차원 배열을 0으로 초기화 한 뒤 사용
*/
function solution(arr1, arr2) {
  const answer = [];

  for(let i=0; i<arr1.length; i++) {
      const tmpArr = [];
      for(let j=0; j<arr2[0].length; j++) {
          let tmpNum = 0;
          for(let k=0; k<arr2.length; k++) {
              tmpNum += arr1[i][k] * arr2[k][j];
          }
          tmpArr.push(tmpNum);
      }
      answer.push(tmpArr);
  }
  
  return answer;
}

	
console.log(solution([[1, 4], [3, 2], [4, 1]],	[[3, 3], [3, 3]]).toString() === [[15, 15], [15, 15], [15, 15]].toString());
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]],	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	).toString() === [[22, 22, 11], [36, 28, 18], [29, 20, 14]].toString());
