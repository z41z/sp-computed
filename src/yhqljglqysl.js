/**
 * 液化气临近罐冷却用水量(L/s)
 * @param {Object} obj 
 * @param {Number} obj.diameter 球罐直径m
 * @param {Number} obj.strength 供给强度L/(s*㎡)
 */
// 邻近罐冷却用水量(L/s)=0.5*π*球罐直径(m)2*供给强度(L/(s*㎡))
const yhqljglqysl = (obj = {}) => {
  let { diameter, strength } = obj
  return (0.5 * Math.PI * Math.pow(diameter, 2) * strength).toFixed(2)||0
}

module.exports.default = module.exports = yhqljglqysl