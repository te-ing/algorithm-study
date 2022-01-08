function solution(lottos, win_nums) {
  let answer = [6, 6];
  let collectNumber = 0;
  let erasedNumber = 0;

  for (let lotto of lottos) {
      if (win_nums.includes(lotto)) {
        collectNumber++;
      } else if (lotto === 0) {
        erasedNumber++;
      }
   }
  
  if (collectNumber + erasedNumber > 1) {
      answer[0] = 7 - collectNumber - erasedNumber;
      if (collectNumber > 1) {
          answer[1] = 7 - collectNumber;
      }
  }

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
