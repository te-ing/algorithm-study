function solution(skill, skillTrees) {
  let answer = 0;
  for (const skillTree of skillTrees) {
    const formatted = skillTree.split('').filter(s => skill.includes(s))
    if (formatted.join('') === skill.slice(0, formatted.indexOf(formatted[formatted.length - 1]) + 1)) {
      answer++      
    }
  }
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])) //2
