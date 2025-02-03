/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/138476

 * @풀이방식
 * 객체를 사용하여 크기별 귤 갯수 파악 (n)
 * sort 사용을 위해 객체를 array로 변환 (n)
 * 귤의 갯수가 높은 순으로 정렬 (n)
 * 가장 많은 귤의 개수를 더하면서 k보다 높은지 카운트 (n)
 * @다른사람의_풀이
 * forEach문 사용
*/
function solution(k, tangerine) {
    let cnt = 0;
    const obj = {};
    
    for(let x of tangerine){
        obj[x] = (obj[x] || 0) + 1;
    }
    
    
    let arr = Object.entries(obj);
    arr.sort((a,b) => b[1] - a[1]);
    
    for(let i=0; i<arr.length; i++){
        cnt += arr[i][1];
        if(cnt >= k){
            return i+1
        }
    }
    
    return 0;
}

console.log(solution(6,	[1, 3, 2, 5, 4, 5, 2, 3]) === 3);
console.log(solution(4,	[1, 3, 2, 5, 4, 5, 2, 3]) === 2);
console.log(solution(1,	[1, 1, 1, 1, 2, 2, 2, 3]) === 1);