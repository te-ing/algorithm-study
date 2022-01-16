// https://programmers.co.kr/learn/courses/30/lessons/43164
// 테스트케이스 1번 실패 75점
function solution(tickets) {
  let answer = [];
  let visited;
  
  function DFS(arrive, visited, map) { //
    for (let i = 0; i < tickets.length; i++) {
      if (map.length === tickets.length - 1) {
        map.push(...tickets[visited.indexOf(false)]);
        visited[visited.indexOf(false)] = true
        return map
      } else if (!visited[i] && arrive === tickets[i][0]) {
        visited[i] = true;
        map.push(tickets[i][0])
        DFS(tickets[i][1], visited, map)
      }
    }
    return !visited.includes(false) && map
  }
  for (let i = 0; i < tickets.length; i++) {
    visited = Array.from({ length: tickets.length }, (isvisited) => false);
    if (tickets[i][0] === "ICN") {
      visited[i] = true;
      answer.push(DFS(tickets[i][1], visited, ["ICN"]))
    }
  }
  return answer.sort()[0];
}

// console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])) //	["ICN", "JFK", "HND", "IAD"]
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]])) //	["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
// console.log(solution([["ICN", "B"], ["B", "ICN"], ["ICN", "A"], ["A", "D"], ["D", "A"]])) // ["ICN", "B", "ICN", "A", "D", "A"]