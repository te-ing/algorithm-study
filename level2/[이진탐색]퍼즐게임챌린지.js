/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/340212

 * @풀이방식
 * 시간초과 해결 -> 이분탐색을 사용하여 해결
 * * 런타임에러 해결 -> 
 * 스프레드 연산자는 호출 스택에 배열을 펼치기 떄문에 최대 30만 길이의 diffs에 스프레드 연산자를 사용하면
 * RangeError: Maximum call stack size exceeded 발생
 * 
 * @다른사람의_풀이
 * sumT = 2n; 과 같이 BigInt 타입을 사용. 2n은 BigInt 타입의 2를 의미
 * diffs.reduce((acc, cur) => Math.max(acc, cur), 1) 으로 가장 큰 값 구할 수 있음
*/
function solution(diffs, times, limit) {
    let min = 1;
    let max = 0;
    diffs.forEach((v) => max = Math.max(v, max))
        
    let answer = max;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (canSolve(mid)) {
            answer = mid;
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    function canSolve(level){
        let curr = 0;
        for(let i=0; i<diffs.length; i++){
            if(diffs[i] > level) {
                curr += (times[i-1] + (times[i] || 0)) * (diffs[i] - level) + times[i];
            } else curr += times[i];
            if(limit < curr) return false
        }
        return true
    }
    
    return answer
}

// 시간초과
function badSolution(diffs, times, limit) {
    let answer = 1;
    let curr = 0;
    
    for(let i=0; i<diffs.length; i++){
        if(diffs[i] > answer){
            curr += (times[i-1] + (times[i] || 0)) * (diffs[i] - answer) + times[i];
        } else {
            curr += times[i];
        }
        
        if(limit < curr) {
            i=-1;
            answer++;
            curr = 0;
            continue;
        }
    }
    
    return answer
}

console.log(solution([1, 5, 3], [2, 4, 7], 30) === 3);
console.log(solution([1, 4, 4, 2], [6, 3, 8, 2], 59) === 2);
console.log(solution([1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723) === 294);
