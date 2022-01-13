function solution(m) {
  const check = Array.from(Array(m.length), () => Array(m[0].length).fill(false));
  const direction = [1, 0, -1, 0];

  let dx = 0;
  let dy = 0;

  function DFS([dy, dx], check) {
    check[dy, dx] = true;
    


  }



  check[i][j] = false;

  return check;
}

console.log(solution([
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
])) // 3


                  