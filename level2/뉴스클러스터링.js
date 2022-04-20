function union(A, B) {
  let num = A.length;
  for(const x of B){
      if(!A.includes(B)){
          num++
      }
  }
  return num
}

function intersection (A, B){
  let num = 0;
  for(const x of B){
      if(A.includes(x)){
          A.splice(A.indexOf(x), 1);
          num++
      }
  }
  return num
}

function solution(str1, str2) {
  let answer = 65536;
  const regAlphabet = /[^a-zA-Z]/g 
  let strA = str1.split("").map((v,i)=>v+str1[i+1]).slice(0, -1).filter(v=>!v.match(regAlphabet)).map(v=>v.toLowerCase());
  let strB = str2.split("").map((v, i) => v + str2[i + 1]).slice(0, -1).filter(v=>!v.match(regAlphabet)).map(v=>v.toLowerCase());
  
  if(strA.length === 0 && strB.length === 0) {
    return answer
  } 
  answer *= intersection(strA, strB) / union(strA, strB)
  
  return Math.floor(answer);
}

console.log(solution("FRANCE", "french")) // 16384
console.log(solution("handshake", "shake hands")) // 65536
console.log(solution("aa1+aa2", "AAAA12")) // 43690
console.log(solution("E=M*C^2", "e=m*c^2")) // 65536