/**
 * 문제: 계단 오르기
 * 난이도: Lv.2
 *
 * 한 번에 1칸, 2칸, 또는 3칸씩 계단을 오를 수 있습니다.
 * n개의 계단을 오르는 서로 다른 방법의 수를 구하세요.
 *
 * [제한사항]
 * - 1 <= n <= 30
 *
 * [입출력 예시]
 * n = 3 → 4       (1+1+1, 1+2, 2+1, 3)
 * n = 4 → 7       (1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2, 1+3, 3+1)
 * n = 5 → 13
 *
 * node --watch algorithm/Claude/DP/계단오르기_Lv2.js
 */

function solution(n) {
  const memo = [];
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 4;

  const dp = (n) => {
    if (n <= 0) return 0;
    if (memo[n]) return memo[n];
    memo[n] = dp(n - 1) + dp(n - 2) + dp(n - 3);
    return memo[n];
  };

  return dp(n);
}

function bottomUpSolution(n) {
  const dp = [0, 1, 2, 4];
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
}

// 테스트
const testCases = [
  { input: 3, expected: 4 },
  { input: 4, expected: 7 },
  { input: 5, expected: 13 },
  { input: 1, expected: 1 },
  { input: 2, expected: 2 }
];

testCases.forEach(({ input, expected }, i) => {
  const result = solution(input);
  const pass = result === expected;
  console.log(
    `테스트 ${i + 1}: ${pass ? '통과 ✅' : '실패 ❌'} (입력: ${input}, 결과: ${result}, 기대값: ${expected})`
  );
});
