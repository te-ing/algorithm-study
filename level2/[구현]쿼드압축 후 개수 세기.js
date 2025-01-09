/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/68936

 * @풀이방식
 * 배열을 받는 함수를 받는다.
 * arr의 length가 1이라면 멈춘다.
 * arr의 length를 반으로 쪼갠 체크 배열을 만든다.
 * 합쳐지면 1,0 아니면 false로 쪼갠 체크 배열을 정한다.
 * 쪼개질 때 해당 값을 3씩 줄인다. => 재귀로 반복
 * @다른사람의_풀이
 * index * 2 방식을 사용하여 for문 한번으로 해결
*/

function solution(arr) {
    const answer = [0, 0];
    const square = Math.log2(arr.length);
    arr.forEach((outer) => outer.forEach((inner)=> answer[inner] += 1));
    
    const recursion = (array) => {
        const lth = array.length / 2;
        if(lth < 1) return;
        const nextArr = Array.from({length: lth}, ()=> Array(lth).fill(false));
        for(let i=0; i<array.length; i+=2) {
            for(let j=0; j<array.length; j+=2) {
                if(array[i][j] !== false &&
                   array[i][j] === array[i+1][j] &&
                   array[i][j] === array[i][j+1] &&
                   array[i][j] === array[i+1][j+1]) {
                    nextArr[i/2][j/2] = array[i][j];
                    answer[array[i][j]] -= 3;
                }
            }   
        }
        recursion(nextArr);
    }
    recursion(arr)
   
    return answer;
}

console.log(JSON.stringify(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]])) === JSON.stringify([4,9]));
console.log(JSON.stringify(solution([[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]])) === JSON.stringify([10,15]));