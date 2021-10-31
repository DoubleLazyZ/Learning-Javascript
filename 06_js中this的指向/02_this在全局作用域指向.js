// 在大多數情況下, this都是出現在函數中
// 在全局作用域下
// 瀏覽器: window
// Node: {}，把檔案當成module ，加載 -> 編譯 -> 放到一個函數 -> 執行這個函數apply({})
console.log(this)