/**
 * 液化气着火罐冷却用水量(L/s)
 * @param {Object} obj 
 * @param {Number} obj.diameter 球罐直径m
 * @param {Number} obj.strength 供给强度L/(s*㎡)
 */
// 着火罐冷却用水量(L/s)=π*球罐直径(m)2*供给强度(L/(s*㎡))
const yhqzhglqysl = (obj = {}) => {
  let { diameter, strength } = obj
  return (Math.PI * Math.pow(diameter, 2) * strength).toFixed(2)||0
}

module.exports.default = module.exports = yhqzhglqysl