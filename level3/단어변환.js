function solution(begin, target, words) {
  let count = 0;
  if(!words.includes(target)) return 0

  const queue = [[begin, count]];
  while (queue.length) {
    const [v, count] = queue.shift();
    if (v === target) return count;
    for (let i = 0; i < words.length; i++) {
      if (v.split('').filter((value, idx) => value === words[i][idx]).length === target.length - 1) {
        queue.push([words[i], count+1]);
      }
    }
  }

  return count;
}
console.log(solution(
  "hit",   "cog",   ["hot", "dot", "dog", "lot", "log", "cog"]))   //4
console.log(solution(
"hit",   "cog",   ["hot", "dot", "dog", "lot", "log"]))   //0


// for (let i = 0; i < words.length; i++) {
//   function DFS(s) {
//     if (check[i] === 0 && s.split('').filter((value, idx) => value === words[i][idx]).length === begin.length - 1) {
//       check[i] = 1;
//       console.log(s, words[i])
//       s = words[i];
//       count++;
//       if (s === target) {
//         answer.push(count);
//       }
//       DFS(s)
//     }
//   }
// }
