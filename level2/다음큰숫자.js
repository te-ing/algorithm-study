function solution(n) {
  const cnt = n.toString(2).split('').filter(v=>v==="1").length
  while(true){
      n++;
      if(n.toString(2).split('').filter(v=>v==="1").length === cnt){
          return n
      }
  }
}
