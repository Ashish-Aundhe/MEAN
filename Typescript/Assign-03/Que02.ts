class Circle {
    private radius: number;
    private readonly PI: number = 3.14;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    // Method to calculate the area of the circle
    calculateArea(): number {
      return this.PI * this.radius * this.radius;
    }
  }
  
  // Create two objects of the Circle class with different radii
  const circle1 = new Circle(5); // Radius = 5
  const circle2 = new Circle(7); // Radius = 7
  
  // Calculate and print the areas of the circles
  console.log(`Area of Circle 1 with radius ${circle1.calculateArea().toFixed(2)}`);
  console.log(`Area of Circle 2 with radius ${circle2.calculateArea().toFixed(2)}`);
   