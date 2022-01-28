function solution(n, lost, reserve) {
  let answer = n;
  let temp = [];
  
  reserve = reserve.filter(v => {
    if (lost.includes(v)) temp.push(v);
    return !lost.includes(v)
  });
  
  lost = lost.filter(v => !temp.includes(v));

  reserve.sort((a, b) => a - b);

  for (let x of reserve){
    if (lost.includes(x-1)) {
      lost.splice(lost.indexOf(x-1),1);
    } else if (lost.includes(x+1)) {
      lost.splice(lost.indexOf(x+1),1);
    }
  }
  return answer-lost.length;
}
