function solution(numbers, hand) {
  let answer = '';
  let leftHand = [0, 3];
  let rightHand = [2, 3];
  const majorHand = hand[0].toUpperCase();

  const keypad = [
    [1, 3],
    [0, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [2, 1],
    [0, 2], [1, 2], [2, 2],
  ];

  for (let num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      answer += "L"
      leftHand = keypad[num];
    } else if (num === 3 || num === 6 || num === 9) {
      answer += "R"
      rightHand = keypad[num];
    } else if (Math.abs(keypad[num][0] - leftHand[0]) + Math.abs(keypad[num][1] - leftHand[1])
    < Math.abs(keypad[num][0] - rightHand[0]) + Math.abs(keypad[num][1] - rightHand[1])) {
      answer += "L"
      leftHand = keypad[num];
    } else if (Math.abs(keypad[num][0] - leftHand[0]) + Math.abs(keypad[num][1] - leftHand[1])
    > Math.abs(keypad[num][0] - rightHand[0]) + Math.abs(keypad[num][1] - rightHand[1])) {
      answer += "R"
      rightHand = keypad[num];
    } else {
      answer += majorHand;
      majorHand === "R" ? rightHand = keypad[num] : leftHand = keypad[num]
    } 
  }

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")) // "LRLLLRLLRRL"
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")) //	"LRLLRRLLLRR"
