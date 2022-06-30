const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 16`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [n, m] = input()
  .split(" ")
  .map((v) => Number(v));

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (Number.isInteger(n / i)) {
      return false;
    }
  }
  return true;
}

for (let i = n; i <= m; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
