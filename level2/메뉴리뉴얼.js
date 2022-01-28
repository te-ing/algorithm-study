function solution(orders, course) {
  let answer = [];
  let array = [];
  let object = {};

  const combi = (order, n) => {
    if (order.length < n) return;
    let check = Array.from({ length: order.length }, () => false);
    const combiArray = [];
    
    const DFS = (order, n, combi) => {
      if (combi.length === n) {
        check = Array.from({ length: order.length }, () => false);
        combiArray.push(combi.split('').sort().join(''));
      } else {
        for (let i = 0; i < check.length; i++) {
          if (!combi.includes(order[i]) && !check[i]) {
            check[i] = true;
            DFS(order, n, combi+order[i])
          }
        }
      }
    }
    DFS(order, n, "");
    return ([...new Set(combiArray)]);
  }
  for (let i = 0; i < course.length; i++) {
    for (let order of orders) {
      array.push(combi(order, course[i]));
    }
  }
  
  for (let i = 0; i < array.length; i++){
    if(array[i]) {
      for (let x of array[i]) {
        if (!object[x])
          object[x] = 1;
        else object[x]++;
      }
    }
  }
  const maxNumbers = Array.from({ length: Math.max(...course) + 1 }, () => [1])
  
  for (let x of Object.keys(object)) {
    if (object[x] > maxNumbers[x.length]) {
      maxNumbers[x.length] = object[x];
    }
  }

  for (let x of Object.keys(object)) {
    if (object[x] === maxNumbers[x.length]) {
      answer.push(x);
    }
  }
  
  return answer.sort();
}

// console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));
//	["AC", "ACDE", "BCFG", "CDE"]

// console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]));
// // ["ACD", "AD", "ADE", "CD", "XYZ"]
// console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])); // ["WX", "XY"]

