/**
 * @링크
 * https://level.goorm.io/exam/195686/%EC%99%84%EB%B2%BD%ED%95%9C-%ED%96%84%EB%B2%84%EA%B1%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0/quiz/1

 * @풀이방식
  가장 큰 수를 찾아 for문
*/
const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
	input.push(line.split(" ").map((v)=>+v))
});

rl.on('close', () => {
	const arr = input[1];
	const target = arr.findIndex((v)=> v===Math.max(...arr));
	let tmp = Infinity;
	for(let i=target; i>=0; i--){
		if(tmp < arr[i]){
			console.log(0);
			return
		}
		tmp = arr[i];
	}
	tmp = Infinity;
	for(let i=target; i<arr.length; i++){
		if(tmp < arr[i]){
			console.log(0);
			return
		}
		tmp = arr[i];
	}
	
	console.log(arr.reduce((a,b)=>a+b,0));
})