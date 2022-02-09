function solution(s) {
  let answer = [s.length];
  for (let i = 1; i <= s.length / 2; i++) {
    let words = "";
    let _s = s.slice();
    while (_s.length) {
      let cnt = 1;
      let word = ""; 
      while (_s.length >= i * cnt &&
        _s.substring(0, i) === _s.substring(i * cnt, i * (cnt + 1))) {
        word = _s.substring(0, i);
        cnt++;
      }
      if (cnt > 1) {
        words += cnt + word;
        _s = _s.substring(i*cnt);
      } else {
        words += _s.substring(0,i);
        _s = _s.substring(i);
      }
    }
    answer.push(words.length)
  }
  return Math.min(...answer);
}