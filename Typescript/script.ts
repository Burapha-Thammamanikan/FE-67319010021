let myName : string = "Burapha";
let mynumber : number = 44444;
console.log(myName);

function showMymoney(): void{
    mynumber--;
    console.log(mynumber);
    document.getElementById("Money-data").innerHTML = String(mynumber);
}

function cal():void{
    var num1 : number;
    var num2 : number;
    var x1 : any;
    var x2 : any;
    x1 =  document.getElementById("num1");
    num1 = Number (x1.value);
    x2 = document.getElementById("num2");
    num2 = Number (x2.value);
    var res : number = num1+num2;
    document.getElementById("Money-data").innerHTML = String(res);
}