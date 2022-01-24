function solution(s) {
  let answer = 0;
  // function pair(arrayS) {
  //   if (!arrayS.length) {
  //     return answer = 1;
  //   } else {
  //     for (let i=1; i<arrayS.length; i++) {
  //       if (arrayS[i - 1] === arrayS[i]) {
  //         pair(arrayS.substring(0, i - 1) + arrayS.substring(i + 1));
  //         break
  //       }
  //     }
  //   }
  // }
  // pair(s);
  console.log(s);
  // s.sort((a,b)=>a-b);

  return answer;
}

console.log(solution("baabaa")) // 1
// console.log(solution("aaa")) // 1
// console.log(solution("cdcd")) // 0
