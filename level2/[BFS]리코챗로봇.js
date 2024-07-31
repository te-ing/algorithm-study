/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/169199

 * @풀이방식
 * BFS사용,  * while을 사용해서 미끄러짐 구현
 * while 두번 사용하는 것, visit 구현 방식 몰랐음.
 * @다른사람의_풀이
 * BFS사용 및 while을 사용해서 미끄러짐 구현
*/
function solution(board) {
  let start;
  let goal;
  const arr = board.map((v) => v.split(''));
  const xl = board[0].length;
  const yl = board.length;
  const visit = Array.from({length: yl}, ()=>Array(xl).fill(false));
  
  arr.forEach((yv,yi) => yv.forEach((xv, xi)=> {
      if(yv[xi] === "G") goal = [yi, xi];
      if(yv[xi] === "R") start = [yi, xi];
      if(goal && start) return
  }))
  visit[start[0]][start[1]] = true;
  
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [[...start, 0]];
  
  while(queue.length){
      let [y,x,count] = queue.shift();
      for(let i=0; i<4; i++) {
          let nx = x;
          let ny = y;
          
          while(!(nx+dx[i]<0||
                  ny+dy[i]<0||
                  nx+dx[i]>=xl||
                  ny+dy[i]>=yl||
                  arr[ny+dy[i]][nx+dx[i]] ==="D"))
          {
              nx += dx[i];
              ny += dy[i];
          }
          if(arr[ny][nx]==="G") return count+1;
          if(!visit[ny][nx]){
              visit[ny][nx] = true;
              queue.push([ny,nx, count+1]);
          }
      }
  }
  return -1;
}

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]) === 7);
console.log(solution([".D.R", "....", ".G..", "...D"]) === -1);