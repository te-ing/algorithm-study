function solution(board, moves) {
  let basket = [];
  let answer = 0;

  for (let i of moves) {
    for (let j in board) {
      if (board[j][i-1] !== 0) {
        basket.push(board[j][i-1]);
        board[j][i-1] = 0;
        break;
      }
    }
  }

  function boom(basket) {
    for (let i = 0; i < basket.length-1; i++) {
      if (basket[i] === basket[i + 1]) {
        answer += 2;
        basket.splice(i, 2);
        boom(basket)
      }
    }
  }
  boom(basket);

  return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1],
[4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4])) // 4