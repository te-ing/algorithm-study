function solution(brown, yellow) {
  let width = 2;
  const answer = [];
  while(true){
      width++
      for(let i=width; i>0; i--){
          if(brown+yellow === width*i) {
              answer.push([width, i])
          }
      }
      for(let [w, h] of answer) {
          if((w+h)*2-4 === brown){
              return [w, h]
          }
      }
  }
}