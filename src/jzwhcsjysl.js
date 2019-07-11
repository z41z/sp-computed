/**
 * 建筑物火场实际用水量(L/s)
 * @param {Object} obj 
 * @param {Number} obj.area 燃烧面积㎡
 * @param {Number} obj.strength 灭火用水供应强度L/(s*㎡)
 */

// 火场实际用水量(L/s)=燃烧面积(㎡)*灭火用水供应强度(L/(s*㎡))
const jzwhcsjysl = (obj = {}) => {
  let { area, strength } = obj
  return (area * strength).toFixed(2)||0
}

module.exports.default = module.exports = jzwhcsjysl