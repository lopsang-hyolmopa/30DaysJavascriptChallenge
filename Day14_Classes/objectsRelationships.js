// Build a School class that has a name property and a method addStudent(student) to add students to the school. A Student class should have properties name and grade.

// Allow the School class to store a list of students and implement a method listStudents to display the names and grades of all students in the school.
// Create a school and add at least three students to it, then list the students.

class School {
  constructor(schoolName, schoolStudents = []) {
    this.name = schoolName,
    this.students = schoolStudents
  }

  addStudent(student) {
    if(student instanceof Student) {
      this.students.push(student)
    } else {
      console.error('Only instances of Student can be added!')
    }
  }

  listStudents() {
    this.students.forEach((s) => {
      console.log("Name:", s.name)
      console.log("Grade:", s.grade)
    })
  }
}

class Student {
  constructor(studentName, studentGrade) {
    this.name = studentName,
    this.grade = studentGrade
  }
}

const zyan = new Student('Zyan Malik', 8)
const justin = new Student('Justin Biber', 7)
const bruno = new Student('Burno Mars', 10)
const school = new School('Sacred Heart Academy')

school.addStudent(zyan)
school.addStudent(justin)
school.addStudent(bruno)
school.listStudents()

