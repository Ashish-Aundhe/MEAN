var Arithmatic = /** @class */ (function () {
    //Behaviour
    function Arithmatic(x, y) {
        this.No1 = x;
        this.No2 = y;
        this.ans = 0;
    }
    Arithmatic.prototype.Addition = function () {
        this.ans = this.No1 + this.No2;
        return this.ans;
    };
    Arithmatic.prototype.Subtraction = function () {
        this.ans = this.No1 - this.No2;
        return this.ans;
    };
    Arithmatic.prototype.Multipication = function () {
        this.ans = this.No1 * this.No2;
        return this.ans;
    };
    Arithmatic.prototype.Division = function () {
        this.ans = this.No1 / this.No2;
        return this.ans;
    };
    return Arithmatic;
}());
var ret = 0;
var obj1 = new Arithmatic(10, 19);
var obj2 = new Arithmatic(20, 23);
ret = obj1.Addition();
console.log("Addition is :", ret);
ret = obj2.Subtraction();
console.log("Substraction is : ", ret);
ret = obj1.Multipication();
console.log("Multipilcation is : ", ret);
ret = obj2.Division();
console.log("Division is : ", ret);
