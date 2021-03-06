function solution(lines) {
  let answer = 1;
  let s = lines.map((line) =>
    line
      .split(" ")[1]
      .split(":")
      .map((time) => Number(time))
  );
  s = s.map((time) => time[0] * 3600 + time[1] * 60 + time[2]);
  const t = lines.map((line) => Number(line.split(" ")[2].slice(0, -1)));
  const sum = s.map((v, i) => +(v + t[i]).toFixed(3));
  // console.log(sum);

  let server = [[s[0], t[0]]];
  // 시작 ~ 끝이 시작 사이에 있어야 한다.
  for (let i = 1; i < s.length; i++) {
    server.push([s[i], t[i]]);
    server = server.filter(
      (time) => +(time[0] + time[1]).toFixed(3) > s[i] - 0.999
    );
    if (server.length > answer) {
      answer = server.length;
    }
  }
  return answer;
}
// 4.001 ~ 6.001 // 7.000 ~ 9.000

// console.log(solution(["2016-09-15 23:59:59.999 0.001s"])); // 1
// console.log(
//   solution(["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"])
// ); // 1
// console.log(
//   solution(["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"])
// ); // 2
console.log(
  solution([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s",
  ])
);
/*  
  '75597.421 ~ 75597.772', 0
  '75598.233 ~ 75599.414', 0, 1
  '75598.299 ~ 75599.099', 0, 1, 2
  '75598.688 ~ 75599.729', 0, 1, 2, 3
  '75599.591 ~ 75601.003', 
  '75600.464 ~ 75601.93', 
  '75600.741 ~ 75602.322',
  '75600.748 ~ 75603.058',
  '75600.966 ~ 75601.347',
  '75602.066 ~ 75604.686'
*/
