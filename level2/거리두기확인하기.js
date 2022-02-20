function solution(places) {
  const answer = Array.from({length: 5},()=>1);
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  function DFS (start, map, L){
    const [x, y] = start;
    map[0][0] = "X";
    console.log(map[0][0])
    if (L === 2) {
      return true
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
          if (map[nx][ny] === "O") {
            DFS([nx, ny], map, L + 1)
          } else if (map[nx][ny] === "P") {
            console.log(nx,ny)
            return false
          }
        }
      }
    }
  }
  console.log(DFS([0,0],places[0], 0))
  
  return answer;
}

console.log(solution([
  [
    "POOOP",
    "OXXOX",
    "OPXPX",
    "OOXOX",
    "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
])) // [1, 0, 1, 1, 1]