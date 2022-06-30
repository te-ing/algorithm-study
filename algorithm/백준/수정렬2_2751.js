const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
  5
  4
  3
  2
  1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const answer = [];
const n = input();
for (let i = 0; i < n; i++) {
  answer.push(input());
}

console.log(answer.sort((a, b) => a - b).join("\n"));
