function solution(dirs) {
  let [x, y] = [0, 0];
  let count = 0;
  const record = [];
  for (const dir of dirs) {
    let [nx, ny] = [x, y];
    if (dir === "U") {
      nx--;
    } else if (dir === "D") {
      nx++;
    } else if (dir === "R") {
      ny++;
    } else if (dir === "L") {
      ny--;
    }
    if (nx < -5 || nx > 5 || ny < - 5 || ny > 5) continue
    const startIndex = (5 + x) + (5 - y) * 11;
    const endIndex = (5 + nx) + (5 - ny) * 11;
    [x, y] = [nx, ny];
    const isVisited = record.find((item) => {
      if ((item[0] === startIndex && item[1] === endIndex)
        || (item[0] === endIndex && item[1] === startIndex)) {
        return true;
      }
    })
    if( !isVisited ) {
      ++count;
      record.push([startIndex, endIndex]);
    }
  }
  return count
}

console.log(solution("ULURRDLLU")) // 7
console.log(solution("LULLLLLLU")) // 7
console.log(solution("LURDRULD")) // 7