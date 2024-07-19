var myName = "Burapha";
var mynumber = 44444;
console.log(myName);
function showMymoney() {
    mynumber--;
    console.log(mynumber);
    document.getElementById("Money-data").innerHTML = String(mynumber);
}
function cal() {
    var num1;
    var num2;
    var x1;
    var x2;
    x1 = document.getElementById("num1");
    num1 = Number(x1.value);
    x2 = document.getElementById("num2");
    num2 = Number(x2.value);
    var res = num1 + num2;
    document.getElementById("Money-data").innerHTML = String(res);
}
