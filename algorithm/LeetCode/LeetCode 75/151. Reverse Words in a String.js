/**
 * @링크
 * https://leetcode.com/problems/reverse-words-in-a-string

 * @풀이방식
 * 배열로 만들고 배열을 뒤집었다. 시간소모가 조금 있어서 split 과정을 queue로 만들어서 대체했다. 
 * 하위 30% 풀이
 * @다른사람의_풀이
 * 동일
*/
var reverseWords = function(s) {
    let string = "";
    for(const x of s){
        if(x === " "){
            if(string.at(-1) !== " "){
                string += " ";
            }
        } else {
            string+=x;
        }
    }
    return string.trim().split(" ").reverse().join(" ")
};

// 개선풀이
var reverseWords = function(s) {
    let queue = [];
    let string = "";
    for(const x of s.trim()){
        if(x === " "){
            if(string.at(-1)){
                queue.push(string);
                string = "";
            }
        } else {
            string+=x;
        }
    }
    if(string.at(-1) !== ""){
        queue.push(string);
        string = "";
    }
    return queue.reverse().join(" ")
};