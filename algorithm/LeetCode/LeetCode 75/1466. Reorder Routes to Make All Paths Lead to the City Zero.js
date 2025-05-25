/**
 * @링크
 * https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/

 * @풀이방식
 * graph를 만들면서 방향을 저장한다.
 * graph를 순회하면서 정방향일 때 카운트를 더한다.
 * 상위 99% 풀이
 * @다른사람의_풀이
 * DFS가 아닌 queue와 while을 사용하여 풀이
*/var minReorder = function(n, connections) {
    const graph = new Map();
    const direct = new Map();
    let answer = 0;
    for(const [x,y] of connections){
        !graph.has(x) && graph.set(x, []);
        !graph.has(y) && graph.set(y, []);
        
        direct.set(`${x}-${y}`, true);
        graph.get(x).push(y);
        graph.get(y).push(x);
    }

    const check = Array.from({length : connections.length-1}, ()=>false);
    
    const dfs = (x, visit) => {
        visit[x] = true;
        graph.get(x).forEach((v) => {
            if(!visit[v]){
                if(direct.has(`${x}-${v}`)) answer++;
                dfs(v, visit);
            }
        })
    }

    check[0] = true;
    graph.get(0).forEach((v) => {
        if(direct.has(`${0}-${v}`)) answer++;
        dfs(v,check);
    })

    return answer;
};