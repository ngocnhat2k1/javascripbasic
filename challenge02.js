var scoreMark = (116 +94 + 123) / 3;
var scoreJoin = (89 + 120 + 103) / 3;
var scoreMarry = (97 + 134 +105) / 3;

if (scoreMark > scoreJoin && scoreMark > scoreMarry) {
    console.log("doi cua Mark thang voi so diem la: ", scoreMark);
}
else if (scoreJoin > scoreMark && scoreJoin > scoreMarry) {
    console.log("doi cua Join thang voi so diem la: ", scoreJoin);
}
else if (scoreMarry > scoreJoin && scoreMarry > scoreMark) {
    console.log("doi cua Marry thang voi so diem la: ", scoreMarry);
}
else if (scoreMarry = scoreJoin && scoreMarry > scoreMark) {
    console.log("doi cua Marry va doi cua Mark thang voi so diem la: ", scoreMarry);
}
else if (scoreMark = scoreJoin && scoreMark > scoreMarry) {
    console.log("doi cua Join va doi cua Mark thang voi so diem la: ", scoreMark);
}
else if (scoreMarry = scoreMark && scoreMarry > scoreJoin) {
    console.log("doi cua Marry va Mark thang voi so diem la: ", scoreMarry);
}
else
{
    console.log("ca ba doi hoa nhau !!")
}