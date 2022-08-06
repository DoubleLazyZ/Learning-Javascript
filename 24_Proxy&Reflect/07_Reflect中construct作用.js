function Student(name, age) {
  this.name = name;
  this.age = age;
}

function Teacher() {

}

const stu = new Student("Wyatt", 24);
console.log(stu);
console.log(stu.__proto__ === Student.prototype)

// 執行student函數中的內容，但是創建出來的物件是teacher物件。
const teacher = Reflect.construct(Student, ["Wyatt", 24], Teacher);
console.log(teacher);
console.log(teacher.__proto__ === Teacher.prototype)