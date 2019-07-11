/**
 * 普通蛋白泡沫液常备量(L)
 * @param {Object} obj 
 * @param {Number} obj.area 燃烧面积(㎡)
 * @param {Number} obj.rate 常备量计算系数(L/㎡)
 */

// 普通蛋白泡沫液常备量(L)=常备量计算系数(L/㎡)*燃烧面积(㎡)
const dbpmycbl = (obj = {}) => {
  let { area, rate = 18 } = obj
  return (area * rate).toFixed(2)||0
}

module.exports.default = module.exports = dbpmycbl