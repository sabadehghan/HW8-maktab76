// write a program that getter and setter to do the following :
// the primary object :
// let site ={
// siteName:"W3Docs",
// bookName:"javascript"
// };

// 1. add fullName function with getter to print siteName and bookName
// 2. add fullName function with setter to change the siteName and bookName value to
// W3 and css
// 3. add fullName function with defineProperty, getter, setter print key siteName and
// bookName

// for example:
// 1. console.log(site.fullName); => "welcome to W3Docs, javascript book"
// 2. site.fullName = "W3 Css"; => set fullName is executed with the given value
// console.log(site.siteName); => W3
// console.log(site.bookName); => css


// 1&2

let site = {
  siteName: "W3Docs",
  bookName: "javascript",

  get fullName() {
    return `welcome to ${this.siteName}, ${this.bookName} book`;
  },

  set fullName(value) {
    [this.siteName, this.bookName] = value.split(" ");
  },
};
console.log(site.fullName); // => "welcome to W3Docs, javascript book"
site.fullName = "W3 Css";
console.log(site.siteName); // => W3
console.log(site.bookName); // => Css


// 3

// let site = {
// siteName: "W3Docs",
// bookName: "Javascript"
// };
// Object.defineProperty(site, "fullName", {
//     get() {
//     return `${this.siteName} ${this.bookName}`;
//     },
//     set(value) {
//     [this.siteName, this.bookName] = value.split(" ");
//     }
// });
// console.log(site.fullName);

// for (let key in site) {

 // console.log(key);
// }  => W3Docs Javascript siteName bookName

