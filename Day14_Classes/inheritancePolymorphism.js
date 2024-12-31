// Exercise 3: Inheritance and Polymorphism
// Problem Statement:

// Create a base class Shape with a method calculateArea that returns 0 by default. Then, create subclasses Circle and Rectangle, each overriding the calculateArea method to compute the area for their respective shapes.
// Circle should have a radius property. The formula for the area of a circle is π × r2.
// Rectangle should have width and height properties. The formula for the area of a rectangle is width × height.
// Create an array of shapes (e.g., circles and rectangles) and write a function to calculate and print the area of each shape.

class Shape {
  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2)
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width,
    this.height = height
  }

  calculateArea() {
    return this.width * this.height
  }
}

const circles = [new Circle(7), new Circle(14), new Circle(3.5)]
const rectangles = [new Rectangle(5, 10), new Rectangle(4, 6)]
const randomShapes = [new Rectangle(3, 5), new Circle(21), new Rectangle(8, 3)]


function calculateAreaOfShapes(shapes) {
  shapes.forEach((shape, index) => {
    if(shape instanceof Shape) {
      const shapeType = shape instanceof Circle ? "Circle" : "Reactange"
      console.log(`Shape ${index+1}: ${shapeType}`)
      console.log(`Area: ${shape.calculateArea()}`)
      console.log('------------------')
    }
    else {
      console.error(`Shape ${index+1} is not a valid Shape Object.`)
    }
  })
}

calculateAreaOfShapes(circles)
calculateAreaOfShapes(rectangles)
calculateAreaOfShapes(randomShapes)