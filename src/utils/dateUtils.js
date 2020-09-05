/*
包含n个日期时间处理的工具函数模块
*/

/*
  格式化日期
*/
export function formateDate(time) {
  if (!time) return ''
  let date = new Date(time)
  return date.getFullYear() + '-' + initNum(date.getMonth() + 1) + '-' + initNum(date.getDate())
    + ' ' + initNum(date.getHours()) + ':' + initNum(date.getMinutes()) + ':' + initNum(date.getSeconds())
}
function initNum(num) {
  return ('0' + num).slice(-2)
}