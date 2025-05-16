/**
 * @링크
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/1635307293/?envType=study-plan-v2&envId=top-100-liked

 * @풀이방식
 * DFS 구현
 * 상위 1% 풀이
*/
var maxDepth = function(root) {
    let answer = 0
    const dfs = (node, level) => {
        answer = Math.max(level, answer)
        if(node?.left){
            dfs(node.left, level+1);
        } 
        if(node?.right) {
            dfs(node.right, level+1);
        }
    }
    if(root?.val === undefined) return 0
    dfs(root, 1)
    return answer
};