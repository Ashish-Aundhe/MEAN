// incapsulation-abstraction-Polymorphism-inheritance
class Base

{
    no1 : number;
    no2 : number;
    constructor(x : number,y :number) 
    {
        console.log("Base class contructor")
        this.no1 = 10
        this.no2 = 20
    }
    fun()
    {
        console.log("Inside fun of base");
        console.log(this.no1);
        console.log(this.no2);
    } 
} 
class Derived extends Base
{
    value : number;
    constructor(a : number, b: number ,c: number)
    {
        super(a,b)
        console.log("Derived class constructor")
    }
    gun()
    {
        console.log("Drived gun");
        console.log(this.value)
    }
}

var dobj : Derived = new Derived(11,22,22)
dobj.fun();
dobj.gun();