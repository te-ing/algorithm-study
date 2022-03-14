var input = `3
3 4
1 3 3 2 2 1 4 1 0 6 4 7
4 4
1 3 1 5 2 2 4 1 5 0 2 3 0 6 1 2
2 4
2 3 1 7 5 0 5 2`
// 19 16 20

input = input.split('\n').map(a => a.split(' ').map(a => Number(a)));

const solution = (input, array) => {
  const [n, m] = input;
  const map = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++){
    map[i] = array.slice(i * m, (i + 1) * m);
  }
  const ny = [-1, 0, 1];
  const answer = [];
  const max = Array.from({ length: m+1 }, () => [0]);
  for (let i = 0; i < n; i++){
    max[0].push(map[i][0]);
  }
  max[0] = Math.max(...max[0])

  const DFS = (x, y, gold) => {
    if (x === m) {
      answer.push(gold);
      return 
    } else {
      for (let i = -1; i < 2; i++){
        if (y + i >= 0 && y + i < n && max[x+1] <= map[y+i][x]) {
          max[x+1] = map[y+i][x]
          DFS(x+1, y+i, gold+map[y+i][x])
        }
      }
    }
  }
  for (let i = 0; i < n; i++){
    if(map[i][0]===max[0]) 
    DFS(1, i, map[i][0]);
  }
  console.log(Math.max(...answer));
}
for (let i = 0; i < input[0]; i++){
  solution(input[i * 2 + 1], input[i * 2 + 2]);
}
