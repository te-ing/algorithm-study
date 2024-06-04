/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/250136#

 * @풀이방식
 * 모든 땅을 파보면서 가장 많은 매장량 파악(메모리 오류) 
 * DFS를 사용하면 메모리오류가 발생하기 때문에 BFS를 사용해야 한다.
 * @다른사람의_풀이
 * 
*/
// DFS 풀이 메모리 초과
function solution1(land) {
  let answer = [];
  let cnt = 0;
  const xl = land.length;
  const yl = land[0].length
  const dx = [1, 0, 0, -1];
  const dy = [0, 1, -1, 0]
  
  const oilmap = (x,y,visit) => {
      if(land[x][y] === 0 || visit[x][y] === 1) return;
      visit[x][y] = 1;
      cnt++;
      for(let i=0; i<4; i++) {
          if(x+dx[i]<0 || y+dy[i]<0 || y+dy[i] >= yl || x+dx[i] >= xl) continue;
          if(land[x+dx[i]][y+dy[i]] === 1 && !visit[x+dx[i]][y+dy[i]]){
              oilmap(x+dx[i],y+dy[i],visit);
          }
      }
  }
 
  for(let i=0; i<yl; i++){
      cnt=0;
      const visitMap = Array.from({length: xl}, ()=>Array(yl).fill(0));
      for(let j=0; j<xl; j++){
          oilmap(j, i, visitMap);
      }
      answer.push(cnt);
  }
  return Math.max(...answer);
}

// DFS를 BFS로 변환 (시간초과)
function solution2(land) {
  let answer = [];
  let cnt = 0;
  const xl = land.length;
  const yl = land[0].length
  const dx = [1, 0, 0, -1];
  const dy = [0, 1, -1, 0]
  
  const oilmap = (x,y,visit) => {
      const queue = [[x,y]]
      while(queue.length){
          const[a,b] = queue.pop();
          if(land[a][b] === 0 || visit[a][b] !== 0) continue;
          visit[a][b]=1;
          cnt++;
          for(let i=0; i<4; i++) {
              if(a+dx[i] >= xl || a+dx[i] < 0 ||b+dy[i] >= yl || b+dy[i] <0) continue
              if(visit[a+dx[i]][b+dy[i]] !== 1 && land[a+dx[i]][b+dy[i]] === 1){
                  queue.push([a+dx[i],b+dy[i]]);
              }
          }
      }
  }
  
  
for(let i=0; i<yl; i++){
    const visitMap = Array.from({length: xl}, ()=>Array(yl).fill(0));
    cnt=0;
    for(let j=0; j<xl; j++){
        oilmap(j, i, visitMap);
    }
    answer.push(cnt);
}
  return Math.max(...answer)
}

console.log(solution([[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 1, 1]]) === 9);