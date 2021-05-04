function calBmi(){
    return this.mass / (this.height * this.height);
}

var Join = {
    fullName: "Join Smith",
    mass: 59,
    height:1.65,
    BMI: calBmi
    }
var Mark = {
    fullName: "Mark Smith",
    mass: 69,
    height:1.7,
    BMI:calBmi,
}
console.log(Join.BMI());
console.log(Mark.BMI());
if (Mark.BMI() > Join.BMI()) {
    console.log('BMI Mark hơn BMI Join')
}
else if (Join.BMI() > Mark.BMI()) {
    console.log("BMI Join hơn BMI Mark")
}
else{
    console.log('BMI cả hai bằng nhau')
}