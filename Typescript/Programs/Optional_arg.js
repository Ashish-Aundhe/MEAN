function fun(name, passport, nationality) {
    if (nationality === void 0) { nationality = "Indian"; }
    console.log("Name is : ", name);
    if (passport == undefined) {
        console.log("sorry id dont have passport");
    }
    else {
        console.log("Passport number is : ", passport);
    }
    console.log("Nationality is :", nationality);
}
fun("Ashish", 454521, "Indian");
