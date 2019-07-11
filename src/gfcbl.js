/**
 * 干粉常备量(kg)
 * @param {Object} obj 
 * @param {Number} obj.weight 灭火需用干粉量(kg)
 * @param {Number} obj.coefficient 常备量系数
 */

// 干粉常备量(kg)=灭火需用干粉量(kg)*常备量系数
const gfcbl = (obj = {}) => {
  let { weight, coefficient = 2 } = obj
  return (weight * coefficient).toFixed(2)||0
}

module.exports.default = module.exports = gfcbl