// 1. Write a typescript program which contains one function named as Maximum. That function accepts 
// three parameters and it should returns largest value from three input parameters. 
// Input : 23 89 6 
// Output : Maximum number is 89 
function Max(no1, no2, no3) {
    if (no1 > no2 && no2 > no3) {
        return no1;
    }
    else if (no2 > no1 && no2 > no3) {
        return no2;
    }
    return no3;
}
var arr;
arr = Max(23, 89, 6);
console.log("Max no is :" + arr);
