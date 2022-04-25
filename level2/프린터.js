function solution(priorities, location) {
  let answer = 1;
  let num = priorities[location] // 요청문서의 값
  let queue = priorities; // 인쇄목록
  location++; // 요청문서의 위치
  
  while(queue.length){
      const v = queue.shift()
      location--;
      if(location===0 && v===num && v<Math.max(...queue)){
          location+= queue.length+1;
          queue.push(v);
          continue
      } else if(location === 0 && v===num){
          return answer
      } else if(v<Math.max(...queue)){
          queue.push(v)
          continue
      }
      answer++;
  }
  return answer;
}
