var bills = [128, 48, 268];
console.log('hoa don : ', bills)
function calTip(bill)
{
var percent;
if (bill<50) {
    percent=0.2;
}
else if (bill<200) {
    percent=0.15;
}
else {
    percent=0.1;
}
return percent*bill;
}
var tips =[
    calTip(bills[0]),
    calTip(bills[1]),
    calTip(bills[2]),
]

console.log('so tien tip :',tips)
var finalValues = [
    tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[2],
]
 console.log('tiền phải trả :', finalValues);
