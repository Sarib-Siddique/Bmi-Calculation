var marksMass = 78;
var marksHeight = 1.69;

var marksMass2 = 95;
var marksHeight2 = 1.88;

var johnMass = 92;
var johnHeight = 1.95;

var johnMass2 = 85;
var johnHeight2 = 1.76;

var markBni = marksMass / (marksHeight * marksHeight);
var markBni2 = marksMass2 / (marksHeight2 * marksHeight2);

var johnBmi = johnMass / (johnHeight * johnHeight);
var johnBmi2 = johnMass2 / (johnHeight2 * johnHeight2);

console.log(markBni, johnBmi);
console.log(markBni2, johnBmi2);

console.log(markBni > johnBmi);
console.log(markBni2 < johnBmi2);
