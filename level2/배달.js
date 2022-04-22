function solution(N, road, K) {
  let answer = 0;
  
  const map = Array.from({length: N+1}, ()=> K+1);
  map[1] = 0;
  
  function find(n){
      for(let [a,b,d] of road){
          if(a === n && map[a]+d <= K && map[a]+d < map[b]){
              map[b] = map[a]+d
          } else if (b === n && map[b]+d <= K && map[b]+d < map[a]) {
              map[a] = map[b]+d
          }
      }
  }
  
  for(let j=0; j<K; j++){
      for(let i=1; i<=N; i++) {
          if(map[i]<=K){
              find(i);
          }
      }
  }
  
  map.forEach(v=>v<=K && answer++)
  
  return answer;
}
