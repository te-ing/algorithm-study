// https://www.acmicpc.net/problem/2816
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `4
ABC1
ABC02
KBS2
KBS1
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const channels = Array.from({ length: N }, () => input());
let one = channels.indexOf("KBS1");

let answer = "";

answer += '1'.repeat(one);
answer += '4'.repeat(one);

channels.splice(one, 1);
channels.unshift("KBS1");

let two = channels.indexOf("KBS2");

if (two !== 1) {
  answer += '1'.repeat(two);
  answer += '4'.repeat(two-1);
}
console.log(answer);
