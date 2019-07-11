/**
 * 液化气水枪数量(个)
 * @param {Object} obj 
 * @param {Number} obj.diameter 球罐直径m
 * @param {Number} obj.strength 供给强度L/(s*㎡)
 * @param {Number} obj.flow 水枪流量L/s
 * @param {Number} obj.fireNum 着火罐数量(个)
 * @param {Number} obj.nearNum 临近罐数量(个)
 */
// 水枪所需数量(个)=(着火罐冷却用水量*着火罐个数(个)+邻近罐冷却用水量*邻近罐个数(个))(L/s)/水枪流量(L/s)
const yhqzhglqysl = require('./yhqzhglqysl')
const yhqljglqysl = require('./yhqljglqysl')
const yhqsqsl = (obj = {}) => {
  let { diameter, strength, flow, nearNum, fireNum } = obj
  let zhg = yhqzhglqysl({
    diameter,
    strength
  })
  let ljg = yhqljglqysl({
    diameter,
    strength
  })
  return Math.ceil((zhg * fireNum + ljg * nearNum) / flow)||0
}

module.exports.default = module.exports = yhqsqsl