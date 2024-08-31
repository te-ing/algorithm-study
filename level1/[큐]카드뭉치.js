/**
 * @링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/159994

 * @풀이방식
 * shift를 통해 goal과 비교하며 풀이
 * @다른사람의_풀이
 * 큐를 직접 구현하여 풀이
*/
function solution(cards1, cards2, goal) {
    while(goal.length) {
        const card = goal.shift();
        if(cards1[0] === card){
            cards1.shift();
        } else if (cards2[0] === card) {
            cards2.shift();
        } else {
            return 'No'
        }
    }
    
    return 'Yes';
}	

console.log(solution(["i", "drink", "water"],["want", "to"],["i", "want", "to", "drink", "water"]) === "Yes");
console.log(solution(["i", "water", "drink"],["want", "to"],["i", "want", "to", "drink", "water"]) === "No");