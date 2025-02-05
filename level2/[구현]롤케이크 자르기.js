/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/132265

 * @풀이방식
 * 처음에는 slice를 사용하여 배열을 잘라 토핑종류를 파악하였지만 시간초과로 실패하였다.(O^2)
 * Object의 경우, 토핑 종류를 알아내기 위해서는 Object.keys를 사용해야 하는데, O(n)의 시간복잡도가 사용된다.
 * 시간복잡도가 O(1)이 걸리는 Map.size을 사용하여 토핑의 종류를 파악하였다.
 * @다른사람의_풀이
 * Object로 토핑 별 수를 파악하지만, 별도의 check 변수로 토핑의 종류를 카운트하였다.
 * Object의 토핑이 0이 되면 check--를 하고, Set을 통해 자신의 토핑 종류 수를 카운트 하였다.
*/
function solution(topping) {
    let answer = 0;
    const n = topping.length;
    if(n === 1) return 0;
    
    const A = new Map();
    const B = new Map();
    for(let x of topping){
        B.set(x, (B.get(x) || 0) + 1);
    }
    
    for(let i=0; i<n-1; i++){
        const top = topping[i];
        A.set(top, 1);
        if(B.get(top) === 1) B.delete(top);
        if(B.get(top)) B.set(top, B.get(top)-1);
        if(A.size === B.size) answer++;
    }
    return answer;
}

/**
// O(n * (i+n)) 시간복잡도
function solution(topping) {
    let answer = 0;
    const n = topping.length;
    if(n === 1) return 0;
    for(let i=1; i<n; i++){ // O(n)
        if(new Set(topping.slice(0,i)).size
           === new Set(topping.slice(i)).size) {
            answer++;
        }
    }
    return answer;
}
*/

console.log(solution([1, 2, 1, 3, 1, 4,1,2]) === 2);
console.log(solution([1, 2, 3, 1, 4]) === 0);