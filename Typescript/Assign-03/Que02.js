var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.PI = 3.14;
        this.radius = radius;
    }
    // Method to calculate the area of the circle
    Circle.prototype.calculateArea = function () {
        return this.PI * this.radius * this.radius;
    };
    return Circle;
}());
// Create two objects of the Circle class with different radii
var circle1 = new Circle(5); // Radius = 5
var circle2 = new Circle(7); // Radius = 7
// Calculate and print the areas of the circles
console.log("Area of Circle 1 with radius ".concat(circle1.calculateArea().toFixed(2)));
console.log("Area of Circle 2 with radius ".concat(circle2.calculateArea().toFixed(2)));
