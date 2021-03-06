# this 指向

1. 函數再調用的時候，Javascript 會默認給 this 一個綁定的值
2. this 的綁定和定義的位置(編寫的位置)沒有關係
3. this 的綁定和調用方式和調用位置有關係
4. this 是在運行中綁定

## this 的四種綁定規則

綁定一、默認綁定
綁定二、隱式綁定
綁定三、顯示綁定
綁定四、new 綁定

###　默認綁定
-　函數獨立執行

### 隱式綁定
- 通過某個對象發起的函數調用
### 顯式綁定

- 隱式綁定的前提
  - 必須在調用物件內部有一個對函數的引用(比如一個屬性)
  - 如果沒有引用，在進行調用會報找不到該函數的錯誤
  - 透過這個引用，間接將 this 綁定到了物件上面
- 如果不希望在物件內部包含這個函數的引用，同時又希望在這個物件上強制調用
  - JavaScript 所有函數都可以使用 call 和 apply 方法

### new 綁定

- 使用 new 關鍵字來調用函數，會執行下面操作

1. 創建一個全新的物件
2. 這個物件會被執行 prototype 連結
3. 這個新物件會被綁定到調用的 this 上(this 綁定在這個步驟完成)
4. 如果函數沒有返回其他物件，表達式會返回這個新物件


### 規則優先
1. 默認綁定優先級最低
2. 顯示綁定高於隱式綁定
3. new綁定高於隱式綁定
4. new綁定高於顯示綁定

### 例外狀況
1. 忽略顯示綁定，將apply/call/bind到null或undefined的時候會指向全局
2. 間接函數引用會變成獨立函數調用一樣會指向全局

### arrow function
* 箭頭函數部會綁定this、arguments屬性
* 箭頭函數不能和構造函數一起使用(不能和new一起使用,會拋出錯誤)