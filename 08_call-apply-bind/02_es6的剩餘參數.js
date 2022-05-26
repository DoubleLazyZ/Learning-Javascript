// rest parameters
function sum(...nums) {
  console.log(nums)
}

//  展開運算符spread
var names = ["abc", "aaa", "bbb"]

var newNames = [...names]
function foo(name1, name2, name3) {

}
foo(...names);

sum(10)
sum(10, 20)
sum(10, 20, 30, 40, 55)