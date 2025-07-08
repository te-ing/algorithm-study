/**
 * @링크
 * https://level.goorm.io/exam/195687/%EC%9D%B4%EC%A7%84%EC%88%98-%EC%A0%95%EB%A0%AC/quiz/1

 * @풀이방식
  target.toString(2)와 parseInt(target, 2)를 이용한 2진수 - 10진수 변환
*/
const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
	input.push(line.split(" ").map(v=>+v));
});

rl.on('close', () => {
	const [n, k] = input[0];
	const arr = input[1];
	const binary = arr.sort((a,b)=> b-a).map((v)=>v.toString(2));
	binary.sort((a,b) => {
		if(a.replaceAll('0', '').length > b.replaceAll('0', '').length){
			return -1
		} return 1
	})
	
	
	console.log(parseInt(binary[k-1], 2))
})