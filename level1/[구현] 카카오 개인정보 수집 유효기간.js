/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/150370

 * @풀이방식
 * Date.now()와 Date.valueOf()를 사용하려 했지만, 모든 월은 28일로 이루어져 있다는 것 때문에
 * 모든 날짜를 day로 계산해서 비교하였다.
 * @다른사람의_풀이
 * 대체로 모든 날짜를 day로 계산해서 비교하여 계산하고 있었다..
*/

const formatDay = (date) => {
  const [year, month, day] = date.split('.').map((v)=> Number(v));
  return year * 12 * 28 + month * 28 + day;
}
  
function solution(today, terms, privacies) {
  const todayDay = formatDay(today);
  const answer = [];
  const termsObj = {};
  terms.forEach((v) => {
      const [term, month] = v.split(' ');
      termsObj[term] = Number(month);
  })
  
  for(let i=0; i<privacies.length; i++){
      const [date, term] = privacies[i].split(" ");
      
      if(todayDay >= formatDay(date) + (termsObj[term] * 28)){
          answer.push(i+1);
      }
  }
  
  return answer;
}

console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]).toString() === [1, 3].toString());
console.log(solution("2020.01.01",	["Z 3", "D 5"],	["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]).toString() === [1, 4, 5].toString());
