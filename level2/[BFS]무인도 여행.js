/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/154540

 * @풀이방식
 * BFS 사용
 * @다른사람의_풀이
 * 동일
*/
function solution(maps) {
    var answer = [];
    const xl = maps.length;
    const yl = maps[0].length;
    
    const dx = [1,0,-1,0];
    const dy = [0,1,0,-1];
    
    const check = Array.from({length: xl}, ()=> Array(yl).fill(false));
    
    const course = ([x,y]) => {
        if(maps[x][y] === "X" || check[x][y]) return;
        let sum = 0;
        const queue = [[x,y]];
        while(queue.length){
            const [tx,ty] = queue.shift();
            if(check[tx][ty]) continue
            sum += +maps[tx][ty];
            check[tx][ty] = true;
            for(let i=0; i<4; i++){
                const nx = tx+dx[i];
                const ny = ty+dy[i];
                if(nx >= xl || ny >= yl || nx <0 || ny <0 
                   || maps[nx][ny] === "X" || check[nx][ny]){
                    continue;
                } else {
                    queue.push([nx,ny]);
                }
            }
        }
        if(sum !== 0) answer.push(sum);
        return 
    }
    
    for(let i=0; i<xl; i++){
        for(let j=0;j<yl; j++){
            course([i,j])
        }
    }
    
    return answer.length ? answer.sort((a,b)=>a-b) : [-1];
}