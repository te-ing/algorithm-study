class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
  markLate() {
    this.tardies++;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!"
    }
    return `Your full name is ${this.firstName} ${this.lastName} has been late ${this.tardies}`
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }


  static EnrollStudents() {
    return "ENROLLING STUDENTS!"
  } 
}

const tj = new Student('Kim', 'Taejung', 3);
let kitty = new Student('Kitty', 'Kat', 1);
tj.markLate()
tj.markLate()

tj.addScore(92);
tj.addScore(87);
tj.addScore(37);

// console.log(tj.EnrollStudents()); // Error!
console.log(Student.EnrollStudents());