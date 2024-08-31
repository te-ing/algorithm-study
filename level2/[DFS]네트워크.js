/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/43162

 * @풀이방식
 * DFS를 사용하여 방문하지 않은 네트워크마다 answer + 1
 * @다른사람의_풀이
 * 
*/
function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false);
  
  const DFS = (s) => {
      for(let i=0; i<n; i++){
          if(i!==s && !visited[i] && computers[s][i]) {
              visited[i]=true;
              DFS(i);
          }
      }
  }
  
  for(let i=0; i<n; i++) {
      if(!visited[i]){
          visited[i] = true;
          DFS(i)
          answer++;
      }
  }
  
  return answer;
}

console.log(solution(3,	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]) === 2);
console.log(solution(3,	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]) === 1);