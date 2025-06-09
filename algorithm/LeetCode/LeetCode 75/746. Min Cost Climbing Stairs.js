/**
 * @링크
 * https://leetcode.com/problems/min-cost-climbing-stairs/description/

 * @풀이방식
 * DFS 풀이 후 TIME_LIMIT 문제로 인해 DP로 변경
 * step N 까지 가는 최적의 해는 step N-1 과 step N-2 중 적은 값 반복
 * 상위 1% 풀이
 * @다른사람의_풀이
*/
var minCostClimbingStairs = function(cost) {
    let first = 0, second = 0;

    for (let i = 2; i <= cost.length; i++) {
        let temp = Math.min(second + cost[i - 1], first + cost[i - 2]);
        first = second;
        second = temp;
    }

    return second;
};
