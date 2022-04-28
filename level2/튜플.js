function solution(s) {
  const tuples = s.split(/[{}]/g).filter(v=>v!=="," && v!=="").map(v=>v.split(",").map(v=>Number(v)));
  
  tuples.sort((a, b) => a.length - b.length);
  
  let answer = tuples[0];

  for(let i=1; i<tuples.length; i++){
    answer = [...answer, ...tuples[i].filter(v=>!answer.includes(v))]
  }
  return answer;
}
