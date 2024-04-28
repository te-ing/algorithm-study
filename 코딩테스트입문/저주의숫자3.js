/**
 * @링크 https://school.programmers.co.kr/learn/courses/30/lessons/120871#
 * 
 * @문제
 * 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.
 * 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.
 * 
 * @풀이방식
 * 3의 배수와 3이 들어간 수를 더하고, 더한 값에 3과 3의 배수가 있는지 재귀로 실행
 * 
 * @다른사람의_풀이
 * function solution(n) {
 *     var answer = 0;
 *     for(let i=1; i<=n; i++){
 *         if(i%3 == 0){
 *             n++;
 *         }
 *         if(String(i).includes("3")& i%3 != 0){
 *             n++
 *         }
 *     }
 *     return n;
 * }
 * 굳이 재귀방식을 사용하지 않고 for문 내의 값을 더해서 풀이
 */
const test = (n) => {
    let answer=0;
    
    const getThree = (start, end) => {
        let count = 0;
        for(let i=start+1; i<=end; i++) {
            if(i%3 === 0) {
                count++;
            } else {
                if(String(i).includes("3")) count++;
            }
        }
        
        if(count === 0 ) {
            return answer = end;
        } else getThree(end, end + count) 
    }
    
    getThree(0, n)
    return answer
    
}

console.log(test(15) === 25);
console.log(test(40) === 76);