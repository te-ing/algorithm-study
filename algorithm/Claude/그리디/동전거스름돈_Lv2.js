/**
 * 문제: 동전 거스름돈
 * 난이도: Lv.2
 *
 * 거스름돈 amount원을 동전으로 거슬러주려 합니다.
 * 사용할 수 있는 동전의 종류는 [500, 100, 50, 10]원이며,
 * 동전의 개수가 최소가 되도록 거슬러줄 때, 필요한 동전의 총 개수를 구하세요.
 *
 * [제한사항]
 * - amount는 10의 배수입니다.
 * - 10 <= amount <= 100,000
 *
 * [입출력 예시]
 * amount = 1260 → 6    (500*2 + 100*2 + 50*1 + 10*1)
 * amount = 3210 → 9    (500*6 + 100*2 + 10*1)
 * amount = 10   → 1    (10*1)
 *
 * node --watch algorithm/Claude/그리디/동전거스름돈_Lv2.js
 */

function solution(amount) {
  const change = [500, 100, 50, 10];
  let result = 0;
  for (let x of change) {
    const cnt = Math.floor(amount / x);
    amount = amount % x;
    result += cnt;
  }
  return result;
}

// 테스트
const testCases = [
  { input: 1260, expected: 6 },
  { input: 3210, expected: 9 },
  { input: 10, expected: 1 },
  { input: 500, expected: 1 },
  { input: 2780, expected: 11 }
];

testCases.forEach(({ input, expected }, i) => {
  const result = solution(input);
  const pass = result === expected;
  console.log(
    `테스트 ${i + 1}: ${pass ? '통과 ✅' : '실패 ❌'} (입력: ${input}, 결과: ${result}, 기대값: ${expected})`
  );
});
