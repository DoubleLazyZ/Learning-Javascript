var name = "wyatt"

var foo = () => {
  console.log(this)
}

foo()
var obj = {foo: foo}
obj.foo()
foo.call("abc")



// 2.適用的場景
var obj = {
  data: [],
  getData: function() {
    // 放送網路請求， 結果方到上面data屬性中
    // 在箭頭函數之前的解決方案
    // var _this = this
    // setTimeout(function() {
    //   var result = ["abc", "cba", "nnn"]
    //   _this.data = result
    // }, 2000)

    // 箭頭函數之後
    setTimeout(() => {
      var result = ["abc", "cba", "nnn"]
      this.data = result
      console.log(this)
    }, 2000)
  }
}

obj.getData()