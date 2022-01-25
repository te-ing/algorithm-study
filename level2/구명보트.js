function solution(arr, n) {
  let answer = 0;
  let peoples = arr.sort((a, b) => a-b);
  
  while (peoples.length) {
    if (n >= peoples[0] + peoples[peoples.length-1]) {
      peoples.pop();
      peoples.shift();
    } else peoples.pop()
    answer++;
  } 
  return answer
}

console.log(solution([70, 50, 80, 50], 100)); // 3
// console.log(solution([70, 80, 50], 100)); // 3