function solution(k, d) {
  const answer = [];
  const N = d.length
  const visited = new Array(N).fill(0);

  function DFS(hp, visited){
      if(hp<=0 || !visited.includes(0)){
          if(hp>=0){
              answer.push(visited.filter(v=>v===1).length)
          }
          return
      } else{
          for(let i=0; i<N; i++){
              if(visited[i] === 1) continue
              if(hp >=d[i][0] && hp >= d[i][1]){
                  visited[i] = 1;
                  answer.push(visited.filter(v=>v===1).length)
                  DFS(hp-d[i][1], visited)
              }
              visited[i] = 0;
          }
      }
  }
  DFS(k, visited)
  return Math.max(...answer);
}

function anotherSolution(k, d) {
  const N = d.length
  const visited = new Array(N).fill(0)
  let answer = 0

  function dfs(k, cnt){
      answer = Math.max(cnt, answer)

      for (let j = 0; j < N; j++){
          if (k >= d[j][0] && !visited[j]){
              visited[j] = 1
              dfs(k - d[j][1], cnt + 1)
              visited[j] = 0
          }
      }
  }

  dfs(k, 0)
  return answer;
}

console.log(solution(80, [[80,20],[50,40],[30,10]]))