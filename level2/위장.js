function solution(clothes) {
  let answer = 1;
  const closet = {};
  
  for(let [item, category] of clothes){
      if(closet[category]){
          closet[category] = [...closet[category], item];
      } else {
          closet[category] = [item, "none"]    
      }
  }
  for(let key in closet){
      answer *= closet[key].length;
  }
  
  return answer-1
}
