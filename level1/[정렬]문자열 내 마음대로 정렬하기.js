/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/12915

 * @풀이방식
 * sort 사용
*/
function solution(strings, n) {
  const sortedStrings = strings.sort();
  return strings.sort((a,b) => {
      if (a[n] < b[n]) return -1;
      if (a[n] > b[n]) return 1;
  })
}
	
console.log(solution(["sun", "bed", "car"],	1).toString() === ["car", "bed", "sun"].toString());
console.log(solution(["abce", "abcd", "cdx"],	2).toString() === ["abcd", "abce", "cdx"].toString());