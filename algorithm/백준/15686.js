const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
: `5 2
0 2 0 1 0
1 0 1 0 0
0 0 0 0 0
2 0 0 1 1
2 2 0 1 2` // 10
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input().split(" ").map(a=>Number(a));
const map = stdin.slice(1).map(a => a.split(" ").map(a => Number(a)));
const answer = [];

const chicken = []; // 지도의 치킨집
map.map((colum, colIdx) => colum.map((row, rowIdx) =>
  row === 2 ? chicken.push([colIdx, rowIdx]) : ""));
const house = []; // 지도의 집
map.map((colum, colIdx) => colum.map((row, rowIdx) =>
  row === 1 ? house.push([colIdx, rowIdx]) : ""));

const open = []; // 폐업하지 않은 치킨집의 경우의 수
const choices = (L, choice) => {
  if (choice.length === M) {
    open.push(choice.slice())
    return
  } else {
    for (let i = L; i < chicken.length; i++) {
      choices(i+1, [...choice, chicken[i]])
    }
  }
}
choices(0, []);

const findDistance = (houses, chicken) => { // 치킨거리  찾기
  const distance = [];
  for (let [hx, hy] of houses) { // 최대값
    let min = Number.MAX_SAFE_INTEGER;
    for (let [cx, cy] of chicken) {
      if (min > (Math.abs(hx - cx) + Math.abs(hy - cy)))
        min = Math.abs(hx - cx) + Math.abs(hy - cy);
    }
    distance.push(min);
  }
  return distance.reduce((a, b) => a + b, 0);
}

const findMinDistance = (house, open) => { // 조합별 치킨거리  찾기
  const distances = [];
  for (let i = 0; i < open.length; i++) {
    distances.push(findDistance(house, open[i]));
  }
  return Math.min(...distances);
}
console.log(findMinDistance(house, open));