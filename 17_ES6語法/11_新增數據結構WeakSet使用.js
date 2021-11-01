const weakSet = new WeakSet();

// 區別一: 只能存放對象類型
// TypeError: Invalid value used in weak set
weakSet.add(10)


// 區別二: 對物件是一個弱引用
let obj = { 
  name: "wyatt ", 
  friend: {
     name: "Kuang"
  }
} 

// VE -> variables_:obj
// VO -> GO
// strong reference 強引用 GC不清除
// weak reference 弱引用 當沒有指針指著的內存 GC會清除

const set = new Set();
// 建立的是強引用
set.add(obj)

// 建立的是若引用
weakSet.add(obj)