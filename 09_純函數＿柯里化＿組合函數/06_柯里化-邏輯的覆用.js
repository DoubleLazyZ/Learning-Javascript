// function log(date, type, message) {
//   console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`)
// }

// log(new Date(), 'Debug', '查找到輪播圖的bug')
// log(new Date(), 'Debug', '查詢菜單的錯誤')
// log(new Date(), 'Debug', '查詢數據的BUG')

// Currying
var log = (date) => (type) => (message) => {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`
  )
}

// 都是當前時間
var nowLog = log(new Date())
nowLog('DEBUG')('輪播圖的bug')
nowLog('FEATURE')('新增了添加用戶的功能')

// var nowAndDebugLog = nowLog('DEBUG')
var nowAndDebugLog = log(new Date())('DEBUG')
nowAndDebugLog('找到某個BUG')
nowAndDebugLog('找到某個BUG')
nowAndDebugLog('找到某個BUG')
nowAndDebugLog('找到某個BUG')

var nowAndFeatureLog = log(new Date())('FEATURE')
nowAndFeatureLog('某個當下新增的功能')
nowAndFeatureLog('某個當下新增的功能')
nowAndFeatureLog('某個當下新增的功能')
