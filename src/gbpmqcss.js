/**
 * 高倍泡沫器产生数(个)
 * @param {Object} obj 
 * @param {Number} obj.total 泡沫量(L)
 * @param {Number} obj.time 充满时间(min)
 * @param {Number} obj.average 每支产生器的泡沫产生量(L/min)
 */

// 高倍泡沫器产生数(个)=泡沫量(L)/(充满时间(min)*每支产生器的泡沫产生量(L/min))
const dbpmycbl = (obj = {}) => {
  let { total, time = 5, average } = obj
  return Math.ceil(total / (time * average))||0
}

module.exports.default = module.exports = dbpmycbl