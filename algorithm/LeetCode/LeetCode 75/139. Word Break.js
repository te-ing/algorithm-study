/**
 * @링크
 * https://leetcode.com/problems/word-break/

 * @풀이방식
 * DFS를 사용하여 wordDict를 모두 탐색하면서 s가 이뤄지는지 실행 
 * -> time_limit으로 인해 실패
 * @다른사람의_풀이
 * 문자열이 아닌 현재 타겟의 index를 사용하여 BFS 진행
*/

var wordBreak = function(s, wordDict) {
    let answer = false;
    
    const dfs = (str) => {
        if(str === s){
            answer = true;
            return 
        }
        for(let word of wordDict){
            if(word === s.substring(str.length, str.length + word.length)){
                dfs(str + word);
            }
        }
    }
    dfs("")
    return answer
};

// 다른 사람의 풀이
var wordBreak = function(s, wordDict) {
    if (wordDict == null || wordDict.length === 0) return false;
    const set = new Set(wordDict);
    const visited = new Set();
    const queue = [0];

    while(queue.length){
        const start = queue.shift();
        if(!visited.has(start)){
            for(let end = start+1; end <= s.length; end++){
                if(set.has(s.slice(start, end))){
                    if(end === s.length) return true;
                    queue.push(end)
                }
            }
            visited.add(start);
        }
    }
    
    return false
};
