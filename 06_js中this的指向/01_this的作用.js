// 某些角度來說, 開發中沒有this, 也是有其他解決方案
// 但是沒有this, 會讓我們編寫程式變得非常不方便。
var obj = {
  name: "wyatt",
  eating: function() {
    console.log(this.name + '吃東西');
  },
  running: function() {
    console.log(this.name + '跑步');
  },
  studying: function() {
    console.log(this.name + '讀書');
  }
}

obj.eating()
obj.running()
obj.studying()