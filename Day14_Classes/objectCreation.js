// Exercise 1: Basic Object Creation
// Problem Statement:
// Create a Person class with the following properties: name, age, and gender. Add a method called introduce that prints a sentence like:
// "Hi, I'm [name], a [age]-year-old [gender]."

// Create three instances of the Person class with different values and call the introduce method on each.

class Person{
  constructor(personName, personAge, personGender) {
    this.name = personName,
    this.age = personAge,
    this.gender = personGender
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.gender}`)
  }
}

const ram = new Person('Ram', 23, 'male')
const sita = new Person('Sita', 21, 'female')
const laxman = new Person('Laxman', 20, 'male')

ram.introduce()
sita.introduce()
laxman.introduce()