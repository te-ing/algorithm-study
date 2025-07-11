// https://www.acmicpc.net/problem/2621
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `B 1
B 2
Y 4
B 5
B 3
`
).split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const deck = Array.from({ length: 5 }, () => input().split(" ").map((v, i) => i === 1 ? +v : v));
const sortedDeck = deck.sort((a, b) => b[1] - a[1]);
const isContinual = sortedDeck.every((v, i, arr) => i === 4 || v[1] === arr[i + 1][1] + 1);
const sameNumber = []; // [ [ 7, 2 ], [ 3, 1 ], [ 2, 1 ], [ 1, 1 ] ]
const sameColor = []; // [ [ 'B', 3 ], [ 'Y', 1 ], [ 'R', 1 ] ]

for (let [c, n] of sortedDeck) {
  if (sameNumber.findIndex((v) => v[0] === n) !== -1) {
    sameNumber[sameNumber.findIndex((v) => v[0] === n)][1]++;
  } else {
    sameNumber.push([n, 1]);
  }
  if (sameColor.findIndex((v) => v[0] === c) !== -1) {
    sameColor[sameColor.findIndex((v) => v[0] === c)][1]++;
  } else sameColor.push([c, 1]);
}
sameNumber.sort((a, b) =>  b[1] - a[1]);
if (sameColor.length === 1 && isContinual) {
  console.log(900 + sameNumber[0][0]);
} else if (sameNumber.length === 2 && sameNumber[0][1] === 4) {
  console.log(800 + sameNumber[0][0]);
} else if (sameNumber[0][1] === 3 && sameNumber[1][1] === 2) {
  console.log(700 + sameNumber[0][0] * 10 + sameNumber[1][0]);
} else if (sameColor.length === 1 && !isContinual) {
  console.log(600 + sameNumber[0][0]);
} else if (isContinual) {
  console.log(500 + sameNumber[0][0]);
} else if (sameNumber[0][1] === 3) {
  console.log(400 + sameNumber[0][0]);
} else if (sameNumber[0][1] === 2 && sameNumber[1][1] === 2) {
  console.log(300 + sameNumber[0][0] * 10 + sameNumber[1][0]);
} else if (sameNumber[0][1] === 2) {
  console.log(200 + sameNumber[0][0]);
} else {
  console.log(100 + sameNumber[0][0]);
}
/**
 * 1. 카드가 같은 색이면서 연속적일 때 가장 높은 수 + 900
 * 3. 4장의 숫자가 같으면 가장 높은 수 + 800
 * 4. 3장과 2장의 숫자가 같으면 3장 수 * 10 + 2장의 수 + 700
 * 2. 카드가 같은 색이면서 비연속적일 때 가장 높은 수 + 600
 * 3. 카드가 모두 연속적일 때 가장 높은 수 + 500
 * 4. 3장의 수가 같으면 3장의 수 + 400
 * 5. 2장의 숫자가 같고 다른 2장의 숫자가 같을 때 큰숫자 * 10 + 작은숫자 + 300
 * 2장이 숫자가 같을 때 같은 숫자 + 200
 * 해당없을 때 가장 큰 숫자 + 100
 */

