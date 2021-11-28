var names = ["abc", "cba", "ccc"];

// var item1 = names[0]
// var item2 = names[1]
// var item3 = names[2]


// 對陣列的解構: []

var [item1, item2, item3] = names
console.log(item1)
console.log(item2)
console.log(item3)

// 解構後面的元素
var [, itemA, itemB] = names
console.log(itemA, itemB)

// 解構出一個元素, 後面的元素放到一個新陣列中
var [itema, ...newNames] = names
console.log(itema, newNames)

// 解構的默認值
var [itemx, itemy, itemz, itemn = "aaa"] = names
console.log(itemx, itemy, itemz, itemn)