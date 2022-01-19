const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `4 5 1
1 2
1 3
1 4
2 4
3 4
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M, V] = input().split(' ').map(Number);
console.log(N, M, V)

const map = Array.from(({ length: M }) => new Array());
for (i = 0; i < M; i++) {
  const [start, end] = input().split(' ').map(Number);
  map[i] = [start, end]
} 
console.log(map);
const visited = Array.from({ length: M }, () => 0);

const DFS = (s, l) => { // 함수표현문 선언문 차이
  for (let [x,y] of map) {
    if (s === x) {
      
    }
  }
}
DFS(V)
