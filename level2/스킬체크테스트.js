function solution(k, dungeons) {
  var answer = 0;
  
    function DFS(sum, L){
      if(sum===0) return;
      else {
        for (let i = L; i < dungeons.length; i++) {
          if (sum <= dungeons[L][0]) {
            answer++;
            sum -= dungeons[L][1];
          }
          DFS(sum, i + 1);
        }
      }
    }
    DFS(k, 0);
  
  return answer;
}

console.log(solution(80,	[[80,20],[50,40],[30,10]])) // 3