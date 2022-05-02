function solution(s) {
  let zero = 0;
  let count = 0;
  
  function handleBinary(n){
      let char = 0
      if(n==="1"){
          return
      } else{
          for(const x of n){
              if(x!=="0") {
                  char++;
              } else {
                  zero++;
              }
          }
          count++;
          handleBinary(char.toString(2));
      }
  }
  handleBinary(s)
  
  return [count, zero]
}
	
console.log(solution("110010101001")) // [3,8]
console.log(solution("01110")) // [3,3]
console.log(solution("1111111")) // [4,1]
