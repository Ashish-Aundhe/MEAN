// 2. Write a typescript program which contains one function named as Area. That function should 
// calculate area of circle. Accept value of radius from user and return its area. Default value of PI 
// should be 3.14 if it is not provided by the caller. 
// Input : 5 
// Output : Area of circle is 78.5 

function Fun_Area (redius : number, PI? : number) : number
{
    var area : number;
    if (PI == undefined)
    {
        PI = 3.14 //default value
    }
    area = redius*redius*PI;
    return area;
}
var iret : number;
iret = Fun_Area (5); //input
console.log("Area is :"+iret );