var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var circle = /** @class */ (function () {
    function circle(radius) {
        this.radius = radius;
    }
    circle.prototype.Area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(radius) {
        return _super.call(this, radius) || this;
    }
    CircleX.prototype.Circumference = function () {
        return 2 * Math.PI * this.radius;
    };
    return CircleX;
}(circle));
// Create two CircleX objects with hardcoded values
var Circle1 = new CircleX(5);
var Circle2 = new CircleX(7);
// Calculate and print circumference and area for both circles
console.log("Circle 1 Circumference:", Circle1.Circumference());
console.log("Circle 1 Area:", Circle1.Area());
console.log("Circle 2 Circumference:", Circle2.Circumference());
console.log("Circle 2 Area:", Circle2.Area());
