/** https://www.acmicpc.net/problem/2661
nodemon algorithm/백준/template.js
*/
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();

const isGood = (str) => {
  let tmp = '';
  for (let i = 0; i < str.length; i++) {
    tmp += str[i];
    for (let j = 1; j <= tmp.length; j++) {
      if (tmp.slice(-j) === str.slice(i + 1, i + j + 1)) {
        return false;
      }
    }
  }
  return true;
};

const numbers = ['1', '2', '3'];
const dfs = (curr) => {
  if (curr.length === N) {
    console.log(curr);
    process.exit();
  } else {
    for (let i = 0; i < 3; i++) {
      const next = curr + numbers[i];
      if (isGood(next)) dfs(next);
    }
  }
};
dfs('1');
