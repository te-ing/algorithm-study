function solution(s) { // 테스트 1 〉	통과 (280.77ms, 34.1MB) 테스트 2 〉	통과 (110.67ms, 34.2MB) 테스트 3 〉	통과 (87.34ms, 34MB)
  let answer = 0;
  
  function checkBracket(l, r){
      if(l==="[" && r === "]") return true
      if(l==="(" && r === ")") return true
      if(l==="{" && r === "}") return true
      return false
  }
  
function verify(s) {
  let arr = s.split('');
  for (let i = 0; i < arr.length - 1; i++){
    if(checkBracket(arr[i], arr[i+1])){n  
      arr.splice(i,2);
      i=-1;
    }
  }
  if (arr.length === 0) {
    return true
  } else return false
}
  
  for(let i=0; i<s.length; i++){
      if(verify(s.slice(i)+s.slice(0,i))){
          answer++
      }
  }
  
  return answer;
}

// console.log(solution("[](){}")); // 3
// console.log(solution("}]()[{")); // 2
// console.log(solution("[)(]")); // 0
// console.log(solution("}}}")); // 0

function anotherSolution(s) { 
  if(s.length % 2 === 1) return 0; // 올바르지 않은 문자열 반환

  let answer = 0;
  const mapping = { "}" : "{", "]" : "[", ")" : "("};

  for(let i = 0; i < s.length; i++) {
      const stack = [];
      const rotate = s.slice(i) + s.slice(0, i);
      let flag = true;

      for(let j = 0; j < s.length; j++) {
          if(rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{" )
              stack.push(rotate[j]);
          else {
              const last = stack.pop();
              if(last !== mapping[rotate[j]]) {
                  flag = false
                  break;
              }
          }
      }

      if(flag) answer++;
  }

  return answer;
}


// console.log(anotherSolution("[](){}")); // 3
console.log(anotherSolution("}]()[{")); // 2
// console.log(anotherSolution("[)(]")); // 0
// console.log(anotherSolution("}}}")); // 0