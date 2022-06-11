// create an object named dog from the sample object below using the prototype
// inheritance
let animal = {
  speak: true,
  walk() {
    console.log("animal walks");
  },
};

let dog = {
  __proto__: animal,
};
console.log(dog.speak);
console.log(dog.walk());
