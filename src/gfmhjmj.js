/**
 * 灭火需用干粉量面积计算法(kg)
 * @param {Object} obj 
 * @param {Number} obj.strength 干粉供给强度(kg/m3)
 * @param {Number} obj.area 燃烧面积(㎡)
 */

// 灭火需用干粉量面积计算法(kg)=燃烧面积(㎡)*干粉供给强度(kg/㎡)
const gfmhjmj = (obj = {}) => {
  let { strength, area } = obj
  return (strength * area).toFixed(2)||0
}

module.exports.default = module.exports = gfmhjmj