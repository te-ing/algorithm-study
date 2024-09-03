const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
: `4 2
9 7 9 1` // 10
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [n, m] = input().split(' ').map((v)=>+v);
const arr = input().split(' ').map((v)=>+v);

const solution = (n, m, arr) => {
  const list = [...new Set(arr)].sort((a,b) => a-b);
  const answer = [];
  const DFS = (s) => {
    if (s.length >= 2 && s[s.length - 1] < s[s.length - 2]) {
      return
    }
    if (s.length >= m) {
      answer.push(s);
    } else {
      for (let x of list){
        DFS(s.concat(x));
      }
    }
  }
  for (let x of list) {
    DFS([x]);
  }
  return answer
}
solution(n, m, arr).forEach((v) => console.log(v.join(" ")));

