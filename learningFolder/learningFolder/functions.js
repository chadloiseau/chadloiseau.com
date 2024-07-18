// function greeting(){
//     alert("hello world");
// }

// //document.getElementById("output").innerHTML greeting();

// greeting();
// greeting();
// greeting();

// let announcement = function (){
//     alert("You are learning javascript functions.");
// }

// announcement();

// let cubeThis = function(someNumber){
//     document.getElementById("output").innerHTML = someNumber * someNumber * someNumber;
// }

// let x = prompt("what number would you like to cube?");
// cubeThis(x);

let rectangleArea = function(lengthX, widthX){
    let area = lengthX * widthX;
    document.getElementById("output").innerHTML = area;
}

let length = prompt("length?");
let width = prompt("width?5");

rectangleArea(length, width);