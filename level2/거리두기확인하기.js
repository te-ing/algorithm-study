function solution(places) {
  let answer = [];

  places: for (const place of places) {
    function checkPeople(x, y) {
      const dx = [-1, 0, 1, 0];
      const dy = [0, 1, 0, -1];
      
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5 || place[nx][ny] === "X") {
          continue
        }
        if (place[nx][ny] === "P") {
          return true
        } else {
          for (let i = 0; i < 4; i++) {
            const nnx = nx + dx[i];
            const nny = ny + dy[i];
            if (nnx < 0 || nnx >= 5 || nny < 0 || nny >= 5 || place[nx][ny] === "X") {
              continue
            }
            if (place[nnx][nny] === "P" && nnx !== x || place[nnx][nny] === "P" && nny !== y) {
              return true
            }
          }
        }
      }
      return false
    }

    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        if (place[x][y] === "P") {
          if (checkPeople(x, y)) {
            answer.push(0)
            continue places
          } 
        }
      }
    }
    answer.push(1)
  }

  return answer;
}

console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]))
// [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]	[1, 0, 1, 1, 1]