/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/12946
 * @풀이방법
 * 하노이의 탑을 옮기기 위해서는 
 * 1. 하나의 임시 탑에 가장 큰 원판을 제외한 모든 원판을 옮긴다.
 * 2. 가장 큰 원판을 목적지의 탑에 옮긴다.
 * 3. 임시 탑에 있는 원판들을 목적지의 탑에 옮긴다.
 * 즉 재귀함수를 두번 호출해야 한다.
 * @참고영상 https://www.youtube.com/watch?v=vq7dpFWpwAE
*/
function solution(n) {
  const answer = [];
  const hanoi = (level, from, temp, to) => {
    if (level === 1) {
      answer.push([from, to]);
    } else {
      hanoi(level-1, from, to, temp); // 원판 이동을 위해 임시 탑으로 원판을 옮긴다.
      answer.push([from, to]); // 원판을 이동할 수 있으므로 목적지로 이동하는 순간을 기록한다.
      hanoi(level-1, temp, from, to);
    }
  }
  hanoi(n, 1, 2, 3);
  
  return answer;
}
console.log(JSON.stringify(solution(3)) === "[[1,3],[1,2],[3,2],[1,3],[2,1],[2,3],[1,3]]");
