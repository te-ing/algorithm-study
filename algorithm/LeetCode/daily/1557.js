/**
https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
1557. Minimum Number of Vertices to Reach All Nodes

Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order.
 */
const findSmallestSetOfVertices = function (n, edges) {
  const answer = [];
  const flag = Array(n).fill(true);
  
  for (const [a,b] of edges) {
      flag[b] = false;
  }
  flag.forEach((v, i)=> v && answer.push(i))

  return answer;
};

findSmallestSetOfVertices(6, [[0,1],[0,2],[2,5],[3,4],[4,2]]); //  [0,3]
findSmallestSetOfVertices(5, [[0,1],[2,1],[3,1],[1,4],[2,4]]); //  [0,2,3]