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
        combiArray.push(combi);
      } else {
        for (let i = 0; i < check.length; i++) {
          if (!combi.includes(order[i]) && !check[i]) {
            DFS(order, n, combi+order[i])
            check[i] = true;
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
  
  console.log(Object.values(object));


  return answer;
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));
//	["AC", "ACDE", "BCFG", "CDE"]

/**
 * 코스요리 메뉴는 최소 2가지 이상의 단품 메뉴
 * 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합만 메뉴 후보
 * 
 */

// console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]));
// // ["ACD", "AD", "ADE", "CD", "XYZ"]
// console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])); // ["WX", "XY"]

