function solution(s) {
  let answer = [];
  let cnt = 1;
  for (let i = 1; i <= s.length / 2+1; i++) {
    let words = "";
    if (s.substring(0, i) !== s.substring(i, i * 2)) {
      answer.push(s.length)
      continue
    }
    let _s = s.slice();
    while (_s.length > i) {
      let word = _s.substring(0, i);
      _s = _s.substring(i);
      if (word === _s.substring(0, i)) {
        cnt++;
      } else if (word !== _s.substring(0, i)){
        if (cnt === 1) {
          words += word;  
        } else {
          words += (cnt + word);
        }
        cnt = 1;
      }
    }
    if (cnt === 1) {
      words += _s;  
    } else {
      words += (cnt + _s);
    }
    answer.push(words.length)
  }
  return Math.min(...answer);
}

// console.log(solution("aabbaccc")); // 7
// console.log(solution("abcabcdede")); // 8 
// console.log(solution("ababcdcdababcdcd")); // 9
// console.log(solution("xababcdcdababcdcd")); // 17
// console.log(solution("abcabcabcabcdededededede")); // 14 

/**
"ababcdcdababcdcd"	9
"abcabcdede"	8
"abcabcabcabcdededededede"	14
"xababcdcdababcdcd"	17
 */