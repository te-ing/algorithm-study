// https://programmers.co.kr/learn/courses/30/lessons/42889
function solution(N, stages) {
  let answer;
  const players = Array.from({ length: N + 1 }, () => 0);
  stages.map((player) => players[player - 1]++);
  stages.sort((a, b) => b-a);
  let failure = {};
  for (let i = 0; i < players.length - 1; i++) {
    if (!players[i]) {
      failure[i + 1] = 0;
    } else {
      failure[i + 1] = players[i] / (stages.indexOf(i+1)+players[i]);
    }
  }
  const failures = Object.entries(failure).sort((a, b) => b[1] - a[1]);
  answer = failures.map(a => Number(a[0]));
  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])) //[3,4,2,1,5]
// console.log(solution(4, [4,4,4,4,4])) //[4,1,2,3]
// console.log(solution(6, [3,3,3,3]))

/* 이전 풀이 1,3,12,19,20,21 실패 정확성 77.8 
function solution(N, stages) {
  let answer = [];
  let failure = [];
  let temp = [];
  let rank;

  stages.sort((a, b) => b - a);
  player = Array.from({ length: N + 1 }, a => 0);
  stages.map(stage => player[stage-1]++);
  for (let i = 0; i < N; i++) {
    failure[i] = player[i] ? player[i]/player.slice(i).reduce((a, b) => a + b) || 1 : 0
  }
  temp = failure.slice();
  failure.sort((a, b) => b - a);
  for (let index of failure) {
    rank = temp.indexOf(index) + 1
    while (answer.includes(rank)) {
      rank++;
    }
    answer.push(rank)
  }
  console.log(failure)
  console.log(temp)
  return answer;
}

// console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])) //[3,4,2,1,5]
// console.log(solution(4, [4,4,4,4,4])) //[4,1,2,3]
console.log(solution(6, [3,3,3,3])) //
*/
