/**
 * 露天堆场水枪数量(个)
 * @param {Object} obj 
 * @param {Number} obj.area 燃烧面积㎡
 * @param {Number} obj.strength 灭火用水供应强度L/(s*㎡)
 * @param {Number} obj.flow 水枪流量L/s
 */
// 水枪所需数量(个)=火场实际用水量(L/s)/水枪流量(L/s)
const ltdcsqsl = (obj = {}) => {
  let { area, strength, flow } = obj
  return Math.ceil(area * strength / flow)||0
}

module.exports.default = module.exports = ltdcsqsl