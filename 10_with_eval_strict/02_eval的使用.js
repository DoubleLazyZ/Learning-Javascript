// 可以傳入js字串運行。
var message = "Hello World";
console.log(message);

var jsString = "var message = 'Hello World'; console.log(message)";
eval(jsString);

// 可讀性差
// 可能被串改攻擊
// 必須經過JS編譯器，不能被最佳化。JS引擎不會幫忙最佳化。