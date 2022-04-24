function solution(n, words) {
  const prevWords = [words[0][0]];
  let num = 0;
  let turn = 1;
  
  for(const word of words){
      const prevWord = prevWords[prevWords.length-1]
      const lastPrevWord = prevWord[prevWord.length-1]
      num++;
      if(num>n){
          num=1;
          turn++;
      }
      if(!prevWords.includes(word) && word[0] === lastPrevWord){
          prevWords.push(word);    
      } else {
          return [num, turn]
      }
  }

  return [0, 0];
}