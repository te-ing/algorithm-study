function solution(info, query) {
  let answer = [];
  const infos = info.map(v=>v.split(' ')).sort((a,b)=>a[4]-b[4]);
  const querys = query.map(v=>v.split(' and ')).map(v=>[...v.slice(0,3), ...v[3].split(' ')]);  
  const score = infos.map(v=>Number(v[4]))
  
  function sliceInfos(n){
      return infos.slice(score.indexOf(score.find(v=>v>=n)));
  }
  
  for(let query of querys){
      let count = 0;
      for(let info of sliceInfos(query[4])){
          if(query[0] !== "-" && query[0] !== info[0]) continue
          if(query[1] !== "-" && query[1] !== info[1]) continue
          if(query[2] !== "-" && query[2] !== info[2]) continue
          if(query[3] !== "-" && query[3] !== info[3]) continue
          count++;
      }
      answer.push(count)
  }
  return answer;
}

console.log(solution(["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"], ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]	))
// [1,1,1,1,2,4]