function newSolution(orders, course) {
  let answer = [];

  /* 부분집합 찾기 */
  function findCombis(order, course) {
    const result = [];
    function DFS(L, s) {
      if (L === order.length) {
        if(course.includes(s.length))
        result.push(s.split('').sort().join(''))
      } else {
        DFS(L + 1, s+order[L]);
        DFS(L + 1, s);
      }
    }
    DFS(0, "");
    return result
  }
  const combis = [];
  for (let order of orders) {
    combis.push(...findCombis(order, course));
  }

  /* 중복된 조합의 수 세기 */
  const combiCount = {};
  for (let combi of combis) {
    if (combiCount[combi]) {
      combiCount[combi]++;
    } else {
      combiCount[combi] = 1;
    }
  }

  /* 가장 자주 나온 조합을 answer에 넣는다 */
  const counts = Array.from({ length: Math.max(...course) }, ()=>0);
  const answers = Array.from({ length: Math.max(...course) }, ()=>[]);
  for (const [key, value] of Object.entries(combiCount)) {
    if (value < 2) continue;
    let n = key.length;
    if (counts[n - 1] < value) {
      counts[n - 1] = value;
      answers[n-1] = [key]
    } else if (counts[n - 1] === value) {
      answers[n-1].push(key);
    }
  }
  answers.map(combi=>answer.push(...combi))
  
  return answer.sort();
}

function solution(orders, course) {
  let answer = [];
  let array = [];
  let object = {};

  const combi = (order, n) => {
    if (order.length < n) {
      console.log(order)
      return;
    }
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

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));
//	["AC", "ACDE", "BCFG", "CDE"]

// console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]));
// // ["ACD", "AD", "ADE", "CD", "XYZ"]
// console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])); // ["WX", "XY"]

