const solution = (name) => {
  let answer = 0;
  
  for (let s of name) {
    let code = s.charCodeAt();
    if (code < 78) answer += (code - 65);
    else answer += (91 - code);
  }
  
  const names = name.split('').map((s, index) => s === "A" ? "A" : "S");
  if (!names.includes("S")) return answer;

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
  for (let i = 0; i < names.length; i++) {
    moves.push(moveL(i,[...names]))
    moves.push(moveR(i,[...names]))
  }

  for (let i = 0; i < names.length; i++) {
    moves.push(moveL(i,[...names.reverse()])+1)
    moves.push(moveR(i,[...names.reverse()])+1)
  }

  return answer + Math.min(...moves)
}