class Student {
  constructor(name, age, studentID) {
    this.name = name;
    this.age = age;
    this.studentID = studentID;
  }

  study() {
    console.log(`${this.name} is studying...`);
  }

  takeExam() {
    console.log(`${this.name} is taking an exam.`);
  }
}

// Objects created from the Student class
const s1 = new Student("Joan", 20, "ST101");
const s2 = new Student("Hilda", 22, "ST102");

s1.study();    // Joan is studying...
s2.takeExam(); // Hilda is taking an exam.