/** https://www.acmicpc.net/problem/1747
nodemon algorithm/백준/template.js
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `324423
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();

const isPalin = (number) => {
  const str = `${number}`;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str.at(-(i + 1))) return false;
  }
  return true;
};

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

let cnt = N;
while (true) {
  if (isPrime(cnt) && isPalin(cnt)) {
    console.log(cnt);
    return;
  } else cnt++;
}
