/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/389478

 * @풀이방식
 * 맨 윗칸과 찾는 칸을 구현한 뒤 찾는 칸의 index가 null인지 확인
*/
function solution(n, w, num) {
    let line = Math.ceil(n/w);
    let numLine = Math.ceil(num / w)
    let answer = line - numLine;
    const flag = line % 2 === 0;
    const numFlag = numLine % 2 === 0;
    
    const top = [];
    const curr = [];
    
    for(let i=w*line; i>w*line - w; i--){
        if(flag){
            top.push(i > n ? null : n)
        } else {
            top.unshift(i > n ? null : n)
        }
    }
    
    for(let i=w*numLine; i>w*numLine - w; i--){
        if(numFlag){
            curr.push(i)
        } else {
            curr.unshift(i)
        }
    }
    if(top[curr.indexOf(num)] !== null) answer++
    
    return answer
}
