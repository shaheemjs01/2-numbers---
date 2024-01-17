function additionClick(){
    var num1 = parseFloat(document.getElementById("first-number").value);
    var num2 = parseFloat(document.getElementById("second-number").value);
    var result = num1 + num2;
    document.getElementById("screen").innerHTML = "Result: " + result;

}

function substractionclick(){
    var num1 = parseFloat(document.getElementById("first-number").value);
    var num2 = parseFloat(document.getElementById("second-number").value);
    var result = num1 - num2;
    document.getElementById("screen").innerHTML = "Result: " + result;

}
function multiplicationclick(){
    var num1 = parseFloat(document.getElementById("first-number").value);
    var num2 = parseFloat(document.getElementById("second-number").value);
    var result = num1 * num2;
    document.getElementById("screen").innerHTML = "Result: " + result;

}
function divitonclick(){
    var num1 = parseFloat(document.getElementById("first-number").value);
    var num2 = parseFloat(document.getElementById("second-number").value);
    var result = num1 / num2;
    document.getElementById("screen").innerHTML = "Result: " + result;

}
function change(){
    var num1 = parseFloat(document.getElementById("first-number").value);
    var num2 = parseFloat(document.getElementById("second-number").value);
    var temp = num2;
        num2 = num1;
        num1 = temp;
    document.getElementById("first-number").value = num1;
    document.getElementById("second-number").value = num2;
}