// 實現apply
Function.prototype.wyApply = function(thisArg, argArray) {
  // 1.獲取要執行到的參數
  var fn = this;

  // 2.對thisArg做處理，轉換成對象，有參數則綁到轉換的對象上面，如果是null, undefined則綁到window上面
  thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window

  // 3.執行獲取的函數，並且處理剩餘的參數，最後取得結果
  // apply傳過來是一個陣列，可以直接展開，但如過傳過來的是null, undefined的話可以返回一個空陣列
  thisArg.fn = fn

  // 寫法一
  var result
  // if(!argArray) { // 沒傳參數
  //   result = thisArg.fn()
  // } else {
  //   result = thisArg.fn(...argArray)
  // }

  // 寫法二
  // argArray = argArray ? argArray : []

  //寫法三
  // argArray = argArray || [];

  result = thisArg.fn(...argArray);
  delete thisArg.fn

  // 4. 返回結果
  return result
}

function sum(num1, num2) {
  return num1 + num2
}

// var result = sum.apply({}, [10, 20]);
// console.log(result)


// 自己實現的調用
// var result2 = sum.wyApply({}, [10, 20]);
// console.log(result2)

var result3 = sum.wyApply({}, [10, 20]);
console.log(result3)