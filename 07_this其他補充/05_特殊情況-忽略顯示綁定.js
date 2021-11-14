function foo() {
  console.log(this)
}


foo.apply("abc")
foo.call({})

// apply/call/bind: 當傳入null/undefined時，自動將this綁定成全局對象
foo.apply(null)
foo.apply(undefined)
foo.bind(undefined)()
