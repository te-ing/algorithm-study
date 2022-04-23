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

const dfsSolution = (N, road, K) => {
  let answer = 0;
  const graph = Array.from({ length: N + 1 }, () => []);
  road.forEach((r) => {
    graph[r[0]].push([r[1], r[2]]);
    graph[r[1]].push([r[0], r[2]]);
  });
  
  const weight = Array.from({ length: N + 1 }, () => Infinity);
  
  function DFS (start, w) { // w는 거리
    if (weight[start] < w) {
      return;
    } else {
      weight[start] = w;
      for (let [a, b] of graph[start]) {
        DFS(a, w + b);
      }
    }
  };
  
  DFS(1, 0);
  weight.map(w => w <= K && answer++);

  return answer
};

// console.log(solution(6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4));
// console.log(dfsSolution(6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4));
