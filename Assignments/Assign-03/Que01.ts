
// class created
class Arithmatic 
{
    // creating three character
    No1 :number;
    No2 : number;
    ans : number

    //Behaviour and creating  parametrised contructor 
    constructor(x: number, y:number)
    {
        this.No1 = x;
        this.No2 = y;
        this.ans = 0;
    }
    //methods
    Addition() : number
    {
        this.ans =this.No1 + this.No2
        return this.ans;
    }
    Subtraction(): number
    {
        this.ans = this.No1 - this.No2
        return this.ans;
    }
    Multipication() : number
    {
        this.ans = this.No1 * this.No2
        return this.ans;
    }
    Division (): number 
    {
        this.ans = this.No1 / this.No2
        return this.ans
    }
}
var ret : number = 0;
var obj1 = new Arithmatic (10,19);
var obj2 = new Arithmatic (20,23);

ret = obj1.Addition();
console.log("Addition is :", ret);

ret = obj2.Subtraction();
console.log("Substraction is : ", ret);

ret = obj1.Multipication();
console.log ("Multipilcation is : ",ret);

ret = obj2.Division();
console.log("Division is : ",ret);

