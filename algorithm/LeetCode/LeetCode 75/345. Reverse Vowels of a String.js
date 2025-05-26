/**
 * @링크
 * https://leetcode.com/problems/reverse-vowels-of-a-string/

 * @풀이방식
 * 스택을 통해 뒤집기
 * 상위 70% 풀이
 * @다른사람의_풀이
*/
var reverseVowels = function(s) {
    const stack = [];
    const dict = {'a': true,'e': true,'i': true,'o': true,'u': true,'A': true,'E': true,'I': true,'O': true,'U':true}
    let answer = "";
    for(let i=0; i<s.length; i++){
        if(dict[s[i]]){
            stack.push(s[i]);
        }
    }

    for(let i=0; i<s.length; i++){
        if(dict[s[i]]){
            answer+=stack.pop();
        } else answer+=s[i]
    }
    
    return answer
};