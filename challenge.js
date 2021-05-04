var massMark =64 ;
var massJoin = 59 ;

var heightMark = 1.7;
var heightJoin = 1.65;

var bmiJoin = massJoin / (heightJoin*heightJoin)

var bmiMark = massMark / (heightMark*heightMark)

console.log('bmiJoin = ',bmiJoin);
console.log('bmiMark = ',bmiMark);

var isMarkHeight = bmiMark > bmiJoin;
console.log("bmi cua Mark lon hon Join: ", isMarkHeight);