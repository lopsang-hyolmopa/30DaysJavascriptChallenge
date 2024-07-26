// Day 14: Classes - Tasks/Activities:

// Activity 1: Class Definition
// • Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  // static method
  static greeting() {
    return "Namaste! This greeting is from static method of Person class.";
  }

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  doGreeting() {
    return `Hello from ${this.name}`;
  }

  // getter method
  get getFullName() {
    return `${this.firstName} ${this.lastName}`; // assumed firstName and lastName parameters from constructor
  }

  // setter method
  set setFullName(name) {
    const [firstName, lastName] = name.split(" "); // assumed firstName and lastName parameters from constructor
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Lopsang Lama", 23);
console.log(person1.doGreeting()); // Hello from Lopsang Lama

// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.
Person.prototype.updateAge = function (newAge) {
  this.age = newAge;
  console.log(`Updated age: ${newAge}`);
};

person1.updateAge(25); // 20

// Activity 2: Class Inheritance
// • Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
  // static property
  static totalStudents = 0;

  constructor(name, age, studentId) {
    super(name, age); // call the parent class constructor
    this.studentId = studentId;

    Student.totalStudents += 1;
    console.log(`Total students created: ${Student.totalStudents}`);
  }

  getStudent() {
    return this.studentId;
  }

  // overriding doGreeting method
  doGreeting() {
    return `This is ${this.name} from Student class. And my student id is ${this.studentId}.`;
  }
}

const student1 = new Student("Ravi Shrestha", 24, 123);
console.log("Student Id: ", student1.getStudent());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
console.log("Overriden greeting message: ", student1.doGreeting());

// Activity 3: Static Methods and Properties
/* 
1. What is static method?
-> Static method is a method that belongs to the class itself rather than instances of the class. (Eg: Date.now()). You have to use static keyword before the method inside the class to make it static method.

2. What are static properties?
-> Similar to static method, static propertires are properties that belongs to the class itself rather than instances of the class. They are shared among all instances. If the value of staic property is change, it changes for all instances. You have to use static keyword before the method inside the class to make it static method.
*/

// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(Person.greeting()); // Namaste! This greeting is from static method of Person class.

// • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

// Activity 4: Getters and Setters
// • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
const fullName = new Person("Madan Thapa", 23, 45); // Hari, Thapa - passed assumed arguments on fullName instance of Person class
console.log(person1.getFullName); // Madan Thapa

// • Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
person1.setFullName = "Hari Bahadur"; // passed assumed value on setter method
console.log(person1.getFullName); // Hari Bahadur

// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
