class Person {

}

class Runner {
  running() {

  }
}

class Chef {
  cooking() {

  }
}

function mixinRunner(BaseClass) {
  class NewClass extends BaseClass {
    running() {
      console.log("running")
    }
  }
  return NewClass()
}

function mixinChef(BaseClass) {
  return class extends BaseClass {
    cooking() {
      console.log(this.cooking)
    }
  }
}

// 在JS中類只能有一個父類: 單繼承
class Student extends Person {

}

var NewStudent = mixinRunner(mixinChef(Student))
var ns = NewStudent()
ns.running()