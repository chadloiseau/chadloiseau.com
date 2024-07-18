// let students = [];
// let teacher = new Array();

let students = [    "Steven",
                    "Jennifer",
                    "Hugh",
                    "Jay",
                    "Sharon",
                    "Delia",
                    "Elliott"];

                    students [5] = "Della";
                    students.pop();
                    console.log(students);

//document.getElementById("output").innerHTML = students[5];

console.log(students.length);

let loopCounter = 0;
while(loopCounter < students.length){
    document.getElementById("output").innerHTML +=students[loopCounter] + "<br/>";
    loopCounter++;
}

let grades = [75, 88, 91, 100, 67, 79, 85, 81, 79];
grades.push (90);
grades.push (70);
grades.push (75);
grades.push (25);
grades.push (30);
console.log(grades);
let total = 0;
for (x =0; x < grades.length; x++){
    total = total + grades [x];
}
document.getElementById("output").innerHTML += Math.round(total/grades.length) + "<br/>";

let rappers = [
    "Eminem",
    "JID",
    "Lupe Fiasco",
    "21 Savage",
    "Lil Nas X",
    "Post Malone",
    "Sol"
]
rappers.push ("LL Cool J");
rappers.pop();
rappers.push ("Andre 3k")
console.log(rappers);
console.log(rappers.length);
console.log(rappers [2]);
//rappers.shift();

let rapperCounter = 0;
while (rapperCounter < rappers.length){
    document.getElementById("output").innerHTML += rappers[rapperCounter] + "<br/>";    
    rapperCounter++;
}