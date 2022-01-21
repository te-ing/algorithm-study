const input = `4 6
19 15 10 17`.split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);
const rices = input[1].split(" ").map(a => Number(a));
console.log(Math.max(...rices));

const solution = (N, M, rices) => {
  let answer = 0;
  let lt = 0, rt = Math.max(...rices);
  while (lt <= rt) {
    let mid = parseInt((rt + lt) / 2);
    let target = rices.reduce((a, b) => a + (b - mid > 0 ? b - mid : 0), 0);
    console.log("lt:",lt, "rt:",rt,"mid:",mid, "target",target);
    if (target === M) {
      answer = mid
      break;
    } else if (M > target) {
      rt = mid - 1;
    } else lt = mid + 1;
  }
  return answer;
}
console.log(solution(N,M,rices));