const solution = (name) => {
  let answer = 0;
  
  for (let s of name) {
    let code = s.charCodeAt();
    if (code < 78) answer += (code - 65);
    else answer += (91 - code);
  }
  
  const indexA = name.split('').map((s, index) => s === "A" ? "A" : "S");
  if (!indexA.includes("S")) return answer;

  const moveR = (i, arr) => {
    let cnt = i-1;
    while (arr.includes("S")) {
      arr[i++] = "A"
      cnt++;
      if (i === arr.length) {
        i = 0;
      }
    }
    return cnt
  }
  const moveL = (i, arr) => {
    let cnt = i-1;
    while (arr.includes("S")) {
      arr[i--] = "A"
      cnt++;
      if (i < 0) {
        i = arr.length-1;
      }
    }
    return cnt
  }
  const moves = [];
  for (let i = 0; i < indexA.length; i++) {
    moves.push(moveL(i,[...indexA]))
    moves.push(moveR(i,[...indexA]))
  }

  return answer + Math.min(...moves)
}

// console.log(solution("AAA")); // 0
// console.log(solution("JEROENA")); // 5
// console.log(solution("JANIFAA")); // 4     0,1,2,3,4 4 4 // 0,6,5,4,3,2,1
// console.log(solution("JAN")); // 1
// console.log(solution("HANIY")); // 3
// console.log(solution("MUYAAAAAHO")); // 6
// console.log(solution("MUYAAAHO")); // 6
// 01234
// 10111
