// 22분 소요
function solution(id_list, report, k) {
  const n = id_list.length;
  const answer = Array.from({length: n}, ()=>0);
  const reportedarray = Array.from({length: n}, ()=>[]);
  const reports = report.map(id=>id.split(' '));
  
  for(let [reporter, reported] of reports) {
    if (!reportedarray[id_list.indexOf(reported)].includes(reporter)) {
      reportedarray[id_list.indexOf(reported)].push(reporter)
    }
  }

  for(let i=0; i<n; i++) {
    if (reportedarray[i].length >= k) {
      for (let reporter of reportedarray[i]) {
        answer[id_list.indexOf(reporter)]++
      }
    }
  }
  
  return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"],	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],	2)); // [2,1,1,0]
// console.log(solution(["con", "ryan"],	["ryan con", "ryan con", "ryan con", "ryan con"],	3)); // [0,0]
