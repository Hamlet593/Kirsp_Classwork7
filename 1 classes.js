/*Student should contain the data about their programs and exams.
passExam will update that data, so if a student passed all the exams(grade is great or equal to 50), its year should be increased by one.
*/
class Person {
  constructor(firstName, lastName, gender, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }
  
  toString(){
    return JSON.stringify(this);
  }  
}

class Student extends Person {
  constructor(program, year, fee, ...args){
    super(...args)
    this.program = program;
    this.year = year;
    this.fee = fee;
    this.exams = this.program.map(name => ({name, grade: 0}));
  }
  
  passExam(programIn, grade){
    return this.exams.map(item => item.name === programIn ? item.grade = grade : item);  
  };
  
  isAllPassed(){
    const isPassed = this.exams.every(item => item.grade > 50);
    if(isPassed){
      this.year += 1;
    }
    return isPassed;
  }
}
                          
                          
let student1 = new Student(['Math', 'English', 'Armenian'], 3, 200000, 'Hamo', 'Muradyan', 'Male', 27);

student1.passExam('Math', 90);
student1.passExam('English', 70);
student1.passExam('Armfian', 60);
student1.passExam('Armenian', 70);

console.log(student1.isAllPassed());
console.log(student1.year)