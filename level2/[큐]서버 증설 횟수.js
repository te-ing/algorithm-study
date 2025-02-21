/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/389479

 * @풀이방식
 * k의 길이를 가진 queue를 통해 서버 현황 구현
 * @다른사람의_풀이
 * O(n)을 가지는 큐를 사용하지 않고 시간별(24시간) 배열을 이용하여 시간에 따른 서버 현황 구현
*/
function solution(players, m, k) {
    let answer = 0;
    const queue = Array.from({length:k}, ()=>0);
    for(let x of players){
        queue.shift();
        const sum = queue.reduce((a,b)=>a+b, 0) * m + m;
        if(x >= sum){
            const add = parseInt((x-sum)/m)+1;
            queue.push(add);
            answer += add;
        } else {
            queue.push(0);
        }
    }
    
    return answer;
}

console.log(solution([0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5],3,	5)	=== 7);
console.log(solution([0, 0, 0, 10, 0, 12, 0, 15, 0, 1, 0, 1, 0, 0, 0, 5, 0, 0, 11, 0, 8, 0, 0, 0],5,	1) ===11);
console.log(solution([0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 5, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],1,	1) ===	12);