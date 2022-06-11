// write a program with the constructor called student that includesthe name and gender
// fields of the fields

// 1. create the studObj variable from the new student and add the age field with the
// prototype
// 2. create the studObj1 variable from the studObj2 and change value age field to 20
// with the prototype

function student(name, gender) {
  this.name = name;
  this.gender = gender;
}
let studObj1 = new student("john" , "male");
console.log(studObj1);
// student.prototype.age=22;
studObj1.age = 22;
console.log(studObj1);
let studObj2 = {...studObj1};
// student.prototype.age=20;
studObj2.age = 20;
console.log(studObj2);