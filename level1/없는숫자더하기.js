function solution(numbers) {
    return numbers.reduce((a,b) => a-b, 45)
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])) // 14
