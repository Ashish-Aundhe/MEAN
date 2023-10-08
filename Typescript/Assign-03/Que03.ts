class circle {
    protected radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    Area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class CircleX extends circle {
    constructor(radius: number) {
      super(radius);
    }
  
    Circumference(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Create two CircleX objects with hardcoded values
  const Circle1 = new CircleX(5);
  const Circle2 = new CircleX(7);
  
  // Calculate and print circumference and area for both circles
  console.log("Circle 1 Circumference:", Circle1.Circumference());
  console.log("Circle 1 Area:", Circle1.Area());
  
  console.log("Circle 2 Circumference:", Circle2.Circumference());
  console.log("Circle 2 Area:", Circle2.Area());
  