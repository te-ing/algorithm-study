function solution(new_id) {
  let answer = '';
  
  // 1단계
  answer = new_id.toLowerCase();
  // 2단계
  answer = answer.replace(/[^\w.-]/g, "");
  // 3단계
  answer = answer.replace(/\.+/g, ".");
  // 4단계
  answer = answer.replace(/^\.|\.$/g, "");

  //  5, 6단계
  if (answer.length > 15 && answer[14] === ".") {
    answer = answer.substring(0, 14);
  } else if (answer.length > 15) {
    answer = answer.substring(0, 15);
  } else if (!answer.length) {
    answer = "a";
  }

  // 7단계
  if (answer.length < 3) {
    while (answer.length < 3) {
      answer += answer[answer.length-1]
    }
  }
  
  return answer; 
  }
  
  console.log(solution("=.="))// "aaa"
  console.log(solution("...!@BaT#*..y.abcdefghijklm"))// "bat.y.abcdefghi"
  console.log(solution("z-+.^."))// "z--"
  console.log(solution("123_.def")) // "123_.def"
  