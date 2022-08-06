// 類的聲明
class Person {

}

// 類的表達式
// var Animal = class {

// }

console.log(Person.prototype)
console.log(Person.prototype.__proto__)
console.log(Person.prototype.constructor)
console.log(typeof Person) // function

var p = new Person();
console.log(p.__proto__ === Person.prototype)