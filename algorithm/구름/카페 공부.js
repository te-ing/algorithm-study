/**
 * @링크
 * https://level.goorm.io/exam/353874/%EC%B9%B4%ED%8E%98-%EA%B3%B5%EB%B6%80/quiz/1

 * @풀이방식
  x와 y 중 큰 값을 정하고 나머지 값을 더한 뒤 책상보다 작은가를 비교
  이때 나와 친구의 노트를 90도 회전시키는 모든 경우를 계산
*/
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const solutions = [];
	
	for await (const line of rl) {
		solutions.push(line);
	}
	
	const [desk, me, friend] = solutions.map((v)=>v.split(" ").map((v)=>+v))

	let answer = "NO";
	const [mx, my] = me;
	const [fx, fy] = friend;
	desk.sort((a,b)=>a-b);

	const isFit = (m, f) => {
		const [mx, my] = m;
		const [fx, fy] = f;
		
		const sum = [mx+fx, Math.max(my,fy)].sort((a,b)=>a-b);	
		if(sum[0] <= desk[0] && sum[1] <= desk[1]){
			answer = "YES"
		}
	}
	isFit([me[0],me[1]],[friend[0],friend[1]]);
	isFit([me[1],me[0]],[friend[0],friend[1]]);
	
	isFit([me[0],me[1]],[friend[1],friend[0]]);
	isFit([me[1],me[0]],[friend[1],friend[0]]);
	
	console.log(answer);	
	process.exit();
})();
