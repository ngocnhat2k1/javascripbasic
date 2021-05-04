function randomArr(n, max) {
    var Arr = [];
    for (var i = 0; i < n; i++) {
        var num = Math.random() * max;
        num = Math.ceil(num);
        Arr.push(num);
    }
    return Arr;
}
var join = {
    fistName: 'Join',
    lastName: 'Smith',
    bills: randomArr(10,500),
    calTip: function(){
        this.tips = [];
        this.totalValue = [];
        var length = this.bills.length;
        for (var i = 0; i < length; i++) {
            var percent;
            var bill = this.bills[i];
            if (bill < 50) {
                percent = 0.2;
            }
            else if (bill < 200) {
                percent = 0.15;
            }
            else {
                percent = 0.1;
            }
            this.tips[i] = bill * percent
            this.totalValue[i]=this.tips[i]+this.bills[i]
        }
    }
}
join.calTip()
console.log(join);
