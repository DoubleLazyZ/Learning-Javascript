// var foo = "foo"
// var message = "Hello World"

// console.log(window.foo)
// console.log(window.message)

// window.message ="哈哈哈"
// console.log(message)

let foo = "foo"

// ECMA規範要有一個VE，在V8引擎裡面用創建一個物件，名稱是variables_: VariableMap(變量被存在這裡，c++裡的hashmap來保存聲明的變量，查找的時候也是在這查找)。
// window不屬於v8，而是被包含v8引擎的瀏覽器實現。
// window: {Date,Number,bar: }，如果使用bar會在variables_和window的物件各創建一個屬性，
// 當有修改的時候，window與var之間物件的屬性會同時修改，window裡要添加是為了可以讓以前的版本也能適用。