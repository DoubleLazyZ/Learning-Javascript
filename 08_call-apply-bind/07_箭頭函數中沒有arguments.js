var foo = () => {
  console.log(arguments)
  // 箭頭函數沒有arguments會往上層作用域找
}

foo()
// node裡面有arguments, 瀏覽器沒有, 因為node把一個文件視為一個模組，包裹到一個函數裡面
// 在用.call({}, ..., ..., ...) ...是把他放到全局的對象裡面