/**
 * @링크
 * https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/description/?envType=study-plan-v2&envId=leetcode-75

 * @풀이방식
 * BFS를 사용하여 미로찾기 풀이
 * 상위 7% 풀이
 * @다른사람의_풀이
*/
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const lthX = maze.length;
    const lthY = maze[0].length;
    const visit = Array.from({length: lthX}, ()=>Array(lthY).fill(0));
    
    const dx = [1,0,-1,0];
    const dy = [0,1,0,-1];
    const queue = [entrance];
    let answer = 10000;

    while(queue.length > 0){
        const [x,y] = queue.shift();

        if((x === 0 || x === lthX-1 || y === 0 || y === lthY-1) && !(x === entrance[0] && y === entrance[1])){
            return visit[x][y]
        }
        for(let i=0; i<4; i++){
            const nx = x+dx[i];
            const ny = y+dy[i];
           if(nx >= 0 &&  nx < lthX && ny >= 0 &&  ny < lthY && maze[nx][ny] === "." && !visit[nx][ny]){
                visit[nx][ny] = visit[x][y]+1
                queue.push([nx, ny]);
           }
        }
    }
    return -1
};
