/**
 * @링크
 * https://leetcode.com/problems/evaluate-division

 * @풀이방식
  이중 for문을 통해 가능한 경우의 수를 모두 찾아 계산
 * 상위 99% 풀이
 * @다른사람의_풀이
 * graph를 만들고 해당 graph 기반으로 DFS 진행
*/
const calcEquation = function(equations, values, queries) {
    const answer = [];
    const map = new Map();
    for (let i=0; i<values.length; i++) {
        const [x,y] = equations[i];
        map.set(String([x,y]), values[i]);
        map.set(String([y,x]), 1/values[i]);
    }

    for(let [key, value] of map){
        const [cx, cy] = key.split(',');
        for (let [nKey, nValue] of map){
            const [nx, ny] = nKey.split(',');;
            if(cy === ny && !map.has(String([cx,nx]))){
                map.set(String([cx,nx]), value/nValue);
                map.set(String([nx,cx]), nValue/value);
            }
        }        
    }

    for(let query of queries){
        if(map.has(String(query))){
            answer.push(+map.get(String(query)).toFixed(5))
        } else {
            answer.push(+((-1).toFixed(5)))
        }
    }

    return answer
};